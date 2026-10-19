# Diario, ticket 1 (103), prova 1

Data dell'esecuzione: 2026-10-11. Piani e skill nella versione del repository a quella data (con le correzioni di forma ai piani dei ticket e di prodotto non ancora committate). Le osservazioni sono segnate con il tipo e un codice T1-n, riprese poi nell'analisi.

## 5 ottobre 2026

- **Marta (cliente).** Apre il ticket 103 su osTicket con il testo dello scenario. Produce: la richiesta.
- **Leonardo (chi analizza), nessuna skill, Piano dei ticket fase 1.** Assegna per prima l'urgenza: normale, perché il cliente scrive "non urgente" e i fatti non mostrano sistema fermo. Risponde a Marta per presa visione, senza data. Produce: urgenza e presa visione. Nessun problema.
- **Leonardo, `kickoff-ticket`.** Avvio: richiesta, cliente e sistema, nessuna scadenza, documenti (Manuale v1.3, Documento tecnico v1.2, Guida v1.0, Schede dei ticket 101 e 102, lavorazione 100) e tre repository dalla base. Stima a occhio di 8 ore, quindi tempo massimo della verifica 48 minuti (10%). Parte A, parte B e decisioni come nella Scheda. Produce: le decisioni dell'analisi. Tempo usato: 45 minuti.
  - T1-1, Buco: gli esiti della parte A non contemplano un ticket aperto che tocca lo stesso codice senza essere un doppione (101). Si è deciso "procedere in sequenza" come variante di "nessuna sovrapposizione".
  - T1-2, Buco: gli esiti della parte B non contemplano "il comportamento è come scritto, non è un bug, la richiesta è una feature su un'ambiguità del Manuale". Il caso più vicino ("la causa è fuori dal codice, l'intervento è diverso da quello chiesto") non descrive il caso.
  - T1-3, Buco: gli esiti complessivi (Regole comuni e `kickoff-ticket`) dicono che "da rimandare" vale per conflitto con un progetto, sviluppo in corso o bug non riprodotto. L'attesa della decisione del referente su un'ambiguità non è elencata. L'uso fatto qui è l'unico possibile, ma è fuori dal testo.
  - T1-4, Contraddizione: `kickoff-ticket` chiede domande per il cliente "senza soluzioni né alternative", ma la domanda per Franco ha senso solo con le due alternative e un esempio numerico.
- **Leonardo, `scheda-di-intervento` (bozza).** La decisione di Franco manca: la scheda è una bozza ("BOZZA INTERNA"), con "Cosa manca: decisione di Franco". Il task in ClickUp non viene creato: la skill lo crea a scheda completa. Produce: bozza della Scheda, domanda per Franco (file `domanda-per-franco-2026-10-05.md`) inviata nel ticket.
  - T1-5, Buco: finché il ticket aspetta il referente non esiste nulla in ClickUp, né un task né uno stato. Il Piano dice che il ticket resta sospeso informalmente, ma una coda "sospesi" non c'è: il ticket sparisce dalla vista del supervisore.
  - T1-6, Passaggio: `kickoff-ticket` dice di salvare le decisioni "in testa alla Scheda"; con la Scheda in bozza le decisioni stanno nella bozza, senza un posto stabile. Si è scelto di tenerle nella bozza, che nell'esecuzione compare nel file finale.
- **Leonardo, `registro-decisioni`, `storico-lavorazione`.** Registra DEC1 e DEC2 e una voce di storico. Cartella della lavorazione creata con `storico.md` e `decisioni.md` vuoti. Nessun problema di merito.

## 13 ottobre 2026

- **Franco (cliente).** Telefona a Leonardo (trascrizione `trascrizione-2026-10-13-franco.md`). Risponde: sconto prima dell'IVA, per tutti i codici di importo fisso.
- **Leonardo, `interpretazione-conversazioni`.** Produce sintesi, "dove riportare" e riepilogo scritto in un solo file. Il riepilogo parte lo stesso giorno. Lo strumento di trascrizione non esiste: la trascrizione è scritta a mano. Nessun problema di merito.
  - T1-7, Manca: la skill dice che la conferma "vale solo dopo il riepilogo scritto" ma non dice se serve una risposta di Franco al riepilogo. Il riepilogo chiede di rispondere solo se qualcosa non corrisponde, quindi il lavoro parte sul silenzio di un cliente che "legge poco". Per i ticket il silenzio non è mai trattato.
