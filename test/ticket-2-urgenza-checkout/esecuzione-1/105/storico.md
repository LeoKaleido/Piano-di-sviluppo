# Storico della lavorazione 105

Cliente: Lumera Arredi. Lavorazione: Mastercard non accettata nel pagamento (ticket urgente, anche pacchetto di garanzia).

- 2026-10-14, richiesta, ingresso: Marta apre il ticket 105 su osTicket alle 9:40, "i clienti con Mastercard non riescono a pagare". Urgente (sistema fermo sul pagamento, ordini persi). Effetto: percorso d'urgenza. Riferimenti: osTicket 105, DEC1.
- 2026-10-14, imprevisto, sviluppo: lo sviluppatore 2 è tolto al comparatore (codice 100) per l'urgenza. L'issue in corso (story F11.2) torna a PLANNED con commento sullo stato. Effetto: 3,5 ore dello sviluppatore 2 sul buffer di sprint dello sprint 4, nessun effetto sul margine di SAL2. Riferimenti: DEC1.
- 2026-10-14, richiesta, sviluppo: Franco telefona a Marta e allo sviluppatore 2 per chiedere di fare presto. Nessuna richiesta nuova, nessuna conferma. Effetto: nessuno. Riferimenti: sintesi del 2026-10-14 in `02-sviluppo`.
- 2026-10-14, blocco, sviluppo: la correzione tocca una funzione di confronto condivisa con il percorso di acquisto del comparatore. Effetto: 1 ora in più sullo sviluppatore 2. Riferimenti: DEC2.
- 2026-10-14, rilascio, pubblicazione: pubblicata dall'incaricato (sistemista 1) alle 15:45, con riavvio del server SSR e cache svuotata come da Guida alla pubblicazione v1.0. Verificata con un pagamento reale di Marta. Il ticket è chiuso alle 17:30, con l'invio del Resoconto di intervento. Da qui decorre la garanzia del ticket: 15 giorni lavorativi, fino al 4 novembre. Riferimenti: DEC3.
- 2026-10-14, conferma del cliente, rilascio: Marta conferma a voce che i pagamenti funzionano. Non è una conferma di nulla (il ticket non ha conferme né prove del cliente). Effetto: nessuno. Riferimenti: sintesi del 2026-10-14 in `03-rilascio/02-pubblicazione`.
- 2026-10-15, fase completata, rilascio: aggiornamento dei documenti dopo la chiusura: Documento tecnico del pagamento aggiornato. Effetto: 0,5 ore. Riferimenti: `sistema/documento-tecnico-pagamento-v1.3.md`.
- 2026-10-15, imprevisto, rilascio: il servizio esterno di pagamento annuncia che la settimana successiva cambierà il formato anche per Maestro. Effetto: aperto il ticket 110 (non è una modifica del 105). Riferimenti: osTicket 110, DEC4.
- 2026-10-21, segnalazione in garanzia, garanzia: una Mastercard fallisce per lo stesso motivo su una variante della sigla non coperta dalla correzione del 14 ottobre. Effetto: pacchetto di garanzia, sviluppatore 3 (lo sviluppatore 2 è in ferie), 2 ore sul buffer di sprint dello sprint 4. Riferimenti: DEC5.
- 2026-10-21, rilascio, garanzia: correzione pubblicata alle 16:00, Resoconto breve inviato a Marta alle 16:30. Effetto: nessuno sulle date del comparatore. Riferimenti: `04-garanzia`.
