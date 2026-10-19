# Scenario: progetto 1, area riservata per i rivenditori

Codice della lavorazione: 107. Base: `../base-comune.md`. Categoria attesa: progetto. Piano: Piano di progetto, con Ciclo di sviluppo e Regole comuni.

Il test parte lunedì 5 ottobre 2026 e arriva alla chiusura e a una segnalazione in garanzia. Si esegue per intero il kickoff, il primo sprint, la prima milestone, la milestone in difficoltà di gennaio, il collaudo, la pubblicazione, la chiusura e la garanzia. La terza milestone si dà per conclusa con i dati dell'ultimo capitolo. Il prodotto 110 è una prova indipendente: le due prove usano le stesse persone nel 2027 senza considerare la sovrapposizione.

## Ruoli in scena

Franco (referente), Diego (cliente, non referente), Marta (cliente, non decide), Leonardo (chi analizza), chi gestisce il team, CEO, project manager 1 (saturo), project manager 2 (responsabile), supervisore, team lead, sviluppatori 1, 2 e 3, grafica, incaricato della pubblicazione.

## Richiesta

Aperta da Franco su osTicket il 5 ottobre 2026.

"Diego ha bisogno di un'area riservata per i rivenditori: devono entrare con le loro credenziali, vedere i loro prezzi e fare ordini grandi senza passare dal carrello normale. Sono una quarantina. Ci serve per la fiera di fine febbraio."

Scadenza del cliente: la fiera dei rivenditori, lunedì 22 febbraio 2027.

## Fatti aggiuntivi sul codice e sul contesto

- Il modulo `prezzi` conosce un solo listino. Aggiungere listini per rivenditore tocca scheda prodotto, carrello, pagamento e gestionale (verificabile leggendo il codice).
- Sul sito esiste un solo ruolo utente. Il gestionale ha ruoli multipli.
- L'anagrafica dei rivenditori nel gestionale ha quaranta righe inserite a mano, con partita IVA ed email, senza collegamento agli utenti del sito. Cinque righe sono doppie.
- Il carrello non ha test automatici. Il pagamento sì.
- Il pagamento accetta solo carta: per ordini grandi i rivenditori vogliono il bonifico. Il servizio esterno di pagamento supporta il pagamento differito, non attivato.
- Il capitolo Pubblicazione del Documento tecnico non dice nulla sulle migrazioni del database.
- Diego descrive i listini: un file per rivenditore, con il prezzo di ogni prodotto, già pronti in parte. Franco dice che sono "circa quaranta, uno per rivenditore".
- Il conflitto con il pagamento in garanzia (fino al 26 ottobre) riguarda solo la lavorazione di ottobre: lo sviluppo parte il 7 dicembre.

## Capacità e piano atteso (numeri da ricalcolare nel test)

- Squadra: sviluppatore 1 (30 ore, libero dal 27 novembre), sviluppatore 2 (30), sviluppatore 3 (15). 75 ore a settimana, 150 a sprint, 120 al netto del buffer di sprint.
- Sprint 8 (7-18 dicembre) con la festività dell'8 dicembre. Sprint 9 (21 dicembre-1 gennaio) con la chiusura aziendale dal 24: solo 21, 22 e 23. Sprint 10 (4-15 gennaio) con la chiusura fino al 6 e la festività del 6: restano 7 giorni.
- Soluzione intera stimata: circa 720 ore con buffer, non compatibile con la fiera. La Proposta propone una prima parte per la fiera (accesso, listini, ordini grandi con caricamento di un elenco) e rimanda il pagamento differito (bonifico) a un secondo progetto.

## Cosa deve emergere, fase per fase

**Valutazione**

- Chi analizza assegna l'urgenza (normale), conferma la categoria progetto e designa il project manager 2 (il project manager 1 è saturo) con chi gestisce il team.
- Il responsabile fa una stima a occhio di 10 minuti, solo interna, e ne ricava il tempo del kickoff.
- La verifica trova: nessun lavoro che copra la richiesta; il pagamento in garanzia fino al 26 ottobre; il comparatore tocca `disponibilita` ma non i prezzi; il ticket 103 tocca il calcolo dello sconto; il ticket 101 tocca il carrello.
- Il codice conferma: nessun listino multiplo, nessun ruolo rivenditore, nessun bonifico. I codici sconto dopo l'IVA sono comportamento non documentato. Il Manuale non corrisponde al codice (30 giorni contro 90): differenza e domanda al cliente.
- Lo Stato di partenza (una voce di `history-and-decision.md`) e le decisioni dell'analisi (prime voci di tipo Decisione). Si crea la cartella con `source`, `claude`, `log` e il file `history-and-decision.md`.
- La scadenza della fiera è giudicata fattibile o no.
- Franco è il referente: Diego non approva.

