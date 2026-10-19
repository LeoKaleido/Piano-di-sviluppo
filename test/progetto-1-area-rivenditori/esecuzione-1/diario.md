# Diario, progetto 1 (107), prova 1

Data dell'esecuzione: 2026-10-11. Piani e skill nella versione del repository a quella data. Le osservazioni hanno il codice Q-n e il tipo, riprese nell'analisi. Dove lo scenario e la base non danno un dato, è scritto.

## 5-13 ottobre 2026, valutazione e stima

- **Franco (cliente).** Apre la richiesta il 5 ottobre con la fiera del 22 febbraio.
- **Leonardo (chi analizza), nessuna skill.** Assegna l'urgenza (normale), conferma il progetto (il sistema esiste e valgono quattro condizioni), designa il project manager 2 (il project manager 1 è saturo) con chi gestisce il team. Presa visione al cliente. DEC1.
- **Project manager 2, `kickoff`.** Stima a occhio di 60 giorni lavorativi, tempo del kickoff 6 giorni lavorativi (6-13 ottobre). Cartella 107 con `storico.md` e `decisioni.md` vuoti.
  - Q-1, Manca: la stima a occhio "della durata" non dice di cosa (sviluppo? di tutto?) né in che unità si calcola il 10%. Stesso punto della prova del prodotto (P-1). Si è usata la durata di sviluppo della soluzione intera, in giorni lavorativi.
- **Incontro con Franco e Diego, 7 ottobre.** Trascrizione scritta a mano; `interpretazione-conversazioni` produce sintesi in tre parti e riepilogo. Franco è referente; il bonifico e il download dei listini (Diego) sono richieste da collocare. Nessun problema.
- **Project manager 2, `kickoff`, 8-9 ottobre.** Parte A: nessun lavoro copre la richiesta; pagamento in garanzia fino al 26 ottobre; comparatore su `disponibilita`; ticket 103 su `prezzi` (aperto lo stesso giorno). Parte B, letta da chi conosce il sistema: `prezzi` a un listino, un solo ruolo, anagrafica con cinque doppioni, carrello senza test, differenza Manuale-codice (30 contro 90 giorni), Guida senza migrazioni. Stato di partenza con le decisioni in testa. Stima precisa: 12 settimane per la soluzione intera (circa 720 ore), non compatibile con la fiera; prima parte di 468 ore con buffer, fattibile con poco margine.
  - Q-2, Buco: la parte A non ha un esito per "un ticket aperto che tocca lo stesso modulo di un progetto che parte dopo": l'elenco prevede conflitti tra richiesta e progetto in corso. Si è deciso "prima il ticket, poi il progetto". Stesso tipo di T1-1 nella prova del ticket.
  - Q-3, Buco: la parte B dice che lo Stato di partenza non contiene soluzioni, ma la stima precisa e la fattibilità richiedono già di scegliere tra prima parte per la fiera e soluzione intera. La divisione in più progetti è prevista tra gli imprevisti, non nella skill `kickoff`: si è fatta nella Proposta.

## 13 ottobre-9 novembre, Proposta

- **Project manager 2, `proposta-di-soluzione`.** v0.1 inviata il 13 ottobre, nel tempo del kickoff (giorno 6 di 6). Divisione in due progetti. Franco risponde a metà il 26 ottobre; elenco delle domande ancora aperte il 27 ottobre (D5-D8). Il lavoro che non dipende (stima, Stato di partenza, materiale dei mockup) prosegue. Il 9 novembre Franco risponde e conferma a voce la v0.3; riepilogo scritto; allineamento: lavorazioni 100, 96 (garanzia chiusa il 26 ottobre), ticket 101 e 103 (Manuale vigente v1.4 con F3.4): nessun conflitto; il Documento tecnico del comparatore non si tocca.
  - Q-4, Passaggio: la Proposta v0.2 e v0.3 non sono state scritte come file; la v1.0 elenca le modifiche delle due. La skill dice una nuova versione a ogni riscontro; il test ha accorpato per brevità (dichiarato).

## 10 novembre-4 dicembre, documentazione

- **Project manager 2, `manuale-del-prodotto`, `mockup`.** Manuale v1.5 in bozza inviato il 20 novembre e mockup. Il Manuale parte dalla v1.3; il ticket 103 aveva portato il Manuale vigente a v1.4 il 21 ottobre: si è ripartiti dalla vigente. Franco conferma Manuale e mockup il 30 novembre (telefonata, riepilogo scritto).
  - Q-5, Passaggio: nessuna regola dice di riprendere la versione vigente del Manuale quando un ticket lo modifica durante il kickoff. L'allineamento dei documenti sta alla conferma della Proposta; il Manuale si scrive tre settimane dopo.
