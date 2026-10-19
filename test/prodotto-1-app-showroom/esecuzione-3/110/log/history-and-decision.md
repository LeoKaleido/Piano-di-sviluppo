# History and decision, prodotto 110

La storia e le decisioni della lavorazione, in gruppi per fase. Ogni voce ha un titolo con la data e il tipo, e campi etichettati. Le variazioni portano il codice (V1, V2) e lo stato; le decisioni il codice (DEC1, DEC2). I messaggi inviati al cliente e le sue risposte stanno in `source`.

## Kickoff

### 2026-10-12, Altro
- **Fase.** valutazione
- **Cosa.** Richiesta di Franco su osTicket (`source/2026-10-12-richiesta.md`).
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2026-10-13, Persone
- **Fase.** valutazione
- **Cosa.** Assegnazione al product lead 1 con chi gestisce il team; chi analizza non assegna l'urgenza. Stima a occhio 150 giorni lavorativi con tre o quattro sviluppatori, interna, di una decina di minuti; tempo del kickoff 15 giorni lavorativi, fino al 2 novembre 2026.
- **Effetto.** Nessuno.
- **Riferimenti.** DEC1, DEC2.

### 2026-10-13, Decisione DEC1: Responsabile e categoria
- **Fase.** valutazione
- **Cosa.** Il lavoro è un prodotto; responsabile il product lead 1. Nessuna urgenza.
- **Chi ha deciso.** Chi analizza (Leonardo) con chi gestisce il team.
- **Motivo.** Il sistema non esiste ancora; il product lead 1 è libero.
- **Alternative scartate.** Nessuna.
- **Effetto.** Parte il kickoff.
- **Riferimenti.** Richiesta di Franco del 12 ottobre.

### 2026-10-13, Decisione DEC2: Tempo del kickoff
- **Fase.** valutazione
- **Cosa.** Tempo del kickoff 15 giorni lavorativi, fino al 2 novembre 2026.
- **Chi ha deciso.** Responsabile.
- **Motivo.** 10% della stima a occhio di 150 giorni lavorativi.
- **Alternative scartate.** Nessuna.
- **Effetto.** La prima versione della Proposta è inviata il 2 novembre.
- **Riferimenti.** Voce Stato di partenza.

### 2026-10-14, Conferma
- **Fase.** valutazione
- **Cosa.** Franco indica sé stesso come referente; chiede in più pagamento sul tablet, firma e riepilogo delle vendite (richieste, non decisioni).
- **Effetto.** Nessuno.
- **Riferimenti.** DEC3, `source/2026-10-14-sintesi.md`.

### 2026-10-14, Decisione DEC3: Referente
- **Fase.** valutazione
- **Cosa.** Franco è il referente. Marta, Elena e Paolo non decidono.
- **Chi ha deciso.** Franco (dichiarato da lui).
- **Motivo.** "Decido io."
- **Alternative scartate.** Nessuna.
- **Effetto.** Solo le sue approvazioni valgono.
- **Riferimenti.** Sintesi dell'incontro del 14 ottobre.

### 2026-10-20, Altro
- **Fase.** valutazione
- **Cosa.** Incontro con Elena e Paolo (`source/2026-10-20-sintesi.md`); Torino non disponibile prima di novembre.
- **Effetto.** Ciò che non è verificato diventa domanda aperta.
- **Riferimenti.** Nessuno.

