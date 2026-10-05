---
name: wireframe-e-prototipo
description: Genera wireframe e prototipi navigabili a partire da user story, come pagine HTML da aprire nel browser. Usala quando un progetto o un prodotto tocca l'interfaccia e il cliente deve validare struttura e percorso prima dello sviluppo.
---

# Wireframe e prototipo

## A cosa serve

Il cliente corregge ciò che vede molto meglio di ciò che legge. Wireframe e prototipo gli mostrano il lavoro prima che venga costruito.

I quattro strumenti visivi vanno tenuti distinti, perché validano cose diverse:

- **Wireframe**: lo schema di una schermata, senza grafica. Mostra cosa c'è e dove. Valida struttura e contenuti.
- **Prototipo**: più wireframe collegati e navigabili, senza logica vera. Valida il percorso dell'utente.
- **Mockup**: l'aspetto grafico definitivo. Non si produce qui: si disegna in Figma.
- **Demo**: il software vero sullo staging. Non si produce qui.

Questa skill produce wireframe e prototipi. Servono solo se il lavoro tocca l'interfaccia, quindi in progetti e prodotti.

## Dove entrano nei piani

- **Ticket**: non previsto. Un ticket non cambia l'aspetto grafico: se serve ridisegnare una schermata la richiesta è un progetto.
- **Progetto**: wireframe delle schermate nuove o modificate, allegati alla Proposta di soluzione. Un prototipo è facoltativo, in fase di documentazione, quando il percorso è complesso.
- **Prodotto**: wireframe delle schermate principali nella proposta, poi prototipo nella fase di prototipo e design.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Categoria.** Progetto o prodotto.
3. **La fonte.** L'elenco delle user story e la soluzione proposta, oppure il Manuale del prodotto.
4. **Lo stato attuale**, per i progetti: come si presenta oggi la schermata. Chiedi una schermata o una descrizione. Un wireframe che ridisegna da zero una schermata esistente fa credere al cliente che cambierà tutto.
5. **Cosa produrre.** Wireframe singoli, oppure prototipo navigabile.
6. **Dispositivo.** Schermo grande, telefono, o entrambi.

Se la fonte non dice cosa contiene una schermata, non inventarlo: chiedilo.

## Regole dei wireframe

- **Nessuna grafica.** Solo toni di grigio, un carattere di sistema, riquadri e linee. Niente colori del cliente, loghi, immagini, icone decorative. Un wireframe che sembra finito sposta l'attenzione del cliente sull'aspetto, e non sulla struttura.
- **Contenuti realistici.** Testi veri o verosimili, presi dalle fonti: non testo segnaposto in latino. Le immagini sono riquadri grigi con la dicitura di cosa mostreranno.
- **Solo ciò che è previsto.** Ogni elemento corrisponde a qualcosa nelle fonti. Un pulsante in più è una funzionalità promessa.
- **Codici.** Ogni schermata ha un codice fisso (S1, S2) e riporta in piccolo i codici delle story che realizza (F3.1). Sono il legame con il Manuale.
- **Stati.** Per ogni schermata che li ha: stato vuoto, errore, caricamento. Sono i casi particolari delle story, e sono quelli che più spesso mancano.
- **Dicitura fissa.** Ogni pagina porta in alto: "Wireframe: mostra struttura e contenuti, non l'aspetto grafico".
- **Per i progetti: prima e dopo.** Mostra lo stato attuale e quello proposto, con evidenziato solo ciò che cambia.

## Regole del prototipo

- Collega le schermate secondo il percorso dell'utente descritto nelle story.
- Solo navigazione: nessun dato salvato, nessun calcolo vero. I moduli portano alla schermata successiva senza elaborare nulla.
- Un elemento non collegato non deve sembrare cliccabile.
- Una pagina iniziale elenca le schermate con codice e nome, e i percorsi da provare, uno per story.

## Formato

- Pagine HTML autonome, che si aprono nel browser senza installare nulla e senza connessione: stile e script dentro il file, nessuna risorsa esterna.
- Wireframe singolo: `wireframe-<cliente>-<sistema>-S<N>.html`.
- Prototipo: un unico file `prototipo-<cliente>-<sistema>-v<N>.html` con tutte le schermate.
- Leggibili su schermo grande e su telefono, secondo il dispositivo richiesto.
- Su richiesta, una copia in PDF dei wireframe da allegare al documento.

Dopo averle generate, apri le pagine e controllale: testo che esce dai riquadri, collegamenti che non portano da nessuna parte, schermate mancanti.

## Elenco di accompagnamento

Insieme ai file restituisci un elenco breve:

- le schermate, con codice, nome e story realizzate;
- le story che non hanno una schermata, e perché;
- ciò che hai dovuto supporre, da far confermare;
- le domande aperte per il cliente emerse disegnando.

## Dopo l'approvazione

Un wireframe approvato dal cliente vale come i documenti: cambiarlo dopo è una variazione. A ogni giro di correzioni incrementa la versione ed elenca cosa è cambiato. Alla conferma, ricorda che la versione approvata va salvata su Drive accanto ai documenti del lavoro.

I wireframe approvati sono la base da cui si disegnano i mockup.

## Regole di scrittura

Valgono per i testi dentro le schermate e per l'elenco di accompagnamento.

{{SCRITTURA}}

I testi delle schermate si rivolgono all'utente del sistema come farà il sistema vero: lì la forma impersonale non si applica.

## Controllo finale

1. Ogni elemento delle schermate corrisponde a qualcosa nelle fonti.
2. Ogni story che tocca l'interfaccia ha almeno una schermata, e ogni schermata cita le sue story.
3. Gli stati vuoto, errore e caricamento sono presenti dove servono.
4. Nessun colore, logo o immagine: solo grigi.
5. Le pagine si aprono senza connessione e ogni collegamento funziona.
6. {{CONTROLLO}}
