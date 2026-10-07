---
name: scheda-di-intervento
description: Scrive la Scheda di intervento di un ticket, il documento interno che dice allo sviluppatore cosa fare e su cosa mettere le mani, e la scheda a posteriori di un ticket urgente. Usala per ogni ticket da lavorare, dopo l'analisi di `kickoff-ticket`.
---

# Scheda di intervento

## A cosa serve

La Scheda di intervento è il documento interno di un ticket. La legge solo lo sviluppatore a cui il ticket è assegnato, il responsabile: gli dice cosa deve fare, su cosa mettere le mani e quando ha finito. Il cliente non la vede mai.

Ha un secondo uso: a fine lavoro è la fonte per l'aggiornamento dei documenti (skill `allineamento-documenti`). Per questo le parti di codice e i documenti collegati vanno indicati con precisione.

Un ticket non ha un documento per il cliente: a lavoro pubblicato il responsabile risponde nel ticket con un messaggio breve.

La skill copre tre situazioni:

- **Scheda iniziale**, scritta da chi analizza la richiesta.
- **Correzione a fine lavoro**, quando lo sviluppatore ha toccato parti diverse da quelle previste.
- **Scheda a posteriori**, per un ticket urgente già risolto.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Il ticket.** Il testo della richiesta e degli scambi con il cliente, oppure dove si trovano.
2. **Il cliente.** Il nome con cui indicarlo.
3. **Le decisioni dell'analisi.** Categoria (deve essere ticket), esito della verifica, stima in ore, tipo (bug, feature, entrambi, assistenza), urgenza, responsabile. Vengono da `kickoff-ticket` e vanno in testa alla scheda.
4. **La situazione.** Quale delle tre sopra. Se non è detto e non esiste ancora una scheda, è la scheda iniziale.
5. **L'esito della verifica preliminare**, per la scheda iniziale: parti del sistema toccate, lavori e documenti toccati. "Su cosa intervenire" e "Documenti collegati" partono da lì. Se la verifica non è stata fatta, segnalalo: una scheda scritta senza aver guardato il codice impegna su una stima non fondata.
6. **Il Manuale del prodotto**, se il sistema ne ha uno: serve per le story di riferimento.

## Informazioni mancanti

Chiedi in un unico elenco numerato ciò che serve e non trovi. Non colmare i buchi con supposizioni.

- **La stima** la fornisce chi conosce il lavoro. Puoi proporre una stima, ma finché non è confermata marcala con "[Stima da validare]". Il supervisore ne controlla la plausibilità alla pianificazione dello sprint.
- **Decisioni del cliente**: se una decisione spetta a lui, non va nella scheda come supposizione. Va chiesta nel ticket prima di scrivere la scheda.

Se mancano informazioni che nessuno può fornire subito, produci una bozza (vedi "Bozza o scheda completa").

## Scheda iniziale

In testa la scheda riporta categoria, tipo, urgenza e responsabile decisi nell'analisi e, se il cliente l'ha indicata, la scadenza. Poi queste voci, in quest'ordine:

1. **Cosa fare.** L'intervento, con le story del Manuale del prodotto a cui si riferisce (codice e titolo), se esiste un Manuale. Per un bug, la story violata e il comportamento atteso. Per un'assistenza, cosa controllare o fare.
2. **Su cosa intervenire.** Le parti del sistema da toccare, ricavate dalla verifica preliminare: per ogni parte il repository (il sistema del cliente può averne più di uno, per esempio sito pubblico e gestionale), poi moduli e file. Se il codice è usato anche altrove, indicalo con chi lo usa.
3. **Stima.** Le ore previste per il lavoro.
4. **DoD.** Le condizioni verificabili che chiudono il lavoro. Devono poter ricevere un sì o un no senza interpretazioni: "funziona correttamente" non è una condizione, "il pulsante Esporta scarica un file con tutte le righe visibili nell'elenco" lo è. Comprendono sempre la DoD base: revisione del codice da una seconda persona (skill `revisione-codice`), lavoro sullo staging, stato e ore tracciate in ClickUp.
5. **Documenti collegati.** I lavori e i documenti toccati, ricavati dalla verifica preliminare: Manuale del prodotto e Documento tecnico del sistema, documenti di progetti, Schede di intervento di altri ticket. Ogni lavoro è citato con il suo codice della lavorazione, che è il nome della sua cartella nella knowledge base. Ricorda al team che a ticket chiuso vanno controllati.

La scheda di un ticket di circa 2 ore è di poche righe.

La scheda non contiene prezzi né messaggi per il cliente.

## Il task in ClickUp

A scheda completa, mostra al responsabile i dati del task e crealo solo dopo la sua conferma, nel Folder "Ticket", in BACKLOG:

- nome: codice di osTicket e titolo breve;
- campi: tipo, urgenza, scadenza del cliente se c'è, stima in ore;
- checklist: la DoD, con la DoD base più le condizioni della scheda;
- un rimando alla scheda nella knowledge base.

## Correzione a fine lavoro

Quando lo sviluppatore ha finito, riceve la scheda e dice cosa ha toccato davvero. Correggi la voce "Su cosa intervenire" in modo che elenchi le parti toccate e non quelle previste, e segnala le differenze di rilievo: la skill `allineamento-documenti` parte da qui.

## Scheda a posteriori

Un ticket urgente viene risolto subito. A problema risolto la scheda si scrive dopo, con quattro voci:

1. **Cosa è successo.** Il problema e il suo effetto sugli utenti.
2. **Causa.** Anche in termini tecnici.
3. **Correzione.** Cosa è stato fatto, e se la correzione è definitiva o provvisoria.
4. **Su cosa si è intervenuti.** Le parti del sistema toccate e i documenti collegati, con la stessa precisione della scheda iniziale.

Se la correzione è provvisoria, segnala al team che va aperta una issue per rimuovere la causa. Segnala anche che la verifica preliminare saltata all'inizio va eseguita ora.

## Dove si salva

In `01-analisi` del ticket e come nota interna nel ticket su osTicket.

## Regole di contenuto

- **Per lo sviluppatore.** I termini tecnici, i nomi di file e di moduli sono ammessi e anzi voluti.
- **Una scheda, un ticket.** Se la richiesta contiene più lavori, ogni lavoro ha la sua scheda.
- **Nessun prezzo.**
- **Testo da incollare.** Restituisci la scheda come testo semplice, con le voci su righe separate e le etichette in chiaro, pronta per la nota interna del ticket, che il cliente non vede. Produci un file solo se viene chiesto.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

Nella scheda i nomi di file e di parti del codice si scrivono come sono.

## Bozza o scheda completa

La scheda è **completa** solo se tutte le voci sono compilate, la stima è stata confermata e nessuna domanda è rimasta senza risposta.

In ogni altro caso produci una **bozza**: la prima riga è "BOZZA INTERNA", e ogni voce incompleta è seguita da una riga "Cosa manca", con ciò che serve e chi deve fornirlo. Una bozza non si assegna allo sviluppatore.

## Controllo finale

1. **Tracciabilità.** Ogni cosa chiesta dal cliente nel ticket compare in "Cosa fare" oppure è dichiarata esclusa. Nulla sparisce in silenzio.
2. **Precisione.** "Su cosa intervenire" indica repository, moduli o file, non descrizioni generiche.
3. **DoD.** Ogni condizione è verificabile con un sì o un no.
4. **Documenti collegati.** Ogni lavoro e documento trovato dalla verifica è elencato.
5. **Contenuti fuori posto.** Nessun prezzo, nessuna stima non confermata in una scheda completa.
6. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