### 2026-10-21, Stato di partenza
- **Fase.** valutazione
- **Cosa.** Contesto, utilizzatori, sistemi, vincoli, fattibilità, incognite e fonti.
- **Effetto.** Nessuno.
- **Riferimenti.** DEC1, DEC3.
- **Dettagli.**
  - Decisioni dell'analisi: prodotto (il sistema non esiste), responsabile product lead 1, referente Franco (Elena e Paolo sono utilizzatori e non decidono). Scadenza del cliente 13 settembre 2027: fattibile con poco margine, provvisoria finché non sono verificati Torino, Bologna e le interfacce degli ordini.
  - Lavori aperti (verificato nei loro documenti): comparatore (100), nessuna sovrapposizione, ma un ramo non rilasciato modifica il modulo `disponibilita` che l'applicazione leggerà; i due sviluppatori sono occupati fino al 27 novembre. Ticket 101 e 102: nessuna sovrapposizione. Ticket 103: cambia il calcolo dello sconto di importo fisso nel modulo `prezzi`, pubblicazione il 20 ottobre. Garanzia del pagamento (96, fino al 26 ottobre): riguarda la seconda release.
  - Sistemi del cliente: sito, `lumera-api` (catalogo, `prezzi`, `disponibilita`, ordini), gestionale (ordini, clienti, ruoli multipli), servizio esterno di invio email, calendario condiviso e foglio Excel dei clienti. Codice dell'applicazione: non esiste. Le interfacce da cui dipende sono state lette da chi conosce il sistema: gli ordini accettano solo prezzi calcolati dal modulo `prezzi` e non prevedono lo sconto del consulente (letto nel codice, non provato).
  - Contesto: nove consulenti (Milano 4, Torino 2, Bologna 3); agende su carta o calendario condiviso; proposte in Excel con listino stampato; Marta ricopia gli ordini, circa un'ora al giorno (riferito). Sconti fino al 10% senza autorizzazione, oltre si chiama Franco (riferito da Elena, non confermato da Franco). Circa quaranta proposte a settimana a Milano.
  - Vincoli: privacy (consenso mai raccolto per iscritto, informativa da scrivere a cura del cliente), connessione debole a Bologna (riferita), tablet non scelti, identità grafica solo del sito, persone occupate fino al 27 novembre.
  - Fattibilità per punto: agenda, proposta con sconto fino al 10%, invio per email (con dominio dedicato), ordine (compromesso: gli ordini vanno estesi, incognita), uso senza rete (costo alto sulla sincronizzazione); pagamento, firma e riepilogo delle vendite fattibili ma da collocare in una release successiva.
  - Incognite: estensione degli ordini senza toccare il gestionale (spike nella prima milestone), connessione di Bologna (misura sul posto), Torino e Bologna (incontri), accesso dei consulenti, qualità dei clienti in Excel.
  - Domande per il cliente: sconti oltre il 10%, modello di tablet, disponibilità di Torino e Bologna, chi scrive l'informativa, chi pulisce i doppioni, indirizzo di posta dedicato.
  - Fonti: richiesta, incontri del 14 e del 20 ottobre, base dei sistemi, lavorazioni 96, 100, 101, 102, 103.