- **Project manager 2 con il team lead, `documento-tecnico`, `piano-delle-milestone`.** Capacità per sprint: sprint 8 108 ore nette (festività dell'8 dicembre), sprint 9 36 (chiusura dal 24), sprint 10 84 (7 giorni), sprint 11 e 12 120. Milestone: M1 90 ore più 18 (sprint 8), M2 100 più 20 (sprint 9 e 10), M3 200 più 40 (sprint 11 e 12); totale 390 ore e 78 di buffer, 468 di capacità. Materiali con date (elenco 11 dicembre, utenze 14 dicembre, listini 18 dicembre). Piano dei SAL inviato il 4 dicembre; sprint 8 pianificato (I1 a I8, 90 ore su 108).
  - Issue in ClickUp di M1: I1 ruolo rivenditore e migrazione 16; I2 e I3 accesso (F6.1) 12 ciascuna; I4 e I5 collegamento (F6.2) 16 ciascuna; I6 pulizia dei doppioni 4; I7 staging 8; I8 preparazione della prova 6. M2: I9 modello dati listini 16, I10 `prezzi` con listino per rivenditore 16, I16 annotazione per la Guida 4, I11 test 12, I12 interfaccia di gestione 16, I13 importazione 16, I14 prezzi nel catalogo 8, I17 prodotto senza prezzo 4, I15 prova 8.
  - Q-6, Contraddizione: il Ciclo di sviluppo dice di pianificare lo sprint "per intero, non sotto la capacità"; con il buffer di milestone la milestone M2 pianifica 100 ore su 120 di capacità (lo sprint 10 ne pianifica 64 su 84). Il buffer di milestone è capacità non pianificata: le due regole non si accordano.
  - Q-7, Manca: la data di un materiale si ricava da "entro quando serve", ma il Documento tecnico non dice se il margine di sicurezza è compreso. Qui la data del 18 dicembre era una settimana prima dell'uso (7 gennaio, chiusura aziendale in mezzo).
  - Q-8, Buco: dopo l'ultima milestone (12 febbraio) ci sono collaudo, preparazione e pubblicazione (15-18 febbraio) che hanno bisogno di capacità. Il capitolo Milestone dice "lavori trasversali espliciti, con stima propria" ma non in quale milestone né in quale sprint. Qui sono rimasti fuori dalle 390 ore, nello sprint 13, senza capacità calcolata. Il margine di un giorno lavorativo tra la pubblicazione e la fiera è il risultato.

## 15 dicembre-7 gennaio, sviluppo

- **Diego telefona allo sviluppatore 2 (15 dicembre).** Chiede i preventivi in PDF. Lo sviluppatore non accetta e lo indirizza al project manager 2; nota nel Registro. Il 17 dicembre Franco chiede per iscritto: `variazione`: media (20 ore [Stima da validare], una story nuova, nessuna data), margine di M3 20, comunicazione al cliente, approvazione scritta il 22 dicembre.
  - Q-9, Buco: lo sviluppatore non ha una frase pronta per rifiutare una richiesta a voce; il piano dice che le richieste passano dal responsabile, ma non dice cosa fare nel momento.
  - Q-10, Manca: la skill `variazione` non dice come cambia il margine di M3 quando si aggiunge una variazione media (stesso punto di P-16 nella prova del prodotto). Si è sottratto l'impatto dal margine.
- **Prova del SAL1, 18 dicembre.** `prova-su-staging` e `milestone-report`. Provato da Diego: F6.1 accettata, F6.2 accettata con difetto non bloccante (data 15 gennaio). Diego chiede gli ordini ricorrenti: V2, registrata a parte, non nel report. Franco non risponde; accetta il 7 gennaio.
  - Q-11, Manca: Diego è utilizzatore, non referente; la skill non distingue chi dà gli esiti e chi accetta (come P-18 del prodotto).

## 11-15 gennaio 2027, Nota di sprint 10 e riprogrammazione

- **Project manager 2, `sprint`.** Nota con i numeri: pianificate 64, completate 60, I17 non fatta, M2 margine meno 4 ore (in ritardo), M3 margine 16 (a rischio).
- **Project manager 2, `riprogrammazione`.** Imprevisti: listini arrivati l'11 gennaio, malattia (30 ore lorde), ticket urgente 108 (12 ore, buffer di sprint 21). Ricalcolo. Leve: spostare una story (nessuna candidata), spostare la data al 22 gennaio, aggiungere 8 ore. Decisione: prova al 22 gennaio più 8 ore dallo sviluppatore 3. Piano dei SAL v2. Comunicazione al cliente: solo il materiale in ritardo e la nuova data.
  - Q-12, Contraddizione: la skill dice che il ritardo di un materiale sposta le consegne "degli stessi giorni" (6), ma il calcolo con le date delle issue dà 2 giorni di fermo reale della parte dipendente; il Piano dei SAL ha una data di materiale con un margine che il cliente non conosce.
  - Q-13, Buco: lo slittamento di una settimana nasce da più cause (materiale, malattia); la skill dice che per un ritardo del cliente la comunicazione cita i fatti del cliente, senza dire cosa fare quando la causa è mista. Si è citato solo il materiale. È una scelta, non un obbligo.
  - Q-14, Buco: il buffer di sprint è un 20% della capacità di ogni persona; il ticket 108 ha usato 12 ore di una persona il cui buffer era di 8,4 ore. Non è detto se il buffer è per persona o dello sprint.
  - Q-15, Esecuzione: il Piano dei SAL v2 contiene sia la nuova data del SAL2 sia la variazione V1 approvata il 22 dicembre; la variazione avrebbe dovuto aggiornare il Piano dei SAL il 22 dicembre. Non cambia i piani.

## 22 gennaio-12 febbraio, SAL2 e SAL3

- **SAL2, 22 gennaio.** Franco non risponde, accetta il 28 gennaio (4 giorni lavorativi). Nessuna Nota recitata.
- **SAL3, 12 febbraio.** Dati dello scenario: 231 ore reali, alla data.

## 15-18 febbraio, rilascio

- **Project manager 2, `collaudo-e-rilascio`, `prova-su-staging`.** Collaudo il 16 e 17 febbraio: quattro percorsi, regressioni sul catalogo e sul carrello per un cliente non rivenditore (e sui preventivi del gestionale), dati: copia fedele dei quaranta rivenditori. Prova finale accettata con difetto non bloccante sul PDF (correzione entro il 5 marzo). Piano di rilascio concordato con Franco il 15 febbraio (giovedì 18 febbraio dalle 7:00). Scheda tecnica con la migrazione (non una riga). Guida alla pubblicazione v1.2 (la v1.1 è del ticket 103) con migrazioni, rotte senza cache, gestionale.
  - Q-16, Buco: nel collaudo e nel piano di rilascio le due fasi sono in tre giorni (15, 16, 17) e la pubblicazione il 18, sullo sprint 13 senza capacità calcolata. Vedi Q-8.
- **Incaricato della pubblicazione (sistemista 1), 18 febbraio.** Pubblica con la scheda e la Guida; la rotta dell'area riservata non ha cache; verifiche superate; il gestionale è pubblicato senza regola scritta sui riavvii (come nel ticket). Avviso al cliente. Garanzia: durata pianificata del Piano dei SAL, 10 settimane (70 giorni), 35 giorni di calendario dal 18 febbraio, fino al 25 marzo.
  - Q-17, Manca: la durata pianificata di un progetto per la garanzia non è definita: lo sviluppo (10 settimane), la lavorazione intera dal 6 ottobre (circa 19 settimane, garanzia circa 67 giorni) o la durata della Proposta. Si è usato il Piano dei SAL (stesso punto di P-2 del prodotto).
- **Project manager 2, `allineamento-documenti`, `report-di-progetto`, 26 febbraio.** Manuale v1.6, Documento tecnico v1.5, Guida v1.2; nessun altro lavoro toccato. Report di progetto. Progetto chiuso.

## 1-2 marzo, garanzia

- **Project manager 2, `pacchetto-di-garanzia`.** Diego segnala un bug (carrello e pagamento con prezzi diversi per il rivenditore, F7.2 e F4.2) e un ritocco estetico. Garanzia valida (fino al 25 marzo). Bug coperto, urgenza: i fatti dicono che un rivenditore ha pagato il prezzo sbagliato, quindi dati a rischio: urgente, buffer di sprint, sprint 14. Ritocco estetico coperto sotto le 4 ore, ma la richiesta viene da Diego e non dal referente: il project manager 2 chiede la conferma a Franco. Capacità: nessun lavoro assegnato noto al team in marzo (la base non lo dice).
  - Q-18, Contraddizione: le Regole comuni dicono che in garanzia "la richiesta del cliente vale come conferma", ma altrove "vale solo l'approvazione del referente". Se Diego, che non è referente, chiede una variazione piccola, il testo non dice quale delle due regole vale.
  - Q-19, Buco: un importo di pagamento sbagliato non rientra nella definizione di urgente (sistema fermo, utenti che non possono lavorare, dati a rischio) senza interpretazione. Vedi P-18 e T1-18.

## Controlli finali

- Caratteri vietati, persone verbali e tabelle: ricerca eseguita sui file dell'esecuzione, nessun risultato (a parte le parole del cliente fra virgolette).
- Documenti non attesi: `domande-aperte-2026-10-27.md`, `comunicazione-variazione-V1.md`, `piano-sal-...-v2.md`, `piano-rilascio-...md` (previsto dal Piano di progetto).
