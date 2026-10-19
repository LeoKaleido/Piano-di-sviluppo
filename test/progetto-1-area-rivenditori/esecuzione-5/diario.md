# Diario, progetto 1 (107), prova 5

Data dell'esecuzione: 2026-10-12. Piani e skill dopo tre cambiamenti: il ticket non aggiorna Manuale e Documento tecnico (lascia la Scheda), la numerazione delle versioni parte dalla base senza le versioni del ticket, la regola delle durate (giorni fino a due mesi, mesi da due mesi in poi, mai settimane). Contenuto dalla prova 4; struttura e numeri rifatti. Osservazioni con il codice Q5-n.

## Cosa è stato rifatto

- **Catena delle versioni.** Manuale v1.0-v1.3 e Documento tecnico v1.0-v1.2 dalla base. Il progetto scrive il Manuale v1.4 (bozza del 20 novembre, confermata il 30 novembre) e v1.5 (chiusura), il Documento tecnico v1.3 (4 dicembre) e v1.4 (chiusura). Nella prova 4 erano v1.5-v1.6 e v1.4-v1.5, perché partivano dalle versioni del ticket.
- **Scheda del ticket 103.** Recepita nel Manuale v1.4 e nel Documento tecnico v1.3: F3.4 (ordine di calcolo dello sconto), F3.5 (totale non negativo, decisione di garanzia), termine "Codice sconto", decisioni, test. Voce di storico del 12 novembre.
- **Durate.** La Proposta dice "da 2 a 3 mesi" (era "da 40 a 50 giorni lavorativi") e per la soluzione intera "circa 3 mesi" (era 12 settimane). Il Piano dei SAL e il Documento tecnico dicono "circa 2 mesi e mezzo" (era 10 settimane). Storico, decisioni, report e messaggio a Franco allineati.
- **PDF.** Generati da zero: 01 Proposta, 02 Manuale v1.5, 03 Documento tecnico v1.4, 04 Piano dei SAL v2.

## Osservazioni

- Q5-1, Passaggio: il kickoff del progetto 107 (5-13 ottobre) non può leggere la Scheda 103 finale: il ticket si chiude il 20 ottobre e il suo seguito in garanzia è del 5 novembre. La Scheda va letta alla stesura del Manuale (10-20 novembre), non al kickoff. La skill `kickoff` dice di leggere i ticket chiusi, ma il momento utile per recepirli è la documentazione (sottofase 1.4), e serve l'ultima versione di ogni Scheda.
- Q5-2, Base: i report di progetto del test (lavorazioni 96 e 58) e il Documento tecnico del comparatore usano ancora le settimane ("12 settimane", "13 settimane"). Sono dati interni della base e non sono stati cambiati. Non sono detti al cliente.
- Q5-3, Contraddizione: le durate interne (ore, giorni lavorativi) e quelle al cliente (giorni di calendario, mesi) convivono: per la stessa grandezza il Piano dei SAL dice "circa 2 mesi e mezzo" e il Documento tecnico "capacità 468 ore". Servono tutte, ma chi legge la Proposta e il Piano dei SAL ha un'unità sola.
- Q5-4, Esecuzione: contenuto riusato dalla prova 4, come dichiarato.

## Controlli finali

Script di verifica: tutti i controlli superati (radice con quattro PDF, catena Manuale v1.0-v1.5 e Documento tecnico v1.0-v1.4, nessun "invariato", storico in ordine, nomi in `source`, develop senza PDF).
