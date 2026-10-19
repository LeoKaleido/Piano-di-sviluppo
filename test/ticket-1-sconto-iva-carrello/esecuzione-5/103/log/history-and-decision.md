# History and decision, ticket 103

La storia e le decisioni della lavorazione, in gruppi per fase. Ogni voce ha un titolo con la data e il tipo, e campi etichettati. Le variazioni portano il codice (V1, V2) e lo stato; le decisioni il codice (DEC1, DEC2). I messaggi inviati al cliente e le sue risposte stanno in `source`.

## Analisi

### 2026-10-05, Richiesta
- **Fase.** analisi
- **Cosa.** Ticket aperto da Marta su osTicket, urgenza normale assegnata da chi analizza. Presa visione inviata a Marta (`source/2026-10-05-presa-visione.md`).
- **Effetto.** Nessuno.
- **Riferimenti.** DEC1.

### 2026-10-05, Altro
- **Fase.** analisi
- **Cosa.** Analisi e domanda a Franco con esempio numerico (`source/2026-10-05-domanda-franco.md`).
- **Effetto.** Ticket sospeso informalmente in attesa della risposta, senza termini; Scheda di intervento in bozza.
- **Riferimenti.** DEC2, `claude/scheda-di-intervento-bozza-1.md`.

### 2026-10-05, Decisione DEC1: Categoria e urgenza
- **Fase.** analisi
- **Cosa.** Il ticket è un ticket (non un progetto) con urgenza normale.
- **Chi ha deciso.** Chi analizza (Leonardo).
- **Motivo.** Una persona, meno di 2 settimane, nessuna proposta da far decidere sul funzionamento, nessun cambio grafico. Il cliente stesso la dichiara non urgente e i fatti non mostrano un sistema fermo.
- **Alternative scartate.** Nessuna.
- **Effetto.** Entra nella capacità dei ticket, senza buffer di sprint.
- **Riferimenti.** Richiesta di Marta del 5 ottobre.

### 2026-10-05, Decisione DEC2: Rapporto con il ticket 101
- **Fase.** analisi
- **Cosa.** Il 103 procede, in sequenza dopo il 101, con lo stesso responsabile. Il 101 resta un pacchetto di garanzia a sé.
- **Chi ha deciso.** Chi analizza, d'accordo con chi gestisce il team.
- **Motivo.** I due interventi toccano lo stesso modulo ma non hanno lo stesso scopo. Unirli farebbe aspettare il 101, che è in garanzia.
- **Alternative scartate.** Unire i due ticket. Rimandare il 103 a dopo la garanzia del 26 ottobre.
- **Effetto.** La DoD del 103 comprende i casi di prova del 101.
- **Riferimenti.** Ticket 101, lavorazione 96.

### 2026-10-13, Conferma
- **Fase.** analisi
- **Cosa.** Franco decide per telefono che lo sconto di importo fisso si toglie prima dell'IVA, per tutti i codici; riepilogo scritto inviato lo stesso giorno (`source/2026-10-13-riepilogo-franco.md`).
- **Effetto.** Sospeso 5 giorni lavorativi pieni (6, 7, 8, 9 e 12 ottobre).
- **Riferimenti.** DEC3, `source/2026-10-13-sintesi.md`.

### 2026-10-13, Fase completata
- **Fase.** analisi
- **Cosa.** Scheda di intervento completa (versione 1), stima di 8 ore confermata dallo sviluppatore 3; task creato in ClickUp. Ticket in PLANNED nello sprint 4.
- **Effetto.** Nessuno.
- **Riferimenti.** `claude/scheda-di-intervento-v1.md`.

