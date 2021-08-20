(ns skovhugger
  (:require [treetrunkgenerator :as ttg]))

(defn tree-felling [ws1-free skovhugger-process-time queue1 sim-time skovhugger-process-time-original]
  (if ws1-free (let [tree-trunk (ttg/create-tree-trunk sim-time)
                     _ (if (<= @skovhugger-process-time 0)
                         (do
                           (reset! skovhugger-process-time @skovhugger-process-time-original)
                           (swap! queue1 conj tree-trunk)))])))
