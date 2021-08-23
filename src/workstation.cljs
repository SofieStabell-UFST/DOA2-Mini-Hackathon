(ns workstation
  (:require [reagent.core :as r]
            [log]
            [queue :refer [full?]]))

(defonce lead-times (vec (for [_ (range 6)] (r/atom nil))))

(defn pull [ws-id {:keys [from-queue] :as state}]
  (if-let [next-log (peek from-queue)]
    (-> state
        (assoc :current-log (log/stamp-start ws-id next-log))
        (assoc :current-time 1)
        (assoc :from-queue (pop from-queue)))
    state))

(defn push [ws-id {:keys [to-queue current-log] :as state}]
  (if (not (full? to-queue))
    (-> state
        (assoc :current-log nil)
        (assoc :current-time 0)
        (assoc :to-queue (conj to-queue current-log)))
    state))

(defn run [ws-id {:keys [process-time current-time current-log] :as state}]
  (if (and current-log (< current-time process-time))
    (update state :current-time inc)
    (if current-log
      (let [{:keys [current-log] :as state} (update state :current-log (partial log/stamp-end ws-id))]
        (reset! (lead-times ws-id) (- (get-in current-log [:times ws-id :end])
                                      (get-in current-log [:times (dec ws-id) :end])))
        (let [{:keys [current-log] :as state} (push ws-id state)]
          (if (not current-log)
            (pull ws-id state)
            state)))
      (pull ws-id state))))
