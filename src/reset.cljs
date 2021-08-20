(ns reset
  (:require
    [simulation :as sim]
    [processtime :as pt]
    [workstation :as w]))

(defn clear-simulator []
  (sim/pause)

  (reset! sim/sim-time 0)
  (reset! sim/total-process-time 0)
  (reset! sim/total-lead-time 0)
  (reset! sim/skovhygge-input 0)
  (reset! sim/skov-output 0)
  (reset! pt/process-time-skovhugger-original 1)

  (doseq [i (range 5)]
    (reset! (sim/queues i) []))
  (doseq [i (range 4)]
    (reset! (sim/current-logs i) nil))

  (reset! skovhugger/count-skovhuggers-input-trees 0)

  (doseq [i (range 5)]
    (reset! (w/lead-times i) nil)))

(defn reset-btn []
  [:input.button.reset-button {:type     "button"
                               :value    "Ryd"
                               :on-click #(clear-simulator)}])
