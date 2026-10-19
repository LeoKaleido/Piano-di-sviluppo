# Report di progetto, area riservata per i rivenditori (progetto 107)

Interno. Data: 2027-02-26. Fonti: `storico.md`, `decisioni.md`, Note di sprint, Milestone report, Registro delle variazioni, Piano dei SAL e dati di ClickUp dello scenario. Le Note degli sprint 8, 9, 11 e 12 non sono state recitate: i dati di M3 vengono dallo scenario.

## 1. Sintesi

Prima parte per la fiera dell'area riservata per i rivenditori: accesso, prezzi per rivenditore, ordini grandi, tre sviluppatori, tre milestone. Pubblicata giovedì 18 febbraio 2027, quattro giorni prima della fiera. Il SAL2 è stato spostato di una settimana per il ritardo dei listini e una malattia; le altre date sono state rispettate. Le ore reali sono il 3,2% sopra le ore stimate con la variazione.

## 2. Stima contro realtà

- **Durata.** Stima a occhio: 60 giorni lavorativi per la soluzione intera. Stima precisa: 12 settimane per la soluzione intera, circa 10 per la prima parte. Piano dei SAL: 10 settimane (7 dicembre 2026 - 12 febbraio 2027). Reale: stesso intervallo; SAL2 accettato il 28 gennaio invece del 15, SAL3 alla data.
- **Ore.** Stima iniziale 390 ore di issue, più 78 di buffer. Con la variazione V1 (20 ore): 410. Ore reali: 423 (ClickUp).
- **Per milestone** (stima, reale):
  - M1: 90, 88.
  - M2: 100, 104.
  - M3: 220 (200 più 20 di V1), 231.

## 3. Buffer

Buffer di milestone: 78 ore. Consumo: 13 ore (423 meno 410), cioè il 17%. Buffer di sprint: usato 12 ore del ticket urgente 108 su 21 dello sprint 10.

## 4. Variazioni

Una media approvata (V1, preventivo in PDF, 20 ore, M3). Una media rinviata (V2, ordini ricorrenti, richiesta di Diego). Nessuna piccola.

## 5. Imprevisti

- Malattia dello sviluppatore 2 dall'11 al 15 gennaio: 30 ore lorde.
- Ticket urgente 108 sul pagamento: 12 ore dal buffer di sprint, nessun effetto sul margine.
- Leva di riprogrammazione: 8 ore aggiunte dallo sviluppatore 3 nello sprint 11.
- Prestiti di ore ai ticket: nessuno nello scenario.

## 6. Il cliente

- File dei listini: 6 giorni lavorativi di ritardo (chiusura aziendale esclusa) sulla data del Piano dei SAL; effetto reale sul lavoro, 2 giorni lavorativi sulla parte dipendente.
- Prova del SAL1: accettata il 7 gennaio, dopo la chiusura; la prova del SAL2 il 28 gennaio, 4 giorni lavorativi dopo la prova.
- Risposte alle domande della Proposta: D5-D8 dopo il sollecito del 27 ottobre, il 9 novembre.
- Utenze di prova ed elenco dei rivenditori: nei tempi del Piano dei SAL (dato non indicato nello scenario).

## 7. Decisioni chiave

Divisione in due progetti (fiera e dopo), listino come tabella di prezzi, ordini grandi senza pagamento online, leva sulla data del SAL2 e 8 ore aggiunte. Vedi il Registro.

## 8. Cosa ha funzionato e cosa no

- Funzionato: la divisione in due progetti ha tenuto la fiera; il capitolo Milestone con il margine ha segnalato in anticipo il ritardo; la regola "variazioni non a voce" ha fermato la richiesta del PDF fatta per telefono.
- Non funzionato: la data dei listini era troppo anticipata rispetto al loro uso e ha dato un ritardo apparente di 6 giorni contro un effetto reale di 2; M3 è partita a rischio dopo la variazione V1; il margine di un giorno lavorativo tra la pubblicazione e la fiera era sottile.

## 9. Dati per le stime future

- Tipo di lavoro: area riservata su un sito esistente con prezzi per utente, ordine da file, tre sviluppatori.
- Dimensione: 9 story, 423 ore reali, circa 47 ore per story con supporto, test e migrazioni.
- Scostamento: ore più 3,2% sulla stima con variazione; durata 0%.
- Fattori che hanno spostato le date: materiale del cliente (listini), un'assenza, `prezzi` senza test (12 ore di test aggiunti in M2), migrazione del database.

## 10. Garanzia

Il periodo è in corso: 35 giorni dal 18 febbraio 2027, fino al 25 marzo 2027. Da compilare a fine periodo.
