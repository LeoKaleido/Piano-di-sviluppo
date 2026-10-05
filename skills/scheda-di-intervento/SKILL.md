---
name: scheda-di-intervento
description: Scrive i due documenti di un ticket, rapido o esteso: la Scheda di intervento (per il cliente, non tecnica) e la Scheda di sviluppo (interna, per lo sviluppatore), e le comunicazioni al cliente che seguono (metà lavorazione, stima superata, chiusura), più le schede a posteriori per un ticket bloccante. Usala per ogni ticket da lavorare, dopo la valutazione della richiesta.
---

# Scheda di intervento e Scheda di sviluppo

## A cosa servono

Un ticket ha due documenti, con lettori diversi. Non vanno mescolati: ciò che è scritto per lo sviluppatore non deve arrivare al cliente.

- **Scheda di intervento.** Per il cliente. È un riassunto non tecnico di ciò che il ticket risolve o aggiunge al prodotto e in che modo, e il cliente lo conferma prima che il lavoro inizi. Vive nel ticket. Non contiene stime, tempi di consegna né dettagli tecnici: niente file cambiati, moduli, funzioni o tecnologie.
- **Scheda di sviluppo.** Interna, mai visibile al cliente. Serve a chi sviluppa per capire cosa deve fare, in quanto tempo e quando ha finito.

La Scheda di intervento è ciò che fa fede se a lavoro concluso nasce una discussione: quello che è scritto è compreso, quello che è escluso non lo è. Per questo deve essere breve ma senza ambiguità. Si scrive prima del lavoro, con ciò che già si sa, e non si aggiorna: se il cliente chiede un cambiamento, è una nuova scheda. Ciò che si sa solo dopo (cosa è stato fatto) non ne fa parte: va nelle comunicazioni al cliente.

La skill copre cinque situazioni:

- **Schede iniziali**, con la Scheda di intervento da far confermare al cliente.
- **Aggiornamento a metà lavorazione**, per il ticket esteso: un messaggio al cliente.
- **Avviso di stima superata**: un messaggio al cliente.
- **Comunicazione di chiusura**: un messaggio al cliente.
- **Schede a posteriori**, per un ticket bloccante già risolto.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Il ticket.** Il testo della richiesta e degli scambi con il cliente, oppure dove si trovano.
2. **Il cliente.** Il nome con cui indicarlo.
3. **Il livello.** Ticket rapido (fino a 2 giorni) o esteso (da 2 giorni a 2 settimane). Se esiste una valutazione della richiesta, usala.
4. **La situazione.** Quale delle cinque sopra. Se non è detto e non esistono ancora le schede, sono le schede iniziali.
5. **L'esito della verifica preliminare**, per le schede iniziali: cosa è stato trovato nel codice e nei lavori aperti. Stato di partenza, esclusioni e stima partono da lì. Se la verifica non è stata fatta, segnalalo: una scheda scritta senza aver guardato il codice impegna su una stima non fondata.
6. **Il Manuale del prodotto**, se il sistema ne ha uno: serve per le user story e i loro codici.

## Informazioni mancanti

Chiedi in un unico elenco numerato ciò che serve e non trovi. Non colmare i buchi con supposizioni: ciò che è scritto nella Scheda di intervento diventa un impegno verso il cliente.

- **Stima e consegna** le fornisce chi conosce il lavoro (product lead, team lead o sviluppatore). Puoi proporre una stima, ma vale solo dopo la conferma: finché non è confermata, marcala con "[Stima da validare]" nella Scheda di sviluppo.
- **Decisioni del cliente**: se una decisione spetta a lui, non va nella scheda come supposizione. Va chiesta nel ticket prima di scrivere la scheda.

Se mancano informazioni che nessuno può fornire subito, produci una bozza (vedi "Bozza o scheda completa").

## Scheda di intervento iniziale (per il cliente)

Ogni Scheda di intervento contiene queste voci, in quest'ordine:

1. **Cosa verrà fatto.** Cosa il ticket risolve o aggiunge al prodotto, in parole comprensibili al cliente, e in che modo. Il "in che modo" si indica con le user story:
   - ogni story ha titolo e frase "Come, voglio, per", e il codice se è già nel Manuale del prodotto (per esempio F3.1);
   - una story nuova o cambiata non ha ancora il codice: lo riceve quando si aggiorna il Manuale, alla chiusura;
   - per un bug si indica la story violata, con cosa succede oggi e cosa succederà dopo;
   - per un'assistenza, che non cambia il sistema, bastano poche righe senza story.
2. **Cosa resta escluso.** Ciò che il cliente potrebbe dare per compreso. Se non c'è nulla da escludere, scrivilo.
3. **Materiali attesi dal cliente.** Testi, immagini, dati, accessi, da consegnare subito, insieme alla conferma: il lavoro parte quando sono arrivati. Se non serve nulla, scrivilo.

La scheda di un **ticket rapido** si ferma qui e deve restare di poche righe.

La scheda di un **ticket esteso** aggiunge due voci:

4. **Stato di partenza.** Come funziona oggi la parte toccata, in termini di cosa vede e fa l'utente. Serve a rendere esplicito cosa cambia e cosa resta uguale.
5. **Criteri di accettazione.** Cosa verificherà il cliente nella demo sullo staging, prima del rilascio.

**Cosa non entra mai.** Stime, ore, tempi di consegna, file o parti di codice, nomi di moduli, tecnologie, prezzi. Se ne serve uno per spiegare un effetto, descrivi l'effetto per l'utente.

**Wireframe.** Se l'intervento cambia una schermata, la scheda segnala che è allegato un wireframe, cioè lo schema della schermata senza grafica, e che il cliente lo conferma insieme alla scheda. Un ticket non prevede mockup: segue l'aspetto grafico esistente. Se serve un aspetto nuovo, segnala che la richiesta potrebbe essere un progetto.

