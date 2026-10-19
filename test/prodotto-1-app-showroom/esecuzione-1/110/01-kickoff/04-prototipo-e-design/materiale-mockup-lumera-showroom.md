# Materiale per i mockup, Lumera Arredi, applicazione per gli showroom

Prodotto 110. Data: 2026-12-04. Per la grafica (persona dedicata, 8 ore a settimana, lavora in Figma). Wireframe di partenza: S1 e S3 approvati con la Proposta v1.0; S2, S4, S5 e S6 dal prototipo, non ancora approvato (il prototipo v2 e i mockup si approvano insieme, vedi la telefonata del 15 dicembre).

## 1. Scopo

Definire l'aspetto del tablet: identità di Lumera, leggibilità con il cliente accanto, foto dei prodotti in evidenza.

## 2. Identità grafica

Fornito: logo e colori del sito. Manca: indicazioni per un'applicazione su tablet (dimensioni dei tasti, carattere). Da chiedere a Franco o decidere con la grafica.

## 3. Schermate

- **S1 Agenda del giorno.** Story F2.1, F2.2, F6.1. Contenuti: titolo con showroom e data, elenco appuntamenti con ora, cliente, motivo, stato; pulsanti "Fissa un appuntamento" e "Cerca un cliente". Stati: normale, vuoto ("Nessun appuntamento per oggi"), errore ("Impossibile caricare l'agenda. I dati salvati sul tablet sono mostrati."), caricamento, senza connessione (segnalato). Dispositivo: tablet.
- **S2 Nuovo appuntamento.** Story F2.2, F2.3. Contenuti: cliente, giorno, ora, motivo. Stati: normale, errore (fascia occupata).
- **S3 Proposta.** Story F4.1 a F4.5, F5.1. Contenuti: cliente, righe con foto, nome, quantità, prezzo e disponibilità, sconto con massimo 10%, totale senza IVA, IVA, totale; pulsanti "Aggiungi un prodotto", "Invia per email", "Duplica", "Trasforma in ordine". Stati: normale, vuoto, errore sconto oltre il 10% ("Sconto oltre il 10%: la proposta non può proseguire. Contattare il titolare."), caricamento.
- **S4 Cliente.** Story F3.1, F3.2, F3.3. Contenuti: dati, consenso, elenco delle proposte. Stati: normale, vuoto, errore.
- **S5 Invio della proposta.** Story F4.4. Stati: normale, errore.
- **S6 Ordine.** Story F5.1, F5.2. Stati: normale, errore.

## 4. Ordine di lavoro

S3 (fissa lo stile delle altre), poi S1, S4, S2, S6, S5.

## 5. Cosa non va cambiato

La struttura e i contenuti dei wireframe approvati. Se disegnando emerge che la struttura non regge, si segnala: cambiarla dopo l'approvazione del prototipo e dei mockup è una variazione, dopo la conferma del Manuale.

## 6. Figma Starter

Lavorare nei drafts personali, un file per prodotto; link in sola visualizzazione per il cliente e per gli sviluppatori; componenti ricorrenti in un file di base; versioni approvate esportate in PDF.

## 7. Domande aperte

- Dimensione dello schermo del tablet (dipende dalla domanda D2 della Proposta, risposta: un solo modello, scelto entro marzo 2027).