### 2026-10-13, Decisione DEC3: Sconto prima dell'IVA
- **Fase.** analisi
- **Cosa.** I codici sconto di importo fisso si tolgono prima dell'IVA, per tutti i codici, anche già distribuiti.
- **Chi ha deciso.** Franco, referente del cliente.
- **Motivo.** "Come fanno gli altri" (parole di Franco).
- **Alternative scartate.** Mantenere il calcolo attuale (112 euro nell'esempio).
- **Effetto.** Il ticket passa da "da rimandare" a "da fare". Il totale dei carrelli con codice di importo fisso scende.
- **Riferimenti.** `source/2026-10-13-trascrizione.md`, `source/2026-10-13-sintesi.md` e il riepilogo scritto inviato lo stesso giorno.

## Sviluppo

### 2026-10-14, Altro
- **Fase.** sviluppo
- **Cosa.** Ripartizione di un importo fisso tra aliquote IVA diverse, decisa dal responsabile con il team lead.
- **Effetto.** Nessuno.
- **Riferimenti.** DEC5.

### 2026-10-14, Decisione DEC5: Ripartizione dello sconto tra aliquote IVA
- **Fase.** sviluppo
- **Cosa.** Un importo fisso su un carrello con righe a aliquote diverse si ripartisce in proporzione al valore delle righe, e l'ultima riga assorbe il centesimo di arrotondamento.
- **Chi ha deciso.** Responsabile (sviluppatore 3), con il team lead.
- **Motivo.** È l'unico modo di togliere lo sconto prima dell'IVA mantenendo coerente l'IVA di ogni riga. Verificato solo sul calcolo a mano, non con un consulente fiscale.
- **Alternative scartate.** Applicare lo sconto alla sola aliquota piena.
- **Effetto.** Da valutare sui carrelli con prodotti a IVA ridotta (14 prodotti).
- **Riferimenti.** Revisione del codice del 19 ottobre.

### 2026-10-15, Imprevisto
- **Fase.** sviluppo
- **Cosa.** I preventivi manuali del gestionale usano lo stesso calcolo.
- **Effetto.** Stima da 8 a 12 ore; resta un ticket.
- **Riferimenti.** DEC4, `claude/scheda-di-intervento-v2.md`.

### 2026-10-15, Decisione DEC4: Stima aggiornata, resta un ticket
- **Fase.** sviluppo
- **Cosa.** La stima passa da 8 a 12 ore e il lavoro resta un ticket.
- **Chi ha deciso.** Chi analizza, su segnalazione del responsabile; controllo del supervisore.
- **Motivo.** Il gestionale usa lo stesso calcolo per i preventivi manuali. 12 ore e una persona restano sotto le soglie di un progetto.
- **Alternative scartate.** Riclassificare come progetto.
- **Effetto.** Scheda corretta. Capacità dello sprint 4 dello sviluppatore 3 ricontrollata.
- **Riferimenti.** `claude/scheda-di-intervento-v2.md`.

### 2026-10-19, Fase completata
- **Fase.** sviluppo
- **Cosa.** Revisione del codice approvata con correzioni, applicate lo stesso giorno.
- **Effetto.** Ticket COMPLETED; ore tracciate 11 di sviluppo e 2 di revisione.
- **Riferimenti.** Nessuno.

## Rilascio

### 2026-10-20, Rilascio
- **Fase.** rilascio
- **Cosa.** Pubblicato dall'incaricato con il capitolo Pubblicazione del Documento tecnico v1.2; il gestionale è stato pubblicato per ultimo, senza una regola scritta. Ticket chiuso, risposta inviata a Marta (`source/2026-10-20-risposta-ticket.md`). Il ticket si riferisce a Manuale v1.3 e Documento tecnico v1.2 e non li aggiorna.
- **Effetto.** Garanzia di 15 giorni lavorativi, fino al 10 novembre. Riga del ticket aggiunta all'indice `ticket-chiusi.md`.
- **Riferimenti.** Nessuno.
- **Dettagli.**
  - Cosa è stato fatto: il modulo `prezzi` di `lumera-api` toglie il codice sconto di importo fisso dal totale delle righe prima di calcolare l'IVA. Con più aliquote l'importo si ripartisce in proporzione al valore delle righe e l'ultima riga assorbe il centesimo (DEC5). I codici in percentuale restano come prima. Con un prodotto da 100 euro più IVA al 22% e un codice da 10 euro il totale è 109,80 euro, uguale nel carrello, nel riepilogo del pagamento e nei preventivi manuali del gestionale. Nuovi test automatici sul calcolo dello sconto.
  - Parti toccate: `lumera-api` (modulo `prezzi` e i suoi test), `lumera-gestionale` (schermata dei preventivi manuali). `lumera-sito`: nessuna modifica. Ore: 11 di sviluppo e 2 di revisione.
  - Effetto sui documenti del sistema, riferito a Manuale v1.3 e Documento tecnico v1.2:
    - Manuale: nuova story sull'ordine di calcolo dei codici sconto di importo fisso (oggi il Manuale non dice come si applicano); nuovo termine "Codice sconto" nel glossario. F4.2 resta vera. Resta aperta la domanda emersa su F3.3 (il Manuale dice 30 giorni, il comportamento reale è 90): va chiarita con Franco.
    - Documento tecnico: capitolo 5 (F3 Carrello, nuovo comportamento di `prezzi`), capitolo 9 (decisione sulla ripartizione tra aliquote IVA), capitolo 10 (il modulo `prezzi` ha ora test sul calcolo dello sconto), capitolo 7 (capitolo Pubblicazione: il gestionale è stato pubblicato per ultimo, dopo API e sito, senza regole di riavvio e cache).
    - Comparatore (lavorazione 100): Manuale e Documento tecnico controllati, la story F12.2 non è toccata.

## Garanzia

### 2026-10-28, Garanzia
- **Fase.** garanzia
- **Cosa.** Marta segnala un totale negativo con un codice da 20 euro su un articolo da 15 euro. Classificazione: ambiguità del Manuale, comportamento preesistente; domanda a Franco (`source/2026-10-28-domanda-franco-garanzia.md`).
- **Effetto.** Nessuno.
- **Riferimenti.** DEC6.

### 2026-10-29, Conferma
- **Fase.** garanzia
- **Cosa.** Franco decide per email che il totale non scende sotto zero; risposta a Marta (`source/2026-10-29-risposta-marta.md`).
- **Effetto.** Issue di garanzia di 2 ore nello sprint 5.
- **Riferimenti.** DEC6.

### 2026-10-29, Decisione DEC6: Totale negativo in garanzia
- **Fase.** garanzia
- **Cosa.** Il totale non può scendere sotto zero. Se lo sconto supera il totale, il totale è zero.
- **Chi ha deciso.** Franco, referente del cliente.
- **Motivo.** Il Manuale è silenzioso (ambiguità). Il comportamento c'era già prima della modifica del ticket.
- **Alternative scartate.** Rifiutare il codice quando supera il totale.
- **Effetto.** Piccola correzione di 2 ore in garanzia.
- **Riferimenti.** Segnalazione di Marta del 28 ottobre e risposta di Franco del 29 ottobre, in `source`.

### 2026-11-05, Garanzia
- **Fase.** garanzia
- **Cosa.** Correzione pubblicata; risposta a Marta (`source/2026-11-05-risposta-correzione.md`).
- **Effetto.** Il totale delle righe, dopo lo sconto di importo fisso, non va sotto zero. Riga dell'indice `ticket-chiusi.md` aggiornata.
- **Riferimenti.** Nessuno.
- **Dettagli.**
  - Test: articolo da 15 euro e codice da 20 euro, totale zero nel carrello e nel riepilogo del pagamento.
  - Effetto sui documenti del sistema (riferito a Manuale v1.3 e Documento tecnico v1.2): Manuale, nuova story "Il totale del carrello non scende sotto zero"; Documento tecnico, capitolo 5 (F3) e capitolo 9 (decisione sul totale non negativo).

### 2026-11-10, Garanzia
- **Fase.** garanzia
- **Cosa.** Fine della garanzia. Una voce: totale negativo, 2 ore; causa: requisito non chiaro nel Manuale (comportamento preesistente). Ore del lavoro 13; ore di garanzia 2.
- **Effetto.** Nessuno.
- **Riferimenti.** Nessuno.
