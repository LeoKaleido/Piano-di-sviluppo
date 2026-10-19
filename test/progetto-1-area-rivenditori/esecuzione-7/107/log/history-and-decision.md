# History and decision, progetto 107

La storia e le decisioni della lavorazione, in gruppi per fase. Ogni voce ha un titolo con la data e il tipo, e campi etichettati. Le variazioni portano il codice (V1, V2) e lo stato; le decisioni il codice (DEC1, DEC2). I messaggi inviati al cliente e le sue risposte stanno in `source`.

## Kickoff

### 2026-10-05, Altro
- **Fase.** valutazione
- **Cosa.** Richiesta di Franco su osTicket. Urgenza normale assegnata da chi analizza.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2026-10-06, Persone
- **Fase.** valutazione
- **Cosa.** Assegnazione al project manager 2; stima a occhio 60 giorni lavorativi, tempo del kickoff 6 giorni fino al 13 ottobre.
- **Effetto.** Nessuno.
- **Riferimenti.** DEC1.

### 2026-10-06, Decisione DEC1: Responsabile e tempo del kickoff
- **Fase.** valutazione
- **Cosa.** Responsabile project manager 2; tempo del kickoff 6 giorni lavorativi, fino al 13 ottobre.
- **Chi ha deciso.** Chi analizza con chi gestisce il team; il responsabile per la stima.
- **Motivo.** Project manager 1 saturo fino al 27 novembre; stima a occhio di 60 giorni lavorativi.
- **Alternative scartate.** Nessuna.
- **Effetto.** Parte il kickoff.
- **Riferimenti.** Stato di partenza.

### 2026-10-07, Conferma
- **Fase.** valutazione
- **Cosa.** Franco referente; richieste di Diego (bonifico, download).
- **Effetto.** Nessuno.
- **Riferimenti.** DEC2.

### 2026-10-07, Decisione DEC2: Referente
- **Fase.** valutazione
- **Cosa.** Franco è il referente. Diego non approva.
- **Chi ha deciso.** Franco.
- **Motivo.** "Decido io."
- **Alternative scartate.** Nessuna.
- **Effetto.** Vale solo la sua approvazione.
- **Riferimenti.** Sintesi del 7 ottobre.

### 2026-10-08, Stato di partenza
- **Fase.** valutazione
- **Cosa.** Indagine su richiesta, lavori aperti e codice.
- **Effetto.** Nessuno.
- **Riferimenti.** DEC1, DEC2.
- **Dettagli.**
  - Richiesta e categoria: progetto (la stima supera le 2 settimane, serve più di una persona, serve una proposta sui listini, cambiano le schermate). Urgenza normale. Referente Franco, Diego non approva. Scadenza del cliente: fiera lunedì 22 febbraio 2027, fattibile solo per una prima parte.
  - Lavori aperti (verificato nei loro documenti): nessuno copre la richiesta. Pagamento (lavorazione 96) in garanzia fino al 26 ottobre, nessun conflitto perché lo sviluppo parte a dicembre. Comparatore (lavorazione 100): un ramo non rilasciato tocca `disponibilita` e non i prezzi; le due persone sono occupate fino al 27 novembre. Ticket 101 (carrello) e 103 (sconto di importo fisso nel modulo `prezzi`, in lavorazione dal 13 al 20 ottobre): prima il ticket, poi il progetto, che parte dalla versione pubblicata.
  - Codice (verificato, letto da chi conosce il sistema): il modulo `prezzi` conosce un solo listino ed è usato da scheda prodotto, carrello, pagamento e gestionale; un solo ruolo utente nel sito; anagrafica con quaranta rivenditori inseriti a mano, non collegati agli utenti, cinque righe doppie; nessun test su carrello e `prezzi`, test sul pagamento; il pagamento accetta solo carta, il servizio esterno supporta il pagamento differito non attivato; il capitolo Pubblicazione del Documento tecnico non dice nulla sulle migrazioni.
  - Comportamenti non documentati: i codici sconto si applicano dopo l'IVA (in cambiamento con il ticket 103); il carrello si svuota dopo 90 giorni mentre il Manuale dice 30 (domanda al cliente).
  - Parti toccate: `lumera-api` (modulo `prezzi`, utenti, ordini), `lumera-sito` (accesso, scheda prodotto, carrello), `lumera-gestionale` (anagrafica, listini). Intervento più esteso di come appare: tocca quattro parti che usano `prezzi`.
  - Fattibilità per punto: accesso con credenziali proprie e prezzi propri fattibili con compromesso (ruolo nuovo, listini per rivenditore); ordini grandi fuori dal carrello fattibili con il caricamento di un elenco; bonifico fattibile ma non entro la fiera; download dei listini richiesto da Diego, non confermato da Franco; fiera fattibile con poco margine per una prima parte, non per la soluzione intera.
  - Incognite: formato dei listini (due file di esempio da Diego), doppioni nell'anagrafica (campione da Diego), pagamento differito (Franco con il fornitore). Non verificato: i file dei listini e il pagamento differito.
  - Fonti: richiesta del 5 ottobre, incontro del 7 ottobre, Manuale v1.3, Documento tecnico v1.2 (con il capitolo Pubblicazione), lavorazioni 96, 100, 101 e 103.

