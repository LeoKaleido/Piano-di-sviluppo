# Registro delle decisioni della lavorazione 105

## DEC1, Chi interviene sull'urgenza

- **Data.** 2026-10-14.
- **Decisione.** Interviene lo sviluppatore 2, che ha scritto il pagamento, anche se lavora al comparatore. La sua issue in corso torna a PLANNED.
- **Chi ha deciso.** Chi gestisce il team, su proposta di chi analizza.
- **Motivo.** È la persona che conosce meglio la parte coinvolta. Lo sviluppatore 3 non conosce il modulo, il team lead ha 8 ore e serve per la revisione.
- **Alternative scartate.** Lo sviluppatore 3 (sempre disponibile per i ticket, ma senza conoscenza del pagamento). Il team lead.
- **Effetto.** Ore sul ticket e sul buffer di sprint dello sprint 4 (buffer dello sviluppatore 2: 6 ore, usate 3,5). Margine di SAL2 invariato.
- **Riferimenti.** Ticket 105.

## DEC2, Funzione di confronto condivisa

- **Data.** 2026-10-14.
- **Decisione.** Si corregge la funzione di confronto in modo compatibile con l'uso che ne fa il comparatore (accetta sia `MC` sia `MASTERCARD`), senza toccare altro e senza aggiungere persone.
- **Chi ha deciso.** Team lead, consultato dallo sviluppatore 2; confermato da chi gestisce il team.
- **Motivo.** La correzione è piccola e la compatibilità con il comparatore è verificabile a mano.
- **Alternative scartate.** Rimandare finché non si è ricostruito l'uso nel comparatore (inaccettabile con ordini persi).
- **Effetto.** 1 ora in più.
- **Riferimenti.** Ticket 105.

## DEC3, Revisione dopo la pubblicazione

- **Data.** 2026-10-14.
- **Decisione.** La revisione del codice si fa dopo la pubblicazione, dal team lead, per non ritardare la correzione.
- **Chi ha deciso.** Chi analizza, con il team lead.
- **Motivo.** Percorso d'urgenza: la revisione si fa comunque ma può seguire.
- **Alternative scartate.** Revisione prima della pubblicazione (30 minuti in più con il sistema fermo).
- **Effetto.** Nessuno sulle ore.
- **Riferimenti.** Ticket 105.

## DEC4, Il secondo cambio di formato non è il ticket 105

- **Data.** 2026-10-15.
- **Decisione.** Il cambio annunciato per Maestro è il ticket 110, normale. Il 105 non si modifica.
- **Chi ha deciso.** Chi analizza.
- **Motivo.** Il 105 è chiuso: una richiesta nuova e non un guasto in corso è un ticket nuovo.
- **Alternative scartate.** Riaprire il 105.
- **Effetto.** Ticket 110 in coda.
- **Riferimenti.** Ticket 110.

## DEC5, Nuova segnalazione del 21 ottobre

- **Data.** 2026-10-21.
- **Decisione.** È un pacchetto di garanzia, urgente, registrato sul 105. La fa lo sviluppatore 3, con la Scheda di intervento a posteriori del 14 ottobre come guida.
- **Chi ha deciso.** Chi gestisce il team, su proposta di chi analizza.
- **Motivo.** Lo sviluppatore 2 è in ferie dal 19 al 23 ottobre. Il lavoro è un guasto che ferma ordini.
- **Alternative scartate.** Prestito di ore dal comparatore (non serve). Attendere il rientro dello sviluppatore 2.
- **Effetto.** 2 ore sul buffer di sprint dello sviluppatore 3. Nessuna conseguenza sui progetti.
- **Riferimenti.** Ticket 105, `04-garanzia`.
