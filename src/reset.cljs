(ns reset
  (:require
    [reagent.core :as r]
    [simulation :as sim]))

; clear-simulator will need to be refactored as we go as I predict changes, ie., new atoms and/or starting values.
(defn clear-simulator []
      (reset! sim/paused? true)
      (reset! sim/sim-time 0)
      (reset! sim/interval nil)
      (reset! sim/queue1 [])
      (reset! sim/current-time1 0)
      (reset! sim/current-log1 nil)
      (reset! sim/queue2 [])

      (reset! sim/process-time1 0)
      (reset! sim/process-time2 0)
      (reset! sim/process-time3 0)
      (reset! sim/process-time4 0)
      (reset! sim/process-time5 0)

      (reset! sim/total-process-time 0)
      (reset! sim/total-lead-time 0)
      (reset! sim/skovhygge-input 0)
      (reset! sim/skov-output 0)
      (reset! sim/skov-process 0)

      (reset! sim/queue-1 0)
      (reset! sim/queue-2 0)
      (reset! sim/queue-3 0)
      (reset! sim/queue-4 0)
      (reset! sim/queue-5 0)

      (reset! sim/item-1 0)
      (reset! sim/item-2 0)
      (reset! sim/item-3 0)
      (reset! sim/item-4 0)
      (reset! sim/item-5 0)

      (reset! sim/start-button "Start")
      (reset! sim/timer "00:00")
      (reset! sim/reset-button "Ryd")

      (reset! sim/lead-time-1 "-")
      (reset! sim/lead-time-2 "-")
      (reset! sim/lead-time-3 "-")
      (reset! sim/lead-time-4 "-")
      (reset! sim/lead-time-5 "-")
      )
