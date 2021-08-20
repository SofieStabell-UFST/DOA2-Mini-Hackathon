(ns workstation
  (:require [treetrunkgenerator :as t]
            [reagent.core :as r]))

(defonce lead-times (vec (for [_ (range 5)] (r/atom nil))))
(defonce QUEUE_MAX_COUNT 12)

(defn pull [sim-time ws-id {:keys [from-queue] :as state}]
  (if (seq from-queue)
    (-> state
        (assoc :current-log (t/stample-start-time (last from-queue) ws-id sim-time))
        (assoc :current-time 1)
        (update :from-queue (fn [v] (subvec v 0 (dec (count v))))))
    state))

(defn push [sim-time ws-id {:keys [to-queue current-log] :as state}]
  (if (< (count to-queue) QUEUE_MAX_COUNT)
    (-> state
        (assoc :current-log nil)
        (assoc :current-time 0)
        (update :to-queue (fn [v] (vec (cons current-log v)))))
    state))

(defn push-to-sawmill [sim-time ws-id {:keys [to-queue current-log] :as state}]
  (-> state
      (assoc :current-log nil)
      (assoc :current-time 0)
      (update :to-queue conj (t/stample-global-end-time current-log sim-time)))
  )

(defn run [sim-time ws-id {:keys [process-time current-time current-log] :as state}]
  (if (and current-log (< current-time process-time))
    (update state :current-time inc)
    (if current-log
      (do (reset! (lead-times ws-id) (if (= ws-id 0)
                                       (- sim-time (get current-log :global-start-time))
                                       (- sim-time (get-in current-log [(dec ws-id) :end-time]))))
          (let [state (update state :current-log #(t/stample-end-time % ws-id sim-time))
                {:keys [current-log] :as state}
                (if (= ws-id 4)
                  (push-to-sawmill sim-time ws-id state)
                  (push sim-time ws-id state))]
            (if (not current-log)
              (pull sim-time ws-id state)
              state)))
      (pull sim-time ws-id state))))
