# Diario, ticket 2 (urgenza sul pagamento), esecuzione 1

Scenario: `../scenario.md`. Base: `../../base-comune.md`. Eseguito il 2026-10-06 da Claude, che ha recitato tutti i ruoli. Piani e skill nella versione di quel giorno, non corretti durante la prova.

Codice della lavorazione: 105. Cartella di uscita: `105/`.

## Cronologia

**Mercoledì 14 ottobre**

- 9:40, Marta (cliente): apre il ticket 105 su osTicket con il testo dello scenario.
- 9:50, Leonardo (chi analizza), skill `kickoff-ticket` solo per l'avvio: legge la richiesta per intero. Assegna l'urgenza sui fatti: urgente, perché il pagamento è fermo per un circuito e ci sono ordini persi. La skill dice di non ritardare l'intervento e di usarsi in parallelo o dopo: "Dillo e fermati". Risponde a Marta per presa visione. Crea la cartella `105/` con `storico.md` e `decisioni.md` vuoti.
- 9:55, Leonardo: avvia il percorso d'urgenza del Piano dei ticket. Chiama chi gestisce il team.
- 10:00, chi gestisce il team: decide l'interruzione. Sceglie lo sviluppatore 2 (ha scritto il pagamento) anche se è sul comparatore. Voci in `decisioni.md`: DEC1.
- 10:05, sviluppatore 2: mette in pausa l'issue in corso del comparatore (story F11.2): lavoro salvato, commento sullo stato, issue riportata a PLANNED. Le ore da qui vanno sul ticket.
- 10:05, Leonardo: crea il task del ticket in ClickUp (Folder "Ticket", BACKLOG poi PLANNED poi IN PROGRESS), tipo bug, urgenza urgente, stima 1,5 ore (team lead), DoD base. Vedi osservazione T2-1.
- 10:10, Leonardo, skill `pacchetto-di-garanzia`: output nella sezione "Pacchetto di garanzia" sotto.
- 10:15, Franco telefona allo sviluppatore 2 (evento 1 dello scenario). Il testo è in `105/02-sviluppo/trascrizione-2026-10-14-franco.md`. Skill `interpretazione-conversazioni`: sintesi in `105/02-sviluppo/sintesi-conversazione-lumera-105-2026-10-14.md`. Lo sviluppatore non accetta nulla di nuovo e dice che aggiornerà il ticket. Vedi T2-5.
- 10:30, sviluppatore 2: investiga. Trova la causa: il servizio esterno ha cambiato la sigla da `MC` a `MASTERCARD` e il confronto è esatto.
- 11:30, sviluppatore 2 (evento 2): la correzione tocca una funzione di confronto condivisa con il percorso di acquisto del comparatore. Chiede al team lead. Il team lead dice che, se la correzione accetta entrambe le sigle, il comportamento per il comparatore non cambia. Chi gestisce il team conferma: DEC2. Nessuna persona aggiunta.
- 14:00, sviluppatore 2: corregge la configurazione e la funzione. I test automatici passano, ma il test del confronto usa un dato finto con `MC`: passa anche con il formato rotto. Lo annota.
- 14:30, sviluppatore 2: prova su staging con la Mastercard di prova del servizio esterno: l'ordine parte. Porta il task a TESTING.
- 15:00, Leonardo, chi gestisce il team e team lead: decidono di pubblicare prima della revisione per non allungare il fermo (DEC3).
- 15:45, sistemista 1 (incaricato della pubblicazione): pubblica seguendo la Guida alla pubblicazione v1.0: riavvio del server SSR, cache svuotata su `/catalogo` e `/prodotto`. Verifica con un ordine di prova. Non esiste una scheda tecnica di rilascio per un ticket.
- 16:00, Marta (evento 3): telefona e conferma che funziona. Trascrizione in `105/03-rilascio/02-pubblicazione/trascrizione-2026-10-14-marta.md`, sintesi nello stesso posto. Non è una conferma di nulla: il ticket non ha conferme del cliente. Storico aggiornato. Vedi T2-5.
- 16:30, team lead, skill `revisione-codice`: vedi la sezione "Revisione del codice" sotto. Esito: approvata con correzioni. Il task passa a COMPLETED.
- 17:00, Leonardo, skill `scheda-di-intervento` (a posteriori): `105/01-analisi/scheda-di-intervento-105.md`, con in testa le decisioni dell'analisi. Dentro, la verifica preliminare saltata all'inizio, eseguita con la skill `kickoff-ticket` dopo.
- 17:30, sviluppatore 2, skill `resoconto-di-intervento`: `105/03-rilascio/01-resoconto/resoconto-intervento-105.md`. Inviato a Marta su osTicket. Il ticket è chiuso. Parte la garanzia di 15 giorni lavorativi, fino al 4 novembre. Vedi T2-4.

**Giovedì 15 ottobre**

