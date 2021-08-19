(ns skovhugger
  ;; TODO (:require [get Amals faeld trae ])
  )

;; TODO replace with amal stuff
(defn cut-tree [] (str "cutted tree: "))

(defn create-tree-trunk [ws1-free skovhugger-process-time queue1]
  (println (str "queue1 is empty?: " ws1-free))
  (println (str "skov hugger process time in skovhugger: " skovhugger-process-time))
  ;; (println (str "queue1 size: " (size queue1)))
  (if ws1-free (let [tree (cut-tree)

                     bar (println "a")
                     foo (if (< skovhugger-process-time 0)
                       (println (str "skovhugger-process-time is " skovhugger-process-time ". So put tree in the water")))

                     ]
                     bar (println "b")

                     ;; TODO add tree to queue1 if queue1 is empty
                     ;; foo (println "queue1")
                     ;; bar (println @queue1)

                 )))

                     ;; tree-uuid (random-uuid)
                     ;; tree-cutted-time (js/Date.)
