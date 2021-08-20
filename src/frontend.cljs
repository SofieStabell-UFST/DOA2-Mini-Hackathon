(ns frontend
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [simulation :as sim]
    [reset]
    [processtime :as pt]
    [skovhugger]
    [workstation :as w]))

(defn set-timer []
  (let [date (js/Date. 0)]
    (fn []
      (.setMinutes date 0)
      (.setSeconds date @sim/sim-time)
      (-> date
          (.toISOString)
          (.substr 14 5)))

    ))

(defn set-process-time-for-skov-hygger []
  [:div
   [:div.skov-process "Process time"]
   [:div [:input.skov-process-input {:type        "number"
                                     :class       [(if (not @sim/paused?)
                                                     "input-disabled"
                                                     "input-enabled"
                                                     )]
                                     :placeholder @pt/process-time-skovhugger-original :max "2" :size "1"
                                     :on-change   #(pt/update-skovhugger-process-time (-> % .-target .-value))
                                     }]
    [:div.label-skov-process "sek"]]]
  )

(defn create-process-time-for-ws []
  [:div
   [:div.process-time.process-time-1 "Process time"]
   [:div [:input.input-process-time.input-process-time-1
          {:type        "number" :id ":1"
           :placeholder @(sim/process-times 0) :max "2" :size "1"
           :class       [(if (not @sim/paused?)
                           "input-disabled"
                           "input-enabled"
                           )]
           :on-change   #(pt/update-process-time1 (-> % .-target .-value))}]
    [:div.label-ps.label-ps-1 "sek"]]
   [:div.process-time.process-time-2 "Process time"]
   [:div [:input.input-process-time.input-process-time-2
          {:type        "number" :id ":2"
           :placeholder @(sim/process-times 1) :max "2" :size "1"
           :class       [(if (not @sim/paused?)
                           "input-disabled"
                           "input-enabled"
                           )]
           :on-change   #(pt/update-process-time2 (-> % .-target .-value))}]
    [:div.label-ps.label-ps-2 "sek"]]
   [:div.process-time.process-time-3 "Process time"]
   [:div [:input.input-process-time.input-process-time-3
          {:type        "number" :id ":3"
           :placeholder @(sim/process-times 2) :max "2" :size "1"
           :class       [(if (not @sim/paused?)
                           "input-disabled"
                           "input-enabled"
                           )]
           :on-change   #(pt/update-process-time3 (-> % .-target .-value))}]
    [:div.label-ps.label-ps-3 "sek"]]
   [:div.process-time.process-time-4 "Process time"]
   [:div [:input.input-process-time.input-process-time-4
          {:type        "number" :id ":4"
           :placeholder @(sim/process-times 3) :max "2" :size "1"
           :class       [(if (not @sim/paused?)
                           "input-disabled"
                           "input-enabled"
                           )]
           :on-change   #(pt/update-process-time4 (-> % .-target .-value))}]
    [:div.label-ps.label-ps-4 "sek"]]

   [:div.process-time.process-time-5 "Process time"]
   [:div [:input.input-process-time.input-process-time-5
          {:type        "number" :id ":5"
           :placeholder @(pt/process-times 4) :max "2" :size "1"
           :class       [(if (not @sim/paused?)
                           "input-disabled"
                           "input-enabled"
                           )]
           :on-change   #(pt/update-process-time5 (-> % .-target .-value))}]
    [:div.label-ps.label-ps-5 "sek"]]])

(defn mini-app []
      [:div.container
       [:div
        [:img {:src "/images/baeverdaemningerne.png" :alt "descriptive text"}]
        [:div.input "Input"]
        [:div.skovhygge-input @skovhugger/count-skovhuggers-input-trees" stk"]
        [:div.output "Output"]
        [:div.skov-output @sim/skov-output " stk"]
        [set-process-time-for-skov-hygger]
        [:div.total "Total"]
        [:div.process-time-header "Process time"]
        [:div.total-lead-time-header "Lead time"]
        [:div.total-process-time @sim/total-process-time " sek"]
        [:div.total-lead-time @sim/total-lead-time " sek"]
        [create-process-time-for-ws]
        ;Diplays queue item
        (doall (for [i (range 5)]
                    [:div.ws-queue {:key i :class (str "ws" (inc i) "-queue")}
                     [:span {:class (cond
                                      (= (count @(sim/queues i)) 12) "full"
                                      (or (= (count @(sim/queues i)) 10) (= (count @(sim/queues i)) 11)) "warning"
                                      (< (count @(sim/queues i)) 10) "vacant"
                                      )
                             } (count @(sim/queues i))]]))

    ;; Item that are ready to be handled
    [:div.items.item-1 (if (= @(sim/current-logs 0) nil) 0 1)]
    [:div.items.item-2 (if (= @(sim/current-logs 1) nil) 0 1)]
    [:div.items.item-3 (if (= @(sim/current-logs 2) nil) 0 1)]
    [:div.items.item-4 (if (= @(sim/current-logs 3) nil) 0 1)]
    [:div.items.item-5 (if (= @(sim/current-logs 4) nil) 0 1)]

    ;;lead time
    (doall (for [i (range 5)]
             (list [:div.lead-time-header {:key (str "lead-time-header-" (inc i)) :class (str "lead-time-header-" (inc i))} "Lead time"]
                   [:div.lead-time {:key (str "leadtime-" (inc i)) :class (str "lead-time-" (inc i))} (or @(w/lead-times i) "-") " sek"])))

        ;;Start and Pause button
        [sim/pause-btn]
        [:div.timer [set-timer]]
        [reset/reset-btn]
        [:footer [:div "Bæverdæmningerne er udviklet i forbindelse med DevOps Akademiets uddannelses forløb."]
         [:div "Ide og kravstilling af: Martin Baadsgaard & Sofie Jøhnk Stabell"]
         [:div "Illustartioner af: Sofie Jøhnk Stabell"]
         [:div "Udvikling af: Amal Qasim, Mathias Hedemann Hansen, Rohita Khatiwada, Shane Daniel Rich & Tue Thulesen Dahl"]]]])

(defn ^:export run []
  (rdom/render [mini-app] (js/document.getElementById "app")))

(defn ^:export reload []
  (.log js/console "reload...")
  (run))
