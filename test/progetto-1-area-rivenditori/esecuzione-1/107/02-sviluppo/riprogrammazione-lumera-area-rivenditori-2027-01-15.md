# Riprogrammazione, Lumera Arredi, area riservata per i rivenditori

Progetto 107, milestone M2 e M3. Interna. Data: 2027-01-15.

## Imprevisto e caso

- **Imprevisti.** Materiale del cliente in ritardo (listini, 6 giorni lavorativi); assenza breve dello sviluppatore 2 (30 ore lorde); ticket urgente 108 (12 ore).
- **Casi riconosciuti.** "Materiali o risposte in ritardo", "malattia o assenza breve", "ticket urgente". Il ticket urgente ha usato il buffer di sprint (12 di 21 ore): nessun effetto sul margine. L'assenza ha ridotto di 24 ore la capacità netta dello sprint. Il materiale ha fermato le issue dipendenti.
- **Slittamento per il materiale.** Il Piano dei SAL dava la data del 18 dicembre; le issue dipendenti erano pianificate dal 7 gennaio. Le issue dipendenti sono partite l'11 gennaio: lo slittamento reale della parte bloccata è di 2 giorni lavorativi (7 e 8 gennaio), non 6.

## Ricalcolo

- M2: ore rimanenti 4; capacità rimanente fino al 15 gennaio 0; margine meno 4. In ritardo (buffer iniziale 20; metà 10).
- M3: ore 200 più 20 (variazione V1) più 4 residue di M2: 224; capacità 240 (sprint 11 e 12); margine 16; buffer iniziale 40, metà 20. A rischio.
- Fiera del 22 febbraio: SAL3 il 12 febbraio, collaudo e pubblicazione dal 15 al 18 febbraio. Nessun margine aggiuntivo.

## Leve, con l'effetto di ciascuna

1. **Spostare una story.** F7.1 (4 ore residue) ha F7.2 di M3 che ne dipende. Non ci sono story candidate non iniziate. Nessun effetto da valutare.
2. **Spostare la data della prova di M2.** Da venerdì 15 gennaio a venerdì 22 gennaio: le 4 ore si chiudono nella prima settimana dello sprint 11 e la settimana serve a preparare la prova. Effetto: nessuna data di M3 cambia (12 febbraio); il margine di M3 resta 16 (a rischio). La data del 15 gennaio era già comunicata al cliente: va avvisato.
3. **Aggiungere ore.** Per tornare "in linea" servono 4 ore per M2 e 4 per M3 (margine 20): 8 ore, nello sprint 11. Decide chi gestisce il team, con il CEO se serve.

Valutazione, non decisione: la leva 2 è la meno costosa; la leva 3 protegge meglio la fiera.

## Decisione (15 gennaio)

Il project manager 2 con chi gestisce il team sceglie la leva 2 e, per proteggere la fiera, la leva 3 limitata a 8 ore dallo sviluppatore 3 nello sprint 11. M2 prova il 22 gennaio. M3 margine dopo la leva 3: 24 ore, in linea (almeno 20).

## Dopo la decisione

- **Capitolo Milestone del Documento tecnico.** Versione 1.5: SAL2 prova venerdì 22 gennaio 2027; M2 chiusa alle 104 ore; origine: ritardo dei listini e assenza.
- **Calendario di progetto.** Nessun cambiamento.
- **Piano dei SAL.** Versione 2, rigenerata: SAL2 il 22 gennaio.
- **Comunicazione al cliente.** Una, perché una data già comunicata cambia: vedi `comunicazione-riprogrammazione-2027-01-15.md`. Racconta solo il materiale in ritardo e la nuova data; non racconta la malattia né il ticket di un altro lavoro.
