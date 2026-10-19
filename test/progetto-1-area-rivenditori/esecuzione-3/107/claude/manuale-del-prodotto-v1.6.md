# Manuale del prodotto, Lumera Arredi, sito di vendita online

Cliente: Lumera Arredi. Sistema: sito di vendita online. Versione 1.6, del 2027-02-26. Documento a scopo di test, scritto per intero.

## 1. Scopo e ambito

Il sito di Lumera Arredi permette ai visitatori di consultare il catalogo di illuminazione e complementi d'arredo, ai clienti di acquistare online e ai rivenditori di vedere i propri prezzi e di inserire ordini grandi. Comprende catalogo, scheda prodotto, carrello, pagamento, area cliente, comparatore di prodotti e area riservata dei rivenditori. Il Manuale descrive il sito come lo vede chi lo usa.

Non descrive il gestionale (lo strumento interno con cui Lumera gestisce prodotti, ordini, clienti, codici sconto e messaggi di contatto) né il modulo di contatto del sito, salvo le schermate del gestionale nuove per i rivenditori (collegamento e listini, F6.2 e F7.3).

## 2. Glossario

- **Visitatore.** Chi consulta il sito senza essere entrato nella propria area cliente.
- **Cliente.** Chi ha un accesso proprio all'area cliente.
- **Prodotto.** Un articolo del catalogo, con codice, nome, descrizione, immagini, prezzo e marca.
- **Categoria.** Raggruppamento dei prodotti (per esempio lampade da tavolo).
- **Disponibilità.** Lo stato di un prodotto: disponibile subito, ordinabile o esaurito.
- **Carrello.** L'elenco dei prodotti che il cliente ha scelto e non ha ancora pagato.
- **Riepilogo del pagamento.** La schermata che mostra righe, spedizione e totale prima del pagamento.
- **Lista dei desideri.** L'elenco dei prodotti che il cliente vuole ritrovare.
- **Confronto.** L'insieme dei prodotti che il visitatore ha scelto di mettere a confronto.
- **Codice sconto.** Un codice che il cliente inserisce nel carrello per ridurre il totale. Può essere di importo fisso (in euro) o in percentuale.
- **Rivenditore.** Cliente professionale con un accesso proprio e un listino proprio.
- **Listino del rivenditore.** I prezzi di ogni prodotto per quel rivenditore.
- **Responsabile commerciale.** Chi gestisce rivenditori e listini.
- **Ordine grande.** Un ordine del rivenditore caricato da un elenco di codici e quantità, registrato senza pagamento online.

## 3. Tipi di utente e permessi

- **Visitatore.** Consulta il catalogo, le schede prodotto e il confronto, e può aggiungere prodotti al carrello. Per pagare deve entrare come cliente.
- **Cliente.** Può fare tutto ciò che fa il visitatore, pagare, e usare l'area cliente (ordini, indirizzi, lista dei desideri). Le story del carrello sono scritte dal punto di vista del cliente.
- **Rivenditore.** Vede il proprio listino e inserisce ordini grandi. Non vede i listini degli altri né quello di tutti. Può fare quanto fa il cliente.
- **Responsabile commerciale.** Collega i rivenditori agli accessi e carica i listini dal gestionale.
- Il sito ha due tipi di accesso: cliente e rivenditore.

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
- **F3.3** Il carrello si svuota dopo 90 giorni. (Corretta nella v1.5: era 30. Origine: risposta D5 di Franco del 9 novembre, progetto 107.)
  - Situazione di partenza: il carrello contiene prodotti non pagati.
  - Comportamento: se il cliente non lo usa per 90 giorni, il carrello si svuota da solo.
  - Casi particolari: prodotti aggiunti dopo lo svuotamento, il carrello riparte da quelli.
  - Accettata quando: un carrello fermo per 90 giorni risulta vuoto al ritorno del cliente.
