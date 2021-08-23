(ns log
  (:require [environment :as env]))

(defrecord Log [id start-time end-time times])

(defn create-log []
  (->Log (cljs.core/random-uuid) @env/sim-time nil {}))

(defn stamp-start [ws-id log]
  (assoc-in log [:times ws-id :start] @env/sim-time))

(defn stamp-end [ws-id log]
  (assoc-in log [:times ws-id :end] @env/sim-time))

(defn stamp-storage [log]
  (assoc log :end @env/sim-time))