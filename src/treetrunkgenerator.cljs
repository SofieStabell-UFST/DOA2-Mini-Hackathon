(ns treetrunkgenerator
  (:require [simulation :as sim]))

(defn create-tree-trunk
  "This function is able to give a unique id for tree trunk and register the global start time of this tree trunk."
  []
  {:id           (cljs.core/random-uuid)
   :global-start-time @sim/sim-time})

(defn stample-start-time
  "The function is able to register a start time to a tree trunk with given work station id."
  [treetrunk ws-id]
  (assoc-in treetrunk
            [ws-id :start-time] @sim/sim-time))

(defn stample-end-time
  "The function is able to register a end time to a tree trunk with given work station id."
  [treetrunk ws-id]
  (assoc-in treetrunk
            [ws-id :end-time] @sim/sim-time))

(defn stample-global-end-time
  "The function is able to register a global end time to a tree trunk."
  [treetrunk]
  (assoc treetrunk
    :global-end-time @sim/sim-time))