- 9:00, sviluppatore 2, skill `allineamento-documenti` (dopo la chiusura): parte dalle voci "Su cosa intervenire" e "Documenti collegati" della scheda. Documento tecnico del pagamento da aggiornare: capitolo Integrazioni, nuova versione 1.3 in `105/sistema/documento-tecnico-pagamento-v1.3.md`. Manuale v1.3, F4: nessun cambiamento visibile. Guida alla pubblicazione: nessuna modifica. Il rapporto di impatto non si salva (skill): la modifica è nelle versioni e nello storico. Vedi T2-6.
- 14:00 circa (evento 4): il servizio esterno annuncia che cambierà il formato anche per Maestro la settimana dopo. Leonardo apre il ticket 110 (normale), che comprende l'issue di rimozione della causa già aperta il 14. Il 105 non si modifica (DEC4). Il ticket 110 non è eseguito in questa prova.

**Mercoledì 21 ottobre**

- 10:00, Marta (evento 5): segnala che un'altra Mastercard fallisce per lo stesso motivo. Lo sviluppatore 2 è in ferie fino al 23 ottobre.
- 10:15, Leonardo, skill `pacchetto-di-garanzia`: vedi la sezione "Pacchetto di garanzia, 21 ottobre".
- 10:30, chi gestisce il team: decide che lavora lo sviluppatore 3 (DEC5).
- 14:00, sviluppatore 3: corregge, usando la scheda a posteriori del 14 ottobre come guida. Il team lead rivede in 20 minuti.
- 16:00, sistemista 1: pubblica con la Guida (SSR, cache). Verifica.
- 16:30, sviluppatore 3: invia a Marta il resoconto breve. L'aggiornamento dei documenti è già coperto dalla versione 1.3 del Documento tecnico; si aggiunge una riga alla versione (1.3.1) e allo storico.

## Pacchetto di garanzia, 14 ottobre (skill `pacchetto-di-garanzia`)

