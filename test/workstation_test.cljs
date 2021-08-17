(ns workstation-test
  (:require [clojure.test :refer [deftest is testing]]
            [workstation :refer [run]]))

(deftest if-idle-pop-log
  (let [state {:current-time 0
               :process-time 8
               :from-queue   [1 2 3 4]
               :to-queue     []
               :current-log  nil}]
    (is (= (run state) {:current-time 1
                        :process-time 8
                        :from-queue   [1 2 3]
                        :to-queue     []
                        :current-log  4}))))

(deftest if-busy-work-log
  (let [state {:current-time 4
               :process-time 8
               :from-queue   [1 2 3]
               :to-queue     []
               :current-log  5}]
    (is (= (run state) {:current-time 5
                        :process-time 8
                        :from-queue   [1 2 3]
                        :to-queue     []
                        :current-log  5}))))

(deftest if-done-push-log-to-idle
  (let [state {:current-time 8
               :process-time 8
               :from-queue   []
               :to-queue     []
               :current-log  5}]
    (is (= (run state) {:current-time 0
                        :process-time 8
                        :from-queue   []
                        :to-queue     [5]
                        :current-log  nil}))))

(deftest if-done-push-log-to-busy
  (let [state {:current-time 8
               :process-time 8
               :from-queue   [1 2 3]
               :to-queue     []
               :current-log  5}]
    (is (= (run state) {:current-time 1
                        :process-time 8
                        :from-queue   [1 2]
                        :to-queue     [5]
                        :current-log  3}))))