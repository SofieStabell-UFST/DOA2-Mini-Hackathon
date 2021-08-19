(ns processtime
  (:require [simulation :as sim]))

(defn update-process-time1 [new-process-time]
      (reset! (sim/process-times 0) new-process-time))

(defn update-process-time2 [new-process-time]
      (reset! (sim/process-times 1) new-process-time))

(defn update-process-time3 [new-process-time]
      (reset! (sim/process-times 2) new-process-time))

(defn update-process-time4 [new-process-time]
      (reset! (sim/process-times 3) new-process-time))

(defn update-process-time5 [new-process-time]
      (reset! (sim/process-times 4) new-process-time))





