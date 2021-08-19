(ns reset
  (:require
    [reagent.core :as r]
    [simulation :as sim]
    [processtime :as pt]
    ))

; clear-simulator will need to be refactored as we go as I predict changes, ie., new atoms and/or starting values.
(defn clear-simulator []
  (reset! sim/paused? true)
  (reset! sim/sim-time 0)
  (reset! sim/interval nil)
  (js/clearInterval @sim/interval)

  (doseq [i (range 5)]
    (reset! (pt/process-times i) 10))

  (reset! sim/total-process-time 0)
  (reset! sim/total-lead-time 0)
  (reset! sim/skovhygge-input 0)
  (reset! sim/skov-output 0)
  (reset! sim/skov-process 0)

  (doseq [i (range 5)]
    (reset! (sim/queues i) []))

  (reset! sim/item-1 0)
  (reset! sim/item-2 0)
  (reset! sim/item-3 0)
  (reset! sim/item-4 0)
  (reset! sim/item-5 0)

  (reset! sim/lead-time-1 "-")
  (reset! sim/lead-time-2 "-")
  (reset! sim/lead-time-3 "-")
  (reset! sim/lead-time-4 "-")
  (reset! sim/lead-time-5 "-"))

(defn reset-btn []
  [:input.button.reset-button {:type     "button"
                               :value    "Ryd"
                               :on-click #(clear-simulator)
                               }])
