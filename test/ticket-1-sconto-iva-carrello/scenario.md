# Scenario: ticket 1, sconto e IVA nel carrello

Codice della lavorazione: 103. Base: `../base-comune.md`. Categoria attesa: ticket (con un'ambiguità del Manuale da chiarire). Piano: Piano dei ticket, con Ciclo di sviluppo.

Il test parte lunedì 5 ottobre 2026. È il ticket "normale" completo: analisi, scheda, sviluppo, pubblicazione con risposta nel ticket, garanzia. Il documento unico del ticket è la Scheda di intervento; il ticket non aggiorna Manuale e Documento tecnico. Esercita soprattutto il peso dei documenti: un ticket piccolo deve restare piccolo.

## Ruoli in scena

Marta (cliente), Franco (referente, solo se serve una decisione), Leonardo (chi analizza), chi gestisce il team, supervisore, team lead (seconda persona per la revisione), sviluppatore 3 (responsabile), incaricato della pubblicazione.

## Richiesta

Aperta da Marta su osTicket il 5 ottobre.

"Buongiorno, ai clienti che usano un codice sconto in euro nel carrello lo sconto risulta più basso di quello che si aspettano. Mi hanno detto che dovrebbe togliere l'importo dal prezzo e poi aggiungere l'IVA, non il contrario. Potete sistemarlo? Non è urgente."

## Fatti aggiuntivi sul codice

- Il calcolo del carrello sta nel modulo `prezzi` di `lumera-api`: totale righe, IVA, poi sconto. Il pagamento riceve il totale già calcolato e non ricalcola lo sconto.
- Gli sconti percentuali non cambiano con l'ordine di calcolo (10% prima o dopo l'IVA dà lo stesso totale). Cambiano solo i codici sconto di importo fisso: con un codice da 10 euro su 100 euro più IVA al 22%, oggi il cliente paga 112 euro; togliendo lo sconto prima dell'IVA pagherebbe 109,80 euro.
- I codici di importo fisso sono 6 su 40. I prodotti a IVA ridotta sono 14 (libri): per questi la differenza è minore.
- Il modulo `prezzi` non ha test automatici. Il carrello nemmeno. Il pagamento sì. Il `CLAUDE.md` di `lumera-api` chiede un test per ogni modifica a un modulo di calcolo.
- Il gestionale (`lumera-gestionale`) usa lo stesso calcolo per i preventivi manuali. Un'analisi di meno di un'ora non lo scopre: lo sviluppatore lo scopre il 15 ottobre.
- Il ticket 101 (arrotondamento di un centesimo tra carrello e pagamento) riguarda lo stesso codice. È un pacchetto di garanzia della lavorazione 96.

## Cosa deve emergere, fase per fase

**Analisi**

- Chi analizza assegna l'urgenza dai fatti: normale (il cliente stesso dice non urgente, e i fatti non mostrano un sistema fermo).
- Il confronto con i lavori aperti trova: il ticket 101 (stesso codice, stesso pagamento ancora in garanzia), e il comparatore (100) che usa il carrello. Si decide se unire, rimandare o procedere. Si dice se il 101 è un pacchetto di garanzia a sé.
- Il controllo del codice conferma che il comportamento è com'è scritto, non un errore: il Manuale non dice come si applicano i codici sconto. Non è un bug: è un'ambiguità del Manuale. Cambiare il comportamento è una richiesta nuova (feature), e la decisione spetta a Franco, non a Marta.
- La decisione di Franco è un riferimento da cercare prima di scrivere la Scheda di intervento: la richiesta resta in attesa di una risposta, informalmente, senza termini. Ciò che si chiede a Franco è una domanda puntuale, con un esempio numerico.
- Esito complessivo: da rimandare finché la domanda è aperta, poi da fare.
- La stima in ore è dichiarata con la sua affidabilità, e la categoria è ticket (meno di 2 settimane, una persona).
- Le decisioni dell'analisi stanno in testa alla Scheda di intervento. Nessuna Scheda di valutazione a parte.
- Il tempo della verifica non supera il 10% di una stima a occhio.

**Scheda e sviluppo**