- **F3.4** Come cliente, voglio che un codice sconto di importo fisso sia tolto dal prezzo prima che venga aggiunta l'IVA, per pagare l'importo che mi aspetto. (Aggiunta nella v1.4, origine: ticket 103.)
  - Situazione di partenza: il carrello contiene almeno un prodotto e il cliente ha inserito un codice sconto di importo fisso valido.
  - Comportamento: il sistema toglie l'importo dal totale delle righe e poi aggiunge l'IVA. Con più aliquote IVA, l'importo si ripartisce in proporzione al valore delle righe.
  - Casi particolari: un codice sconto in percentuale dà lo stesso totale di prima.
  - Accettata quando: con un prodotto da 100 euro più IVA al 22% e un codice da 10 euro, il totale è 109,80 euro nel carrello e nel riepilogo del pagamento.

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
- **F4.4** Come cliente, voglio ricevere la conferma dell'ordine per email, per conservarla.
  - Situazione di partenza: il pagamento è riuscito.
  - Comportamento: il cliente riceve un'email con le righe, il totale e l'indirizzo di spedizione.
  - Casi particolari: invio dell'email fallito, l'ordine resta valido e la conferma è comunque visibile nell'area cliente.
  - Accettata quando: dopo un acquisto di prova il cliente riceve l'email entro un minuto.

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
- **F5.3** Come cliente, voglio una lista dei desideri, per ritrovare i prodotti che mi interessano.
  - Comportamento: dalla scheda aggiunge il prodotto alla lista; dall'area cliente la consulta e toglie i prodotti.
  - Casi particolari: prodotto tolto dal catalogo, resta nella lista con la dicitura "Non più disponibile".
  - Accettata quando: un prodotto aggiunto compare nella lista, e dopo averlo tolto non c'è più.

### F6 Accesso dei rivenditori

Lo usano i rivenditori e il responsabile commerciale.

- **F6.1** Come rivenditore, voglio accedere con le mie credenziali, per vedere i miei prezzi e ordinare.
  - Situazione di partenza: il rivenditore ha un accesso collegato all'anagrafica.
  - Comportamento: inserisce nome utente e password; il sito apre la pagina del rivenditore.
  - Casi particolari: credenziali errate, messaggio senza dire quale dato è sbagliato; accesso non collegato a un rivenditore dell'anagrafica, messaggio "Accesso non attivo" e nessuna pagina.
  - Accettata quando: un rivenditore con accesso collegato entra e vede la propria pagina, e con credenziali errate vede il messaggio e non entra.
- **F6.2** Come responsabile commerciale, voglio collegare un rivenditore dell'anagrafica a un accesso, per dargli l'area riservata.
  - Situazione di partenza: il rivenditore esiste nell'anagrafica del gestionale.
  - Comportamento: dal gestionale sceglie il rivenditore, crea o sceglie l'accesso e conferma; da quel momento l'accesso è collegato a quel rivenditore. Può anche togliere il collegamento.
  - Casi particolari: rivenditore già collegato, messaggio e nessuna modifica; accesso già collegato a un altro rivenditore, messaggio e nessuna modifica; collegamento tolto, il rivenditore non entra più e vede "Accesso non attivo".
  - Accettata quando: dopo il collegamento un rivenditore di prova entra nell'area riservata, e dopo averlo tolto vede "Accesso non attivo".

### F7 Prezzi per rivenditore

Lo usano i rivenditori e il responsabile commerciale.

- **F7.1** Come rivenditore, voglio vedere nel catalogo e nella scheda prodotto i miei prezzi, per decidere cosa ordinare.
  - Situazione di partenza: il rivenditore è entrato e il suo listino contiene prezzi.
  - Comportamento: da rivenditore il catalogo e la scheda mostrano il prezzo del proprio listino; un cliente non rivenditore vede il prezzo di sempre.
  - Casi particolari: prodotto senza prezzo nel listino del rivenditore, mostra "Prezzo su richiesta" e non si può aggiungere al carrello; listino del rivenditore vuoto, il rivenditore vede "Listino non disponibile" e contatta il responsabile commerciale.
  - Accettata quando: con due rivenditori di prova con prezzi diversi, ciascuno vede nel catalogo il proprio prezzo per lo stesso prodotto, e un cliente non rivenditore vede il prezzo di sempre.
