(ns workstation
  (:require [treetrunkgenerator :as t]))

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
        (update :to-queue conj (t/stample-end-time current-log ws-id sim-time)))
    state))

(defn push-to-sawmill [sim-time ws-id {:keys [to-queue current-log] :as state}]
  (if (< (count to-queue) 10000000)
    (-> state
        (assoc :current-log nil)
        (assoc :current-time 0)
        (update :to-queue conj (t/stample-global-end-time current-log sim-time)))
    state))

(defn run [sim-time ws-id {:keys [process-time current-time current-log ] :as state}]
  (if (and current-log (< current-time process-time))
    (update state :current-time inc)
    (if current-log
      (let [{:keys [current-log] :as state}
            (if (= ws-id 4)
              (push-to-sawmill sim-time ws-id state)
              (push sim-time ws-id state))]
        (if (not current-log)
          (pull sim-time ws-id state)
          state))
      (pull sim-time ws-id state))))
