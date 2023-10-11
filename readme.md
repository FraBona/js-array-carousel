# CAROUSEL

- facciamo un container nel html
  - inseriamo un immagine grande al centro della pagina
  - inseriamo le freccie in alto e in basso

- creiamo una array di nome contImage e inseriamo dentro tutte le immagini
- creaimo una variabile contDomElement dove ci prendiamo il container dell'html 
- creaiamo una variabile dove ci prendiamo la lunghezza dell'array
- facciamo il ciclo for con i = 0, i < lunghezzaArray, i++
  - creiamo un variabile currentSrc dove inseriremo dentro mano mano che il ciclo va avanti le immagini
  - creiamo la variabile htmlString che stampera nell'html dentro le immagini dove metteremo il tag img dove dentro source mettiamo currentSource
  - la variabile htmlString la sommiamo al contDomElement
  - aggiungiamo alla classe myimage che si trova dentro il tag img la classe d-none che sara display none
- creiamo la variabile firstimage che ci predniamo con il queryselector
- e gli aggiungiamo la classe d-block


- ci creiamo due variabili per le freccie e le prendiamo col query.selector
- facciamo dua eventlistener click per le due freccie
  - freccia in alto
    - SE currentindex e minore di lengthImage - 1
      - currentindex++
      - SE currentindex > currentindex - 1
        - leviamo la classe active a item[currentindex - 1]
        - aggiungiamo la classe active a item[currentindex]
    - freccia in basso
      - SE currentIndex > 0 
        - currentindex--
        - SE currentindex < currentindex + 1
          - leviamo la classe active a item[currentindex + 1]
          - aggiugiamo la classe active a item[currentindex]