(ns skovhugger
  ;; TODO (:require [get Amals faeld trae ])
  )

;; TODO replace with amal stuff
(defn cut-tree [a] (str "cutted tree: " a))

(defn create-tree-trunk [ws1-free skovhugger-process-time queue1]
  (if ws1-free (let [tree
                     ;; "GIVET at systemet kører NÅR den første workstations kø er IKKE er fuld  SÅ skal skovhuggeren fælde et træ. det tager den tid(processtid) som er defineret af brugeren."
                     ;; TODO call amal instead
                     (cut-tree skovhugger-process-time)


                     ; TODO GIVET at systemet kører, NÅR skovhuggeren fælder et træ, SÅ skal træstammen have tilknyttet relevant metadata i form af et timestamp for fældning, samt et unikt ID, så træstammen kan behandles og spores gennem flowet.
                     ;
                     tree-uuid (random-uuid)
                     tree-cutted-time (js/Date.)


                     ; TODO GIVET at systemet kører og skovhuggeren har fældet et træ, NÅR træstammen har fået tilknyttet relevant metadata, SÅ skal træstammen indsættes i køen til den første workstation.
                     foo (println "queue1")
                     bar (println @queue1)
                     ]


                 (println "tree: " tree)
                 (println "tree uuid " tree-uuid)
                 (println "tree cutted time: " tree-cutted-time)
                 )))
