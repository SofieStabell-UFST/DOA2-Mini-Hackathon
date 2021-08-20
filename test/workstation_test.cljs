(ns workstation-test
  (:require [clojure.test :refer [deftest is testing]]
            [workstation :refer [run]]
            [treetrunkgenerator :as t]))

(defn random-logs [n-logs]
  (mapv #(t/create-tree-trunk (rand-int 100)) (range n-logs)))

(deftest if-idle-pop-log
  (let [logs  (random-logs 4)
        state {:current-time 0
               :process-time 8
               :from-queue   logs
               :to-queue     []
               :current-log  nil}]
    (is (= (run 5 "ws1" state)
           {:current-time 1
            :process-time 8
            :from-queue   (subvec logs 0 3)
            :to-queue     []
            :current-log  (t/stample-start-time (last logs) "ws1" 5)}))))

(deftest if-busy-work-log
  (let [state {:current-time 4
               :process-time 8
               :from-queue   [1 2 3]
               :to-queue     []
               :current-log  5}]
    (is (= (run 100 "ws2" state)
           {:current-time 5
            :process-time 8
            :from-queue   [1 2 3]
            :to-queue     []
            :current-log  5}))))

(deftest if-done-push-log-to-idle
  (let [log   (t/create-tree-trunk 55)
        state {:current-time 8
               :process-time 8
               :from-queue   []
               :to-queue     []
               :current-log  log}]
    (is (= (run 101 "ws3" state)
           {:current-time 0
            :process-time 8
            :from-queue   []
            :to-queue     [(t/stample-end-time log "ws3" 101)]
            :current-log  nil}))))

(deftest if-done-push-log-to-busy
  (let [logs  (random-logs 3)
        log   (t/create-tree-trunk 356)
        state {:current-time 8
               :process-time 8
               :from-queue   logs
               :to-queue     []
               :current-log  log}]
    (is (= (run 103 "ws4" state)
           {:current-time 1
            :process-time 8
            :from-queue   (subvec logs 0 2)
            :to-queue     [(t/stample-end-time log "ws4" 103)]
            :current-log  (t/stample-start-time (last logs) "ws4" 103)}))))

(deftest if-done-push-log-full-queue
  (let [logs1 (random-logs 3)
        logs2 (random-logs 12)
        log (t/create-tree-trunk 4758)
        state {:current-time 8
               :process-time 8
               :from-queue   logs1
               :to-queue     logs2
               :current-log  log}]
    (is (= (run 999 "ws5" state) state))))