- **F7.2** Come rivenditore, voglio che carrello e pagamento usino i miei prezzi, per pagare quanto concordato.
  - Situazione di partenza: il rivenditore è entrato e ha prodotti nel carrello.
  - Comportamento: il carrello e il riepilogo del pagamento usano il prezzo del listino del rivenditore. Il totale del carrello coincide con il riepilogo del pagamento (F4.2).
  - Casi particolari: prodotto con prezzo su richiesta, non entra nel carrello; listino cambiato mentre il carrello è pieno, il carrello mostra i prezzi aggiornati.
  - Accettata quando: un carrello di un rivenditore con tre prodotti mostra gli stessi prezzi del catalogo, e il riepilogo del pagamento riporta lo stesso totale.
- **F7.3** Come responsabile commerciale, voglio caricare e correggere i listini dei rivenditori, per tenerli aggiornati.
  - Situazione di partenza: il rivenditore esiste nell'anagrafica.
  - Comportamento: dal gestionale sceglie il rivenditore e carica un file con il prezzo di ogni prodotto; il gestionale mostra le righe lette e le righe segnalate, e dopo la conferma il listino è attivo. Può anche correggere il prezzo di un singolo prodotto.
  - Casi particolari: prodotto del file non riconosciuto, riga segnalata e non caricata; prezzo non valido (vuoto, negativo, non numerico), riga segnalata; file vuoto, messaggio e listino invariato.
  - Accettata quando: caricando i file di prova di due rivenditori i loro prezzi compaiono nel catalogo di ciascuno, e un prezzo corretto a mano compare al posto del precedente.

### F8 Ordini grandi

Lo usano i rivenditori.

- **F8.1** Come rivenditore, voglio inserire un ordine caricando un elenco di codici e quantità, per non aggiungere una riga alla volta.
  - Situazione di partenza: il rivenditore è entrato e il suo listino contiene prezzi.
  - Comportamento: carica un file con una riga per prodotto, con codice e quantità; il sito mostra le righe con i prezzi del suo listino e il totale; il rivenditore conferma e l'ordine è registrato senza pagamento online; l'ordine risulta "da confermare" finché non lo conferma chi gestisce gli ordini di Lumera.
  - Casi particolari: codice non trovato, riga segnalata e non inserita; quantità non valida, riga segnalata; prodotto con prezzo su richiesta, riga segnalata; file vuoto, messaggio.
  - Accettata quando: un file di prova con dieci righe, di cui due con codice errato, mostra le otto righe valide con i prezzi del listino e segnala le due errate; dopo la conferma l'ordine compare nel gestionale.
- **F8.2** Come rivenditore, voglio vedere l'elenco dei miei ordini, per ritrovarli.
  - Situazione di partenza: il rivenditore è entrato.
  - Comportamento: la pagina mostra gli ordini del rivenditore dal più recente, con data, totale e stato ("da confermare" o "confermato").
  - Casi particolari: nessun ordine, messaggio "Nessun ordine"; il rivenditore non vede mai ordini di altri.
  - Accettata quando: un rivenditore di prova con due ordini li vede in ordine di data, uno senza ordini vede il messaggio, e nessuno dei due vede gli ordini dell'altro.

- **F8.3** Come rivenditore, voglio scaricare in PDF il preventivo dell'ordine, per conservarlo. (Aggiunta nella v1.6, origine: variazione V1 del progetto 107, approvata da Franco il 22 dicembre 2026.)
  - Situazione di partenza: il rivenditore ha almeno un ordine nell'elenco degli ordini.
  - Comportamento: dall'elenco tocca "Scarica preventivo" su un ordine; il sito scarica un PDF con il nome del rivenditore, la data, le righe con codice, quantità e prezzo del suo listino, e il totale.
  - Casi particolari: errore nella creazione del PDF, messaggio "Preventivo non disponibile, riprovare" e nessun file; il rivenditore non può scaricare il preventivo di ordini di altri.
  - Accettata quando: dopo un ordine di prova il PDF scaricato riporta le stesse righe e lo stesso totale dell'ordine.

### F10 Selezione nel comparatore

Lo usano i visitatori.

- **F10.1** Come visitatore, voglio aggiungere un prodotto al confronto dalla sua scheda, per valutarlo insieme ad altri.
  - Comportamento: dalla scheda tocca "Confronta"; il prodotto entra nel confronto e un indicatore mostra quanti ce ne sono.
  - Casi particolari: confronto già al massimo di quattro prodotti, messaggio e nessuna aggiunta; prodotto già nel confronto, nessun doppione.
  - Accettata quando: dopo l'aggiunta l'indicatore sale di uno, e al quinto prodotto compare il messaggio.