## Scheda di sviluppo iniziale (interna)

Ogni Scheda di sviluppo contiene queste voci, in quest'ordine:

1. **Cosa fare.** L'intervento in termini tecnici: le parti del sistema toccate, ricavate dall'esito della verifica preliminare, e le story della Scheda di intervento a cui si riferisce.
2. **Stima.** Le ore previste.
3. **Consegna.** I giorni lavorativi dalla conferma del cliente entro cui il lavoro sarà in produzione. La data di calendario non si scrive qui: si comunica al cliente alla pianificazione.
4. **DoD.** Le condizioni verificabili che chiudono il lavoro. Devono poter ricevere un sì o un no senza interpretazioni: "funziona correttamente" non è una condizione, "il pulsante Esporta scarica un file con tutte le righe visibili nell'elenco" lo è. Quando al lavoro partecipa più di una persona comprendono la code review.
5. **Allineamento dei documenti.** L'elenco dei lavori e dei documenti toccati, ricavato dalla verifica preliminare: Manuale del prodotto e Documento tecnico del sistema, documenti di progetti in corso, schede di altri ticket aperti. Ricorda al team che alla conferma del cliente vanno controllati.

La scheda di un **ticket esteso** aggiunge:

6. **Elenco delle issue.** Le parti in cui è diviso il lavoro, ciascuna con la sua stima.

## Aggiornamento a metà lavorazione

Solo per il ticket esteso. È un messaggio nel ticket, non una modifica della scheda. Poche righe, non tecniche: cosa è stato fatto, cosa resta, se la data comunicata alla pianificazione è confermata, cosa serve ancora dal cliente.

## Avviso di stima superata

Quando le ore consumate superano la soglia concordata sulla stima (proposta: 25%), il lavoro si ferma e il cliente deve confermare prima che prosegua. L'avviso contiene:

- le ore stimate e le ore consumate;
- le ore che mancano per concludere;
- il motivo dello scostamento, in parole comprensibili;
- la richiesta di conferma per proseguire.

Se la nuova stima porta il ticket oltre le 2 settimane, non scrivere l'avviso: segnala che il ticket va fermato e convertito in progetto.

## Comunicazione di chiusura

È un messaggio al cliente nel ticket, non una modifica della Scheda di intervento. Contiene:

- **Cosa è stato risolto o aggiunto**, e in che modo: le user story realizzate, con il codice, in parole non tecniche. È il confronto con la voce "Cosa verrà fatto" della scheda confermata.
- **Cosa deve fare il cliente**: confermare la chiusura entro il termine, dopo il quale il ticket viene chiuso comunque.

Non contiene ore, né file o dettagli tecnici.

Quando consegni la chiusura, ricorda al team che Manuale del prodotto e Documento tecnico del sistema vanno aggiornati con ciò che è stato realmente fatto, e che le story nuove ricevono il codice.

## Schede a posteriori

Un ticket bloccante viene risolto subito, senza schede né conferma. A problema risolto si scrivono dopo.

**Scheda di intervento a posteriori**, per il cliente, con tre voci:

1. **Cosa è successo.** Il problema e il suo effetto sugli utenti.
2. **Causa.** In parole comprensibili al cliente.
3. **Correzione.** Cosa è stato risolto e in che modo, con la story violata, e se la correzione è definitiva o provvisoria.

**Scheda di sviluppo a posteriori**, interna: causa tecnica, correzione nei dettagli, parti del sistema toccate. Se la correzione è provvisoria, segnala al team che va aperta una issue per rimuovere la causa.

## Regole di contenuto

- **Per il cliente.** Parole comuni. Un termine tecnico inevitabile va spiegato. Le tecnologie non si nominano: il cliente deve capire cosa cambia per lui, non come è costruito.
- **Per lo sviluppatore.** I termini tecnici sono ammessi. Nulla di ciò che è scritto qui si copia nella Scheda di intervento.
- **Nessun prezzo.** Nessuna delle due schede riporta importi.
- **Testo da incollare.** Restituisci ogni scheda come testo semplice, con le voci su righe separate e le etichette in chiaro, in due blocchi distinti con il titolo del documento. La Scheda di intervento si incolla nel ticket, la Scheda di sviluppo nella nota interna non visibile al cliente. Produci un file solo se viene chiesto.

## Regole di scrittura

{{SCRITTURA}}

## Bozza o scheda completa

Le schede sono **complete** solo se tutte le voci previste dal livello sono compilate, la stima è stata confermata e nessuna domanda è rimasta senza risposta.

In ogni altro caso produci una **bozza**: la prima riga è "BOZZA INTERNA, DA NON INVIARE AL CLIENTE", e ogni voce incompleta è seguita da una riga "Cosa manca", con ciò che serve e chi deve fornirlo. Una bozza non va incollata nel ticket.

## Controllo finale

1. **Tracciabilità.** Ogni cosa chiesta dal cliente nel ticket compare in "Cosa verrà fatto" oppure in "Cosa resta escluso". Nulla sparisce in silenzio.
2. **Separazione.** Nella Scheda di intervento non c'è nessuna stima, ora, tempo di consegna, file, modulo o tecnologia. Nella Scheda di sviluppo non c'è nulla di scritto per il cliente.
3. **User story.** Ogni story citata ha titolo e frase "Come, voglio, per", e il codice se già nel Manuale.
4. **DoD.** Ogni condizione è verificabile con un sì o un no.
5. **Coerenza con il livello.** Le voci presenti sono quelle previste per il ticket rapido o per l'esteso, in entrambe le schede.
6. **Contenuti fuori posto.** Nessun prezzo, nessuna stima non confermata in una scheda completa.
7. {{CONTROLLO}}
