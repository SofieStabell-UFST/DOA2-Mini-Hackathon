(ns simulation
  (:require [reagent.core :as r]
            [workstation :as w]))

(defonce paused? (r/atom true))
(defonce sim-time (r/atom 0))
(defonce interval (r/atom nil))

(defonce queues (vec (for [_ (range 5)] (r/atom []))))
(reset! (queues 0) [1 2 3 4 5 6 7 8 9 10])
(defonce current-times (vec (for [_ (range 4)] (r/atom 0))))
(defonce current-logs (vec (for [_ (range 4)] (r/atom nil))))
(defonce process-times (vec (for [_ (range 5)] (r/atom 2))))
(reset! (process-times 1) 4)
(reset! (process-times 2) 6)
(defonce readonly (r/atom false))

(defonce total-process-time (r/atom 0))
(defonce total-lead-time (r/atom 0))
(defonce skovhygge-input (r/atom 0))
(defonce skov-output (r/atom 0))
(defonce skov-process (r/atom 2))

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

(defn run []
  (doseq [i (range 4)]
    (let [{:keys [from-queue to-queue current-time current-log]}
          (w/run {:from-queue   @(queues i)
                  :to-queue     @(queues (inc i))
                  :process-time @(process-times i)
                  :current-time @(current-times i)
                  :current-log  @(current-logs i)})]
      (reset! (queues i) from-queue)
      (reset! (queues (inc i)) to-queue)
      (reset! (current-times i) current-time)
      (reset! (current-logs i) current-log)))
  (swap! sim-time inc))

(defn pause-btn []
      [:input.button.start-button {:type     "button"
               :value    (if @paused? "Start" "Pause")
               :on-click #(do (if @paused?
                                (do
                                  (reset! interval (js/setInterval run 1000))
                                  (reset! readonly true)
                                  )
                                (do
                                  (js/clearInterval @interval)
                                  (reset! readonly false)))
                              (swap! paused? not))}])


(defn time-display []
      [:div.timer @sim-time])