- **F10.2** Come visitatore, voglio aggiungere un prodotto al confronto dal catalogo, per non aprire ogni scheda.
  - Comportamento: sull'elenco del catalogo ogni prodotto ha "Confronta", con le stesse regole di F10.1.
  - Accettata quando: dal catalogo si aggiunge un prodotto e lo si ritrova nel confronto.
- **F10.3** Come visitatore, voglio togliere un prodotto dal confronto, per restringere la scelta.
  - Comportamento: dal confronto tocca "Togli" su un prodotto; sparisce e l'indicatore scende.
  - Casi particolari: ultimo prodotto tolto, il confronto mostra "Nessun prodotto da confrontare".
  - Accettata quando: dopo aver tolto un prodotto non compare più e l'indicatore scende di uno.

### F11 Confronto

Lo usano i visitatori.

- **F11.1** Come visitatore, voglio vedere le caratteristiche affiancate, per confrontarle a colpo d'occhio.
  - Comportamento: il confronto mostra una colonna per prodotto e una riga per caratteristica.
  - Casi particolari: caratteristica mancante in un prodotto, cella con il trattino.
  - Accettata quando: tre prodotti di prova compaiono affiancati con le stesse caratteristiche.
- **F11.2** Come visitatore, voglio evidenziare solo le differenze, per capire cosa cambia tra i prodotti.
  - Comportamento: attivando "Solo differenze" il confronto nasconde le caratteristiche uguali in tutti i prodotti.
  - Casi particolari: nessuna differenza, messaggio "I prodotti hanno le stesse caratteristiche".
  - Accettata quando: con tre prodotti di prova che differiscono in due caratteristiche, attivando l'opzione restano solo due righe.
- **F11.3** Come visitatore, voglio vedere nel confronto solo i prodotti disponibili subito, per non scegliere qualcosa che non posso avere.
  - Comportamento: attivando "Solo disponibili subito" il confronto nasconde i prodotti ordinabili o esauriti.
  - Casi particolari: nessun prodotto disponibile subito, messaggio e possibilità di disattivare l'opzione.
  - Accettata quando: con due prodotti disponibili e uno esaurito, attivando l'opzione ne restano due.

### F12 Condivisione e acquisto dal comparatore

Lo usano i visitatori.

- **F12.1** Come visitatore, voglio condividere il confronto con un link, per chiedere un parere.
  - Comportamento: tocca "Condividi"; ottiene un indirizzo che apre lo stesso confronto a chiunque lo riceva.
  - Casi particolari: prodotto tolto dal catalogo dopo la condivisione, nel confronto compare "Non più disponibile".
  - Accettata quando: l'indirizzo copiato, aperto in una finestra privata, mostra gli stessi prodotti.
- **F12.2** Come visitatore, voglio mettere nel carrello un prodotto dal confronto, per acquistare senza tornare alla scheda.
  - Comportamento: sotto ogni prodotto c'è "Aggiungi al carrello", con le stesse regole di F3.1.
  - Casi particolari: prodotto esaurito, il pulsante non è attivo.
  - Accettata quando: dal confronto si aggiunge un prodotto e lo si ritrova nel carrello.

## 5. Schermate e navigazione

Catalogo, scheda prodotto, carrello, indirizzo di spedizione, riepilogo del pagamento, pagamento, conferma dell'ordine, area cliente (ordini, indirizzi, lista dei desideri), confronto. Dal catalogo si apre la scheda; dalla scheda e dal catalogo si aggiunge al carrello e al confronto; dal carrello si passa all'indirizzo, poi al riepilogo e al pagamento.

Nuove per i rivenditori:

- **S1 Accesso rivenditore.** Nome utente, password, "Entra", messaggio di errore.
- **S2 Pagina del rivenditore.** Nome del rivenditore, link al catalogo, "Carica un ordine", elenco degli ordini.
- **S3 Catalogo e scheda con i prezzi del rivenditore.** Come le schermate esistenti, con il prezzo del listino.
- **S4 Carica un ordine.** Scelta del file, righe valide e segnalate, totale, "Conferma ordine".
- **S5 Collegamento rivenditore-accesso e listini.** Nel gestionale, come le schermate esistenti.