### 2026-10-09, Fase completata
- **Fase.** stima
- **Cosa.** Stima precisa circa 3 mesi per la soluzione intera, non compatibile con la fiera; prima parte fattibile con poco margine. Stima della prima parte: da 2 a 3 mesi, più probabile circa 2 mesi e mezzo (da 40 a 50 giorni lavorativi, probabile 44). Finestra di rilascio indicativa per la prima parte: tra metà e fine febbraio 2027 con avvio a dicembre, da scrivere nella Proposta.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.
- **Dettagli.**
  - Soluzione intera (accesso, listini, ordini grandi, bonifico, download dei listini): circa 3 mesi di sviluppo, circa 720 ore con buffer di milestone del 20%, tre sviluppatori (75 ore a settimana, 60 al netto del buffer di sprint). Affidabilità media. Prima parte per la fiera (accesso, listini, ordini grandi con elenco): circa 390 ore più 78 di buffer, cioè 468 ore.
  - Origine: Report di progetto della lavorazione 96 (circa 3 mesi pianificati, circa 3 mesi e una settimana reali; 700 ore stimate, 735 reali) e della 58 (20 settimane, 22 reali; 1.500 ore, 1.610 reali). Fattori che alzano la stima: `prezzi` e carrello senza test, quattro parti che usano `prezzi`, formato dei listini sconosciuto, anagrafica con doppioni, migrazioni non descritte nel capitolo Pubblicazione. Fattori che la abbassano: catalogo, carrello e accesso esistono già.
  - Confronto con la fiera: sviluppo dal 7 dicembre. Capacità netta del buffer di sprint: sprint 8 108 ore, sprint 9 36, sprint 10 84, sprint 11 e 12 120 ciascuno, totale 468 ore fino al 12 febbraio. La soluzione intera non ci sta; la prima parte ci sta con pubblicazione tra il 16 e il 18 febbraio e un giorno lavorativo di margine. Detto subito a Franco: la Proposta propone due progetti.

### 2026-10-13, Fase completata
- **Fase.** proposta
- **Cosa.** Proposta v0.1 inviata, nel tempo del kickoff.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2026-10-26, Ritardo del cliente
- **Fase.** proposta
- **Cosa.** Franco risponde a D1-D4, non a D5-D8.
- **Effetto.** Conferma bloccata; elenco delle domande aperte inviato il 27 ottobre.
- **Riferimenti.** Nessuno.
- **Dettagli.**
  - Restano aperte D5 (carrello 30 o 90 giorni), D6 (ordini grandi senza pagamento online, confermati da Marta), D7 (bonifico e download dei listini in un secondo progetto), D8 (chi conferma gli ordini). Il lavoro che non dipende dalle risposte prosegue; la parte che ne dipende slitta degli stessi giorni; il silenzio non vale come conferma. Messaggio: `source/2026-10-27-domande-aperte.md`.

