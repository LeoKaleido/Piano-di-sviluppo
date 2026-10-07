---
name: registro-decisioni
description: Aggiunge una voce al Registro delle decisioni di una lavorazione (file decisioni.md, nato vuoto all'inizio del lavoro): cosa è stato deciso, da chi, perché, con quali alternative e con quale effetto. Usala a mano ogni volta che si prende una decisione che conta per il lavoro, per poterla ritrovare nel Report di progetto e nelle stime future.
---

# Registro delle decisioni

## A cosa serve

Ogni lavorazione ha un file `decisioni.md` nella sua cartella della knowledge base. Nasce vuoto all'inizio del lavoro e si popola a mano, con questa skill, voce per voce. Serve a ritrovare a fine lavoro cosa è stato deciso e perché, per tirare le somme nel Report di progetto e per usare questi dati nella valutazione dei lavori futuri.

La skill non decide e non deduce: dà forma a ciò che chi la usa le racconta, e lo aggiunge in fondo al file.

## Cosa conta come decisione

Una scelta che cambia il lavoro: una variazione accettata o rifiutata, una leva scelta per una milestone in ritardo, un compromesso concordato con il cliente, una scelta tecnica rilevante, un prestito di ore, una divisione di una story, un rinvio, una rinuncia. Le decisioni che hanno già un documento (per esempio una variazione con la sua voce nel Registro delle variazioni, o una scelta tecnica durevole nel Documento tecnico) si registrano comunque, con il rimando: il Registro delle decisioni è l'indice cronologico delle scelte della lavorazione, non sostituisce quei documenti.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **La lavorazione**: codice, cliente, nome, e dove si trova il file `decisioni.md`. Se il file non c'è, crealo vuoto con la sola intestazione.
2. **La decisione**, a parole di chi la racconta.
3. **Chi ha deciso**, per ruolo (referente del cliente, responsabile, chi gestisce il team, CEO). Una decisione del cliente conta solo se è del referente.
4. **Il motivo.**
5. **Le alternative scartate**, se ci sono.
6. **L'effetto**: ore, date, documenti, issue toccati.
7. **I riferimenti**: codice della variazione, della issue, del documento, della conversazione.
8. **La data.** Se non è detta, è oggi.

## Formato di una voce

Ogni voce ha un codice fisso, DEC1, DEC2, che non cambia e non si riutilizza, e porta questo schema:

- **Titolo.** Poche parole.
- **Data.**
- **Decisione.** Una o due frasi.
- **Chi ha deciso.**
- **Motivo.**
- **Alternative scartate.** Oppure "Nessuna".
- **Effetto.** Ore, date, documenti. Se non è noto, "Da valutare".
- **Riferimenti.**

## Come si aggiunge

- In fondo al file, mai in mezzo. Le voci già scritte non si modificano: se una decisione cambia, si aggiunge una voce nuova che cita la precedente.
- Non inventare ciò che manca: lascia "Da valutare" o chiedilo.
- Non riportare dati personali non pertinenti al lavoro.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

Nel file i nomi di file, issue e tecnologie si scrivono come sono.

## Controllo finale

1. La voce ha un codice nuovo, la data, chi ha deciso e il motivo.
2. Nessuna voce precedente è stata modificata.
3. Ciò che manca è dichiarato, non inventato.
4. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