**Stima**

- Stima precisa in giorni lavorativi, con affidabilità e fattori. Il Report di progetto della lavorazione 96 esiste (e della 58): se ne tiene conto. Va confrontata con la fiera e il problema detto subito a Franco.

**Proposta**

- Prima versione dentro il tempo del kickoff, in 5 pagine al massimo, senza tecnologie, prezzi e date precise. Contiene la stima di durata (da 2 a 3 mesi, secondo la regola delle durate) e il tempo di rilascio indicativo come finestra di rilascio in mesi a partire da un mese di avvio ipotizzato, non come date di calendario, con affidabilità e ipotesi. Domande con codice. Divisione in più progetti se la soluzione è più grande della richiesta.
- Il 26 ottobre Franco risponde solo a metà delle domande: le altre bloccano la conferma e il cliente riceve l'elenco di quelle ancora aperte.
- La conferma a voce vale dopo il riepilogo scritto. All'allineamento si cercano i conflitti con gli altri lavori.

**Documentazione**

- Manuale con criteri verificabili, mockup approvato con il Manuale, conferma a voce con riepilogo.
- Documento tecnico con il capitolo Piano delle milestone, issue in ClickUp (nessuna sopra le 16 ore), materiali come dipendenze. Piano dei SAL senza nulla di interno. Primo sprint pianificato dopo l'invio del Piano dei SAL.

**Sviluppo**

- Messaggio per la prova di ogni milestone con le story e i criteri; il Milestone report è interno (ore previste e reali, margine, variazioni e imprevisti, esito della prova). Nota di sprint con i numeri del margine. Una variazione chiesta da Diego al telefono non si accetta. I materiali in ritardo spostano le consegne che ne dipendono. L'assenza di una persona e un ticket urgente pesano su buffer e margine. La prova senza risposta del cliente non vale accettazione.

**Rilascio e garanzia**

- Collaudo con percorsi completi e parti esistenti toccate (carrello, pagamento). Le migrazioni sono nelle particolarità del piano di rilascio, e alla chiusura entrano nel capitolo Pubblicazione del Documento tecnico. Pubblica l'incaricato. Report di progetto. Garanzia dalla durata pianificata.

## Eventi da introdurre, nell'ordine

1. Lunedì 5 ottobre: Franco apre la richiesta.
2. Martedì 6 ottobre: assegnazione al project manager 2. Stima a occhio: 60 giorni lavorativi. Tempo del kickoff 6 giorni lavorativi, fino a martedì 13 ottobre.
3. Mercoledì 7 ottobre: incontro con Franco e Diego.
4. Giovedì 8 ottobre: Stato di partenza. Venerdì 9: stima precisa: 12 settimane per la soluzione intera, circa 720 ore con buffer, con tre sviluppatori. Non compatibile con la fiera.
5. Martedì 13 ottobre: Proposta v0.1, solo per la parte della fiera, con la seconda parte rimandata.
6. Lunedì 26 ottobre: Franco risponde a D1-D4, non a D5-D8. Martedì 27: elenco delle domande aperte.
7. Lunedì 9 novembre: Franco risponde a D5-D8 e conferma a voce la versione 0.3. Riepilogo scritto. Allineamento.
8. Dal 10 al 20 novembre: Manuale e mockup. Invio venerdì 20 novembre. Conferma a voce lunedì 30 novembre.
9. Dal 1 al 4 dicembre: Documento tecnico, issue, Piano dei SAL. Invio e pianificazione dello sprint 8 venerdì 4 dicembre.
10. Martedì 15 dicembre: Diego telefona allo sviluppatore 2 e chiede i preventivi in PDF. Lo sviluppatore non deve accettare.
11. Venerdì 18 dicembre: prova del SAL1. Diego prova e trova un difetto non bloccante in F6.2; chiede anche una funzione nuova (ordini ricorrenti). Franco non risponde.
12. Giovedì 7 gennaio 2027: Franco accetta il SAL1.
13. Il materiale dei listini è dovuto venerdì 18 dicembre (data del Piano dei SAL). Arriva lunedì 11 gennaio, con 6 giorni lavorativi di ritardo (chiusura aziendale esclusa).
14. Da lunedì 11 a venerdì 15 gennaio: lo sviluppatore 2 è malato. Mercoledì 13 e giovedì 14 gennaio: il ticket urgente 108 sul pagamento ferma lo sviluppatore 1 per due giorni (12 ore).
15. Venerdì 15 gennaio: Nota di sprint 10 e riprogrammazione. Dati dello sprint: ore pianificate 64, completate 60, le 4 ore non completate sono nella story F7.1.
16. Il 22 dicembre Franco aveva approvato per iscritto la variazione sui preventivi in PDF (richiesta il 17 dicembre, 20 ore), che entra nella milestone M3.
17. Venerdì 22 gennaio: prova del SAL2. Franco non risponde; accetta giovedì 28 gennaio.
18. Dati reali delle milestone seguenti: vedi sotto.
19. Martedì 16 febbraio: collaudo finale. Mercoledì 17: prova finale accettata. Giovedì 18 febbraio: pubblicazione.
20. Lunedì 1 marzo: Diego segnala due voci insieme: un bug (nel carrello un rivenditore vede il prezzo del proprio listino ma il riepilogo del pagamento usa il prezzo base) e un ritocco estetico (colore di un pulsante).