### 2026-11-09, Conferma
- **Fase.** proposta
- **Cosa.** D5-D8 risolte e Proposta di soluzione (versione 0.3) confermata a voce.
- **Effetto.** Nessuno.
- **Riferimenti.** DEC3, DEC4.

### 2026-11-09, Decisione DEC3: Divisione in due progetti
- **Fase.** proposta
- **Cosa.** Primo progetto per la fiera (accesso, prezzi, ordini grandi); bonifico e download dei listini nel secondo.
- **Chi ha deciso.** Franco.
- **Motivo.** La soluzione intera (circa 720 ore con buffer) non entra prima della fiera.
- **Alternative scartate.** Soluzione intera.
- **Effetto.** Stima di circa 2 mesi e mezzo.
- **Riferimenti.** Proposta di soluzione confermata.

### 2026-11-09, Decisione DEC4: Conferma della Proposta
- **Fase.** proposta
- **Cosa.** Proposta v0.3 confermata: da qui è la Proposta di soluzione, senza numero di versione. Il carrello si svuota dopo 90 giorni.
- **Chi ha deciso.** Franco, a voce, riepilogo scritto lo stesso giorno.
- **Motivo.** Corrisponde a ciò che serve.
- **Alternative scartate.** Nessuna.
- **Effetto.** Da qui si scrive il Manuale.
- **Riferimenti.** Sintesi del 9 novembre.

### 2026-11-12, Altro
- **Fase.** documentazione
- **Cosa.** Lette nell'indice `ticket-chiusi.md` e recepite nel Manuale le Schede del ticket 103 chiuso il 20 ottobre (Scheda v2 e voci di Rilascio e Garanzia fino al 5 novembre, riferite a Manuale v1.3 e Documento tecnico v1.2); riga dell'indice annotata con il codice 107: F3.4 ordine di calcolo dello sconto, F3.5 totale non negativo, termine "Codice sconto". Il ticket non ha aggiornato i documenti.
- **Effetto.** Nessuno.
- **Riferimenti.** DEC3 del ticket 103.

### 2026-11-30, Conferma
- **Fase.** documentazione
- **Cosa.** Manuale v1.4 e mockup confermati a voce.
- **Effetto.** Nessuno.
- **Riferimenti.** DEC5.

### 2026-11-30, Decisione DEC5: Conferma del Manuale e dei mockup
- **Fase.** documentazione
- **Cosa.** Manuale v1.4 confermato; mockup approvati.
- **Chi ha deciso.** Franco, a voce, riepilogo scritto lo stesso giorno.
- **Motivo.** Corrispondono a ciò che voleva.
- **Alternative scartate.** Nessuna.
- **Effetto.** Da qui ogni cambiamento è una variazione.
- **Riferimenti.** Sintesi del 30 novembre.

### 2026-12-04, Fase completata
- **Fase.** documentazione
- **Cosa.** Documento tecnico, issue, Piano dei SAL inviato; sprint 8 pianificato.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

## Sviluppo

