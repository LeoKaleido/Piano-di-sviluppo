# Manuale del prodotto, Lumera Arredi, applicazione per gli showroom

Sistema: applicazione per tablet per i consulenti degli showroom. Data: 2027-03-22. Versione 1.1, aggiornata con la variazione V1, approvata da Franco il 22 marzo 2027.

## 1. Scopo e ambito

L'applicazione permette ai consulenti degli showroom di Lumera di gestire gli appuntamenti, preparare e inviare proposte ai clienti e trasformarle in ordini, anche senza connessione. Questa versione descrive per intero la prima release. La seconda release (pagamento, firma, riepilogo delle vendite) è descritta solo a livello di funzionalità.

## 2. Glossario

- **Consulente.** Chi lavora in uno showroom e segue i clienti.
- **Responsabile showroom.** Il consulente che coordina uno showroom.
- **Proposta.** L'offerta per il cliente con prodotti, quantità, prezzo, sconto e totale con IVA. Sostituisce il "preventivo" della carta.
- **Ordine.** La proposta confermata, che arriva nel gestionale.
- **Showroom.** Milano, Torino, Bologna e Verona.

## 3. Tipi di utente e permessi

- **Consulente.** Vede e modifica agenda, clienti e proposte del proprio showroom.
- **Responsabile showroom.** Come il consulente, e in più vede gli appuntamenti dei consulenti del proprio showroom.
- Nessuno vede i dati di un altro showroom.

## 4. Funzionalità

### F1 Accesso

- **F1.1** Come consulente, voglio accedere con le mie credenziali, per usare l'applicazione.
  - Situazione di partenza: il consulente ha un'utenza attiva.
  - Comportamento: inserisce nome utente e password; il sistema apre l'agenda del giorno.
  - Casi particolari: credenziali errate, messaggio "Credenziali non valide" senza dire quale dato è sbagliato; dopo cinque tentativi sbagliati l'utenza è bloccata per quindici minuti, con messaggio; senza connessione, l'accesso riesce solo se il consulente è già entrato sullo stesso tablet nei sette giorni precedenti.
  - Accettata quando: un consulente con utenza valida entra e vede la propria agenda, e con credenziali errate vede il messaggio e non entra.
- **F1.2** Come consulente, voglio vedere solo i dati del mio showroom, per non confondermi con quelli degli altri.
  - Situazione di partenza: il consulente è entrato e appartiene a uno showroom.
  - Comportamento: agenda, clienti, proposte e ordini mostrano solo i dati dello showroom del consulente. Il responsabile showroom vede in più gli appuntamenti dei consulenti del proprio showroom (F2.4), mai quelli di altri showroom.
  - Casi particolari: ricerca di un cliente di un altro showroom, nessun risultato; indirizzo diretto a un dato di un altro showroom, messaggio "Dato non disponibile".
  - Accettata quando: due consulenti di showroom diversi, con clienti di prova diversi, non vedono mai i dati dell'altro.

### F2 Agenda

- **F2.1** Come consulente, voglio vedere gli appuntamenti del giorno, per sapere chi aspetto.
  - Situazione di partenza: il consulente è entrato.
  - Comportamento: l'agenda mostra gli appuntamenti del giorno in ordine di ora, con ora, nome e telefono del cliente, motivo e stato.
  - Casi particolari: nessun appuntamento, messaggio "Nessun appuntamento per oggi"; errore di caricamento, messaggio e ultimi dati salvati sul tablet; senza connessione, l'agenda mostra i dati salvati e segnala "Senza connessione".
  - Accettata quando: i due appuntamenti di prova del giorno compaiono in ordine di ora, con il telefono del cliente, e senza appuntamenti compare il messaggio.
- **F2.2** Come consulente, voglio fissare un appuntamento, per non dimenticarlo.
  - Situazione di partenza: il consulente è nell'agenda.
  - Comportamento: sceglie cliente, giorno, ora, durata (30, 60 o 90 minuti) e motivo; il sistema lo aggiunge all'agenda.
  - Casi particolari: fascia già occupata, messaggio e nessun appuntamento creato; cliente non registrato, il consulente può registrarlo (F3.2).
  - Accettata quando: un appuntamento di 60 minuti compare nell'agenda, e una fascia occupata non è prenotabile.
