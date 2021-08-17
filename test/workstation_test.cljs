(ns workstation-test
  (:require [clojure.test :refer [deftest is testing]]
            [workstation :refer [run]]))

(deftest can-process-if-empty
  (is (= {:current-time 0
          :process-time 8
          :from-queue   [1 2 3]
          :to-queue     []
          :current-log  nil}
         (run {:current-time 0
               :process-time 8
               :from-queue   [1 2 3 4]
               :to-queue     []
               :current-log  4}))))