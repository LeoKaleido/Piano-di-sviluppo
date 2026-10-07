---
name: report-di-progetto
description: Scrive il Report di progetto, il documento interno di chiusura che tira le somme di un progetto o di un prodotto: stima iniziale contro ore e durata reali, buffer usati, variazioni, imprevisti, ritardi del cliente, decisioni, cosa ha funzionato e cosa no. Legge lo storico e il Registro delle decisioni e serve a stimare meglio i lavori futuri. Usala nella chiusura del rilascio, e per l'aggiunta a fine garanzia.
---

# Report di progetto

## A cosa serve

A fine progetto si tirano le somme di ciò che è successo, per poterlo usare nella valutazione dei progetti futuri. Il Report di progetto è un documento interno: non va al cliente. È la fonte dei "tempi dei progetti già fatti" che il kickoff usa per stimare la durata di un nuovo lavoro.

Si scrive nella sottofase di chiusura del rilascio, `03-rilascio/04-chiusura`, e si completa a fine garanzia con la sezione sulla garanzia.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **La lavorazione**: codice, cliente, sistema, categoria (progetto o prodotto).
2. **Lo storico e il Registro delle decisioni** della lavorazione (`storico.md`, `decisioni.md`). Sono la fonte principale: se sono vuoti o incompleti, dichiaralo in apertura del report e chiedi di completarli.
3. **La stima iniziale**: la durata e le ore stimate nella Proposta e nel Piano dei SAL, e l'eventuale stima rifatta con le issue.
4. **I dati reali da ClickUp**: le ore tracciate (il tracciamento del tempo è parte della DoD base) e le stime per milestone e per issue, le issue CANCELLED, le date di chiusura.
5. **Gli altri documenti**: Note di sprint, Milestone report, Registro delle variazioni, storico.
6. **Chi sviluppava** e per quante ore, per leggere i buffer di milestone con la squadra reale.

## Struttura

1. **Sintesi.** Cosa era il progetto, com'è andato, in poche righe.
2. **Stima contro realtà.** Per il progetto e per ogni milestone: la durata e le ore stimate (con il buffer), la durata e le ore reali, lo scostamento e il motivo. Le ore reali vengono da ClickUp, non da ricordi.
3. **Buffer.** Quanto del buffer di milestone e del buffer di sprint è stato usato, e per cosa.
4. **Variazioni.** Quante, di che categoria, quante ore hanno consumato, e quali hanno cambiato una data.
5. **Imprevisti.** I principali, come sono stati gestiti e quanto sono costati: assenze, ticket urgenti, blocchi tecnici, prestiti di ore. Dallo storico.
6. **Il cliente.** Ritardi su materiali e risposte, con i giorni di slittamento, e come il cliente ha partecipato alle prove.
7. **Decisioni chiave.** Quelle del Registro delle decisioni che hanno pesato di più, con il loro effetto.
8. **Cosa ha funzionato e cosa no.** Fatti, non giudizi: stime centrate o sbagliate, parti del lavoro andate lisce, parti che hanno richiesto rifacimenti.
9. **Dati per le stime future.** Gli elementi utili a stimare un lavoro simile: tipo di lavoro, dimensione, ore per story o per issue, fattori che hanno spostato la durata (stato del codice, integrazioni, chiarezza dei requisiti, partecipazione del cliente).
10. **Garanzia.** Si compila a fine periodo: le voci arrivate, le ore e la causa di ciascuna (requisito frainteso, test mancante, regressione, causa esterna, altro), dalle issue di garanzia in ClickUp. Fino ad allora la sezione dice che il periodo è in corso.

## Formato e dove si salva

Markdown, `report-progetto-<cliente>-<sistema>.md`, in `03-rilascio/04-chiusura`.

## Regole

- **Solo fatti con una fonte.** Ogni numero porta la fonte: ClickUp, storico, Registro, Piano dei SAL. Ciò che non si sa va dichiarato, non stimato.
- **Niente giudizi sulle persone.** Il report descrive cause del lavoro, non colpe.
- **Documento interno.** Può contenere ore e nomi, ma non va al cliente.
- **Una sola versione per progetto.** Si aggiorna a fine garanzia, con la data.
- **Dati personali.** Non riportare ciò che non è pertinente al lavoro.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Controllo finale

1. Ogni scostamento ha il suo motivo e ogni numero la sua fonte.
2. Lo storico e il Registro delle decisioni sono stati letti, o è dichiarato che mancano.
3. La sezione sui dati per le stime future è compilata.
4. La sezione sulla garanzia è presente, anche se dice che il periodo è in corso.
5. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
