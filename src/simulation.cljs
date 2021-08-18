(ns simulation
  (:require [reagent.core :as r]
            [workstation :as w]
            [skovhugger :refer [create-tree-trunk]]))
;[skovhugger :refer [create-tree-trunk]]))

(defonce paused? (r/atom true))
(defonce sim-time (r/atom 0))
(defonce interval (r/atom nil))

(defonce queue1 (r/atom [1 2 3 4 5]))
(defonce current-time1 (r/atom 0))
(defonce current-log1 (r/atom nil))
(defonce queue2 (r/atom []))
(def skovhugger-process-time 2)

(defn run []
  ;(.log js/console "run run:...")

  ;; run skovhugger - push to queue1
  (create-tree-trunk (empty? @queue1) skovhugger-process-time queue1)
  (let [{:keys [from-queue to-queue current-time current-log]}
        (w/run {:from-queue   @queue1
                :to-queue     @queue2
                :process-time 8
                :current-time @current-time1
                :current-log  @current-log1})]
    (reset! current-time1 current-time)
    (reset! current-log1 current-log)
    (reset! queue1 from-queue)
    (reset! queue2 to-queue))
  (swap! sim-time inc))

(defn pause-btn []
  [:input {:type     "button"
           :value    (if @paused? "Start" "Pause")
           :on-click #(do (if @paused?
                            (reset! interval (js/setInterval run 1000))
                            (js/clearInterval @interval))
                          (swap! paused? not))}])

(defn time-display []
  [:div @sim-time])