1. **La garanzia è valida?** Nuovo pagamento rilasciato il 14 settembre, durata pianificata 84 giorni. Il 50% è 42 giorni di calendario, maggiore di 15: garanzia fino al 26 ottobre. Segnalazione del 14 ottobre: valida.
2. **Divisione delle voci.** Una voce: bug. Il sistema fa una cosa diversa dal Manuale (F4 Pagamento: l'utente deve poter pagare con le carte accettate). Copre sempre.
3. **Issue.** La voce coincide con il ticket 105: non si crea un secondo task. Il task del 105 riceve l'etichetta `garanzia`. Per un progetto la skill chiede la List "Garanzia" nel Folder della lavorazione originale: il codice della lavorazione originale del pagamento non è nella base (T2-3).
4. **Capacità.** Urgenza: urgente. Buffer di sprint dello sviluppatore 2: il 20% della capacità. Il suo sprint 4 ha 30 ore (la settimana 2 è in ferie): buffer 6 ore, usate 3,5 più 0,5 del team lead e 0,5 del sistemista. Resta nel buffer. Nessun prestito. Effetto sul progetto da cui è preso (comparatore): il margine di SAL2 resta 24 ore (metà del buffer iniziale di 48): in linea per un soffio. Nessuna data già comunicata cambia, quindi il cliente del comparatore non si avvisa.
5. **Il cliente.** Risposta: il Resoconto di intervento (il 105 è già il resoconto).

## Revisione del codice, 14 ottobre (skill `revisione-codice`)

Revisore: team lead. Issue: ticket 105. Repository: sito, pagamento. Non esistono file di regole per quella parte oltre al CLAUDE.md generale (dichiarato).

- Corrispondenza con la issue: sì. La modifica accetta entrambe le sigle e basta.
- Corrispondenza con la story: F4 rispettata.
- Regole della repo: nessuno scostamento.
- Correttezza: il confronto resta esatto per gli altri circuiti. Rischio dichiarato.
- Sicurezza e dati: nessun input nuovo.
- Test: **Da correggere.** Il test del confronto usa un dato finto con `MC`: non avrebbe fermato il difetto. Serve un test con i dati reali del servizio.
- Suggerimento: confronto non sensibile alle maiuscole e mappa delle sigle.
- **Esito.** Approvata con correzioni. Nuove issue: test con dati reali; mappa delle sigle (rimozione della causa).
- **Non controllato.** Che altri circuiti abbiano già cambiato formato.

## Pacchetto di garanzia, 21 ottobre (skill `pacchetto-di-garanzia`)

1. **Garanzia valida?** Due garanzie coprono quel giorno: quella del nuovo pagamento (fino al 26 ottobre) e quella del ticket 105 (15 giorni lavorativi dal 14 ottobre, fino al 4 novembre). Vedi T2-2.
2. **Voce.** Bug (la stessa causa: una variante della sigla non coperta). Assunzione dell'esecuzione: la variante è `MASTERCARD_DEBIT`, non presente nello scenario.
3. **Issue.** Task nel Folder "Ticket" con etichetta `garanzia` e il codice 105 nel nome (105-G1), come la skill prevede per un ticket. Per il progetto originale si userebbe la List "Garanzia". Si sceglie il 105 perché è la lavorazione che ha toccato quel punto. Vedi T2-2.
4. **Capacità.** Urgente: buffer di sprint dello sviluppatore 3 (12 ore, 2 usate). Lo sviluppatore 2 non è disponibile (ferie): nessun prestito necessario.
5. **Il cliente.** Risposta in `105/04-garanzia/risposta-cliente-2026-10-21.md` e resoconto breve a fine pacchetto.

## Annotazioni di esecuzione e osservazioni preliminari

Queste sono le difficoltà incontrate recitando. L'analisi formale si fa con la skill `analisi-test`.

- **T2-1, Buco.** Il task in ClickUp di un ticket urgente non ha un proprietario: la skill `scheda-di-intervento` lo crea "a scheda completa", ma per un urgente la scheda si scrive dopo. Serve però da subito per stati e ore tracciate. Chi lo crea e quando?
- **T2-2, Buco e Contraddizione.** Due garanzie si sovrappongono (nuovo pagamento e ticket 105) e il Piano dei ticket e le Regole comuni non dicono su quale lavorazione si registra una nuova voce. Le Regole dicono anche che il pacchetto di garanzia "non apre una nuova lavorazione" e "prosegue nella stessa richiesta aperta nel sistema di ticketing che l'ha originata", mentre il 105 è già una richiesta nuova su osTicket.
- **T2-3, Base.** La base non dà il codice della lavorazione del nuovo pagamento, né se è un progetto o un ticket, quindi non si sa dove registrare le ore e la causa per il Report di progetto e quale List "Garanzia" usare. Manca anche cosa dice il Manuale F4 sui circuiti.
- **T2-4, Contraddizione.** Il Piano dei ticket dice che il ticket si chiude quando "il lavoro è in produzione e il resoconto è inviato", ma il percorso d'urgenza scrive il Resoconto di intervento dopo. Qui il ticket è rimasto aperto circa 1,75 ore dopo la pubblicazione (15:45 a 17:30). La garanzia decorre dalla chiusura o dalla pubblicazione?
- **T2-5, Peso.** Due sintesi di conversazione (Franco e Marta) per telefonate senza decisioni né conferme: la skill `interpretazione-conversazioni` è prevista "dopo ogni conversazione" e produce tre parti anche quando la terza non serve. Per un'urgenza il tempo è scarso.
- **T2-6, Contraddizione.** Lo scenario si aspetta una "nota di cosa è stato aggiornato" per l'aggiornamento dei documenti, mentre la skill `allineamento-documenti` dice che il rapporto di impatto non si salva. La cartella `03-aggiornamento-documenti` del Piano dei ticket non ha quindi nessun documento.
- **T2-7, Contraddizione.** Franco telefona allo sviluppatore 2, che è anche il responsabile del ticket. La guida dello sviluppatore dice di rispondere che la richiesta "passa dal responsabile", ma qui lo sviluppatore è il responsabile. Per un ticket il contatto diretto con il cliente non è regolato.
- **T2-8, Passaggio.** Il Piano dei ticket dice che il ticket urgente "non aspetta la verifica", ma la skill `kickoff-ticket` per un urgente non produce nulla da usare dopo: la verifica saltata va rifatta da zero con la stessa skill. L'ordine "scheda a posteriori, poi verifica" non è nel piano: qui la verifica è dentro la scheda.
- **T2-9, Base.** Il margine del SAL2 è 24 ore per costruzione (48 meno 24 consumate), quindi esattamente metà del buffer iniziale: "in linea" per un soffio. Lo scenario non permette di calcolare capacità rimanente e ore rimanenti separatamente.
- **T2-10, Peso.** Per una correzione di 4,5 ore sono stati prodotti: scheda a posteriori con verifica, resoconto, due sintesi, due trascrizioni, versione del Documento tecnico, storico e decisioni, resoconto di garanzia, risposta di garanzia. Dodici file per un guasto di una riga di configurazione.
- **T2-11, Buco.** Il test automatico che passa con un dato finto è un problema di qualità del lavoro originale (il nuovo pagamento). Nessuna regola dice a chi segnalarlo né se conta come causa "test mancante" nel Report di progetto della lavorazione originale.

## Esito rispetto allo scenario (autovalutazione, non sostituisce l'analisi)

- Urgenza assegnata per prima sui fatti: sì.
- Persona scelta per conoscenza del modulo, interruzione decisa in un solo punto, issue in pausa a PLANNED, ore sul ticket: sì.
- Percorso d'urgenza e pacchetto di garanzia combinati: sì, con le ambiguità T2-2 e T2-4.
- Revisione dopo la pubblicazione, test automatico finto segnalato, issue di rimozione causa: sì.
- Scheda a posteriori con quattro voci e verifica dopo: sì.
- Cliente del comparatore non informato: sì (nessuna data cambia).
- Franco: richiesta diretta gestita, vedi T2-7.
- Marta conferma a voce: registrata, nessun valore.
- Secondo cambio di formato: ticket nuovo 110, 105 non modificato.
- Nuova segnalazione del 21 ottobre: pacchetto di garanzia, sviluppatore 3 per assenza dello sviluppatore 2.
- Non è successo: attesa della verifica, issue lasciata IN PROGRESS, ore sul progetto, aggiornamento dei documenti prima della pubblicazione, due lavorazioni per lo stesso problema (ma il 105-G1 è un secondo task, vedi T2-2).
