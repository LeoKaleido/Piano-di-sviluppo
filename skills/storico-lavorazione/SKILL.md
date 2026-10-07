---
name: storico-lavorazione
description: Aggiunge una voce allo storico di una lavorazione (file storico.md, nato vuoto all'inizio del lavoro): cosa è successo, quando, in quale fase, con quale effetto su ore e date. Usala a mano ogni volta che succede qualcosa che conta per il lavoro (conferme, richieste, imprevisti, ritardi del cliente, cambi di persone, rilasci), per poter tirare le somme a fine lavoro.
---

# Storico della lavorazione

## A cosa serve

Ogni lavorazione ha un file `storico.md` nella sua cartella della knowledge base. Nasce vuoto all'inizio del lavoro e si popola a mano, con questa skill, un evento alla volta. Serve a ricostruire a fine lavoro che cosa è successo e quando, per scrivere il Report di progetto e per usare questi dati nella valutazione dei lavori futuri. Le decisioni stanno a parte, nel Registro delle decisioni (skill `registro-decisioni`): qui si registrano i fatti.

La skill non deduce nulla: dà forma a ciò che chi la usa le racconta, e lo aggiunge in fondo al file.

## Cosa si registra

Ogni fatto che conta per il lavoro, dei seguenti tipi:

- **Fase completata.** La chiusura di una fase o sottofase, con la data.
- **Conferma del cliente.** Una conferma, a voce o scritta, con il riepilogo.
- **Richiesta del cliente.** Una richiesta o una variazione, anche se poi rifiutata.
- **Imprevisto.** Assenza, malattia, ticket urgente, blocco tecnico.
- **Ritardo del cliente.** Una risposta o un materiale in ritardo, con i giorni di slittamento.
- **Blocco.** Una dipendenza che ferma un'issue.
- **Cambio di persone.** Una persona che entra, esce, o viene presa in prestito.
- **Riprogrammazione.** Una data che cambia, una story spostata, ore aggiunte.
- **Rilascio.** Una pubblicazione, anche parziale.
- **Segnalazione in garanzia.** Una voce arrivata in garanzia.
- **Altro.**

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **La lavorazione**: codice, cliente, nome, e dove si trova il file `storico.md`. Se non c'è, crealo vuoto con la sola intestazione.
2. **Cosa è successo**, a parole di chi lo racconta.
3. **Quando.** Se non è detto, è oggi.
4. **In quale fase o sottofase** (per esempio `01-kickoff/03-proposta`).
5. **Il tipo**, fra quelli sopra.
6. **L'effetto**: ore, giorni di slittamento, milestone toccate. Se non è noto, "Da valutare".
7. **I riferimenti**: issue, variazione, decisione (DEC1), documento, conversazione.

## Formato di una voce

Un elenco puntato, in ordine di data, una riga o due per evento:

- data, fase, tipo: cosa è successo. Effetto: ... Riferimenti: ...

## Come si aggiunge

- In fondo al file, in ordine di data. Le voci già scritte non si modificano: se un fatto va corretto, si aggiunge una voce che cita la precedente.
- Non inventare ciò che manca: "Da valutare".
- Non riportare dati personali non pertinenti al lavoro.
- Si possono dare più eventi insieme: ognuno diventa una voce.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Controllo finale

1. Ogni voce ha data, fase, tipo e cosa è successo.
2. L'effetto è dichiarato o segnato "Da valutare".
3. Nessuna voce precedente è stata modificata.
4. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
