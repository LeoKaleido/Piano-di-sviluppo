---
name: mockup
description: Prepara il materiale per chi disegna i mockup in Figma a partire dai wireframe approvati (schermate, contenuti, stati, vincoli) e segue l'approvazione del cliente. Usala in un progetto o prodotto quando cambia l'aspetto grafico. Non si usa per i ticket.
---

# Mockup

## A cosa serve

Il mockup è l'aspetto grafico definitivo di una schermata, ancora statico. Valida colori, stile e identità, dopo che il wireframe ha validato struttura e contenuti.

I mockup si disegnano in Figma, a mano. Questa skill non li disegna: prepara il materiale per chi li disegna, in modo che parta dai wireframe approvati e non debba ricostruire da solo cosa va in ogni schermata. Poi segue la consegna e l'approvazione.

I mockup servono in progetti e prodotti, quando cambia l'aspetto grafico. Un ticket non ne prevede: segue l'aspetto esistente. Se un ticket ne richiede uno, segnala che la richiesta potrebbe essere un progetto.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Chi disegna.** Una persona dedicata alla grafica, oppure uno sviluppatore. Cambia la forma del materiale.
3. **I wireframe approvati**, con i codici delle schermate, e il Manuale del prodotto.
4. **L'identità grafica.** Logo, colori, caratteri, linee guida del cliente, se esistono. Sono tra i materiali attesi dal cliente.
5. **L'esistente.** Per un progetto: le schermate attuali del sistema e i componenti già disponibili.

Se i wireframe non sono approvati, avvisa: un mockup disegnato su una struttura ancora in discussione rischia di essere rifatto.

## Il materiale per chi disegna

Un documento Markdown, `materiale-mockup-<cliente>-<sistema>.md`, con queste parti.

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
- cosa non va inventato: nuovi colori, nuovi caratteri, nuovi tipi di componente. Se serve qualcosa che non esiste, si segnala al product lead.

## Lavorare con Figma Starter

Il team usa il piano gratuito di Figma. Il materiale ricorda a chi disegna quattro accorgimenti:

- si lavora nei drafts personali, che sono illimitati: un file per progetto. I 3 file condivisi restano liberi per quando serve lavorare in due;
- cliente e sviluppatori vedono i mockup tramite link in sola visualizzazione;
- non ci sono librerie condivise: i componenti ricorrenti di un cliente stanno in un file di base, da duplicare a ogni nuovo progetto;
- la cronologia delle versioni dura un mese, quindi le versioni approvate vanno esportate.

## Consegna e approvazione

Quando i mockup sono pronti:

1. **Verifica di corrispondenza.** Confronta i mockup con il materiale: ogni schermata e ogni stato richiesti sono presenti, e nulla è stato aggiunto o tolto rispetto ai wireframe. Per farlo servono le esportazioni dei mockup: chiedile.
2. **Presentazione al cliente.** Prepara l'elenco di ciò che il cliente deve guardare e approvare: l'aspetto, non la struttura, che è già approvata.
3. **Riscontro.** Scomponi le correzioni del cliente in voci. Una correzione all'aspetto si applica. Una richiesta che cambia struttura o contenuti non è una correzione del mockup: è una variazione, e va segnalata.
4. **Archiviazione.** All'approvazione, ricorda che i mockup vanno esportati in PDF e salvati su Drive accanto ai documenti del lavoro, con il numero di versione. Quella copia è la versione che fa fede: il file Figma può cambiare, e la sua cronologia si perde dopo un mese.

In un progetto il cliente approva i mockup insieme al Manuale del prodotto. In un prodotto li approva a chiusura della fase di prototipo e design, con la direzione grafica. Da quel momento cambiarli è una variazione.

## Regole di scrittura

{{SCRITTURA}}

## Controllo finale

1. Ogni schermata dei wireframe approvati è nell'elenco, con lo stesso codice.
2. Ogni schermata ha i suoi stati elencati.
3. La forma corrisponde a chi disegna: nessun suggerimento grafico per la persona dedicata, indicazioni vincolanti per lo sviluppatore.
4. L'identità grafica mancante è dichiarata.
5. {{CONTROLLO}}
