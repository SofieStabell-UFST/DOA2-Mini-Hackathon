(ns frontend
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [simulation :as sim]
    [reset]
    [processtime :as pt]))


(defn set-timer []
      (let [date (js/Date. 0)]
           (fn []
               (.setSeconds date @sim/sim-time)
               (-> date
                   (.toISOString)
                   (.substr 14 5)))
           ))

(defn mini-app []
      [:div.container
       [:div
        [:img {:src "/images/baeverdaemningerne.png" :alt "descriptive text"}]
        [:div.input "Input"]
        [:div.skovhygge-input @sim/skovhygge-input " stk"]
        [:div.output "Output"]
        [:div.skov-output @sim/skov-output " stk"]
        [:div.skov-process "Process"]
        [:div [:input.skov-process-input {:type "number"
                                          :placeholder @sim/skov-process :max "2" :size "1"
                                          :on-change #(pt/update-skovhugger-process-time (-> % .-target .-value))
                                          }] [:div.label-skov-process "sek"]
         ]
        [:div.total "Total"]
        [:div.process-time-header "Process time"]
        [:div.total-lead-time-header "Lead time"]
        [:div.total-process-time @sim/total-process-time " sek"]
        [:div.total-lead-time @sim/total-lead-time " sek"]

        [:div.process-time.process-time-1 "Process time"]
        [:div [:input.input-process-time.input-process-time-1 {:type      "number" :id ":1" :placeholder @(pt/process-times 0) :max "2" :size "1" :read-only @sim/readonly
                                                               :on-change #(pt/update-process-time1 (-> % .-target .-value))}]
         [:div.label-ps.label-ps-1 "sek"]]
        [:div.process-time.process-time-2 "Process time"]
        [:div [:input.input-process-time.input-process-time-2 {:type      "number" :id ":2" :placeholder @(pt/process-times 1) :max "2" :size "1" :read-only @sim/readonly
                                                               :on-change #(pt/update-process-time2 (-> % .-target .-value))}]
         [:div.label-ps.label-ps-2 "sek"]]
        [:div.process-time.process-time-3 "Process time"]
        [:div [:input.input-process-time.input-process-time-3 {:type      "number" :id ":3" :placeholder @(pt/process-times 2) :max "2" :size "1" :read-only @sim/readonly
                                                               :on-change #(pt/update-process-time3 (-> % .-target .-value))}]
         [:div.label-ps.label-ps-3 "sek"]]
        [:div.process-time.process-time-4 "Process time"]
        [:div [:input.input-process-time.input-process-time-4 {:type      "number" :id ":4" :placeholder @(pt/process-times 3) :max "2" :size "1" :read-only @sim/readonly
                                                               :on-change #(pt/update-process-time4 (-> % .-target .-value))}]
         [:div.label-ps.label-ps-4 "sek"]]

        [:div.process-time.process-time-5 "Process time"]
        [:div [:input.input-process-time.input-process-time-5 {:type      "number" :id ":5" :placeholder @(pt/process-times 4) :max "2" :size "1" :read-only @sim/readonly
                                                               :on-change #(pt/update-process-time5 (-> % .-target .-value))}]
         [:div.label-ps.label-ps-5 "sek"]]

        ;Diplays queue item
        (doall (for [i (range 5)]
                    [:div.ws-queue {:key i :class (str "ws" (inc i) "-queue")}
                     (count @(sim/queues i))]))

        ;; Item that are ready to be handled
        [:div.items.item-1 @sim/item-1]
        [:div.items.item-2 @sim/item-2]
        [:div.items.item-3 @sim/item-3]
        [:div.items.item-4 @sim/item-4]
        [:div.items.item-5 @sim/item-5]

        ;;lead time
        [:div.lead-time-header.lead-time-header-1 "Lead time"]
        [:div.lead-time.lead-time-1 @sim/lead-time-1 " sek"]

        [:div.lead-time-header.lead-time-header-2 "Lead time"]
        [:div.lead-time.lead-time-2 @sim/lead-time-2 " sek"]

        [:div.lead-time-header.lead-time-header-3 "Lead time"]
        [:div.lead-time.lead-time-3 @sim/lead-time-3 " sek"]

        [:div.lead-time-header.lead-time-header-4 "Lead time"]
        [:div.lead-time.lead-time-4 @sim/lead-time-4 " sek"]

        [:div.lead-time-header.lead-time-header-5 "Lead time"]
        [:div.lead-time.lead-time-5 @sim/lead-time-5 " sek"]

        ;;Start and Pause button
        [sim/pause-btn]
        [sim/time-display]
        [reset/reset-btn]
        ]
       ])

(defn ^:export run []
      (rdom/render [mini-app] (js/document.getElementById "app")))

(defn ^:export reload []
      (.log js/console "reload...")
      (run))