- **F2.3** Come consulente, voglio spostare o annullare un appuntamento, per seguire i cambi del cliente.
  - Situazione di partenza: esiste un appuntamento futuro del consulente.
  - Comportamento: sceglie "Sposta" e indica nuovo giorno e ora, oppure "Annulla" e conferma; l'agenda si aggiorna e la vecchia fascia torna libera. Nessun avviso automatico al cliente.
  - Casi particolari: nuova fascia già occupata, messaggio e nessuno spostamento; appuntamento già passato, non modificabile.
  - Accettata quando: un appuntamento spostato compare nella nuova fascia e libera la vecchia, e uno annullato non compare più.
- **F2.4** Come responsabile showroom, voglio vedere gli appuntamenti dei miei consulenti, per organizzare il lavoro.
  - Situazione di partenza: il responsabile showroom è entrato.
  - Comportamento: sceglie un giorno e vede gli appuntamenti di tutti i consulenti del proprio showroom, divisi per consulente e in ordine di ora.
  - Casi particolari: nessun appuntamento nel giorno, messaggio "Nessun appuntamento"; un consulente che non è responsabile non vede questa schermata.
  - Accettata quando: il responsabile di prova vede gli appuntamenti dei due consulenti del proprio showroom, e un consulente semplice non può aprire la schermata.
- **F2.5** Come consulente, voglio che il cliente riceva un SMS di promemoria il giorno prima dell'appuntamento, per ridurre le assenze.
  - Situazione di partenza: l'appuntamento è fissato e il cliente ha un numero di telefono mobile registrato.
  - Comportamento: il giorno prima dell'appuntamento il cliente riceve un SMS con ora e showroom.
  - Casi particolari: appuntamento annullato prima dell'invio, nessun SMS; appuntamento spostato, l'SMS parte per la nuova data; cliente senza numero valido, nessun SMS e segnalazione al consulente; appuntamento fissato il giorno stesso o il giorno prima, nessun SMS.
  - Accettata quando: il giorno prima di un appuntamento di prova il cliente riceve l'SMS con ora e showroom.

### F3 Clienti

- **F3.1** Come consulente, voglio cercare un cliente, per ritrovare History and decision.
  - Situazione di partenza: il consulente è entrato.
  - Comportamento: scrive nome o telefono; l'elenco mostra i clienti del proprio showroom che corrispondono, con nome, telefono e data dell'ultima proposta.
  - Casi particolari: nessun risultato, messaggio "Nessun cliente trovato" con il pulsante per registrarlo (F3.2); ricerca vuota, elenco dei clienti più recenti.
  - Accettata quando: cercando un nome di prova compare il cliente giusto, e un nome inesistente mostra il messaggio.
- **F3.2** Come consulente, voglio registrare un cliente con il suo consenso, per poterlo contattare.
  - Situazione di partenza: il consulente è entrato.
  - Comportamento: inserisce nome, telefono, email (facoltativa) e conferma che il cliente ha dato il consenso al trattamento dei dati dopo aver letto l'informativa; il sistema registra il cliente con la data del consenso.
  - Casi particolari: consenso non dato, il cliente non si registra; telefono già presente nello showroom, messaggio con il cliente esistente e nessun doppione; nome o telefono mancanti, messaggio sul campo.
  - Accettata quando: un cliente con consenso compare nella ricerca con la data del consenso, e senza consenso non si registra.
- **F3.3** Come consulente, voglio vedere le proposte di un cliente, per ricordare cosa gli ho proposto.
  - Situazione di partenza: il consulente ha aperto la scheda di un cliente.
  - Comportamento: la scheda mostra le proposte del cliente dalla più recente, con data, totale e stato (bozza, inviata, trasformata in ordine).
  - Casi particolari: nessuna proposta, messaggio "Nessuna proposta"; proposta di un altro consulente dello stesso showroom, visibile.
  - Accettata quando: un cliente di prova con due proposte le vede in ordine di data con lo stato giusto.

### F4 Proposte

