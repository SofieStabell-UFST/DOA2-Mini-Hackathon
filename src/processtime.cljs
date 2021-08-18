(ns processtime
      (:require [reagent.core :as r]))

(defonce process-time1 (r/atom 0))
(defonce process-time2 (r/atom 0))
(defonce process-time3 (r/atom 0))
(defonce process-time4 (r/atom 0))
(defonce process-time5 (r/atom 0))

(defn update-process-time1 [new-process-time]
      (reset! process-time1 new-process-time))

(defn update-process-time2 [new-process-time]
      (reset! process-time2 new-process-time))

(defn update-process-time3 [new-process-time]
      (reset! process-time3 new-process-time))

(defn update-process-time4 [new-process-time]
      (reset! process-time4 new-process-time))

(defn update-process-time5 [new-process-time]
      (reset! process-time5 new-process-time))