## Dati reali

- Milestone M1 (sprint 8): 90 ore stimate, buffer 18, reali 88.
- M2 (sprint 9 e 10): 100 ore, buffer 20, reali 104 (4 ore oltre la stima, chiuse nella prima settimana dello sprint 11).
- M3 (sprint 11 e 12): 200 ore più 20 della variazione V1, buffer 40, reali 231.
- Variazioni: V1 media (preventivi in PDF, 20 ore, approvata). V2 ordini ricorrenti (richiesta di Diego alla prova del SAL1): media, non approvata, rinviata al secondo progetto.
- Ticket urgenti: uno (108), 12 ore.
- Tutte le milestone accettate; M2 con una settimana di ritardo sul Piano dei SAL; M3 alla data.
- Ore reali totali: 423 su 390 stimate più 20 della variazione.

## Cosa non deve succedere

- Un documento per il cliente con ore, buffer, nomi del team o tecnologie.
- Una variazione accettata a voce o presa da Diego.
- Una milestone accettata con il silenzio.
- Una issue cancellata invece che portata a CANCELLED.
- Un documento in più di quelli previsti dal Piano di progetto.
- Un registro delle variazioni a parte, o una Guida alla pubblicazione a parte: variazioni, riprogrammazioni e garanzia sono voci di `history-and-decision.md`, e la pubblicazione è un capitolo del Documento tecnico.
- Il Milestone report inviato al cliente.
- Una durata detta al cliente in settimane, o in giorni oltre i due mesi: fino a due mesi si parla di giorni, da due mesi in poi di mesi.
- Una versione di un documento che scrive "invariato" o rimanda a una versione precedente invece di riscrivere la sezione: ogni versione è completa e indipendente.
- Una versione intermedia (Proposta v0.2 e v0.3, Manuale e Documento tecnico intermedi) che manca in `claude`: le versioni precedenti restano tutte.
- Il Piano dei SAL senza tabelle, o scritto a mano invece che estratto dal Piano delle milestone.

## Documenti attesi in `esecuzione-N/107/`

- Radice: i quattro documenti veri in PDF, versione finale, numerati in ordine di nascita senza salti: Proposta di soluzione, Manuale del prodotto, Documento tecnico (con il Piano delle milestone), Piano dei SAL (in tabella).
- `claude`: i sorgenti Markdown dei documenti, con tutte le versioni precedenti (nessuna cancellata) e la catena del Manuale (da v1.0) e del Documento tecnico (da v1.0) copiata dalla base. Il ticket 103 non ha aggiornato i documenti: il progetto recepisce la sua Scheda (F3.4, F3.5), e il suo Manuale è la v1.4 e poi la v1.5, il Documento tecnico la v1.3 e poi la v1.4.
- `design`: wireframe e materiale per i mockup.
- `develop`: la Nota di sprint 10 e il Milestone report del SAL1, solo in Markdown.
- `source`: la richiesta, le trascrizioni e le sintesi delle conversazioni, le risposte di Franco, le accettazioni, la consegna dei listini, la segnalazione di garanzia di Diego, e i messaggi inviati a Franco (domande aperte, riepiloghi, invio del Piano dei SAL, invito alla prova, comunicazione di variazione e di riprogrammazione, avviso, risposta di garanzia).
- `log`: `history-and-decision.md` e `report-di-progetto.md`. In History and decision stanno, come voci, lo Stato di partenza, la stima precisa, il piano di rilascio concordato, la variazione V1, la riprogrammazione, l'esito della prova finale, l'avviso e la risposta di garanzia. Nessun file a parte per questi.
