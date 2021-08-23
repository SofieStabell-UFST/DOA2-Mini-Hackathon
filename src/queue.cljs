(ns queue
  (:require [log]
            [environment :as env]))

(defprotocol BoundedCollection
  (full? [this]))

(deftype BoundedQueue [limit items]
  BoundedCollection
  (full? [this]
    (>= (count items) limit))

  IStack
  (-peek [this]
    (peek items))
  (-pop [this]
    (BoundedQueue. limit (pop items)))

  ICollection
  (-conj [this item]
    (BoundedQueue. limit (conj items item)))

  ICounted
  (-count [this]
    (count items)))

(deftype UnboundedQueue [items]
  BoundedCollection
  (full? [this]
    false)

  IStack
  (-peek [this]
    (-peek items))
  (-pop [this]
    (UnboundedQueue. (cljs.core/pop items)))

  ICollection
  (-conj [this item]
    (reset! env/total-lead-time (- (get-in item [:times 5 :end])
                                   (get-in item [:times 0 :start])))
    (reset! env/total-process-time (apply + (map (fn [{:keys [start end]}]
                                                   (- end start))
                                                 (vals (get item :times)))))
    (UnboundedQueue. (conj items item)))

  ICounted
  (-count [this]
    (count items)))

(deftype InfiniteLogStream []
  BoundedCollection
  (full? [this]
    false)

  IStack
  (-peek [this]
    (swap! env/input inc)
    (log/create-log))
  (-pop [this]
    this))