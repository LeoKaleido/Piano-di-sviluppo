# Stima precisa, Lumera Arredi, area riservata per i rivenditori

Progetto 107. Data: 2026-10-09. Interna. Giorno 4 di 6 del tempo del kickoff.

## Risultato

- **Soluzione intera** (accesso, listini, ordini grandi, bonifico, download dei listini): 12 settimane di sviluppo, circa 720 ore con buffer di milestone del 20%, con tre sviluppatori (75 ore a settimana, 60 al netto del buffer di sprint). Affidabilità media.
- **Prima parte per la fiera** (accesso, listini, ordini grandi con caricamento di un elenco, senza bonifico né download): circa 390 ore di issue e 78 di buffer, cioè 468 ore. Affidabilità media.

## Da cosa nasce

- **Report di progetto della lavorazione 96:** durata pianificata 12 settimane, reale 13 (più 8%); ore 700 stimate, 735 reali (più 5%). Un materiale del cliente con 4 giorni di ritardo.
- **Report di progetto della lavorazione 58:** 20 settimane pianificate, 22 reali (più 10%); ore 1.500, 1.610 (più 7,3%). Causa: dati esistenti più sporchi del previsto.
- **Fattori che alzano la stima:** `prezzi` e carrello senza test, quattro parti che usano `prezzi`, formato dei listini sconosciuto, anagrafica con doppioni (come nella 58), migrazioni del database senza Guida.
- **Fattori che la abbassano:** il catalogo, il carrello e l'accesso esistono già.

## Confronto con la fiera

- Sviluppo possibile dal 7 dicembre 2026: i due sviluppatori sono liberi dal 27 novembre e la documentazione sarà pronta il 4 dicembre (Proposta confermata a metà novembre, Manuale a fine novembre).
- Capacità al netto del buffer di sprint: sprint 8, 108 ore (festività dell'8 dicembre); sprint 9, 36 ore (chiusura aziendale dal 24 dicembre); sprint 10, 84 ore (chiusura fino al 6 gennaio); sprint 11 e 12, 120 ore ciascuno. Totale fino al 12 febbraio: 468 ore.
- La soluzione intera (720 ore) non ci sta. La prima parte (468 ore con buffer) ci sta, con la pubblicazione tra il 16 e il 18 febbraio: margine di un giorno lavorativo prima della fiera. Fattibile con poco margine.
- Va detto subito a Franco: la Proposta propone due progetti, il primo per la fiera, il secondo con bonifico e download.