- **F4.1** Come consulente, voglio comporre una proposta scegliendo prodotti e quantità, per preparare l'offerta durante la visita.
  - Situazione di partenza: il consulente ha scelto un cliente.
  - Comportamento: cerca un prodotto del catalogo, lo aggiunge con la quantità; ogni riga mostra foto, nome, quantità, prezzo e disponibilità.
  - Casi particolari: prodotto esaurito, segnalato e aggiungibile solo come ordinabile se lo è; quantità zero, riga non aggiunta; proposta vuota, non si può inviare.
  - Accettata quando: una proposta con due prodotti mostra le due righe con prezzo e disponibilità, e il totale.
- **F4.2** Come consulente, voglio applicare uno sconto fino al 10% e non oltre, per chiudere la trattativa nei limiti consentiti.
  - Comportamento: il consulente inserisce lo sconto in percentuale; il totale si aggiorna.
  - Casi particolari: sconto oltre il 10%, messaggio "Sconto oltre il 10%: la proposta non può proseguire. Contattare il titolare." e nessun invio; sconto negativo non accettato.
  - Accettata quando: con sconto 5% il totale è ridotto del 5%, e con sconto 11% compare il messaggio e la proposta non si invia.
- **F4.3** Come consulente, voglio vedere il totale con l'IVA, per dirlo al cliente.
  - Situazione di partenza: la proposta ha almeno una riga.
  - Comportamento: la proposta mostra il totale delle righe, lo sconto, il totale senza IVA, l'IVA e il totale con IVA, aggiornati a ogni modifica.
  - Casi particolari: proposta vuota, totale zero e invio non possibile; prodotti con aliquote IVA diverse, l'IVA è calcolata riga per riga.
  - Accettata quando: con un prodotto da 100 euro più IVA al 22% e uno sconto del 5%, il totale con IVA è 115,90 euro.
- **F4.4** Come consulente, voglio inviare la proposta al cliente per email, per non ricopiarla.
  - Comportamento: il consulente tocca "Invia per email"; il cliente riceve un messaggio con le righe, il prezzo, lo sconto, il totale con IVA, il nome del consulente e il telefono dello showroom.
  - Casi particolari: cliente senza email, messaggio e nessun invio; senza connessione, la proposta resta in coda e parte alla prima connessione, con segnalazione; invio fallito, messaggio e proposta ancora inviabile.
  - Accettata quando: dopo l'invio il cliente di prova riceve un'email con righe, sconto, totale, nome del consulente e telefono dello showroom, entro un minuto.
- **F4.5** Come consulente, voglio duplicare una proposta, per prepararne una simile.
  - Situazione di partenza: esiste una proposta del proprio showroom.
  - Comportamento: dalla proposta tocca "Duplica"; il sistema crea una nuova bozza con le stesse righe e lo stesso sconto, e chiede di scegliere il cliente. La copia non eredita lo stato "inviata" né l'ordine.
  - Casi particolari: prodotto non più nel catalogo, riga segnalata e non copiata; sconto copiato oltre il 10% (impossibile in origine), non ammesso.
  - Accettata quando: la copia di una proposta con due righe e sconto 5% ha le stesse due righe e lo stesso sconto, è una bozza, e la proposta originale non cambia.

### F5 Ordini

- **F5.1** Come consulente, voglio trasformare una proposta confermata in ordine, per non ricopiarla nel gestionale.
  - Comportamento: dalla proposta tocca "Trasforma in ordine"; il sistema crea l'ordine con gli stessi prodotti, quantità, sconto e totale, e lo rende visibile a Marta nel gestionale.
  - Casi particolari: proposta già trasformata, messaggio e nessun doppio ordine; senza connessione, l'ordine resta in coda e viene creato alla prima connessione.
  - Accettata quando: dopo la trasformazione l'ordine compare nel gestionale con lo stesso totale della proposta, una sola volta.
- **F5.2** Come consulente, voglio vedere lo stato dell'ordine, per rispondere al cliente.
  - Situazione di partenza: la proposta è stata trasformata in ordine.
  - Comportamento: la scheda della proposta e l'elenco degli ordini mostrano lo stato dell'ordine, quello stesso che Marta vede nel gestionale.
  - Casi particolari: ordine ancora in coda perché senza connessione, stato "In coda"; stato non disponibile per un errore di caricamento, messaggio e ultimo stato salvato.
  - Accettata quando: dopo che Marta cambia lo stato di un ordine di prova nel gestionale, il consulente lo vede aggiornato entro un minuto.

### F6 Uso senza connessione

