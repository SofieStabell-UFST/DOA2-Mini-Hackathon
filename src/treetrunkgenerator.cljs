(ns treetrunkgenerator)

(defn create-tree-trunk
  "This function is able to give a unique id for tree trunk and register the global start time of this tree trunk."
  [sim-time]
  {:id           (cljs.core/random-uuid)
   :global-start-time sim-time})

(defn stample-start-time
  "The function is able to register a start time to a tree trunk with given work station id."
  [treetrunk ws-id sim-time]
  (assoc-in treetrunk
            [ws-id :start-time] sim-time))

(defn stample-end-time
  "The function is able to register a end time to a tree trunk with given work station id."
  [treetrunk ws-id sim-time]
  (assoc-in treetrunk
            [ws-id :end-time] sim-time))

(defn stample-global-end-time
  "The function is able to register a global end time to a tree trunk."
  [treetrunk sim-time]
  (assoc treetrunk
    :global-end-time sim-time))
