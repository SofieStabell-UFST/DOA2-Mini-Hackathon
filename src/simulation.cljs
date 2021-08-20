(ns simulation
  (:require [reagent.core :as r]
            [skovhugger :refer [tree-felling]]
            [processtime :as pt]
            [workstation :as w]))

(defonce paused? (r/atom true))
(defonce sim-time (r/atom 0))
(defonce interval (r/atom nil))
(defonce queues (vec (for [_ (range 6)] (r/atom []))))
(defonce current-times (vec (for [_ (range 5)] (r/atom 0))))
(defonce current-logs (vec (for [_ (range 5)] (r/atom nil))))
(defonce process-times (vec (for [_ (range 5)] (r/atom 2))))
(reset! (process-times 1) 4)
(reset! (process-times 2) 6)
(defonce readonly (r/atom false))

(defonce total-process-time (r/atom 0))
(defonce total-lead-time (r/atom 0))
(defonce skovhygge-input (r/atom 0))
(defonce skov-output (r/atom 0))

;; items that are ready to be send forward
(defonce item-1 (r/atom 0))
(defonce item-2 (r/atom 0))
(defonce item-3 (r/atom 0))
(defonce item-4 (r/atom 0))
(defonce item-5 (r/atom 0))

;;Lead time
(defonce lead-time-1 (r/atom "-"))
(defonce lead-time-2 (r/atom "-"))
(defonce lead-time-3 (r/atom "-"))
(defonce lead-time-4 (r/atom "-"))
(defonce lead-time-5 (r/atom "-"))

(defonce ws-ids ["ws1" "ws2" "ws3" "ws4" "sawmill"])

(defn run []
  (swap! pt/process-time-skovhugger dec)
  (tree-felling (< (count @(first queues)) 12)
                pt/process-time-skovhugger
                (first queues)
                @sim-time
                pt/process-time-skovhugger-original)
  (doseq [i (range 5)]
    (let [{:keys [from-queue to-queue current-time current-log]}
          (w/run @sim-time (ws-ids i)
                 {:from-queue   @(queues i)
                  :to-queue     @(queues (inc i))
                  :process-time @(pt/process-times i)
                  :current-time @(current-times i)
                  :current-log  @(current-logs i)})]
      (reset! (queues i) from-queue)
      (reset! (queues (inc i)) to-queue)
      (reset! (current-times i) current-time)
      (reset! (current-logs i) current-log)))
  (swap! sim-time inc))

(defn start []
  (reset! paused? false)
  (reset! interval (js/setInterval run 1000)))

(defn pause []
  (reset! paused? true)
  (js/clearInterval @interval))

(defn pause-btn []
  [:input.button.start-button {:type     "button"
                               :value    (if @paused? "Start" "Pause")
                               :on-click #(if @paused?
                                            (start)
                                            (pause))}])

(defn time-display []
  [:div.timer @sim-time])
