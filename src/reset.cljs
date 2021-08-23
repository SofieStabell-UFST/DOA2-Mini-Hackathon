(ns reset
  (:require
    [simulation :as sim]
    [processtime :as pt]
    [workstation :as w]
    [environment :as env]
    [queue :refer [BoundedQueue UnboundedQueue InfiniteLogStream]]))

(defn clear-simulator []
  (sim/pause)

  (reset! env/sim-time 0)
  (doseq [a sim/queues]
    (reset! a (BoundedQueue. 12 cljs.core.PersistentQueue.EMPTY)))
  (reset! (sim/queues 0) (InfiniteLogStream.))
  (reset! (sim/queues 6) (UnboundedQueue. cljs.core.PersistentQueue.EMPTY))
  (doseq [a sim/current-times]
    (reset! a 0))
  (doseq [a sim/current-logs]
    (reset! a nil))

  (reset! env/total-lead-time nil)
  (reset! env/total-process-time nil)
  (doseq [a w/lead-times]
    (reset! a nil))
  (reset! env/input 0))

(defn reset-btn []
  [:input.button.reset-button {:type     "button"
                               :value    "Ryd"
                               :on-click #(clear-simulator)}])
