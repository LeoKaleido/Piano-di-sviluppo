# Diario, progetto 1 (107), prova 4

Data dell'esecuzione: 2026-10-12. Piani e skill nella versione del repository a questa data, dopo l'audit generale e le decisioni su Q3 (finestra di rilascio in mesi, capitolo Pubblicazione alla chiusura, niente PDF del Milestone report, tutti i messaggi in `source`, riga "cosa verifica il cliente"), la Proposta confermata senza versione e la regola della catena completa delle versioni. Le osservazioni hanno il codice Q4-n e il tipo, riprese nell'analisi.

## Cosa è stato rifatto e cosa no

Come nelle prove 2 e 3, il contenuto che le regole non toccano (richiesta, conversazioni, risposte del cliente, corpo del Manuale e del Documento tecnico, Nota di sprint, Report di progetto) viene dalla prova 3. Ciò che questa prova verifica è la struttura che le skill e i piani producono oggi, con un controllo sistematico invece di una lettura a occhio:

- **La cartella parte vuota.** Create le cartelle `claude`, `design`, `develop`, `source`, `log`, e `storico.md` e `decisioni.md` in `log` (skill `kickoff`).
- **Catena completa delle versioni, copiata all'inizio.** Regola delle Regole comuni: `claude` contiene la catena dalla prima versione disponibile. Copiati dalla base il Manuale v1.0-v1.3 e il Documento tecnico v1.0-v1.2. Il Manuale v1.4 e il Documento tecnico v1.3, che nascono dal ticket 103, sono stati ricostruiti nella struttura attuale (capitolo Pubblicazione dentro il Documento tecnico): la versione prodotta dalla prova 1 del ticket aveva ancora la Guida a parte e il "capitolo Milestone".
- **PDF generati da zero.** `build/crea-pdf.ps1` ha prodotto i PDF in ordine cronologico partendo da una radice vuota: Proposta v0.1, v0.2, v0.3 e Proposta confermata, Manuale v1.5 e v1.6, Documento tecnico v1.4 e v1.5, Piano dei SAL v1 e v2. Nella radice restano le sole versioni correnti, con numeri 01-04 senza buchi, e la Proposta confermata prende il nome senza versione.
- **Controlli automatici sulla cartella.** Script di verifica (inventario, catena delle versioni, intestazioni, "invariato" e rimandi, tabelle, caratteri vietati, termini interni nei documenti per il cliente, etichette e ordine dello storico, nomi in `source`, messaggi citati). Risultati nell'analisi.

## Osservazioni

- Q4-1, Base: il Manuale v1.3 della base (`test/sistema-base`) aveva ancora "Deriva dalla v1.2" nell'intestazione, un rimando a una versione precedente che la regola vieta. Corretto nella base e nelle copie.
- Q4-2, Esecuzione: nello storico la voce del 22 dicembre (approvazione di V1) precedeva quelle del 18 dicembre (prova del SAL1 e V2): le voci vanno in ordine di data. L'etichetta "Altro" era scritta con una virgola invece dei due punti. Trovato dal controllo automatico, corretto (la stessa irregolarità c'era nella prova 3).
- Q4-3, Esecuzione: il messaggio a Franco sulla variazione V1 nominava "lo sviluppatore" (un ruolo interno). Riformulato con "la telefonata di Diego del 15 dicembre".
- Q4-4, Passaggio: la regola "all'inizio si copiano le versioni precedenti dalle cartelle delle altre lavorazioni" presuppone che quelle versioni esistano nella struttura attuale. Il Documento tecnico v1.3 e il Manuale v1.4 del ticket 103 non c'erano: sono stati ricostruiti dalla base. La prova del ticket va rifatta, e solo allora la catena del progetto è quella vera.
- Q4-5, Contraddizione: `kickoff` chiede la stima precisa come un valore ("la durata complessiva in giorni lavorativi") mentre `proposta-di-soluzione` chiede un intervallo. Nessuna skill dice chi ricava l'intervallo dal valore. Nella prova l'intervallo è stato ricavato dal valore (390 ore più 78, circa 39 giorni lavorativi di sviluppo più collaudo) con il 10-15%.
- Q4-6, Passaggio: il Piano dei SAL indica la durata in settimane (10 settimane di sviluppo) mentre la Proposta la indica in giorni lavorativi (da 40 a 50) e in mesi. Tre unità per la stessa grandezza: il cliente deve fare il confronto da solo.
- Q4-7, Esecuzione: il contenuto della prova viene dalla prova 3. Le skill non sono state rieseguite una per una sui documenti: il controllo è sul risultato. Dove una regola nuova non è verificabile dal risultato (per esempio "la skill chiama Proposta di soluzione la versione confermata") la prova non la esercita.

## Controlli finali

Eseguito lo script di verifica sulla cartella: tutti i controlli superati dopo le correzioni Q4-2 e Q4-3. Vedi l'analisi.
