# Registro delle decisioni, ticket 103

## DEC1 Categoria e urgenza

- **Data.** 2026-10-05.
- **Decisione.** Il ticket è un ticket (non un progetto) con urgenza normale.
- **Chi ha deciso.** Chi analizza (Leonardo).
- **Motivo.** Una persona, meno di 2 settimane, nessuna proposta da far decidere sul funzionamento, nessun cambio grafico. Il cliente stesso la dichiara non urgente e i fatti non mostrano un sistema fermo.
- **Alternative scartate.** Nessuna.
- **Effetto.** Entra nella capacità dei ticket, senza buffer di sprint.
- **Riferimenti.** Richiesta di Marta del 5 ottobre.

## DEC2 Rapporto con il ticket 101

- **Data.** 2026-10-05.
- **Decisione.** Il 103 procede, in sequenza dopo il 101, con lo stesso responsabile. Il 101 resta un pacchetto di garanzia a sé.
- **Chi ha deciso.** Chi analizza, d'accordo con chi gestisce il team.
- **Motivo.** I due interventi toccano lo stesso modulo ma non hanno lo stesso scopo. Unirli farebbe aspettare il 101, che è in garanzia.
- **Alternative scartate.** Unire i due ticket. Rimandare il 103 a dopo la garanzia del 26 ottobre.
- **Effetto.** La DoD del 103 comprende i casi di prova del 101.
- **Riferimenti.** Ticket 101, lavorazione 96.

## DEC3 Sconto prima dell'IVA

- **Data.** 2026-10-13.
- **Decisione.** I codici sconto di importo fisso si tolgono prima dell'IVA, per tutti i codici, anche già distribuiti.
- **Chi ha deciso.** Franco, referente del cliente.
- **Motivo.** "Come fanno gli altri" (parole di Franco).
- **Alternative scartate.** Mantenere il calcolo attuale (112 euro nell'esempio).
- **Effetto.** Il ticket passa da "da rimandare" a "da fare". Il totale dei carrelli con codice di importo fisso scende.
- **Riferimenti.** `source/2026-10-13-trascrizione.md`, `source/2026-10-13-sintesi.md` e il riepilogo scritto inviato lo stesso giorno.

## DEC4 Stima aggiornata, resta un ticket

- **Data.** 2026-10-15.
- **Decisione.** La stima passa da 8 a 12 ore e il lavoro resta un ticket.
- **Chi ha deciso.** Chi analizza, su segnalazione del responsabile; controllo del supervisore.
- **Motivo.** Il gestionale usa lo stesso calcolo per i preventivi manuali. 12 ore e una persona restano sotto le soglie di un progetto.
- **Alternative scartate.** Riclassificare come progetto.
- **Effetto.** Scheda corretta. Capacità dello sprint 4 dello sviluppatore 3 ricontrollata.
- **Riferimenti.** `claude/scheda-di-intervento-v2.md`.

## DEC5 Ripartizione dello sconto tra aliquote IVA

- **Data.** 2026-10-14.
- **Decisione.** Un importo fisso su un carrello con righe a aliquote diverse si ripartisce in proporzione al valore delle righe, e l'ultima riga assorbe il centesimo di arrotondamento.
- **Chi ha deciso.** Responsabile (sviluppatore 3), con il team lead.
- **Motivo.** È l'unico modo di togliere lo sconto prima dell'IVA mantenendo coerente l'IVA di ogni riga. Verificato solo sul calcolo a mano, non con un consulente fiscale.
- **Alternative scartate.** Applicare lo sconto alla sola aliquota piena.
- **Effetto.** Da valutare sui carrelli con prodotti a IVA ridotta (14 prodotti).
- **Riferimenti.** Revisione del codice del 19 ottobre.

## DEC6 Totale negativo in garanzia

- **Data.** 2026-10-29.
- **Decisione.** Il totale non può scendere sotto zero. Se lo sconto supera il totale, il totale è zero.
- **Chi ha deciso.** Franco, referente del cliente.
- **Motivo.** Il Manuale è silenzioso (ambiguità). Il comportamento c'era già prima della modifica del ticket.
- **Alternative scartate.** Rifiutare il codice quando supera il totale.
- **Effetto.** Piccola correzione di 2 ore in garanzia.
- **Riferimenti.** Segnalazione di Marta del 28 ottobre e risposta di Franco del 29 ottobre, in `source`.
