(ns processtime
      (:require [simulation :as sim]))

(defn update-process-time1 [new-process-time]
      (reset! (sim/process-times 0) new-process-time))



