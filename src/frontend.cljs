(ns frontend
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(def total-process-time (r/atom 0))
(def total-lead-time (r/atom 0))
(def skovhygge-input (r/atom 0))
(def skov-output (r/atom 0))
(def skov-process (r/atom 0))
(def ps1-input (r/atom 8))
(def ps2-input (r/atom 9))
(def ps3-input (r/atom 4))
(def ps4-input (r/atom 6))
(def ps5-input (r/atom 4))

(defn mini-app []
      [:div.container
       [:div
        [:img {:src "/images/baeverdaemningerne.png" :alt "descriptive text"}]
        [:div.input "Input"]
        [:div.skovhygge-input @skovhygge-input " stk"]
        [:div.output "Output"]
        [:div.skov-output @skov-output " stk"]
        [:div.skov-process "Process"]
        [:div [:input.skov-process-input {:type "text" :placeholder @skov-process :maxlength "4" :size "1"}][:div.label-skov-process "sek"]]
        [:div.total "Total"]
        [:div.process-time-header "Process time"]
        [:div.lead-time-header "Lead time"]
        [:div.total-process-time @total-process-time " sek"]
        [:div.total-lead-time @total-lead-time " sek"]
        [:div.process-time-1 "Process time"] [:div [:input.input-process-time-1 {:type "text" :placeholder @ps1-input :maxlength "4" :size "1"}][:div.label-ps-1 "sek"]]
        [:div.process-time-2 "Process time"] [:div [:input.input-process-time-2 {:type "text" :placeholder @ps2-input :maxlength "4" :size "1"}][:div.label-ps-2 "sek"]]
        [:div.process-time-3 "Process time"] [:div [:input.input-process-time-3 {:type "text" :placeholder @ps3-input :maxlength "4" :size "1"}][:div.label-ps-3 "sek"]]
        [:div.process-time-4 "Process time"] [:div [:input.input-process-time-4 {:type "text" :placeholder @ps4-input :maxlength "4" :size "1"}][:div.label-ps-4 "sek"]]
        [:div.process-time-5 "Process time"] [:div [:input.input-process-time-5 {:type "text" :placeholder @ps5-input :maxlength "4" :size "1"}][:div.label-ps-5 "sek"]]


        ]])

(defn ^:export run []
      (rdom/render [mini-app] (js/document.getElementById "app")))

(defn ^:export reload []
      (.log js/console "reload...")
      (run))
