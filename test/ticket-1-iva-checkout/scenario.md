# Scenario: ticket 1, sconto e IVA nel carrello

Codice della lavorazione: 103. Base: `../base-comune.md`. Categoria attesa: ticket (con un'ambiguità del Manuale da chiarire). Piano: Piano dei ticket, con Ciclo di sviluppo.

Il test parte lunedì 5 ottobre 2026. È il ticket "normale" completo: analisi, scheda, sviluppo, pubblicazione con risposta nel ticket, aggiornamento dei documenti, garanzia. Esercita soprattutto il peso dei documenti: un ticket piccolo deve restare piccolo.

## Ruoli in scena

Marta (cliente), Franco (referente, solo se serve una decisione), Leonardo (chi analizza), chi gestisce il team, supervisore, team lead (seconda persona per la revisione), sviluppatore 3 (responsabile), incaricato della pubblicazione.

## Richiesta

Aperta da Marta su osTicket il 5 ottobre.

"Buongiorno, ai clienti che usano un codice sconto in euro nel carrello lo sconto risulta più basso di quello che si aspettano. Mi hanno detto che dovrebbe togliere l'importo dal prezzo e poi aggiungere l'IVA, non il contrario. Potete sistemarlo? Non è urgente."

## Fatti aggiuntivi sul codice

- Il carrello calcola: totale righe, IVA, poi sconto. Il pagamento riceve il totale già calcolato e non ricalcola lo sconto.
- Gli sconti percentuali non cambiano con l'ordine di calcolo (10% prima o dopo l'IVA dà lo stesso totale). Cambiano solo i codici sconto di importo fisso: con un codice da 10 euro su 100 euro più IVA al 22%, oggi il cliente paga 112 euro; togliendo lo sconto prima dell'IVA pagherebbe 109,80 euro.
- I codici di importo fisso sono 6 su 40. I prodotti a IVA ridotta sono 14 (libri): per questi la differenza è minore.
- Il modulo `prezzi` non ha test automatici. Il carrello nemmeno. Il pagamento sì.
- Lo stesso calcolo è usato dal gestionale per i preventivi manuali.
- Il ticket 101 (arrotondamento di un centesimo tra carrello e pagamento) riguarda lo stesso codice.

## Cosa deve emergere, fase per fase

**Analisi (`01-analisi`)**

- Chi analizza assegna l'urgenza dai fatti: normale (il cliente stesso dice non urgente, e i fatti non mostrano un sistema fermo).
- Il confronto con i lavori aperti trova: il ticket 101 (stesso codice, stesso pagamento ancora in garanzia), e il comparatore che usa il carrello. Si decide se unire, rimandare o procedere. Si dice se il 101 è un pacchetto di garanzia a sé.
- Il controllo del codice conferma che il comportamento è com'è scritto, non un errore: il Manuale non dice come si applicano i codici sconto. Non è un bug: è un'ambiguità del Manuale. Cambiare il comportamento è una richiesta nuova (feature), e la decisione spetta a Franco, non a Marta.
- La decisione di Franco è un riferimento da cercare prima di scrivere la Scheda di intervento: la richiesta resta in attesa di una risposta, informalmente, senza termini. Ciò che si chiede a Franco è una domanda puntuale, con un esempio numerico.
- Esito complessivo: da fare dopo la risposta (o da rimandare finché la domanda è aperta).
- La stima in ore è dichiarata con la sua affidabilità, e la categoria è ticket (meno di 2 settimane, una persona).
- Le decisioni dell'analisi stanno in testa alla Scheda di intervento. Nessuna Scheda di valutazione a parte.

**Scheda e sviluppo (`01-analisi`, `02-sviluppo`)**

- La Scheda di intervento ha: cosa fare, su cosa intervenire (modulo `prezzi`, carrello, gestionale per i preventivi), stima, DoD (con la DoD base), documenti collegati (Manuale F3 e F4, ticket 101).
- Il task è creato in ClickUp nel Folder "Ticket", in BACKLOG, con tipo, urgenza, stima e checklist.
- Il ticket entra nel primo sprint con capacità, dalle persone sempre disponibili. Nessun documento di sprint.
- Il lavoro tocca il modulo `prezzi` senza test: la revisione del codice da una seconda persona (team lead) è sempre fatta e dice cosa non ha controllato.
- Lo sviluppatore corregge la voce "Su cosa intervenire" se tocca altro (il gestionale).
- Le ore sono tracciate sul task.

**Rilascio (`03-rilascio`)**

- La risposta al cliente è scritta nel ticket, breve, senza file, moduli, ore né causa. Non è un documento e non ha una cartella.
- Pubblica l'incaricato seguendo la Guida alla pubblicazione (riavvio SSR e cache sul catalogo e sul prodotto, perché il carrello legge i prezzi). Un ticket non ha una scheda tecnica di rilascio.
- Il ticket si chiude alla pubblicazione, e da lì decorrono i 15 giorni lavorativi di garanzia.
- Dopo la chiusura si aggiornano Manuale (F3 con la regola dello sconto), Documento tecnico e, se serve, la Guida. L'allineamento cerca i documenti dei lavori collegati partendo dai codici della Scheda: 101 e il comparatore (codice 100).

## Eventi da introdurre, nell'ordine

1. 5 ottobre: Marta non sa dire quale prezzo si aspettano i clienti. Chi analizza prepara la domanda per Franco.
2. 13 ottobre: Franco risponde: "Sì, lo sconto prima dell'IVA, come fanno gli altri". La risposta arriva con 5 giorni di ritardo e il ticket resta sospeso nel frattempo.
3. 15 ottobre: durante lo sviluppo si scopre che anche i preventivi manuali del gestionale usano lo stesso calcolo. Lo sviluppatore 3 corregge la Scheda e avvisa chi analizza. Se la stima supera la soglia si decide se è ancora un ticket.
4. 20 ottobre: pubblicazione e chiusura.
5. 28 ottobre: Marta segnala che un codice sconto da 20 euro, applicato a un articolo da 15 euro, dà un totale negativo. Entro la garanzia: è un bug o una richiesta nuova? Decide il Manuale, che qui è silenzioso: ambiguità, quindi domanda puntuale a Franco.

## Cosa non deve succedere

- Decidere da soli come calcolare lo sconto, o prendere la risposta di Marta come decisione.
- Una Scheda di valutazione o un secondo documento di analisi.
- La risposta al cliente con file, moduli, ore o la causa del bug.
- Il ticket che aspetta la scrittura dei documenti per chiudersi.
- Una scheda tecnica di rilascio per un ticket.

## Documenti attesi in `esecuzione-N/103/`

- `storico.md` e `decisioni.md` (le decisioni di Franco e dell'analisi).
- `01-analisi`: Scheda di intervento, con le decisioni in testa; domanda per Franco; trascrizione se c'è una telefonata.
- Nessun documento in `03-rilascio/01-pubblicazione` (una voce nello storico, se serve) e nessuna nota in `03-rilascio/02-aggiornamento-documenti`: il risultato è nei documenti del sistema aggiornati.
- `04-garanzia`: risposta al cliente sulla segnalazione del 28 ottobre.
- `sistema/`: Manuale e Documento tecnico aggiornati.