### 2026-12-15, Richiesta
- **Fase.** sviluppo
- **Cosa.** Diego chiede i preventivi in PDF per telefono allo sviluppatore 2; non accettata, indirizzata al project manager 2.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2026-12-17, Variazione V1
- **Fase.** sviluppo
- **Cosa.** Franco chiede per iscritto di scaricare in PDF il preventivo dell'ordine.
- **Stato.** In attesa del cliente
- **Effetto.** Nessuno.
- **Riferimenti.** DEC6.
- **Dettagli.**
  - Richiesta: "Vorrei che il rivenditore potesse scaricare in PDF il preventivo dell'ordine." Prima richiesta a voce di Diego allo sviluppatore 2 il 15 dicembre, non accettata e indirizzata al project manager 2.
  - È una variazione: il Manuale v1.4 confermato non prevede il PDF.
  - Categoria: media. Criterio: oltre 4 ore (20 ore, [Stima da validare]) e una story nuova (F8.3). Nessuna data cambia.
  - Impatto: una issue di tipo variazione da 16 ore e una da 4 ore in M3, in BACKLOG; nessuna issue iniziata. Ore di M3 da 200 a 220. Margine di M3: 240 meno 220, cioè 20, pari a metà del buffer iniziale di 40: in linea al limite.
  - Documenti da aggiornare: Manuale (F8.3, v1.5); capitolo Piano delle milestone del Documento tecnico (M3, 220 ore); Piano dei SAL (contenuto del SAL3).
  - Messaggio a Franco: `source/2026-12-17-comunicazione-variazione-V1.md`.

