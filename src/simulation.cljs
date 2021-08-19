(ns simulation
  (:require [reagent.core :as r]
            [workstation :as w]))

(defonce paused? (r/atom true))
(defonce sim-time (r/atom 0))
(defonce interval (r/atom nil))

(defonce queue1 (r/atom [1 2 3 4 5]))
(defonce current-time1 (r/atom 0))
(defonce current-log1 (r/atom nil))
(defonce queue2 (r/atom []))

(defonce process-time1 (r/atom 0))
(defonce process-time2 (r/atom 0))
(defonce process-time3 (r/atom 0))
(defonce process-time4 (r/atom 0))
(defonce process-time5 (r/atom 0))

(defonce total-process-time (r/atom 0))
(defonce total-lead-time (r/atom 0))
(defonce skovhygge-input (r/atom 0))
(defonce skov-output (r/atom 0))
(defonce skov-process (r/atom 0))
(defonce ps1-input (r/atom 0))
(defonce ps2-input (r/atom 0))
(defonce ps3-input (r/atom 0))
(defonce ps4-input (r/atom 0))
(defonce ps5-input (r/atom 0))

;; items in queue
(defonce queue-1 (r/atom 0))
(defonce queue-2 (r/atom 0))
(defonce queue-3 (r/atom 0))
(defonce queue-4 (r/atom 0))
(defonce queue-5 (r/atom 0))

;;Work station queue items

(defonce ws3-queue (r/atom 0))
(defonce ws4-queue (r/atom 0))
(defonce ws5-queue (r/atom 0))

;; items that are ready to be send forward
(defonce item-1 (r/atom 0))
(defonce item-2 (r/atom 0))
(defonce item-3 (r/atom 0))
(defonce item-4 (r/atom 0))
(defonce item-5 (r/atom 0))
(defonce start-button (r/atom "Start"))
(defonce timer (r/atom "00:00"))
(defonce reset-button (r/atom "Ryd"))

;;Lead time
(defonce lead-time-1 (r/atom "-"))
(defonce lead-time-2 (r/atom "-"))
(defonce lead-time-3 (r/atom "-"))
(defonce lead-time-4 (r/atom "-"))
(defonce lead-time-5 (r/atom "-"))

(defn run []
  (let [{:keys [from-queue to-queue current-time current-log]}
        (w/run {:from-queue   @queue1
                :to-queue     @queue2
                :process-time @process-time1
                :current-time @current-time1
                :current-log  @current-log1})]
    (reset! current-time1 current-time)
    (reset! current-log1 current-log)
    (reset! queue1 from-queue)
    (reset! queue2 to-queue))
  (swap! sim-time inc))

(defn pause-btn []
  [:input.button.start-button {:type     "button"
                               :value    (if @paused? "Start" "Pause")
                               :on-click #(do (if @paused?
                                                (reset! interval (js/setInterval run 1000))
                                                (do
                                                  (js/clearInterval @interval)
                                                  (process-time-inputs)))
                                              (swap! paused? not))}])

(defn time-display []
  [:div.timer @sim-time])

(defn process-time-inputs []
      )

