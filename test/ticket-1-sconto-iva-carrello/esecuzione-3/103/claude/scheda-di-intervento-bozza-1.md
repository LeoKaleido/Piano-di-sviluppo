BOZZA INTERNA

# Scheda di intervento, ticket 103

Cliente: Lumera Arredi. Bozza 1, del 2026-10-05.

## Decisioni dell'analisi

- **Richiesta.** Marta segnala che i codici sconto in euro danno uno sconto più basso di quello atteso dai clienti, e chiede di togliere l'importo prima di aggiungere l'IVA. Scrive: "Non è urgente".
- **Categoria.** Ticket. Una persona, circa un giorno e mezzo di lavoro, nessuna proposta da far decidere sul funzionamento (la decisione è già presa), nessun cambio di aspetto grafico.
- **Tipo.** Feature. Il comportamento attuale non è un bug: il Manuale v1.3 non dice come si applicano i codici sconto (verificato nel Manuale). La richiesta cambia un comportamento non documentato.
- **Urgenza.** Normale. Il cliente la dichiara non urgente e i fatti non mostrano un sistema fermo, utenti bloccati o dati a rischio.
- **Scadenza del cliente.** Nessuna.
- **Responsabile.** Sviluppatore 3 (persona sempre disponibile per i ticket, conosce i ticket 101 e 102 sullo stesso codice).
- **Confronto con i lavori aperti (parte A).**
  - Ticket 101 (verificato, nota del ticket): stesso codice del carrello, stesso pagamento ancora in garanzia (lavorazione 96, fino al 26 ottobre). Non è un doppione: riguarda l'arrotondamento di un centesimo, non l'ordine di calcolo. È un pacchetto di garanzia a sé. Si procede in parallelo, con lo stesso responsabile e in sequenza: prima il 101, poi il 103, e il 103 verifica anche i casi del 101.
  - Comparatore, lavorazione 100 (verificato nel Manuale v1.3 e nel Documento tecnico v1.2): la story F12.2 mette un prodotto nel carrello e usa il calcolo del carrello, ma non l'ordine di sconto e IVA. Nessuna sovrapposizione. Nessuna variazione di 100 coinvolta.
  - Esito: nessuna sovrapposizione che impedisca il lavoro; coordinamento con il 101.
- **Controllo del codice (parte B).**
  - Il calcolo del carrello sta nel modulo `prezzi` di `lumera-api`: totale righe, IVA, poi sconto. Il pagamento riceve il totale già calcolato (verificato leggendo il modulo).
  - Con un codice da 10 euro su 100 euro più IVA al 22% il cliente paga 112 euro oggi, 109,80 euro con la nuova regola (verificato con il calcolo a mano).
  - I codici di importo fisso sono 6 su 40; i prodotti a IVA ridotta sono 14 (verificato).
  - Il modulo `prezzi` è usato da scheda prodotto, carrello, pagamento e gestionale (verificato dal Documento tecnico e dalla base). Non è stato verificato se il gestionale usi il calcolo dello sconto: il tempo della verifica è finito.
  - Il carrello e il modulo `prezzi` non hanno test automatici (verificato). Il `CLAUDE.md` di `lumera-api` chiede un test per ogni modifica a un modulo di calcolo (verificato).
  - Esito: intervento come appare, con una parte non verificata (gestionale). Il comportamento è come scritto, non un errore.
- **Esito complessivo.** Da rimandare: in attesa della decisione di Franco (referente) sull'ordine di calcolo.
  - Cosa manca: la decisione di Franco. Chi può fornirla: Franco.
- **Stima.** 8 ore di sviluppo, affidabilità media: la parte nel carrello è stata letta, il gestionale no. La revisione del codice del team lead è a parte, circa 1,5 ore. Il tempo di verifica usato è stato di 45 minuti sui 48 consentiti (10% di una stima a occhio di 8 ore).
- **Parti toccate e documenti collegati.** Vedi sotto.
- **Dubbi.** Il gestionale potrebbe dover cambiare con il carrello; in tal caso la stima sale. Non si sa come ripartire un importo fisso tra righe con aliquote IVA diverse: è una scelta tecnica del responsabile.
- **Cosa non è stato verificato.** L'uso del calcolo dello sconto nel gestionale. I repository del gestionale non sono stati letti.
- **Domande per il cliente.** Le due del 5 ottobre, in `source/2026-10-05-domanda-franco.md`.
- **Prossimo passo.** Attesa della risposta di Franco; poi scheda completa, task in ClickUp e pianificazione.

## Cosa fare

Da definire dopo la decisione di Franco: i codici sconto di importo fisso si tolgono prima o dopo l'IVA.
  - Cosa manca: la decisione di Franco.
## Su cosa intervenire

- `lumera-api`: modulo `prezzi`, funzione di calcolo del totale con codice sconto. Il modulo è condiviso con scheda prodotto, carrello, pagamento e gestionale.
- `lumera-api`: nuovi test automatici sul calcolo dello sconto (regola del `CLAUDE.md`).
- `lumera-sito`: nessuna modifica prevista; il carrello mostra il totale che arriva dalle API.

## Stima

8 ore di sviluppo, più circa 1,5 ore di revisione del team lead. Stima provvisoria.
  - Cosa manca: la conferma dello sviluppatore 3, che può darla solo dopo la decisione di Franco.

## DoD

- Con un prodotto da 100 euro più IVA al 22% e un codice da 10 euro il totale del carrello è 109,80 euro.
- Con un codice percentuale il totale coincide con quello di prima sugli stessi carrelli di prova.
- Con righe a IVA ridotta e a IVA 22% e un codice di importo fisso, il totale coincide con il calcolo a mano riportato nel commento del task.
- Il totale del carrello coincide con il riepilogo del pagamento sui casi di prova di questa scheda e su quelli del ticket 101.
- I test del pagamento esistenti passano e il pagamento non ricalcola lo sconto.
- Esistono test automatici sul calcolo dello sconto nel modulo `prezzi`.
- DoD base: revisione del codice da una seconda persona, lavoro sullo staging, stato in ClickUp aggiornato, ore tracciate, annotazione per il capitolo Pubblicazione se cambia il modo di pubblicare.

## Documenti collegati

- Manuale del prodotto v1.3 del sistema: F3 e F4.2.
- Documento tecnico v1.2 del sistema: capitoli su `prezzi` e carrello, e capitolo Pubblicazione (capitolo 7).
- Capitolo Pubblicazione del Documento tecnico v1.2 del sistema: copre sito e API, non il gestionale.
- Ticket 101 (pacchetto di garanzia della lavorazione 96): stessa parte di codice.
- Lavorazione 100 (comparatore): Manuale e Documento tecnico, story F12.2.
- A ticket chiuso vanno controllati tutti questi documenti.
