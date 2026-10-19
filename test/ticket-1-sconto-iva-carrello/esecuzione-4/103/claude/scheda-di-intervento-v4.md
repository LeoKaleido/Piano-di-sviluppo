# Scheda di intervento, ticket 103

Cliente: Lumera Arredi. Versione 4, del 2026-11-05: scheda completata il 2026-10-13, corretta il 2026-10-15, chiusa a fine lavoro il 2026-10-20 e aggiornata con il seguito in garanzia.

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
- **Esito complessivo.** Da fare, dopo la decisione di Franco del 13 ottobre. Fino al 13 ottobre l'esito era "da rimandare": in attesa della decisione del referente, riesaminata da chi analizza alla risposta.
- **Stima.** 8 ore di sviluppo, affidabilità media: la parte nel carrello è stata letta, il gestionale no. La revisione del codice del team lead è a parte, circa 1,5 ore. Il tempo di verifica usato è stato di 45 minuti sui 48 consentiti (10% di una stima a occhio di 8 ore).
- **Parti toccate e documenti collegati.** Vedi sotto.
- **Dubbi.** Il gestionale potrebbe dover cambiare con il carrello; in tal caso la stima sale. Non si sa come ripartire un importo fisso tra righe con aliquote IVA diverse: è una scelta tecnica del responsabile.
- **Cosa non è stato verificato.** L'uso del calcolo dello sconto nel gestionale. I repository del gestionale non sono stati letti.
- **Domande per il cliente.** Le due del 5 ottobre, risposte il 13 ottobre da Franco (DEC3).
- **Prossimo passo.** Task in ClickUp e pianificazione nello sprint 4.

## Cosa fare

Togliere i codici sconto di importo fisso dal prezzo prima di aggiungere l'IVA, per tutti i codici di importo fisso (decisione di Franco, 13 ottobre, riepilogo scritto inviato lo stesso giorno). I codici percentuali restano invariati. Story di riferimento: F3.1 Aggiungere un prodotto al carrello e F4.2 Totale del carrello uguale al riepilogo del pagamento. Il Manuale non ha una story sui codici sconto: va aggiunta a lavoro concluso.
## Su cosa intervenire

- `lumera-api`: modulo `prezzi`, funzione di calcolo del totale con codice sconto. Il modulo è condiviso con scheda prodotto, carrello, pagamento e gestionale.
- `lumera-api`: nuovi test automatici sul calcolo dello sconto (regola del `CLAUDE.md`).
- `lumera-sito`: nessuna modifica prevista; il carrello mostra il totale che arriva dalle API.
- Corretto il 15 ottobre: `lumera-gestionale`, schermata dei preventivi manuali, che usa lo stesso calcolo.

## Stima

12 ore di sviluppo (8 iniziali, più 4 per il gestionale dal 15 ottobre). Più circa 2 ore di revisione del team lead. Stima confermata dallo sviluppatore 3 il 13 ottobre.

## DoD

- Con un prodotto da 100 euro più IVA al 22% e un codice da 10 euro il totale del carrello è 109,80 euro.
- Con un codice percentuale il totale coincide con quello di prima sugli stessi carrelli di prova.
- Con righe a IVA ridotta e a IVA 22% e un codice di importo fisso, il totale coincide con il calcolo a mano riportato nel commento del task.
- Il totale del carrello coincide con il riepilogo del pagamento sui casi di prova di questa scheda e su quelli del ticket 101.
- I test del pagamento esistenti passano e il pagamento non ricalcola lo sconto.
- Esistono test automatici sul calcolo dello sconto nel modulo `prezzi`.
- Un preventivo manuale nel gestionale con lo stesso codice dà 109,80 euro.
- DoD base: revisione del codice da una seconda persona, lavoro sullo staging, stato in ClickUp aggiornato, ore tracciate, annotazione per il capitolo Pubblicazione se cambia il modo di pubblicare.

## Documenti collegati

