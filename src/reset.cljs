(ns reset
  (:require
    [simulation :as sim]
    [processtime :as pt]))

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

  (reset! sim/lead-time-1 "-")
  (reset! sim/lead-time-2 "-")
  (reset! sim/lead-time-3 "-")
  (reset! sim/lead-time-4 "-")
  (reset! sim/lead-time-5 "-"))

(defn reset-btn []
  [:input.button.reset-button {:type     "button"
                               :value    "Ryd"
                               :on-click #(clear-simulator)}])
