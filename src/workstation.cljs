(ns workstation)

(defonce QUEUE_MAX_COUNT 12)

(defn pull [{:keys [from-queue] :as state}]
  (if (seq from-queue)
    (-> state
        (assoc :current-log (last from-queue))
        (assoc :current-time 1)
        (update :from-queue (fn [v] (subvec v 0 (dec (count v))))))
    state))

(defn push [{:keys [to-queue current-log] :as state}]
  (if (< (count to-queue) QUEUE_MAX_COUNT)
    (-> state
        (assoc :current-log nil)
        (assoc :current-time 0)
        (update :to-queue conj current-log))
    state))

(defn run [{:keys [process-time from-queue to-queue current-time current-log] :as state}]
  (if (and current-log (< current-time process-time))
    (update state :current-time inc)
    (if current-log
      (let [{:keys [current-log] :as state} (push state)]
        (if (not current-log)
          (pull state)
          state))
      (pull state))))
