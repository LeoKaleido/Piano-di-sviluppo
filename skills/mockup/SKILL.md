---
name: mockup
description: Prepara il materiale per chi disegna i mockup in Claude Design a partire dai wireframe approvati (schermate, contenuti, stati, vincoli) e segue l'approvazione del cliente. Usala in un progetto o prodotto quando cambia l'aspetto grafico. Non si usa per i ticket.
---

# Mockup

## A cosa serve

Il mockup è l'aspetto grafico definitivo di una schermata, ancora statico. Valida colori, stile e identità, dopo che il wireframe ha validato struttura e contenuti.

I mockup si disegnano in Claude Design, a mano. Questa skill non li disegna: prepara il materiale per chi li disegna, in modo che parta dai wireframe approvati e non debba ricostruire da solo cosa va in ogni schermata. Poi segue la consegna e l'approvazione.

I mockup servono in progetti e prodotti, quando cambia l'aspetto grafico. Una lavorazione minore non ne prevede: segue l'aspetto esistente. Se una lavorazione minore ne richiede uno, segnala che la richiesta potrebbe essere un progetto.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Chi disegna.** Una persona dedicata alla grafica, oppure uno sviluppatore. Cambia la forma del materiale.
3. **I wireframe approvati**, con i codici delle schermate, e il Manuale del prodotto.
4. **L'identità grafica.** Logo, colori, caratteri, linee guida del cliente, se esistono. Sono tra i materiali attesi dal cliente.
5. **L'esistente.** Per un progetto: le schermate attuali del sistema e i componenti già disponibili.

Se i wireframe non sono approvati, avvisa: un mockup disegnato su una struttura ancora in discussione rischia di essere rifatto.

## Il materiale per chi disegna

Un documento Markdown, `materiale-mockup.md`, con queste parti.

1. **Scopo.** Cosa cambia nell'aspetto e perché, in poche righe.
2. **Identità grafica.** Cosa è stato fornito dal cliente e cosa manca.
3. **Elenco delle schermate.** Per ognuna:
   - codice e nome, gli stessi dei wireframe (S1, S2);
   - story realizzate, con i codici del Manuale;
   - contenuti: ogni elemento presente nel wireframe approvato, con i testi veri;
   - stati da disegnare: normale, vuoto, errore, caricamento, e gli altri previsti dai casi particolari delle story;
   - dispositivi: schermo grande, telefono, o entrambi.
4. **Ordine di lavoro.** Quali schermate disegnare per prime: quelle che fissano lo stile delle altre.
5. **Cosa non va cambiato.** La struttura e i contenuti approvati nei wireframe. Se disegnando emerge che la struttura non regge, non si corregge nel mockup: si segnala, perché cambiare un wireframe approvato è una variazione.
6. **Domande aperte.**

### Forma per la persona dedicata alla grafica

Il materiale dice cosa deve contenere ogni schermata e quali stati prevedere. Le scelte grafiche restano a lei: non suggerire colori, proporzioni o stile.

### Forma per lo sviluppatore

Lo stesso contenuto, più indicazioni vincolanti, perché non deve prendere decisioni di design che non gli competono:

- quali componenti già esistenti nel sistema riusare, schermata per schermata;
- quale schermata esistente prendere a modello per ogni schermata nuova;
- cosa non va inventato: nuovi colori, nuovi caratteri, nuovi tipi di componente. Se serve qualcosa che non esiste, si segnala al responsabile.

## Lavorare con Claude Design

I mockup si disegnano in Claude Design. Il materiale ricorda a chi disegna quattro accorgimenti, validi qualunque sia lo strumento:

- un solo progetto di design per lavorazione, che parte dai wireframe approvati;
- cliente e sviluppatori vedono i mockup in sola visualizzazione, senza poterli modificare;
- i componenti ricorrenti di un cliente (colori, caratteri, pulsanti) stanno in un progetto di base, da cui si parte a ogni nuovo lavoro dello stesso cliente;
- le versioni approvate si esportano in PDF e si conservano in `design`: la copia che fa fede non dipende dallo strumento.

## Consegna e approvazione

Quando i mockup sono pronti:

1. **Verifica di corrispondenza.** Confronta i mockup con il materiale: ogni schermata e ogni stato richiesti sono presenti, e nulla è stato aggiunto o tolto rispetto ai wireframe. Per farlo servono le esportazioni dei mockup: chiedile.
2. **Presentazione al cliente.** Prepara l'elenco di ciò che il cliente deve guardare e approvare: l'aspetto, non la struttura, che è già approvata.
3. **Riscontro.** Scomponi le correzioni del cliente in voci. Una correzione all'aspetto si applica. Una richiesta che cambia struttura o contenuti non è una correzione del mockup: è una variazione, e va segnalata.
4. **Archiviazione.** All'approvazione, ricorda che i mockup vanno esportati in PDF e salvati in `design` nella cartella della lavorazione, con il numero di versione. Quella copia è la versione che fa fede: il file di Claude Design può cambiare.

In un progetto il cliente approva i mockup insieme al Manuale del prodotto. In un prodotto li approva a chiusura della fase di prototipo e design, con la direzione grafica. Da quel momento cambiarli è una variazione.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere (unica eccezione: le tabelle del Piano dei SAL). Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Dove si salva

Tutto in `design`: il materiale per realizzarli (Markdown) e i PDF dei mockup approvati, esportati da Claude Design, con la versione nel nome.

## Controllo finale

1. Ogni schermata dei wireframe approvati è nell'elenco, con lo stesso codice.
2. Ogni schermata ha i suoi stati elencati.
3. La forma corrisponde a chi disegna: nessun suggerimento grafico per la persona dedicata, indicazioni vincolanti per lo sviluppatore.
4. L'identità grafica mancante è dichiarata.
5. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
