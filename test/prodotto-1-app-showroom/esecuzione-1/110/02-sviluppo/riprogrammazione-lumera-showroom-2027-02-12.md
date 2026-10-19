# Riprogrammazione, Lumera Arredi, applicazione per gli showroom

Prodotto 110, milestone M1. Interna. Data: 2027-02-12, decisione del 2027-02-15.

## Imprevisto e caso

- **Imprevisto.** La spike I14 (API degli ordini) mostra che l'ordine non può contenere lo sconto del consulente: servono 24 ore in più nella milestone M1. In più, lo sviluppatore 4 è stato assente due giorni (12 ore).
- **Caso riconosciuto.** Tempi, "blocco tecnico o di un servizio esterno" (spike, nuova stima) e "assenza breve". Le issue PLANNED meno prioritarie non escono: la milestone è già dentro la capacità dello sprint 13.

## Ricalcolo

- Ore rimanenti: 152 (non COMPLETED) più 24 (I20 e I21): 176.
- Capacità rimanente fino al 26 febbraio, al netto del buffer di sprint: 168 (sprint 13).
- Margine: meno 8 ore. In ritardo (sotto zero). Buffer di milestone iniziale 56; metà 28.
- Milestone successive. M2: nessun effetto diretto. Una leva che sposti ore su M2 le riduce il margine (vedi sotto). M3, M4, M5: nessun effetto.

## Leve, con l'effetto di ciascuna

1. **Spostare una story a una milestone successiva.** Candidate: nessuna rispetta il criterio "non iniziata e senza altre story che ne dipendono". F1.1 è in corso. F1.2 è prerequisito di F2.1. F2.1 (I12 e I13, 32 ore, non iniziata) è l'unica non iniziata, ma le story F2.2, F2.3 e F2.4 di M2 ne dipendono; essendo in M2, lo spostamento non rompe l'ordine. Effetto se spostata: M1 libera 32 ore, margine più 24 (a rischio: tra 0 e 28). M2 sale a 438 ore, margine 49,2 sui 487,2 di capacità (in linea, almeno 40,6). Il SAL1 perde l'agenda: cambia il contenuto di una consegna, quindi si avvisa il cliente e serve la sua approvazione (variazione media).
2. **Spostare la data della prova.** Di uno sprint (dal 26 febbraio al 12 marzo): tutte le milestone seguenti slittano di due settimane. SAL5 passerebbe dal 30 luglio al 13 agosto, dentro la chiusura aziendale (9 al 20 agosto): il collaudo e il lancio passerebbero oltre il 13 settembre 2027. Non sostenibile con la scadenza di Verona.
3. **Aggiungere ore.** Servono almeno 8 ore per portare il margine a zero, 36 per tornare "in linea" (margine 28). Entro la prova del 26 febbraio. Una persona nuova rende meno nel primo sprint: non è indicata. Decide chi gestisce il team, con il CEO se serve. Fonti possibili: ore dei ticket dello sviluppatore 3 (che copre le persone sempre disponibili per i ticket).

Valutazione, non decisione: la leva 3 ha l'effetto minore sul cliente (nessun avviso).

## Decisione (15 febbraio)

Chi gestisce il team decide la leva 3: 16 ore aggiunte nello sprint 13, prese dalle ore dei ticket dello sviluppatore 3. Il CEO non è interpellato (nessun costo aggiuntivo per il cliente). Margine dopo la decisione: meno 8 più 16, cioè più 8 ore. La milestone resta **a rischio** (tra 0 e 28). Nessuna data cambia.

## Dopo la decisione

- **Capitolo Milestone del Documento tecnico.** Versione 1.1: M1 sale a 304 ore (aggiunte I20 e I21, 24 ore), buffer iniziale invariato a 56. Origine: spike I14.
- **Calendario di progetto.** Invariato.
- **Piano dei SAL.** Invariato: nessuna data né contenuto cambiano.
- **Comunicazione al cliente.** Nessuna: nessuna data già comunicata cambia e nessuna consegna cambia.
- **Ticket.** Lo sviluppatore 3 ha 16 ore in meno per i ticket nello sprint 13: i ticket normali dello sprint slittano. Chi gestisce il team lo comunica a chi analizza.
