# Diario, prodotto 1 (110), prova 2

Data dell'esecuzione: 2026-10-12. Piani e skill dopo le decisioni sulla struttura della lavorazione (radice con i PDF dei documenti veri, `claude`, `design`, `develop`, `source`, `log`), sulla catena completa delle versioni, sulla Proposta confermata senza versione, sulle durate verso il cliente e sull'indice dei ticket chiusi. Contenuto dalla prova 1; struttura, nomi e testi rifatti. Osservazioni con il codice P2-n.

## Cosa è stato rifatto

- **Struttura.** Niente cartelle per fase né cartella `sistema`. Radice con cinque PDF numerati in ordine di nascita: 01 Proposta di soluzione, 02 Manuale v1.2, 03 Documento tecnico v1.3, 04 Piano dei SAL v2, 05 Piano di lancio v2. `claude` con 16 sorgenti, `design` con wireframe, prototipo v1 e v2 e materiale per i mockup, `develop` con la Nota di sprint 12 e il Milestone report del SAL1 (senza PDF), `source` con 38 file, `log` con storico, decisioni e Report di progetto.
- **Catena delle versioni.** Proposta v0.1, v0.2 e `proposta-di-soluzione` (confermata, senza versione). Manuale v0.1, v0.2, v1.0 (conferma del 14 gennaio), v1.1 (variazione V1), v1.2 (chiusura): ognuna completa, senza "invariato". Documento tecnico v1.0 (29 gennaio), v1.1 (riprogrammazione), v1.2 (variazione V1), v1.3 (chiusura, con il capitolo Pubblicazione). Piano dei SAL v1 e v2 (variazione V1). Piano di lancio v1 e v2. Nella prova 1 la Proposta v0.2 diceva "invariato", il Manuale v0.1 e v0.2 non esistevano e il Documento tecnico aveva solo v1.0 e v1.2.
- **Durate al cliente.** Proposta da 5 a 6 mesi, più probabile circa 5 mesi e mezzo, con finestra di rilascio tra agosto e settembre 2027; Piano dei SAL "circa 6 mesi"; sconto in-app "14 giorni"; assistenza "14 giorni"; garanzia "3 mesi". Nessuna settimana nei documenti per il cliente. Nel Documento tecnico e nello storico restano ore e giorni lavorativi (stima da 110 a 130, più probabile 120; reale 130).
- **Piano di lancio.** Per il cliente, senza passi tecnici. I passi tecnici (copia di sicurezza, ordine delle pubblicazioni, verifiche, ritorno) stanno in una voce Rilascio dello storico; la scheda tecnica di rilascio e il promemoria interno non esistono più. Il capitolo Pubblicazione nasce nel Documento tecnico v1.3 alla chiusura.
- **Registri.** Il registro delle variazioni, le riprogrammazioni, la stima precisa e lo Stato di partenza sono voci dello storico (41 voci, con etichette; le variazioni V1 e V2 con codice e stato). Le decisioni restano in `decisioni.md`.
- **Messaggi.** Tutti in `source` con la data davanti: inviti, comunicazioni, riepiloghi, avvisi, risposte del cliente e risposta di garanzia; compresi quelli che nella prova 1 non esistevano (invio della Proposta, risposta di Franco alle domande, riepiloghi di conferma).
- **Ticket 103.** L'indice `esecuzione-2/ticket-chiusi.md` ha la riga del 103 (Scheda v4, riferita a Manuale v1.3 e Documento tecnico v1.2) con "Recepita da: 110"; la lettura è una voce Altro del 16 dicembre e la nota nel Documento tecnico, capitolo 6.
- **Eventi aggiunti.** La richiesta di Franco del 3 dicembre sulla schermata della proposta (modifica, non variazione) era nello scenario ma non nella prova 1: ora ha messaggio e voce, e porta al prototipo v2.

## Osservazioni

- P2-1, Buco: le Regole comuni dicono che un documento riceve un numero di versione da quando viene condiviso, ma non dicono come si numera il Manuale di un prodotto nuovo prima della conferma (nel test v0.1, v0.2 e v1.0 alla conferma, come la Proposta). Nei progetti il Manuale continua la catena del sistema, quindi non si pone.
- P2-2, Peso: la voce Stato di partenza dello storico ha dieci sotto-voci e la voce Rilascio tre; lo storico ha 65 righe. Si legge, ma è il file più denso della cartella.
- P2-3, Verifica: lo script `build/verifica-lavorazione.js` non accettava la catena che parte da v0.1 e confrontava il Documento tecnico con il Manuale solo con la numerazione dei progetti. Corretto: la catena parte da v0.1 o da v1.0, e ogni Documento tecnico cita un Manuale che esiste in `claude`.
- P2-4, Lacuna: i mockup approvati sono "esportati da Claude Design in PDF" in `design`; nel test sono solo HTML e il materiale in Markdown, perché lo strumento non è disponibile. Lo script non controlla `design`.
- P2-5, Esecuzione: contenuto riusato dalla prova 1, con le correzioni; milestone dalla seconda alla quinta recitate dai dati dello scenario.

## Controlli finali

Script di verifica: tutti i controlli superati (radice con cinque PDF senza buchi, catena Manuale v0.1-v1.2 e Documento tecnico v1.0-v1.3, Proposta senza versione, nessun "invariato", tabelle solo nel Piano dei SAL, nessun carattere vietato, nessun termine interno nei documenti per il cliente, storico in ordine con etichette, nomi in `source` con la data, `develop` senza PDF, variazioni con stato).