- **Leonardo, `registro-decisioni`, `storico-lavorazione`.** DEC3 e voce di conferma. Sospensione: 5 giorni lavorativi pieni (6, 7, 8, 9 e 12 ottobre).
- **Leonardo, `scheda-di-intervento` (scheda completa).** Il responsabile (sviluppatore 3) conferma la stima di 8 ore. Produce: Scheda completa. Dati del task in ClickUp mostrati al responsabile e creati dopo la sua conferma: Folder "Ticket", nome "103 - sconto prima dell'IVA nel carrello", stato BACKLOG, campi tipo feature, urgenza normale, stima 8 ore, checklist con le sette condizioni della DoD più la DoD base, rimando alla Scheda.
  - T1-8, Base: la base non dice dove sta il calcolo del carrello (modulo di `lumera-api` o codice del sito) e i repository non avevano nome; la prova ha usato i nomi aggiunti alla base di questo test. Annotato per la base, già corretto qui.
- **Leonardo e chi gestisce il team (pianificazione), nessuna skill.** Capacità dello sviluppatore 3 per lo sprint 4: 15 ore a settimana per i ticket, quindi 30 ore, meno il buffer di sprint del 20% (6 ore): 24 ore. Già pianificate 7 ore (ticket 101 da 4 ore e ticket 102 da 3 ore). Con il 103 da 8 ore: 15 ore, dentro le 24. Il supervisore controlla in ClickUp. Il ticket passa a PLANNED nella List dello sprint 4 e Marta riceve un messaggio per presa visione (già inviato il 5 ottobre).
  - T1-9, Manca: la base non dice quanti altri ticket ha lo sviluppatore 3 nello sprint 4. Il calcolo copre solo i lavori noti e lo dichiara.

## 14 ottobre 2026

- **Sviluppatore 3.** Il 101 è chiuso in giornata (4 ore). Porta il 103 a IN PROGRESS, scrive la funzione di calcolo e i test del modulo `prezzi`. Decide la ripartizione dell'importo tra aliquote IVA diverse con il team lead (DEC5).
  - T1-10, Buco: la scelta sulla ripartizione di un importo fisso tra aliquote è una decisione di comportamento che il cliente vedrebbe (libri a IVA ridotta). Né la Scheda né il Manuale la prevedono; chi sviluppa la prende da solo. Il Manuale dice "solo il cosa": qui il comportamento visibile è deciso in sviluppo.

## 15 ottobre 2026

- **Sviluppatore 3.** Scopre che i preventivi manuali del gestionale usano lo stesso calcolo. Corregge la voce "Su cosa intervenire" della Scheda e avvisa chi analizza.
- **Leonardo.** Aggiorna la stima da 8 a 12 ore e ricontrolla la categoria: 12 ore, una persona, resta un ticket. Il supervisore ricontrolla la capacità: 7 + 12 = 19 ore su 24. Registra DEC4 e una voce di storico.
  - T1-11, Buco: `scheda-di-intervento` descrive la correzione "a fine lavoro", solo per "Su cosa intervenire". Una correzione a metà lavoro con aumento della stima non ha una regola: né chi riscrive la voce "Stima", né se il supervisore va avvisato per iscritto, né come si segna "stima validata". Si è fatto per analogia.

## 19 ottobre 2026

