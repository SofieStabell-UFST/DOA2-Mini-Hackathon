(ns environment
  (:require [reagent.core :as r]))

(defonce sim-time (r/atom 0))
(defonce input (r/atom 0))
(defonce total-lead-time (r/atom nil))
(defonce total-process-time (r/atom nil))