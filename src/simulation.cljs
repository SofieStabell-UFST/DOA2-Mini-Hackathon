(ns simulation
  (:require [reagent.core :as r]
            [reagent.ratom :refer [make-reaction]]
            [processtime :as pt]
            [workstation :as w]
            [environment :as env]
            [queue :refer [BoundedQueue UnboundedQueue InfiniteLogStream]]))

(defonce paused? (r/atom true))
(defonce interval (r/atom nil))

(defonce queues (vec (for [_ (range 7)] (r/atom (BoundedQueue. 12 cljs.core.PersistentQueue.EMPTY)))))
(reset! (queues 0) (InfiniteLogStream.))
(reset! (queues 6) (UnboundedQueue. cljs.core.PersistentQueue.EMPTY))
(defonce current-times (vec (for [_ (range 6)] (r/atom 0))))
(defonce current-logs (vec (for [_ (range 6)] (r/atom nil))))
(defonce readonly (r/atom false))

(defonce ws-ids [0 1 2 3 4 5])

(defn run []
  (doseq [i (range 6)]
    (let [{:keys [from-queue to-queue current-time current-log]}
          (w/run (ws-ids i)
                 {:from-queue   @(queues i)
                  :to-queue     @(queues (inc i))
                  :process-time @(pt/process-times i)
                  :current-time @(current-times i)
                  :current-log  @(current-logs i)})]
      (reset! (queues i) from-queue)
      (reset! (queues (inc i)) to-queue)
      (reset! (current-times i) current-time)
      (reset! (current-logs i) current-log)))
  (swap! env/sim-time inc))

(defn start []
  (reset! paused? false)
  (reset! interval (js/setInterval run 1000)))

(defn pause []
  (reset! paused? true)
  (js/clearInterval @interval))

(defn pause-btn []
  [:input.button.start-button {:type     "button"
                               :value    (if @paused? "Start" "Pause")
                               :on-click #(if @paused?
                                            (start)
                                            (pause))}])