- **Team lead, `revisione-codice`.** Ticket 103 in TESTING sullo staging. Fonti: ticket, modifica, `CLAUDE.md` di `lumera-api`, Documento tecnico.
  - Condizioni della DoD: 109,80 euro nel carrello: sì. Percentuali invariate: sì. Totale con IVA ridotta e 22%: no, il caso con più aliquote non ha un test. Carrello e pagamento coincidono, anche sui casi del 101: sì. Test del pagamento: sì. Test sul calcolo dello sconto: sì (nuovi). Preventivo del gestionale a 109,80: sì. DoD base: in corso.
  - Commenti, in ordine di gravità. Da correggere: nel file dei test di `lumera-api` manca il caso con righe a IVA 22% e ridotta (DoD, terzo punto). Suggerimento: il nome della funzione di ripartizione non dice che arrotonda sull'ultima riga.
  - Regole della repo: `CLAUDE.md` di `lumera-api` rispettato (test presente, nomi dei file in minuscolo con trattini).
  - Esito: approvata con correzioni. Non controllato: il `CLAUDE.md` di `lumera-gestionale`, perché la base non ne descrive il contenuto, e il comportamento in produzione.
  - Nuove issue: nessuna.
  - Dove va: commenti dell'issue in ClickUp; nessun file.
- **Sviluppatore 3.** Aggiunge il test, il ticket passa a COMPLETED. Ore tracciate: 11 di sviluppo e 2 di revisione. Produce: ticket COMPLETED. Nessun problema.

## 20 ottobre 2026

- **Incaricato della pubblicazione (sistemista 1), nessuna skill.** Legge la Guida v1.0 (il piano dice "di norma il lunedì": questo è un martedì, a metà sprint, permesso per un ticket normale). Pubblica nell'ordine: API, sito (riavvio del server SSR, cache svuotata su `/catalogo` e `/prodotto`), gestionale. Per il gestionale la Guida non dice nulla: pubblica come per le API, senza regole scritte, e lo dichiara. Verifiche: nel sito 100 euro più IVA con codice da 10 euro dà 109,80 euro; nel gestionale un preventivo con lo stesso codice dà 109,80 euro.
  - T1-12, Manca: la Guida non copre il gestionale. Non c'è una persona o un passo che la faccia segnalare prima della pubblicazione: la DoD base chiede l'annotazione alla issue che cambia il modo di pubblicare, ma qui il modo non cambia, è solo scoperto incompleto.
- **Sviluppatore 3 (responsabile).** Risposta nel ticket, dopo l'avviso dell'incaricato. Testo:

  "Buongiorno Marta, da oggi i codici sconto di importo fisso vengono tolti dal prezzo prima di aggiungere l'IVA, come deciso da Franco. Con un prodotto da 100 euro più IVA al 22% e un codice da 10 euro il totale è ora 109,80 euro. La stessa regola vale anche per i preventivi fatti dal gestionale. I codici sconto in percentuale non cambiano e gli ordini già pagati non vengono modificati."

  Il ticket si chiude. Garanzia: 15 giorni lavorativi dal 20 ottobre, cioè fino a martedì 10 novembre (21, 22, 23, 26, 27, 28, 29, 30 ottobre; 2, 3, 4, 5, 6, 9, 10 novembre). Voce di storico, ore: 11 più 2.
  - T1-13, Superfluo (lieve): il testo sul gestionale e sugli ordini già pagati non è un fatto previsto dalla Scheda ("ordini già pagati non modificati" è una deduzione). Va bene per Marta, ma il piano dice di restare su ciò che l'utente vede e "cosa è stato aggiunto".

## 21 ottobre 2026

- **Sviluppatore 3, `allineamento-documenti` (dopo la chiusura).** Fonti: voci "Su cosa intervenire" e "Documenti collegati" della Scheda corretta.
  - Rapporto di impatto. Manuale v1.3: F3 manca la regola dello sconto (aggiornamento: nuova F3.4); F4.2 invariata e confermata. Documento tecnico v1.2: capitoli su `prezzi` e carrello (aggiornamento). Guida v1.0: nessun cambiamento nel modo di pubblicare, ma la lacuna sul gestionale. Lavorazione 100 (comparatore): Manuale e Documento tecnico controllati, F12.2 senza impatto; il capitolo Milestone del Documento tecnico non si tocca. Ticket 101: Scheda non raggiunta (non è nella base). Lavorazione 96: documenti non raggiunti (non sono nella base).
  - Il Manuale v1.3 è il documento del sistema ma contiene anche le story del comparatore, confermate da Franco per un progetto aperto. La skill dice sia "non si modifica in silenzio un documento approvato per un lavoro aperto" sia "il Manuale appartiene al sistema e si aggiorna". Soluzione: nuova versione v1.4 che cambia solo F3, le story di 100 invariate; project manager 1 informato, nessuna comunicazione al cliente.
  - T1-14, Contraddizione: `allineamento-documenti` e `manuale-del-prodotto` per il documento del sistema che il cliente ha confermato per un progetto aperto.
  - Applica con `manuale-del-prodotto` (v1.4), `documento-tecnico` (v1.3), `guida-alla-pubblicazione` (v1.1 con "Cosa manca"). La conferma è del responsabile, che è la stessa persona che applica: formalità.
  - T1-15, Peso: dopo la chiusura servono quattro skill e tre documenti per un ticket di 12 ore. Il lavoro vale perché il Manuale e il Documento tecnico restano veri, ma la voce nello storico, la voce nel Registro, il rapporto di impatto e le tre versioni portano il costo oltre un quarto d'ora per documento.
  - T1-16, Base: la base non descrive il Registro delle variazioni di 96 né le sue Schede (101): un allineamento vero cercherebbe lì.