### 2026-12-18, Prova o collaudo
- **Fase.** sviluppo
- **Cosa.** Prova del SAL1. Invito: `source/2026-12-17-invito-prova-sal1.md`. Diego prova e trova un difetto non bloccante in F6.2 (nome troncato nell'elenco, correzione entro il 15 gennaio). Franco non risponde: il silenzio non vale come accettazione.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2026-12-18, Variazione V2
- **Fase.** sviluppo
- **Cosa.** Diego chiede a voce gli ordini ricorrenti. Categoria media (oltre 4 ore, stima 40, story nuova). Non è di Franco; M3 non avrebbe capacità. Documenti da aggiornare: nessuno.
- **Stato.** In valutazione
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2026-12-22, Variazione V1
- **Fase.** sviluppo
- **Cosa.** Franco approva per iscritto. Entra nello sprint 11.
- **Stato.** Approvata
- **Effetto.** Nessuno.
- **Riferimenti.** DEC6.

### 2026-12-22, Decisione DEC6: Variazione V1 approvata
- **Fase.** sviluppo
- **Cosa.** Approvato il preventivo in PDF (20 ore) nel SAL3.
- **Chi ha deciso.** Franco, per iscritto.
- **Motivo.** Serve ai rivenditori.
- **Alternative scartate.** Rimandarlo al secondo progetto.
- **Effetto.** M3 sale a 220 ore, margine 20.
- **Riferimenti.** Registro delle variazioni.

### 2027-01-07, Conferma
- **Fase.** sviluppo
- **Cosa.** Franco accetta il SAL1.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-01-07, Variazione V2
- **Fase.** sviluppo
- **Cosa.** Franco rinvia gli ordini ricorrenti al secondo progetto.
- **Stato.** Rinviata
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-01-07, Decisione DEC8: V2 rinviata
- **Fase.** sviluppo
- **Cosa.** Ordini ricorrenti nel secondo progetto.
- **Chi ha deciso.** Franco.
- **Motivo.** Non c'è capacità prima della fiera.
- **Alternative scartate.** Approvazione.
- **Effetto.** Nessuno.
- **Riferimenti.** Registro delle variazioni.

### 2027-01-11, Ritardo del cliente
- **Fase.** sviluppo
- **Cosa.** I listini arrivano 6 giorni lavorativi dopo la data del Piano dei SAL.
- **Effetto.** Parte dipendente ferma 2 giorni lavorativi.
- **Riferimenti.** Nessuno.

### 2027-01-11, Imprevisto
- **Fase.** sviluppo
- **Cosa.** Sviluppatore 2 malato fino al 15 gennaio (30 ore lorde).
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-01-13, Imprevisto
- **Fase.** sviluppo
- **Cosa.** Ticket urgente 108, sviluppatore 1 fermo due giorni (12 ore dal buffer di sprint).
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-01-15, Riprogrammazione
- **Fase.** sviluppo
- **Cosa.** M2 in ritardo (meno 4 ore); prova al 22 gennaio; 8 ore aggiunte.
- **Effetto.** Nessuno.
- **Riferimenti.** DEC7. Messaggio: `source/2027-01-15-comunicazione-riprogrammazione.md`.
- **Dettagli.**
  - Imprevisti: listini in ritardo (6 giorni lavorativi), assenza dello sviluppatore 2 (30 ore lorde), ticket urgente 108 (12 ore, dal buffer di sprint di 21 ore: nessun effetto sul margine). Lo slittamento reale della parte dipendente dai listini è di 2 giorni lavorativi (7 e 8 gennaio), non 6.
  - Ricalcolo: M2 in ritardo (4 ore rimanenti, capacità rimanente 0, margine meno 4). M3 a rischio (224 ore con la variazione V1 e le 4 residue di M2, capacità 240, margine 16 su un buffer iniziale di 40).
  - Leve valutate: spostare una story (nessuna candidata, F7.2 dipende da F7.1); spostare la prova di M2 da venerdì 15 a venerdì 22 gennaio (nessuna data di M3 cambia); aggiungere 8 ore.
  - Decisione: prova di M2 al 22 gennaio e 8 ore dallo sviluppatore 3 nello sprint 11; margine di M3 dopo la leva: 24 ore, in linea. Documenti aggiornati: Documento tecnico (capitolo Piano delle milestone), Piano dei SAL v2 (SAL2 il 22 gennaio). Al cliente un solo messaggio, sul materiale in ritardo e sulla nuova data.

### 2027-01-15, Decisione DEC7: Leve per M2 in ritardo
- **Fase.** sviluppo
- **Cosa.** Prova del SAL2 spostata al 22 gennaio; 8 ore aggiunte dallo sviluppatore 3 nello sprint 11.
- **Chi ha deciso.** Project manager 2 con chi gestisce il team.
- **Motivo.** Margine di M2 meno 4 ore; M3 a rischio.
- **Alternative scartate.** Solo spostare la data.
- **Effetto.** M3 margine 24 (in linea). Data comunicata al cliente.
- **Riferimenti.** Nota di sprint 10, riprogrammazione.

### 2027-01-22, Prova o collaudo
- **Fase.** sviluppo
- **Cosa.** Prova del SAL2. Invito: `source/2027-01-21-invito-prova-sal2.md`. Franco non risponde.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-01-28, Conferma
- **Fase.** sviluppo
- **Cosa.** Franco accetta il SAL2, 4 giorni lavorativi dopo la prova.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-02-12, Fase completata
- **Fase.** sviluppo
- **Cosa.** SAL3 alla data (231 ore reali).
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-02-12, Prova o collaudo
- **Fase.** sviluppo
- **Cosa.** Prova del SAL3, accettata. Invito: `source/2027-02-11-invito-prova-sal3.md`.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

## Rilascio

### 2027-02-15, Rilascio
- **Fase.** preparazione
- **Cosa.** Piano di rilascio concordato con Franco. Messaggio: `source/2027-02-15-piano-di-rilascio.md`.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.
- **Dettagli.**
  - Quando: giovedì 18 febbraio 2027 dalle 7:00, quando il sito è meno usato; la fiera è lunedì 22, margine di un giorno lavorativo. Interruzioni: il sito resta raggiungibile, per circa quindici minuti alcune pagine possono rallentare.
  - Cosa cambia: i rivenditori entrano nell'area riservata con le credenziali di Diego, vedono i propri prezzi e inseriscono ordini grandi con un elenco; per gli altri clienti il sito non cambia.
  - Se qualcosa fallisce: ritorno alla versione precedente, avviso immediato con la nuova data; gli ordini dei rivenditori già registrati restano salvati.
  - Avvisati: Franco, Marta e Diego il 17 febbraio prima della pubblicazione e a pubblicazione verificata. Segnalazioni a Marta su osTicket, indicando il progetto 107.
  - Particolarità tecniche per l'incaricato: migrazioni 1-5 del database da eseguire prima di pubblicare l'API, con migrazione di ritorno provata sull'ambiente di prova; rotte dell'area riservata senza cache (non vanno svuotate); gestionale da pubblicare dopo sito e API; ritorno alla versione precedente su tre repository, salvando prima gli ordini dei rivenditori già registrati. Alla chiusura passano nel capitolo Pubblicazione del Documento tecnico v1.4.

### 2027-02-17, Prova o collaudo
- **Fase.** collaudo
- **Cosa.** Prova finale accettata con un difetto non bloccante (PDF), correzione entro il 5 marzo.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.
- **Dettagli.**
  - Provato: quattro percorsi completi (rivenditore che entra e ordina dal carrello con i propri prezzi; ordine da elenco con righe valide e con codici errati, confermato da Marta nel gestionale; Diego che collega un rivenditore e carica un listino; preventivo in PDF) e le parti esistenti toccate (catalogo e scheda per un cliente non rivenditore, carrello e pagamento con carta, codici sconto, preventivi manuali del gestionale), anche con i casi dei ticket 101 e 103. Dati: copia fedele dei quaranta rivenditori. Nessuna regressione.
  - Esito: F6.1, F6.2, F7.1, F7.2, F7.3, F8.1, F8.2 accettate. F8.3 accettata con difetto non bloccante: nel PDF il logo compare spostato a destra, correzione entro il 5 marzo. Nessun difetto bloccante. Conferma di Franco per iscritto il 17 febbraio (il silenzio non vale come accettazione).

### 2027-02-18, Rilascio
- **Fase.** pubblicazione
- **Cosa.** Pubblicazione e verifiche superate. Decorre la garanzia di 35 giorni, fino al 25 marzo.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.
- **Dettagli.**
  - Verifiche superate (un rivenditore di prova entra, vede il proprio listino e carica un ordine). Avviso a Franco: `source/2027-02-18-avviso-pubblicazione.md`.

### 2027-02-26, Variazione V1
- **Fase.** chiusura
- **Cosa.** Documenti aggiornati (Manuale v1.5, Documento tecnico v1.4, Piano dei SAL v2).
- **Stato.** Chiusa
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

### 2027-02-26, Fase completata
- **Fase.** chiusura
- **Cosa.** Documenti aggiornati, Report di progetto scritto in `log`. Progetto chiuso.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.

## Garanzia

### 2027-03-01, Garanzia
- **Fase.** garanzia
- **Cosa.** Bug del prezzo nel pagamento e ritocco estetico.
- **Effetto.** Nessuno.
- **Riferimenti.** DEC9.
- **Dettagli.**
  - Classificazione: il prezzo del pagamento diverso da quello del carrello contraddice il Manuale ed è un bug in garanzia, corretto subito (urgente: un rivenditore ha pagato il prezzo sbagliato; i pagamenti già fatti si controllano con Marta). Il ritocco al colore del pulsante "Conferma ordine" è estetico e rientra in garanzia, con la conferma di Franco. Risposta: `source/2027-03-02-risposta-garanzia.md`.

### 2027-03-02, Decisione DEC9: Segnalazioni in garanzia del 1 marzo
- **Fase.** garanzia
- **Cosa.** Il bug del prezzo nel pagamento è urgente e coperto; il ritocco al pulsante è coperto con conferma di Franco.
- **Chi ha deciso.** Responsabile.
- **Motivo.** Il Manuale prevede carrello e pagamento coincidenti; la modifica estetica è sotto 4 ore.
- **Alternative scartate.** Nessuna.
- **Effetto.** Issue di garanzia, buffer di sprint.
- **Riferimenti.** Risposta del 2 marzo.
