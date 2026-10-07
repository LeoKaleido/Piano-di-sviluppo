# Scheda di intervento 105, a posteriori

Interna. Scritta il 2026-10-14 alle 17:00, a problema risolto.

## Decisioni dell'analisi

- **Categoria.** Ticket.
- **Tipo.** Bug.
- **Urgenza.** Urgente: pagamento fermo per un circuito di carta, ordini persi.
- **Esito.** Da fare (fatto). Percorso d'urgenza: verifica preliminare dopo.
- **Responsabile.** Sviluppatore 2. Revisione: team lead. Pubblicazione: sistemista 1, incaricato della pubblicazione.
- **Scadenza del cliente.** Nessuna.
- **Stima.** 1,5 ore (team lead). Reale: 3,5 ore dello sviluppatore 2 (1 ora in più per la funzione condivisa), 0,5 del team lead, 0,5 del sistemista 1. Totale 4,5 ore.
- **Garanzia.** Anche pacchetto di garanzia sul nuovo pagamento (rilasciato il 14 settembre, garanzia fino al 26 ottobre).

## 1. Cosa è successo

Da mattina del 14 ottobre i clienti che pagano con carta Mastercard ricevono un errore generico e l'ordine non parte. Marta (Lumera) segnala ordini persi. Effetto sugli utenti: nessun pagamento con Mastercard possibile per circa 8 ore (dalle 9:40 alle 15:45).

## 2. Causa

Il servizio esterno di pagamento ha cambiato il formato della sigla del circuito per Mastercard, da `MC` a `MASTERCARD`. Il codice del sito confronta la sigla in modo esatto: la Mastercard non è più riconosciuta. È una causa esterna. Un test automatico usa la sigla `MC` con un dato finto e passa anche con il formato rotto.

Grado di certezza: verificato nel codice e nella configurazione dei circuiti; il cambio del servizio è riferito dalla risposta del servizio e verificato con una prova su staging.

## 3. Correzione

Nel file di configurazione dei circuiti accettati e nella funzione di confronto si accettano entrambe le sigle (`MC` e `MASTERCARD`). La correzione è provvisoria: il confronto resta esatto per gli altri circuiti, quindi un nuovo cambio di formato di un altro circuito romperebbe di nuovo lo stesso punto.

Da fare: aprire una issue per rimuovere la causa, cioè una mappa delle sigle per circuito, con confronto non sensibile alle maiuscole e un test con i dati reali del servizio. Issue aperta il 14 ottobre in BACKLOG, con etichetta garanzia.

## 4. Su cosa si è intervenuti

- Repository del sito: file di configurazione dei circuiti accettati del pagamento; funzione di confronto della sigla del circuito.
- La funzione di confronto è condivisa con il percorso di acquisto del comparatore (progetto 100, story F12.2). Compatibilità verificata a mano dallo sviluppatore 2 con il team lead (DEC2).
- Nessun'altra parte del pagamento è stata toccata.

## Documenti collegati

- Lavorazione del nuovo pagamento (rilasciata il 14 settembre; il codice non è noto alla base: vedi diario): Documento tecnico del pagamento, capitolo Integrazioni.
- Lavorazione 100 (comparatore): usa la funzione condivisa.
- Ticket 101: stesso pagamento, stesso ambito di garanzia, nessun effetto.
- Manuale del prodotto v1.3: F4 Pagamento, nessun cambiamento di comportamento visibile.
- Guida alla pubblicazione v1.0: nessuna modifica.

## Verifica preliminare saltata, eseguita dopo

**Parte A, lavori aperti.**

- Progetto 100 (comparatore, SAL2): la funzione di confronto è usata da F12.2 (acquisto dal confronto). Nessun conflitto: la correzione è compatibile.
- Ticket 101 (differenza di un centesimo tra carrello e pagamento): tocca lo stesso pagamento, non lo stesso codice di questa correzione. Resta un pacchetto di garanzia a sé.
- Ticket 102 (campo partita IVA nel modulo di contatto): nessuna sovrapposizione.
- Consegna in garanzia: il nuovo pagamento, fino al 26 ottobre. Il ticket 105 è anche un pacchetto di garanzia su quella consegna.
- Esito: nessuna sovrapposizione che cambi l'intervento.

**Parte B, codice.**

- Bug confermato, con il punto del codice (confronto esatto della sigla).
- Causa fuori dal codice del cliente (servizio esterno), ma il codice la rende fatale.
- Intervento come appare, ma con una funzione condivisa: compatibilità verificata.
- Nessuno sviluppo non rilasciato sulla stessa parte.

**Non verificato.** Che altri circuiti (Maestro, Visa) abbiano già cambiato formato: servono i log del servizio. Da chiedere al servizio di pagamento.
