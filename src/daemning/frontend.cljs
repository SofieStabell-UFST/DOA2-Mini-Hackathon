(ns frontend
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(defn mini-app []

      [:div
       [:div.header [:header "Bevar Dæmmingerned "]
        [:p {:style {:color "white" :text-align :center}} "Mini Hackathon2 Demo v1.0.0"]]
       [:div.header-container
        [:div [:label "Process= sek"]]
        [:div [:label "Input= "] [:input.input-text.input-text-header
                                  {:type "text" :placeholder "720" :maxlength "4" :size "1"}]
         [:label "stk/time"]]
        [:div {:style {:color :red}} [:label "Lead= 37 sek"]]]
       [:div.body-container
        [:span.rotate [:Strong "Input= stk/time"]]
        [:div.main
         [:div.grid.grid-header
          [:div [:input.input-text {:type "text" :placeholder "3" :maxlength "4" :size "1" :id "ws1"}]
           [:label "sek"]]
          [:div [:input.input-text {:type "text" :placeholder "9" :maxlength "4" :size "1" :id "ws2"

                                    }] [:label "sek"]]
          [:div [:input.input-text {:type "text" :placeholder "1" :maxlength "4" :size "1" :id "ws3"}] [:label "sek"]]
          [:div [:input.input-text {:type "text" :placeholder "2" :maxlength "4" :size "1" :id "ws4"}] [:label "sek"]]
          [:div [:input.input-text {:type "text" :placeholder "4" :maxlength "4" :size "1" :id "ws5"}] [:label "sek"]]]
         [:div.grid.body
          [:span.rt-border "1"]
          [:span.rt-border "8"]
          [:span.rt-border "0"]
          [:span.rt-border "1"]
          [:span.rt-border "0"]]
         [:div.grid.footer-text
          [:span [:strong "3 sek"]]
          [:span [:strong "72 sek"]]
          [:span [:strong "1 sek"]]
          [:span [:strong "2 sek"]]
          [:span [:strong "4 sek"]]]]
        [:span.rotate [:strong "Output= stk/time"]]
        ]
       [:footer [:strong "copyright@hold2DevOpsAcademy"]]]
      )

(defn ^:export run []
      (rdom/render [mini-app] (js/document.getElementById "app")))

(defn ^:export reload []
      (.log js/console "reload...")
      (run))
