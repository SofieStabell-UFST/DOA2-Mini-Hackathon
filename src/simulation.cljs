(ns simulation
  (:require [reagent.core :as r]))

(defonce paused? (r/atom true))
(defonce sim-time (r/atom 0))
(defonce interval (r/atom nil))

(defn run []
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

