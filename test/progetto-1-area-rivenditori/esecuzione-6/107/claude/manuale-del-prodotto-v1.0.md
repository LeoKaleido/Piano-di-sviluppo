# Manuale del prodotto, Lumera Arredi, sito di vendita online

Cliente: Lumera Arredi. Sistema: sito di vendita online. Versione 1.0, del 2023-10-02. Documento a scopo di test, ricostruito per completezza della catena delle versioni (la base di partenza ha le versioni più recenti).

## 1. Scopo e ambito

Il sito di Lumera Arredi permette ai visitatori di consultare il catalogo di illuminazione e complementi d'arredo, e ai clienti di acquistare online. Comprende catalogo, scheda prodotto, carrello, pagamento e area cliente. Il Manuale descrive il sito come lo vede chi lo usa.

Non descrive il gestionale (lo strumento interno con cui Lumera gestisce prodotti, ordini, clienti, codici sconto e messaggi di contatto) né il modulo di contatto del sito.

## 2. Glossario

- **Visitatore.** Chi consulta il sito senza essere entrato nella propria area cliente.
- **Cliente.** Chi ha un accesso proprio all'area cliente.
- **Prodotto.** Un articolo del catalogo, con codice, nome, descrizione, immagini, prezzo e marca.
- **Categoria.** Raggruppamento dei prodotti (per esempio lampade da tavolo).
- **Disponibilità.** Lo stato di un prodotto: disponibile subito, ordinabile o esaurito.
- **Carrello.** L'elenco dei prodotti che il cliente ha scelto e non ha ancora pagato.
- **Riepilogo del pagamento.** La schermata che mostra righe, spedizione e totale prima del pagamento.

## 3. Tipi di utente e permessi

- **Visitatore.** Consulta il catalogo e le schede prodotto, e può aggiungere prodotti al carrello. Per pagare deve entrare come cliente.
- **Cliente.** Può fare tutto ciò che fa il visitatore, pagare, e usare l'area cliente (ordini, indirizzi). Le story del carrello sono scritte dal punto di vista del cliente.
- Il sito ha un solo tipo di accesso, quello del cliente.

## 4. Funzionalità

### F1 Catalogo

Lo usano visitatori e clienti.

- **F1.1** Come visitatore, voglio vedere l'elenco dei prodotti, per scegliere cosa guardare.
  - Situazione di partenza: nessuna.
  - Comportamento: il catalogo mostra i prodotti a pagine, con immagine, nome, prezzo e disponibilità, in ordine di inserimento.
  - Casi particolari: nessun prodotto nella categoria, messaggio "Nessun prodotto trovato"; immagine mancante, segnaposto.
  - Accettata quando: il catalogo mostra i prodotti di prova a pagine, e una categoria vuota mostra il messaggio.
- **F1.2** Come visitatore, voglio cercare un prodotto per parole, per trovarlo senza scorrere.
  - Situazione di partenza: il visitatore è nel catalogo.
  - Comportamento: scrive una o più parole; il catalogo mostra i prodotti il cui nome o la cui descrizione le contiene.
  - Casi particolari: nessun risultato, messaggio "Nessun prodotto trovato" con il suggerimento di cambiare le parole; ricerca vuota, il catalogo torna all'elenco completo.
  - Accettata quando: cercando "tavolo" compaiono solo i prodotti di prova che contengono la parola, e una parola inesistente mostra il messaggio.
- **F1.3** Come visitatore, voglio filtrare per categoria, prezzo e marca, per restringere la scelta.
  - Situazione di partenza: il visitatore è nel catalogo.
  - Comportamento: sceglie una o più condizioni; il catalogo mostra solo i prodotti che le rispettano tutte. Il prezzo si sceglie come intervallo.
  - Casi particolari: filtri senza risultati, messaggio "Nessun prodotto trovato" e pulsante per togliere i filtri; intervallo di prezzo invertito, i valori vengono scambiati.
  - Accettata quando: con categoria "lampade da tavolo" e prezzo fino a 100 euro compaiono solo i prodotti di prova che rispettano entrambe le condizioni.

### F2 Scheda prodotto

Lo usano visitatori e clienti.

- **F2.1** Come visitatore, voglio vedere la scheda di un prodotto, per decidere se acquistarlo.
  - Situazione di partenza: il visitatore ha scelto un prodotto nel catalogo.
  - Comportamento: la scheda mostra nome, descrizione, immagini, prezzo e disponibilità.
  - Casi particolari: prodotto non più nel catalogo, messaggio "Prodotto non disponibile" e collegamento al catalogo.
  - Accettata quando: la scheda di un prodotto di prova mostra tutte le informazioni, e l'indirizzo di un prodotto tolto mostra il messaggio.
- **F2.2** Come visitatore, voglio sapere se il prodotto è disponibile, per sapere quando lo ricevo.
  - Comportamento: la scheda indica "Disponibile subito", "Ordinabile" o "Esaurito". Un prodotto esaurito non si può aggiungere al carrello.
  - Casi particolari: un prodotto ordinabile si aggiunge al carrello, con l'indicazione che la consegna richiede più tempo.
  - Accettata quando: tre prodotti di prova con le tre disponibilità mostrano l'indicazione giusta, e quello esaurito non si aggiunge al carrello.

