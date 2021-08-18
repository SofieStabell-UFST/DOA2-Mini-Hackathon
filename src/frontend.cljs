(ns frontend
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [simulation :as sim]))

(def total-process-time (r/atom 0))
(def total-lead-time (r/atom 0))
(def skovhygge-input (r/atom 0))
(def skov-output (r/atom 0))
(def skov-process (r/atom 0))
(def ps1-input (r/atom 0))
(def ps2-input (r/atom 0))
(def ps3-input (r/atom 0))
(def ps4-input (r/atom 0))
(def ps5-input (r/atom 0))

;; items in queue
(def queue-1 (r/atom 0))
(def queue-2 (r/atom 0))
(def queue-3 (r/atom 0))
(def queue-4 (r/atom 0))
(def queue-5 (r/atom 0))

;;Work station queue items

(def ws3-queue (r/atom 0))
(def ws4-queue (r/atom 0))
(def ws5-queue (r/atom 0))

;; items that are ready to be send forward
(def item-1 (r/atom 0))
(def item-2 (r/atom 0))
(def item-3 (r/atom 0))
(def item-4 (r/atom 0))
(def item-5 (r/atom 0))
(def start-button (r/atom "Start"))
(def timer (r/atom "00:00"))
(def reset-button (r/atom "Ryd"))

;;Lead time
(def lead-time-1 (r/atom "-"))
(def lead-time-2 (r/atom "-"))
(def lead-time-3 (r/atom "-"))
(def lead-time-4 (r/atom "-"))
(def lead-time-5 (r/atom "-"))

(defn mini-app []
      [:div.container
       [:div
        [:img {:src "/images/baeverdaemningerne.png" :alt "descriptive text"}]
        [:div.input "Input"]
        [:div.skovhygge-input @skovhygge-input " stk"]
        [:div.output "Output"]
        [:div.skov-output @skov-output " stk"]
        [:div.skov-process "Process"]
        [:div [:input.skov-process-input {:type "number" :placeholder @skov-process :max "2" :size "1"}] [:div.label-skov-process "sek"]]

        [:div.total "Total"]
        [:div.process-time-header "Process time"]
        [:div.total-lead-time-header "Lead time"]
        [:div.total-process-time @total-process-time " sek"]
        [:div.total-lead-time @total-lead-time " sek"]

        [:div.process-time.process-time-1 "Process time"]
        [:div [:input.input-process-time.input-process-time-1 {:type "number" :placeholder @ps1-input :max "2" :size "1"}]
         [:div.label-ps.label-ps-1 "sek"]]
        [:div.process-time.process-time-2 "Process time"]
        [:div [:input.input-process-time.input-process-time-2 {:type "number" :placeholder @ps2-input :max "2" :size "1"}]
         [:div.label-ps.label-ps-2 "sek"]]
        [:div.process-time.process-time-3 "Process time"]
        [:div [:input.input-process-time.input-process-time-3 {:type "number" :placeholder @ps3-input :max "2" :size "1"}]
         [:div.label-ps.label-ps-3 "sek"]]
        [:div.process-time.process-time-4 "Process time"]
        [:div [:input.input-process-time.input-process-time-4 {:type "number" :placeholder @ps4-input :max "2" :size "1"}]
         [:div.label-ps.label-ps-4 "sek"]]
        [:div.process-time.process-time-5 "Process time"]
        [:div [:input.input-process-time.input-process-time-5 {:type "number" :placeholder @ps5-input :max "2" :size "1"}] [:div.label-ps.label-ps-5 "sek"]]

        ;Diplays queue item
        [:div.ws-queue.ws1-queue (count @sim/queue1)]
        [:div.ws-queue.ws2-queue (count @sim/queue2)]
        [:div.ws-queue.ws3-queue @ws3-queue]
        [:div.ws-queue.ws4-queue @ws4-queue]
        [:div.ws-queue.ws5-queue @ws5-queue]

        ;; Item that are ready to be handled
        [:div.items.item-1 @item-1]
        [:div.items.item-2 @item-2]
        [:div.items.item-3 @item-3]
        [:div.items.item-4 @item-4]
        [:div.items.item-5 @item-5]

        ;;lead time
        [:div.lead-time-header.lead-time-header-1 "Lead time"]
        [:div.lead-time.lead-time-1 @lead-time-1 " sek"]

        [:div.lead-time-header.lead-time-header-2 "Lead time"]
        [:div.lead-time.lead-time-2 @lead-time-2 " sek"]

        [:div.lead-time-header.lead-time-header-3 "Lead time"]
        [:div.lead-time.lead-time-3 @lead-time-3 " sek"]

        [:div.lead-time-header.lead-time-header-4 "Lead time"]
        [:div.lead-time.lead-time-4 @lead-time-4 " sek"]

        [:div.lead-time-header.lead-time-header-5 "Lead time"]
        [:div.lead-time.lead-time-5 @lead-time-5 " sek"]

        ;;Start and Pause buttom
        [sim/pause-btn]
        [:div.button.reset-button @reset-button]
        [sim/time-display]
        ]
       ])

(defn ^:export run []
      (rdom/render [mini-app] (js/document.getElementById "app")))

(defn ^:export reload []
      (.log js/console "reload...")
      (run))

; clear-simulator will need to be refactored as we go as I predict changes, ie., new atoms and/or starting values.
(defn clear-simulator []
      ; from simulation.cljs
      (reset! sim/paused? true)
      (reset! sim/sim-time 0)
      (reset! sim/interval nil)
      (reset! sim/queue1 [])
      (reset! sim/current-time1 0)
      (reset! sim/current-log1 nil)
      (reset! sim/queue2 [])

      (reset! sim/process-time1 0)
      (reset! sim/process-time2 0)
      (reset! sim/process-time3 0)
      (reset! sim/process-time4 0)
      (reset! sim/process-time5 0)

      ; from frontend.cljs
      (reset! total-process-time 0)
      (reset! total-lead-time 0)
      (reset! skovhygge-input 0)
      (reset! skov-output 0)
      (reset! skov-process 0)

      (reset! queue-1 0)
      (reset! queue-2 0)
      (reset! queue-3 0)
      (reset! queue-4 0)
      (reset! queue-5 0)

      (reset! item-1 0)
      (reset! item-2 0)
      (reset! item-3 0)
      (reset! item-4 0)
      (reset! item-5 0)

      (reset! start-button "Start")
      (reset! timer "00:00")
      (reset! reset-button "Ryd")

      (reset! lead-time-1 "-")
      (reset! lead-time-2 "-")
      (reset! lead-time-3 "-")
      (reset! lead-time-4 "-")
      (reset! lead-time-5 "-")
      )