- Manuale del prodotto v1.3 del sistema: F3 e F4.2.
- Documento tecnico v1.2 del sistema: capitoli su `prezzi` e carrello, e capitolo Pubblicazione (capitolo 7).
- Capitolo Pubblicazione del Documento tecnico v1.2 del sistema: copre sito e API, non il gestionale.
- Ticket 101 (pacchetto di garanzia della lavorazione 96): stessa parte di codice.
- Lavorazione 100 (comparatore): Manuale e Documento tecnico, story F12.2.
- A ticket chiuso vanno controllati tutti questi documenti.

## Correzione del 15 ottobre

Lo sviluppatore 3 ha toccato `lumera-gestionale` (preventivi manuali), non previsto il 13 ottobre. Stima da 8 a 12 ore, aggiornata da chi analizza e controllata dal supervisore. Il ticket resta tale: 12 ore, una persona, meno di 2 settimane.

## Cosa è stato fatto

- Il modulo `prezzi` di `lumera-api` toglie il codice sconto di importo fisso dal totale delle righe prima di calcolare l'IVA. Con più aliquote l'importo si ripartisce in proporzione al valore delle righe e l'ultima riga assorbe il centesimo (decisione DEC5). I codici in percentuale restano come prima.
- Con un prodotto da 100 euro più IVA al 22% e un codice da 10 euro il totale è 109,80 euro, uguale nel carrello, nel riepilogo del pagamento e nei preventivi manuali del gestionale.
- Nuovi test automatici sul calcolo dello sconto, anche con righe a IVA ridotta e al 22%.
- Parti toccate: `lumera-api` (modulo `prezzi` e i suoi test), `lumera-gestionale` (schermata dei preventivi manuali). `lumera-sito`: nessuna modifica.
- Pubblicato il 20 ottobre: API, sito (riavvio del server SSR e cache svuotata su `/catalogo` e `/prodotto`) e, per ultimo, il gestionale. Per il gestionale il capitolo Pubblicazione non ha regole scritte.
- Ore: 11 di sviluppo e 2 di revisione.

## Effetto sui documenti del sistema

Riferito a: Manuale del prodotto v1.3 e Documento tecnico v1.2.

Il ticket non li aggiorna. Li aggiorna il primo progetto o prodotto che lavora sulla stessa parte.

- Manuale del prodotto v1.3: nuova story sull'ordine di calcolo dei codici sconto di importo fisso (oggi il Manuale non dice come si applicano); nuova story sul totale che non scende sotto zero (vedi Seguito in garanzia); nuovo termine "Codice sconto" nel glossario. F4.2 resta vera. Resta aperta la domanda emersa su F3.3 (il Manuale dice 30 giorni, il comportamento reale è 90): va chiarita con Franco.
- Documento tecnico v1.2: capitolo 5 (F3 Carrello, nuovo comportamento di `prezzi`), capitolo 9 (decisioni sulla ripartizione tra aliquote IVA e sul totale non negativo), capitolo 10 (il modulo `prezzi` ha ora test sul calcolo dello sconto), capitolo 7 (capitolo Pubblicazione: il gestionale è stato pubblicato per ultimo, dopo API e sito, senza regole di riavvio e cache).
- Comparatore (lavorazione 100): Manuale e Documento tecnico controllati, la story F12.2 non è toccata.

## Seguito in garanzia

- 28 ottobre: Marta segnala un totale negativo con un codice da 20 euro su un articolo da 15 euro. Il Manuale non dice cosa deve succedere e il comportamento c'era anche prima del ticket: ambiguità, domanda a Franco.
- 29 ottobre: Franco decide che il totale non scende sotto zero (DEC6).
- 5 novembre: corretto in 2 ore (sprint 5) e pubblicato. Nel modulo `prezzi` di `lumera-api` il totale delle righe, dopo lo sconto di importo fisso, non va sotto zero. Test: articolo da 15 euro e codice da 20 euro, totale zero nel carrello e nel riepilogo del pagamento.
- Nuovo comportamento da recepire nei documenti del sistema: Manuale, story "Il totale del carrello non scende sotto zero"; Documento tecnico, capitolo 5 (F3) e capitolo 9.
