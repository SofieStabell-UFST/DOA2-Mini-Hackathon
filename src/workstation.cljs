(ns workstation)

(defn run [{:keys [process-time from-queue to-queue current-time current-log] :as state}]
  (if (and current-log (< current-time process-time))
    (update state :current-time inc)
    (cond-> state
            current-log (-> (assoc :current-log nil)
                            (assoc :current-time 0)
                            (update :to-queue conj current-log))
            (seq from-queue) (-> (assoc :current-log (last from-queue))
                                 (assoc :current-time 1)
                                 (update :from-queue (fn [v] (subvec v 0 (dec (count v)))))))))