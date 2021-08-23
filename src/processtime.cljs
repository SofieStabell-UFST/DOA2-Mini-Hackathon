(ns processtime
  (:require [reagent.core :as r]))

(defonce process-times (vec (for [_ (range 6)] (r/atom 1))))

(defn update-process-time1 [new-process-time]
      (reset! (process-times 1) new-process-time))

(defn update-process-time2 [new-process-time]
      (reset! (process-times 2) new-process-time))

(defn update-process-time3 [new-process-time]
      (reset! (process-times 3) new-process-time))

(defn update-process-time4 [new-process-time]
      (reset! (process-times 4) new-process-time))

(defn update-process-time5 [new-process-time]
      (reset! (process-times 5) new-process-time))

(defn update-skovhugger-process-time [new-skovhugger-process-time]
  (reset! (process-times 0) new-skovhugger-process-time))