- La Scheda di intervento ha: cosa fare, su cosa intervenire (modulo `prezzi`, carrello), stima, DoD (con la DoD base), documenti collegati (Manuale F3 e F4, ticket 101, comparatore).
- Il task è creato in ClickUp nel Folder "Ticket", in BACKLOG, con tipo, urgenza, stima e checklist.
- Il ticket entra nel primo sprint con capacità, dalle persone sempre disponibili. Nessun documento di sprint. Lo sviluppatore 3 ha già 7 ore (101 e 102) nello sprint 4, più altro lavoro dei ticket: la capacità va verificata.
- Il lavoro tocca il modulo `prezzi` senza test: la revisione del codice da una seconda persona (team lead) è sempre fatta e dice cosa non ha controllato. La regola del `CLAUDE.md` di `lumera-api` (un test per ogni modifica a un modulo di calcolo) va rispettata.
- Lo sviluppatore corregge la voce "Su cosa intervenire" se tocca altro (il gestionale), e avvisa chi analizza, che aggiorna la stima.
- Le ore sono tracciate sul task.

**Rilascio**

- La risposta al cliente è scritta nel ticket, breve, senza file, moduli, ore né causa. Non è un documento e non ha una cartella.
- Pubblica l'incaricato seguendo il capitolo Pubblicazione (riavvio SSR e cache sul catalogo e sul prodotto). Il capitolo Pubblicazione non copre il gestionale: va dichiarato. Un ticket non ha una scheda tecnica di rilascio.
- Il ticket si chiude alla pubblicazione, e da lì decorrono i 15 giorni lavorativi di garanzia.
- La Scheda è il piano e non cambia dopo l'analisi se non cambia il piano. A lavoro concluso una voce di tipo Rilascio di History and decision dice cosa è stato fatto, la versione dei documenti a cui il ticket si riferisce e, nei Dettagli, l'effetto sui documenti del sistema (story del Manuale e capitoli del Documento tecnico superati, con i codici: la regola dello sconto in F3, il capitolo Pubblicazione per il gestionale, il comparatore controllato). Manuale e Documento tecnico non vengono toccati.

## Eventi da introdurre, nell'ordine

1. 5 ottobre: Marta non sa dire quale prezzo si aspettano i clienti. Chi analizza prepara la domanda per Franco.
2. 13 ottobre: Franco risponde per telefono: "Sì, lo sconto prima dell'IVA, come fanno gli altri". La risposta arriva dopo 5 giorni lavorativi e il ticket resta sospeso nel frattempo.
3. 15 ottobre: durante lo sviluppo si scopre che anche i preventivi manuali del gestionale usano lo stesso calcolo. Lo sviluppatore 3 corregge la Scheda e avvisa chi analizza. Se la stima supera la soglia si decide se è ancora un ticket.
4. 20 ottobre: pubblicazione e chiusura.
5. 28 ottobre: Marta segnala che un codice sconto da 20 euro, applicato a un articolo da 15 euro, dà un totale negativo. Entro la garanzia: è un bug o una richiesta nuova? Decide il Manuale, che qui è silenzioso: ambiguità, quindi domanda puntuale a Franco. Il comportamento c'era anche prima della modifica.

6. Il 29 ottobre Franco decide che il totale non scende sotto zero. La correzione (2 ore, sprint 5) è pubblicata il 5 novembre; il seguito è nelle voci di Garanzia di History and decision (con il nuovo effetto sui documenti), non in una nuova versione della Scheda.

## Cosa non deve succedere

- Decidere da soli come calcolare lo sconto, o prendere la risposta di Marta come decisione.
- Una Scheda di valutazione o un secondo documento di analisi.
- La risposta al cliente con file, moduli, ore o la causa del bug.
- Il ticket che aspetta la scrittura dei documenti per chiudersi.
- Una scheda tecnica di rilascio o un piano di rilascio per un ticket.
- Un aggiornamento di Manuale o Documento tecnico da parte del ticket.
- Cronaca nella Scheda (cosa è stato fatto, effetto sui documenti, garanzia): è nelle voci di History and decision. Una versione della Scheda che scrive "invariato" o rimanda a una versione precedente, o una catena di versioni della Scheda incompleta in `claude`.

## Documenti attesi in `esecuzione-N/103/`

- Radice: il PDF della versione corrente della Scheda di intervento (nessun altro documento).
- `claude`: i sorgenti Markdown della Scheda di intervento con tutte le versioni (bozza, completa, correzioni del piano), ognuna completa. I messaggi inviati al cliente (domanda a Franco, risposta nel ticket, risposta di garanzia sulla segnalazione del 28 ottobre) stanno in `source`, non in `claude`.
- `source`: la richiesta, la trascrizione e la sintesi della telefonata, la risposta di Franco, la segnalazione di garanzia.
- `log`: `history-and-decision.md`.
- Nessun documento per la pubblicazione, nessun Manuale né Documento tecnico.