## 28 ottobre 2026

- **Marta.** Segnala che un codice sconto da 20 euro su un articolo da 15 euro dà un totale negativo.
- **Sviluppatore 3 (responsabile), `pacchetto-di-garanzia`.**
  - Garanzia valida: sì, il 28 ottobre è il sesto giorno lavorativo dopo il rilascio del 20 ottobre; scade il 10 novembre.
  - Voce: il Manuale (v1.4) non dice cosa succede se lo sconto supera il totale. Non è un bug: è un'ambiguità. Il comportamento c'era anche prima (15 euro più IVA al 22% meno 20 euro faceva meno 1,70 euro, oggi fa meno 6,10 euro). Non è un difetto di ciò che è stato rilasciato.
  - T1-17, Buco: `pacchetto-di-garanzia` non dice cosa fare di una segnalazione su un comportamento preesistente, non nato dal lavoro rilasciato, che emerge nel periodo di garanzia. Le categorie sono bug, variazione piccola, richiesta estetica, ambiguità e fuori garanzia. Qui è un'ambiguità che sarebbe una richiesta piccola.
  - Domanda a Franco, nel ticket: "Se un codice sconto supera il totale del carrello, il totale deve essere zero o il codice deve essere rifiutato?"
  - Urgenza: i fatti non dicono se il pagamento accetta un totale negativo; si assume normale. T1-18, Manca: la base non dice come reagisce il pagamento a un totale negativo; la skill non chiede di verificare l'urgenza di una segnalazione in garanzia.
  - Capacità: normale, usa la capacità dei ticket dello sviluppatore 3 (sprint 5). Nessun prestito, nessun effetto su progetti.

## 29 ottobre 2026

- **Franco.** Risponde per email: "Il totale non può mai andare sotto zero." Decisione scritta, nessun riepilogo necessario. DEC6.
- **Sviluppatore 3, `pacchetto-di-garanzia`.** Classifica: variazione piccola coperta (2 ore, una story, richiesta del referente come conferma). Issue di garanzia in ClickUp, Folder "Ticket", nome "103 - garanzia - totale non negativo", etichetta `garanzia`, tipo variazione, stima 2 ore, urgenza normale, DoD base. Risposta a Marta salvata in `04-garanzia/risposta-cliente-2026-10-29.md`.
  - T1-19, Peso (lieve): la risposta in `04-garanzia` è un file per un messaggio di tre righe. Il piano dei ticket dice che il rilascio non ha documenti, ma la garanzia sì.

## 10 novembre 2026

- **Sviluppatore 3, `pacchetto-di-garanzia` (fine periodo) e `storico-lavorazione`.** Nello storico: una voce, 2 ore, causa "requisito non chiaro" (l'elenco delle cause ha "requisito frainteso": il caso è un requisito mai scritto). Ore totali del ticket: 13 più 2 di garanzia.
  - T1-20, Passaggio (lieve): le cause elencate (requisito frainteso, test mancante, regressione, causa esterna, altro) non contengono "requisito non definito dal Manuale".

## Controlli finali

- Caratteri vietati: ricerca eseguita sui file prodotti, vedi analisi.
- Documenti non attesi prodotti: nessuno.
