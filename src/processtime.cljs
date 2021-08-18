(ns processtime
      (:require [reagent.core :as r]))


(defonce process-time1 (r/atom 0))
(defonce process-time2 (r/atom 0))
(defonce process-time3 (r/atom 0))
(defonce process-time4 (r/atom 0))
(defonce process-time5 (r/atom 0))



(defn update-process-time1 [new-process-time]
      (reset! process-time1 new-process-time))