### 2026-10-22, Fase completata
- **Fase.** stima
- **Cosa.** Stima precisa dalla richiesta, dall'analisi del contesto e dai Report di progetto 96 e 58.
- **Effetto.** Giorno 8 di 15 del tempo del kickoff.
- **Riferimenti.** Nessuno.
- **Dettagli.**
  - Prima release: da 110 a 130 giorni lavorativi, più probabile 120 (circa 5 mesi e mezzo), con quattro sviluppatori disponibili da febbraio 2027 (circa 105 ore a settimana prima del buffer di sprint). Affidabilità media: poggia sull'elenco delle funzioni (circa venti story), sulle interfacce che esistono e su due lavori passati, non sulle story scritte. Seconda release non stimata: si stima dopo la conferma del Manuale.
  - Origine: Report di progetto 96 (pianificati 60 giorni lavorativi, reali 65, più 8%; 700 ore stimate, 735 reali) e 58 (pianificati 100, reali 110, più 10%; 1.500 ore, 1.610 reali; integrazione con dati esistenti più sporchi del previsto).
  - Fattori che alzano la stima: dati dei clienti in Excel con doppioni, uso senza rete, sconto del consulente non previsto dagli ordini, squadra nuova su un prodotto da zero. Fattori che la abbassano: catalogo, prezzi e invio email esistono già.
  - Finestra di rilascio indicativa: sviluppo dal 1 febbraio 2027 (documentazione pronta a fine gennaio, con la chiusura aziendale dal 24 dicembre al 6 gennaio e l'assenza di Franco dal 28 al 31 dicembre), lancio tra agosto e settembre 2027 con la chiusura aziendale di agosto. Scadenza fattibile con poco margine, circa una settimana.
  - Cosa fa cambiare la stima: approvazione degli sconti dentro l'applicazione, circa 10 giorni lavorativi in più; pagamento e firma nella prima release, circa 25 giorni lavorativi in più (scadenza non fattibile); la misura della connessione di Bologna.

### 2026-11-02, Fase completata
- **Fase.** proposta
- **Cosa.** Proposta v0.1 inviata (`source/2026-11-02-invio-proposta-v0.1.md`), dentro il tempo del kickoff.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2026-11-09, Richiesta
- **Fase.** proposta
- **Cosa.** Franco risponde a D1-D6 e chiede pagamento, firma e riepilogo nella prima release (`source/2026-11-09-risposta-franco.md`).
- **Effetto.** Richiesta non accolta, la prima release contiene solo ciò senza cui il prodotto non è utilizzabile; Franco conferma la divisione.
- **Riferimenti.** DEC4, DEC5.

### 2026-11-09, Decisione DEC4: Divisione in release
- **Fase.** proposta
- **Cosa.** La prima release contiene accesso, agenda, clienti, proposta, invio per email, ordine e uso senza connessione. Pagamento, firma e riepilogo delle vendite sono nella seconda.
- **Chi ha deciso.** Franco, referente, dopo la spiegazione del responsabile.
- **Motivo.** Nella prima release entra solo ciò senza cui il prodotto non è utilizzabile; il resto allungherebbe lo sviluppo di circa 25 giorni lavorativi e metterebbe a rischio la scadenza del 13 settembre 2027.
- **Alternative scartate.** Tutto nella prima release (richiesta di Franco del 9 novembre).
- **Effetto.** Stima di 120 giorni lavorativi per la prima release.
- **Riferimenti.** Proposta confermata, sintesi del 24 novembre (`source/2026-11-24-sintesi.md`).
- **Dettagli.**
  - Data: confermata il 2026-11-24.

### 2026-11-09, Decisione DEC5: Sconti oltre il 10%
- **Fase.** proposta
- **Cosa.** Gli sconti oltre il 10% sono bloccati dall'applicazione; il consulente chiama Franco come oggi.
- **Chi ha deciso.** Franco.
- **Motivo.** Mantiene la regola attuale.
- **Alternative scartate.** Approvazione dentro l'applicazione (circa due settimane in più).
- **Effetto.** Story F4.2.
- **Riferimenti.** Domanda D1.

### 2026-11-13, Fase completata
- **Fase.** proposta
- **Cosa.** Proposta v0.2 inviata (`source/2026-11-13-invio-proposta-v0.2.md`), senza domande aperte.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2026-11-24, Conferma
- **Fase.** proposta
- **Cosa.** Franco conferma a voce la Proposta v0.2; riepilogo scritto lo stesso giorno (`source/2026-11-24-riepilogo-conferma-proposta.md`).
- **Effetto.** La Proposta confermata si chiama `proposta-di-soluzione`; allineamento dei documenti con il comparatore (100) e il ticket 103.
- **Riferimenti.** DEC4.

### 2026-12-02, Richiesta
- **Fase.** prototipo e design
- **Cosa.** Sessione guidata con Elena (`source/2026-12-02-sintesi.md`); chiede il telefono del cliente in S1.
- **Effetto.** Modifica, non variazione; prototipo v2.
- **Riferimenti.** Nessuno.

### 2026-12-03, Richiesta
- **Fase.** prototipo e design
- **Cosa.** Franco chiede i pulsanti di invio e ordine in alto nella schermata della proposta (`source/2026-12-03-richiesta-schermata.md`).
- **Effetto.** Modifica, non variazione, perché il Manuale non è confermato; prototipo v2.
- **Riferimenti.** Nessuno.

### 2026-12-15, Conferma
- **Fase.** prototipo e design
- **Cosa.** Franco approva a voce prototipo v2 e mockup; riepilogo scritto lo stesso giorno (`source/2026-12-15-riepilogo-approvazione-design.md`).
- **Effetto.** Nessuno.
- **Riferimenti.** DEC6.

### 2026-12-15, Decisione DEC6: Approvazione di prototipo e mockup
- **Fase.** prototipo e design
- **Cosa.** Approvati prototipo v2 e mockup, struttura e grafica.
- **Chi ha deciso.** Franco, a voce, riepilogo scritto lo stesso giorno.
- **Motivo.** Corrispondono a ciò che voleva.
- **Alternative scartate.** Nessuna.
- **Effetto.** Si scrive il Manuale. Da qui una modifica a prototipo e mockup è una modifica fino alla conferma del Manuale.
- **Riferimenti.** Sintesi del 15 dicembre.

### 2026-12-16, Altro
- **Fase.** documentazione
- **Cosa.** Letto l'indice `ticket-chiusi.md`; la Scheda di intervento del ticket 103 (Scheda v2 e voci di Rilascio e Garanzia fino al 5 novembre) non cambia nulla nel Manuale dell'applicazione, perché l'applicazione non usa codici sconto.
- **Effetto.** Nessuno sul Manuale; da annotare nel Documento tecnico, capitolo 6.
- **Riferimenti.** Nessuno.

### 2026-12-23, Fase completata
- **Fase.** documentazione
- **Cosa.** Manuale v0.1 inviato (`source/2026-12-23-invio-manuale.md`). Franco non risponde.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-01-07, Ritardo del cliente
- **Fase.** documentazione
- **Cosa.** Sollecito scritto (`source/2027-01-07-sollecito-manuale.md`).
- **Effetto.** Documento tecnico e Piano dei SAL slittano di 4 giorni lavorativi di attesa effettiva.
- **Riferimenti.** Nessuno.

### 2027-01-12, Richiesta
- **Fase.** documentazione
- **Cosa.** Franco risponde con due correzioni (`source/2027-01-12-risposta-manuale.md`).
- **Effetto.** Modifiche, perché il Manuale non è confermato; Manuale v0.2.
- **Riferimenti.** Nessuno.

### 2027-01-14, Conferma
- **Fase.** documentazione
- **Cosa.** Manuale v0.2 confermato a voce, diventa v1.0 (`source/2027-01-14-riepilogo-conferma-manuale.md`).
- **Effetto.** Da qui ogni cambiamento è una variazione.
- **Riferimenti.** DEC7.

### 2027-01-14, Decisione DEC7: Conferma del Manuale
- **Fase.** documentazione
- **Cosa.** Manuale v0.2 confermato, diventa v1.0.
- **Chi ha deciso.** Franco, a voce, riepilogo scritto lo stesso giorno.
- **Motivo.** Corrisponde a ciò che serve.
- **Alternative scartate.** Nessuna.
- **Effetto.** Da qui ogni cambiamento è una variazione.
- **Riferimenti.** Sintesi del 14 gennaio.

### 2027-01-20, Altro
- **Fase.** documentazione
- **Cosa.** Scelte tecniche (applicazione web installabile con archiviazione locale, utenze proprie).
- **Effetto.** Nessuno.
- **Riferimenti.** DEC8.

### 2027-01-20, Decisione DEC8: Scelte tecniche
- **Fase.** documentazione
- **Cosa.** Applicazione web installabile con archiviazione locale; utenze proprie dell'applicazione.
- **Chi ha deciso.** Team lead con chi sviluppa.
- **Motivo.** Sistema operativo dei tablet non scelto; uso senza rete.
- **Alternative scartate.** Applicazione nativa; ruoli del gestionale.
- **Effetto.** Documento tecnico, capitolo 9.
- **Riferimenti.** Documento tecnico v1.0, capitolo 9.

### 2027-01-29, Fase completata
- **Fase.** documentazione
- **Cosa.** Documento tecnico v1.0, issue in ClickUp, Piano dei SAL v1 inviato (`source/2027-01-29-invio-piano-dei-sal.md`).
- **Effetto.** Stima di durata 130 giorni lavorativi, 10 sopra la Proposta; al cliente, circa 6 mesi contro 5 mesi e mezzo. Riga del ticket 103 in `ticket-chiusi.md` annotata con il codice 110. Si pianifica lo sprint 12.
- **Riferimenti.** Nessuno.

## Sviluppo

### 2027-02-12, Imprevisto
- **Fase.** sviluppo
- **Cosa.** Assenza dello sviluppatore 4 (12 ore); la spike I14 mostra che gli ordini non accettano lo sconto del consulente (24 ore in più). M1 in ritardo di 8 ore di margine.
- **Effetto.** Nessuno.
- **Riferimenti.** Nota di sprint 12 (`develop/nota-sprint-S12.md`).

### 2027-02-15, Riprogrammazione
- **Fase.** sviluppo
- **Cosa.** Chi gestisce il team sceglie di aggiungere 16 ore nello sprint 13, prese dai ticket dello sviluppatore 3.
- **Effetto.** Margine più 8 ore, milestone a rischio; nessuna data cambia, nessun avviso al cliente; Documento tecnico v1.1.
- **Riferimenti.** DEC9.
- **Dettagli.**
  - Caso: tempi, blocco tecnico (spike) e assenza breve. Ricalcolo: ore rimanenti 152 più 24 (I20 e I21), 176; capacità rimanente 168 al netto del buffer di sprint; margine meno 8; buffer di milestone iniziale 56, metà 28.
  - Leve, con l'effetto di ciascuna, senza sceglierne una: (1) spostare F2.1 a M2, 32 ore, margine più 24, ma il SAL1 perde l'agenda e serve l'approvazione del cliente (variazione media); (2) spostare la prova di uno sprint: il SAL5 passerebbe al 13 agosto, dentro la chiusura aziendale, e il lancio oltre il 13 settembre, non sostenibile; (3) aggiungere ore: servono 8 ore per arrivare a zero e 36 per tornare in linea, entro il 26 febbraio; una persona nuova rende meno nel primo sprint. Nessuna story è spostabile senza toccare una consegna.
  - Dopo la decisione: nessuna comunicazione al cliente; i ticket normali dello sviluppatore 3 per 16 ore dello sprint 13 slittano, e chi gestisce il team lo comunica a chi analizza.

### 2027-02-15, Decisione DEC9: Leva per la milestone M1 in ritardo
- **Fase.** sviluppo
- **Cosa.** Aggiungere 16 ore nello sprint 13, prese dalle ore dei ticket dello sviluppatore 3.
- **Chi ha deciso.** Chi gestisce il team.
- **Motivo.** Margine di M1 meno 8 ore dopo lo sprint 12; è la leva che non cambia nessuna data comunicata.
- **Alternative scartate.** Spostare la story F2.1; spostare la data della prova.
- **Effetto.** Margine più 8 ore (a rischio). I ticket normali dello sviluppatore 3 per 16 ore dello sprint 13 slittano.
- **Riferimenti.** Nota di sprint 12 (`develop/nota-sprint-S12.md`), voce di Riprogrammazione.

### 2027-02-26, Prova o collaudo
- **Fase.** sviluppo
- **Cosa.** Prova del SAL1 (`source/2027-02-26-invito-prova-sal1.md`); Franco non risponde.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-03-01, Prova o collaudo
- **Fase.** sviluppo
- **Cosa.** Elena prova il SAL1. Esito per story: tutte accettate tranne un difetto non bloccante in F2.1 (ordine di due appuntamenti alla stessa ora). Il silenzio di Franco non vale accettazione.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-03-03, Conferma
- **Fase.** sviluppo
- **Cosa.** Franco accetta in modo esplicito il SAL1 (`source/2027-03-03-accettazione-sal1.md`).
- **Effetto.** Nessuna data cambia.
- **Riferimenti.** Milestone report (`develop/milestone-report-SAL1.md`).

### 2027-03-15, Variazione V1
- **Fase.** sviluppo
- **Cosa.** Franco chiede un SMS di promemoria il giorno prima dell'appuntamento (`source/2027-03-15-richiesta-sms.md`). Variazione media: story nuova F2.5, 14 ore, nessuna data cambia.
- **Stato.** In valutazione
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-03-16, Variazione V1
- **Fase.** sviluppo
- **Cosa.** Comunicazione a Franco (`source/2027-03-16-comunicazione-variazione-V1.md`). Impatto: M2 da 406 a 420 ore, margine di M2 da 81,2 a 67,2 (in linea); materiale nuovo, l'account del servizio SMS entro il 26 marzo. Non entra nello sprint 15 in corso, ma nello sprint 16 dal 29 marzo.
- **Stato.** In attesa del cliente
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-03-22, Variazione V1
- **Fase.** sviluppo
- **Cosa.** Franco approva per iscritto (`source/2027-03-22-approvazione-variazione.md`).
- **Stato.** Approvata
- **Effetto.** Manuale v1.1, Documento tecnico v1.2 e Piano dei SAL v2.
- **Riferimenti.** DEC10.

### 2027-03-22, Decisione DEC10: Variazione V1
- **Fase.** sviluppo
- **Cosa.** Approvata la variazione V1 (SMS di promemoria), 14 ore, nello sprint 16.
- **Chi ha deciso.** Franco, per iscritto.
- **Motivo.** Riduce le assenze agli appuntamenti.
- **Alternative scartate.** Nessuna.
- **Effetto.** M2 sale a 420 ore; nessuna data cambia.
- **Riferimenti.** voci della variazione.

### 2027-04-12, Variazione V2
- **Fase.** sviluppo
- **Cosa.** Franco chiede l'applicazione sui telefoni dei clienti (`source/2027-04-12-richiesta-telefoni.md`). Variazione grande: cambia ciò che la Proposta aveva stabilito; serve una proposta integrativa.
- **Stato.** In valutazione
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-04-19, Variazione V2
- **Fase.** sviluppo
- **Cosa.** Franco rinuncia dopo la stima d'impatto di alcuni mesi in più (`source/2027-04-14-comunicazione-variazione-V2.md`, `source/2027-04-19-rinuncia-variazione-V2.md`).
- **Stato.** Rifiutata
- **Effetto.** Nessuno.
- **Riferimenti.** DEC11.

### 2027-04-19, Decisione DEC11: Variazione V2 rifiutata
- **Fase.** sviluppo
- **Cosa.** V2 (applicazione per i clienti) non procede.
- **Chi ha deciso.** Franco, dopo la stima d'impatto.
- **Motivo.** Alcuni mesi di lavoro in più.
- **Alternative scartate.** Proposta integrativa.
- **Effetto.** Nessuno.
- **Riferimenti.** voci della variazione.

### 2027-07-30, Fase completata
- **Fase.** sviluppo
- **Cosa.** Tutte le milestone accettate alle date del Piano dei SAL (M1 accettata il 3 marzo contro la prova del 26 febbraio). Ore reali 1.872 su 1.792 di issue.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

## Rilascio

### 2027-08-06, Prova o collaudo
- **Fase.** collaudo
- **Cosa.** Collaudo finale dal 2 al 6 agosto sullo staging, con percorsi che attraversano più milestone, integrazione con gestionale e catalogo, copia fedele dei dati, sul tablet (`source/2027-08-06-verbale-prova-finale.md`). Esito: accettata con un difetto non bloccante in F6.1, correzione entro il 3 settembre (`source/2027-08-06-accettazione-prova-finale.md`).
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-08-24, Rilascio
- **Fase.** preparazione
- **Cosa.** Passi tecnici del lancio, prima pubblicazione del sistema. Piano di lancio v1 inviato.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.
- **Dettagli.**
  - Passi: copia di sicurezza del database di `lumera-api` (incaricato della pubblicazione); pubblicare `lumera-api` con gli ordini estesi, verificando un ordine del sito e un ordine di prova con sconto del consulente con lo stesso totale della proposta; pubblicare `lumera-showroom` in produzione, verificando risposta, accesso con utenza di prova e agenda; creare le utenze dei quattro consulenti di Milano; caricare il foglio dei clienti dopo la consegna di Elena (righe uguali al file, nessun doppione); verificare l'invio di una proposta di prova a un indirizzo interno dall'indirizzo dedicato.
  - Ritorno alla versione precedente: se l'applicazione non è utilizzabile si disattivano le utenze e si lascia in uso la carta; decide il product lead con Franco; i dati scritti restano nel database. Contatti: product lead, sistemista 1, sistemista 2.
  - Controlli da fare prima del lancio: monitoraggio dei messaggi di errore dell'invio email; ritorno provato sull'ambiente di prova. Nessuna issue aperta che blocchi il lancio. Da verificare: che il dominio dell'indirizzo dedicato abbia le autorizzazioni di invio (verifica non fatta in preparazione).

### 2027-08-25, Conferma
- **Fase.** preparazione
- **Cosa.** Franco approva il Piano di lancio v1 (`source/2027-08-25-approvazione-piano-di-lancio.md`).
- **Effetto.** Nessuno.
- **Riferimenti.** DEC12.

### 2027-08-25, Decisione DEC12: Piano di lancio
- **Fase.** preparazione
- **Cosa.** Piano di lancio v1 approvato; v2 sposta il lancio di tre giorni lavorativi.
- **Chi ha deciso.** Franco; lo spostamento deriva dal ritardo dell'informativa.
- **Motivo.** Informativa sulla privacy arrivata il 1 settembre invece del 27 agosto.
- **Alternative scartate.** Lanciare senza informativa (non consentito).
- **Effetto.** Apertura a tutti il 13 settembre, in coincidenza con Verona.
- **Riferimenti.** Piano di lancio v1 e v2 (`claude/piano-di-lancio-v1.md`, `claude/piano-di-lancio-v2.md`).
- **Dettagli.**
  - Data: aggiornata il 2027-09-01.

### 2027-09-01, Ritardo del cliente
- **Fase.** preparazione
- **Cosa.** Informativa sulla privacy arrivata con 3 giorni lavorativi di ritardo (`source/2027-09-01-comunicazione-slittamento-lancio.md`).
- **Effetto.** Lancio più tre giorni; Piano di lancio v2.
- **Riferimenti.** DEC12.

### 2027-09-09, Rilascio
- **Fase.** pubblicazione
- **Cosa.** Lancio sul gruppo ristretto (Milano).
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-09-10, Imprevisto
- **Fase.** pubblicazione
- **Cosa.** Proposte scartate da alcuni provider (dominio mittente senza autorizzazioni; `source/2027-09-10-avviso-problema-lancio.md`).
- **Effetto.** Il prodotto resta sul gruppo ristretto.
- **Riferimenti.** DEC13.

### 2027-09-10, Decisione DEC13: Gruppo ristretto dopo il problema delle email
- **Fase.** pubblicazione
- **Cosa.** Il prodotto resta sul gruppo ristretto fino alla correzione dell'invio.
- **Chi ha deciso.** Responsabile.
- **Motivo.** Le proposte erano scartate da alcuni provider.
- **Alternative scartate.** Aprire a tutti comunque; tornare alla carta.
- **Effetto.** Apertura a tutti il 13 settembre.
- **Riferimenti.** `source/2027-09-10-avviso-problema-lancio.md`.

### 2027-09-13, Rilascio
- **Fase.** pubblicazione
- **Cosa.** Apertura a tutti (`source/2027-09-13-avviso-produzione.md`).
- **Effetto.** Decorre la garanzia, 91 giorni fino al 13 dicembre 2027; assistenza rafforzata fino al 27 settembre.
- **Riferimenti.** Nessuno.

### 2027-09-17, Fase completata
- **Fase.** chiusura
- **Cosa.** Documenti aggiornati (Manuale v1.2, Documento tecnico v1.3 con il capitolo Pubblicazione), Report di progetto scritto (`log/report-di-progetto.md`). Il prodotto passa a regime.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

## Garanzia

### 2027-09-23, Garanzia
- **Fase.** garanzia
- **Cosa.** Segnalazione di Elena in assistenza rafforzata (`source/2027-09-23-segnalazione-garanzia.md`): email senza sconto del consulente (bug rispetto al Manuale, F4.4) e richiesta di stampa in PDF (fuori garanzia).
- **Effetto.** Nessuno.
- **Riferimenti.** DEC14.

### 2027-09-24, Garanzia
- **Fase.** garanzia
- **Cosa.** Risposta nel ticket (`source/2027-09-24-risposta-garanzia.md`).
- **Effetto.** Issue di garanzia da 4 ore per il bug; la stampa esce dalla garanzia e si valuta come ticket o come parte della seconda release.
- **Riferimenti.** Nessuno.

### 2027-09-24, Decisione DEC14: Segnalazioni del 23 settembre
- **Fase.** garanzia
- **Cosa.** L'email senza sconto è un bug in garanzia; la stampa in PDF è fuori garanzia.
- **Chi ha deciso.** Responsabile.
- **Motivo.** Il Manuale (F4.4) prevede lo sconto nell'email; la stampa non è prevista e supera 4 ore.
- **Alternative scartate.** Trattare la stampa come richiesta piccola.
- **Effetto.** Issue di garanzia da 4 ore.
- **Riferimenti.** `source/2027-09-24-risposta-garanzia.md`.