- **F6.1** Come consulente, voglio lavorare anche senza connessione, per non fermarmi nello showroom con poco segnale.
  - Comportamento: senza rete l'applicazione mostra una segnalazione, permette di consultare agenda e clienti già scaricati e di preparare proposte e appuntamenti; le azioni si sincronizzano alla prima connessione.
  - Casi particolari: due modifiche contrastanti dello stesso appuntamento, vale la più recente e il consulente è avvisato; sincronizzazione fallita, nuovo tentativo e segnalazione.
  - Accettata quando: con il tablet senza rete si crea una proposta e un appuntamento, e dopo il ritorno della rete compaiono entrambi anche su un secondo tablet.

### Seconda release, a livello di funzionalità

- **F7.1** Come consulente, voglio incassare l'acconto sul tablet, per chiudere l'ordine nello showroom. (Seconda release.)
- **F8.1** Come cliente, voglio firmare la proposta sul tablet, per confermarla subito. (Seconda release.)
- **F9.1** Come responsabile showroom, voglio vedere il riepilogo delle vendite del mio showroom, per controllare l'andamento. (Seconda release.)

## 5. Schermate e navigazione

- **S1 Agenda del giorno.** Appuntamenti del giorno, pulsante per fissarne uno nuovo, segnalazione "Senza connessione" quando serve. Da qui si apre un appuntamento (S2) o un cliente (S4).
- **S2 Nuovo appuntamento.** Scelta di cliente, giorno, ora, durata (30, 60 o 90 minuti) e motivo.
- **S3 Proposta.** Righe con foto, nome, quantità, prezzo e disponibilità; sconto; totali; pulsanti "Invia per email", "Duplica" e "Trasforma in ordine".
- **S4 Cliente.** Dati del cliente, consenso, proposte e appuntamenti.
- **S5 Invio della proposta.** Anteprima dell'email e conferma di invio.
- **S6 Ordine.** Righe, totale e stato dell'ordine.

Dall'agenda si arriva ai clienti e alle proposte; dalla proposta all'invio e all'ordine. Prototipo navigabile v2 e mockup in PDF nella knowledge base, approvati dal cliente (riepilogo scritto in archivio).

## 6. Dati gestiti

Appuntamenti (cliente, consulente, giorno, ora, durata, motivo, stato), clienti (nome, telefono, email, consenso e data del consenso, showroom), proposte (righe, sconto, totali, stato), ordini (proposta di origine, stato). Ogni dato appartiene a uno showroom.

## 7. Requisiti generali

Tablet di un solo modello scelto da Lumera. Italiano. Accesso con credenziali. Dati dei clienti trattati con consenso e informativa. L'applicazione invia email di proposta ai clienti e SMS di promemoria degli appuntamenti. Uso senza connessione per agenda, clienti e proposte, con sincronizzazione al ritorno della rete (F6.1).

## 8. Fuori ambito

Pagamento, firma e riepilogo delle vendite (seconda release). Approvazione degli sconti oltre il 10% dentro l'applicazione. Uso da parte dei clienti finali.

## 9. Tracciabilità

Richiesta di Franco: agenda (F2), proposta (F4), invio per email (F4.4), ordine (F5), tablet senza rete (F6). Bisogno di riservatezza dei dati (F1.2, F3.2). Clienti dello showroom (F3). Accesso (F1). Seconda release (F7, F8, F9). Variazione V1 del prodotto 110: promemoria per SMS (F2.5).

## 10. Domande aperte

Nessuna.

## 11. Modifiche rispetto alla versione precedente

- v1.1 (22 marzo 2027, variazione V1). Nuova story F2.5, promemoria per SMS il giorno prima dell'appuntamento. Origine: variazione V1 del prodotto 110, approvata da Franco per iscritto il 22 marzo.
- v1.0 (14 gennaio 2027): conferma di Franco a voce, riepilogo scritto inviato lo stesso giorno. Nessuna domanda aperta.
- v0.2 (12 gennaio 2027), dopo le correzioni di Franco, che sono modifiche perché il Manuale non era confermato: (1) F2.2, la durata dell'appuntamento si sceglie tra 30, 60 e 90 minuti; (2) F4.4, l'email della proposta riporta il nome del consulente e il telefono dello showroom.
- v0.1 (inviata il 23 dicembre 2026). Prima stesura.