### F3 Carrello

Lo usano visitatori e clienti.

- **F3.1** Come cliente, voglio aggiungere un prodotto al carrello, per acquistarlo insieme ad altri.
  - Situazione di partenza: il cliente è nella scheda di un prodotto non esaurito.
  - Comportamento: tocca "Aggiungi al carrello"; il prodotto compare nel carrello con quantità uno e il prezzo.
  - Casi particolari: prodotto già nel carrello, la quantità aumenta di uno; prodotto esaurito, il pulsante non è attivo.
  - Accettata quando: dopo l'aggiunta il carrello mostra il prodotto con prezzo e quantità uno, e aggiungerlo di nuovo porta la quantità a due.
- **F3.2** Come cliente, voglio cambiare le quantità nel carrello, per correggere l'ordine.
  - Situazione di partenza: il carrello contiene almeno un prodotto.
  - Comportamento: cambia la quantità di una riga; il totale si aggiorna subito. Portando la quantità a zero la riga si toglie.
  - Casi particolari: quantità non intera o negativa, non accettata; quantità oltre il massimo ordinabile, messaggio con il massimo.
  - Accettata quando: cambiando una quantità da uno a tre il totale triplica il valore della riga, e a zero la riga sparisce.

### F4 Pagamento

Lo usano i clienti.

- **F4.1** Come cliente, voglio scegliere l'indirizzo di spedizione, per ricevere l'ordine dove voglio.
  - Situazione di partenza: il cliente ha un carrello non vuoto ed è entrato.
  - Comportamento: sceglie tra gli indirizzi salvati nell'area cliente o ne inserisce uno nuovo.
  - Casi particolari: indirizzo incompleto, messaggio sul campo mancante; nessun indirizzo salvato, il modulo di inserimento si apre da solo.
  - Accettata quando: un cliente con due indirizzi salvati ne sceglie uno e lo vede nel riepilogo.
- **F4.2** Il totale del carrello coincide con quello del riepilogo del pagamento.
  - Situazione di partenza: il cliente ha scelto l'indirizzo.
  - Comportamento: il riepilogo mostra le righe del carrello, la spedizione e il totale. Il totale delle righe coincide con quello del carrello.
  - Casi particolari: prodotto diventato esaurito nel frattempo, avviso e riga segnalata, pagamento bloccato finché non viene tolta.
  - Accettata quando: per un carrello di prova il totale delle righe nel riepilogo è identico a quello del carrello.
- **F4.3** Come cliente, voglio pagare con carta, per completare l'acquisto.
  - Situazione di partenza: il cliente è nel riepilogo.
  - Comportamento: inserisce i dati della carta e conferma; se il pagamento riesce, vede la conferma dell'ordine.
  - Casi particolari: circuito di carta non accettato, messaggio con i circuiti accettati; pagamento rifiutato, messaggio e carrello intatto; connessione interrotta durante il pagamento, il cliente non viene addebitato due volte e può riprovare.
  - Accettata quando: con una carta di prova accettata l'ordine è confermato, con una carta di prova rifiutata il messaggio compare e il carrello resta.

### F5 Area cliente

Lo usano i clienti.

- **F5.1** Come cliente, voglio vedere i miei ordini, per sapere a che punto sono.
  - Situazione di partenza: il cliente è entrato.
  - Comportamento: l'elenco mostra gli ordini dal più recente, con data, totale e stato.
  - Casi particolari: nessun ordine, messaggio "Nessun ordine".
  - Accettata quando: un cliente di prova con due ordini li vede in ordine di data, e uno senza ordini vede il messaggio.
- **F5.2** Come cliente, voglio gestire i miei indirizzi, per non riscriverli a ogni ordine.
  - Comportamento: aggiunge, modifica e toglie gli indirizzi salvati.
  - Casi particolari: indirizzo usato in un ordine non ancora spedito, resta nell'ordine anche se tolto.
  - Accettata quando: un indirizzo aggiunto compare tra quelli scelti nel pagamento, e uno tolto non compare più.

## 5. Schermate e navigazione

Catalogo, scheda prodotto, carrello, indirizzo di spedizione, riepilogo del pagamento, pagamento, conferma dell'ordine, area cliente (ordini, indirizzi). Dal catalogo si apre la scheda; dalla scheda e dal catalogo si aggiunge al carrello; dal carrello si passa all'indirizzo, poi al riepilogo e al pagamento. I wireframe e i mockup delle schermate sono nella cartella della lavorazione 96 (carrello e pagamento).

## 6. Dati gestiti

Prodotti con prezzo e disponibilità, carrelli, ordini, clienti con indirizzi.

## 7. Requisiti generali

Funziona sui browser correnti di computer, tablet e telefono. Lingua italiana. Gli indirizzi email dei clienti si usano solo per le comunicazioni sull'ordine. 

## 8. Fuori ambito

Gestionale (strumento interno), modulo di contatto, pagamento con bonifico, accesso con profili diversi dal cliente.

## 9. Tracciabilità

Proposta del sito: catalogo (F1), scheda (F2), carrello (F3), pagamento (F4), area cliente (F5).

## 10. Domande aperte

Nessuna.

## 11. Modifiche rispetto alla versione precedente

- v1.0 (2023-10-02): prima versione, con il lancio del sito.