Il rivenditore, dopo l'accesso, parte dalla propria pagina. I wireframe e i mockup sono nella cartella delle lavorazioni 96 (carrello e pagamento), 100 (confronto) e 107 (area dei rivenditori).

## 6. Dati gestiti

Prodotti con prezzo e disponibilità, carrelli, ordini, clienti con indirizzi, lista dei desideri. Per i rivenditori: collegamento tra accesso e anagrafica, listino di ogni rivenditore (un prezzo per prodotto), ordini grandi. Il confronto non si conserva: dura finché il visitatore lo usa o finché il link condiviso è valido.

## 7. Requisiti generali

Funziona sui browser correnti di computer, tablet e telefono. Lingua italiana. Gli indirizzi email dei clienti si usano solo per le comunicazioni sull'ordine. Il sito invia al cliente la conferma dell'ordine. Un ordine grande non invia conferma di pagamento, perché non c'è pagamento online.

## 8. Fuori ambito

Gestionale (strumento interno, salvo F6.2 e F7.3), modulo di contatto, pagamento con bonifico (F9) e download dei listini in Excel (F13): secondo progetto. Ordini ricorrenti dei rivenditori (richiesta V2 di Diego, rinviata da Franco al secondo progetto il 7 gennaio 2027).

## 9. Tracciabilità

Proposta del sito: catalogo (F1), scheda (F2), carrello (F3), pagamento (F4), area cliente (F5). Proposta del comparatore: selezione (F10), confronto (F11), condivisione e acquisto (F12).

Ticket 103: F3.4 (ordine di calcolo di sconto e IVA).

Proposta di soluzione del progetto 107, confermata: accesso (F6.1, F6.2), prezzi per rivenditore (F7.1, F7.2, F7.3), ordini grandi (F8.1, F8.2).

Variazione V1 del progetto 107: preventivo in PDF (F8.3).

I codici F9 e da F13 in poi sono assegnati ai punti del secondo progetto, a titolo.

## 10. Domande aperte

Nessuna ancora aperta. Con risposta, dalla Proposta del progetto 107: D1, un prezzo per ogni prodotto e per ogni rivenditore (F7); D2, i file dei listini li consegna il responsabile commerciale (F7.3); D3, il responsabile commerciale corregge l'anagrafica (F6.2); D4, il rivenditore vede solo il proprio listino (F7.1); D5, il carrello si svuota dopo 90 giorni (F3.3, corretta); D6, ordini grandi senza pagamento online (F8.1); D7, bonifico e download dei listini nel secondo progetto; D8, conferma dei referenti operativi.

## 11. Modifiche rispetto alla versione precedente

- v1.6 (2027-02-26): aggiunta F8.3 Preventivo in PDF. Origine: variazione V1 del progetto 107, approvata da Franco per iscritto il 2026-12-22, entrata in sviluppo nello sprint 11. Codici aggiunti: F8.3. Altri lavori toccati: nessuno. Il comparatore (lavorazione 100) è stato controllato senza cambiamenti; per i ticket 101 e 103 i casi di prova del collaudo hanno coperto il totale del carrello (F4.2) e la regola dello sconto (F3.4).
- v1.5 (bozza inviata il 2026-11-20, confermata da Franco il 2026-11-30): aggiunte F6, F7 e F8, i termini dei rivenditori nel glossario e il tipo di utente rivenditore. F3.3: il carrello si svuota dopo 90 giorni (era 30), risposta D5 di Franco del 9 novembre. Origine: progetto 107. Codici modificati: F3.3; nuovi F6.1, F6.2, F7.1, F7.2, F7.3, F8.1, F8.2.
- v1.4 (2026-10-21): aggiunta F3.4 e il termine "Codice sconto" nel glossario. Origine: ticket 103.
- v1.3 (2026-09-25): F10, F11 e F12 confermate nella Proposta del comparatore (lavorazione 100).
- v1.2: carrello e pagamento rifatti (lavorazione 96, in produzione dal 14 settembre 2026).
