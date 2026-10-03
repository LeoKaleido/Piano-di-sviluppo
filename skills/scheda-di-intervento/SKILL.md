---
name: scheda-di-intervento
description: Scrive la Scheda di intervento di un ticket, rapido o esteso, e i suoi aggiornamenti (metà lavorazione, stima superata, chiusura, scheda a posteriori per un ticket bloccante). Usala per ogni ticket da lavorare, dopo la valutazione della richiesta.
---

# Scheda di intervento

## A cosa serve

La Scheda di intervento è l'unico documento di un ticket. Vive dentro il ticket, non in un file a parte, e ha due lettori: il cliente, che la conferma prima che il lavoro inizi, e lo sviluppatore, che la usa per sapere cosa fare e quando ha finito.

È ciò che fa fede se a lavoro concluso nasce una discussione: quello che è scritto nella scheda è compreso, quello che è escluso non lo è. Per questo deve essere breve ma senza ambiguità.

La skill copre cinque situazioni:

- **Scheda iniziale**, da far confermare al cliente.
- **Aggiornamento a metà lavorazione**, per il ticket esteso.
- **Avviso di stima superata.**
- **Chiusura.**
- **Scheda a posteriori**, per un ticket bloccante già risolto.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Il ticket.** Il testo della richiesta e degli scambi con il cliente, oppure dove si trovano.
2. **Il cliente.** Il nome con cui indicarlo.
3. **Il livello.** Ticket rapido (fino a 2 giorni) o esteso (da 2 giorni a 2 settimane). Se esiste una valutazione della richiesta, usala.
4. **La situazione.** Quale delle cinque sopra. Se non è detto e non esiste ancora una scheda, è la scheda iniziale.
5. **L'esito della verifica preliminare**, per la scheda iniziale: cosa è stato trovato nel codice e nei lavori aperti. Stato di partenza, esclusioni e stima partono da lì. Se la verifica non è stata fatta, segnalalo: una scheda scritta senza aver guardato il codice impegna su una stima non fondata.

## Informazioni mancanti

Chiedi in un unico elenco numerato ciò che serve e non trovi. Non colmare i buchi con supposizioni: ciò che è scritto nella scheda diventa un impegno verso il cliente.

- **Stima e data prevista** le fornisce chi conosce il lavoro (product lead, team lead o sviluppatore). Puoi proporre una stima, ma vale solo dopo la conferma: finché non è confermata, marcala con "[Stima da validare]".
- **Decisioni del cliente**: se una decisione spetta a lui, non va nella scheda come supposizione. Va chiesta nel ticket prima di scrivere la scheda.

Se mancano informazioni che nessuno può fornire subito, produci una bozza (vedi "Bozza o scheda completa").

## Scheda iniziale

Ogni scheda contiene sei voci, in quest'ordine:

1. **Cosa verrà fatto.** L'intervento, in parole comprensibili al cliente.
2. **Cosa resta escluso.** Ciò che il cliente potrebbe dare per compreso. Se non c'è nulla da escludere, scrivilo.
3. **Materiali attesi dal cliente.** Testi, immagini, dati, accessi, ciascuno con la data entro cui serve. Se non serve nulla, scrivilo.
4. **Stima.** Le ore previste.
5. **Data prevista.** Quando la modifica sarà in produzione. Se servono materiali, precisa che la data vale se arrivano entro il termine, e che ogni giorno di ritardo sposta di un giorno la consegna.
6. **Finito quando.** Le condizioni verificabili che chiudono il lavoro. Devono poter ricevere un sì o un no senza interpretazioni: "funziona correttamente" non è una condizione, "il pulsante Esporta scarica un file con tutte le righe visibili nell'elenco" lo è.

La scheda di un **ticket rapido** si ferma qui e deve restare di poche righe.

La scheda di un **ticket esteso** aggiunge tre voci:

7. **Stato di partenza.** Come funziona oggi la parte toccata. Serve a rendere esplicito cosa cambia e cosa resta uguale.
8. **Criteri di accettazione.** Cosa verificherà il cliente nella demo sull'ambiente di prova, prima del rilascio.
9. **Elenco delle issue.** Le parti in cui è diviso il lavoro, ciascuna con la sua stima.

**Wireframe.** Se l'intervento cambia una schermata, la scheda segnala che è allegato un wireframe, cioè lo schema della schermata senza grafica, e che il cliente lo conferma insieme alla scheda. Un ticket non prevede mockup: segue l'aspetto grafico esistente. Se serve un aspetto nuovo, segnala che la richiesta potrebbe essere un progetto.

**Allineamento dei documenti.** Quando consegni la scheda iniziale, ricorda al team che alla conferma del cliente vanno controllati i documenti toccati dall'intervento (Manuale del prodotto e Documento tecnico del sistema, documenti di progetti in corso, schede di altri ticket aperti). Questo promemoria non fa parte del testo per il cliente.

## Aggiornamento a metà lavorazione

Solo per il ticket esteso. Poche righe: cosa è stato fatto, cosa resta, se la data prevista è confermata, cosa serve ancora dal cliente.

## Avviso di stima superata

Quando le ore consumate superano la soglia concordata sulla stima (proposta: 25%), il lavoro si ferma e il cliente deve confermare prima che prosegua. L'avviso contiene:

- le ore stimate e le ore consumate;
- le ore che mancano per concludere;
- il motivo dello scostamento, in parole comprensibili;
- la richiesta di conferma per proseguire.

Se la nuova stima porta il ticket oltre le 2 settimane, non scrivere l'avviso: segnala che il ticket va fermato e convertito in progetto.

## Chiusura

Aggiunge alla scheda:

- **Cosa è stato fatto**, con riferimento alle condizioni del "finito quando".
- **Ore consumate**, e il motivo se diverse dalla stima.
- **Cosa deve fare il cliente**: confermare la chiusura entro il termine, dopo il quale il ticket viene chiuso comunque.

Quando consegni la chiusura, ricorda al team che Manuale del prodotto e Documento tecnico del sistema vanno aggiornati con ciò che è stato realmente fatto.

## Scheda a posteriori

Un ticket bloccante viene risolto subito, senza scheda né conferma. A problema risolto la scheda si scrive dopo, con quattro voci:

1. **Cosa è successo.** Il problema e il suo effetto sugli utenti.
2. **Causa.** In parole comprensibili al cliente.
3. **Correzione.** Cosa è stato fatto, e se la correzione è definitiva o provvisoria.
4. **Ore consumate.**

Se la correzione è provvisoria, segnala al team che va aperta una issue per rimuovere la causa.

## Regole di contenuto

- **Per il cliente.** Parole comuni. Un termine tecnico inevitabile va spiegato. Le tecnologie non si nominano: il cliente deve capire cosa cambia per lui, non come è costruito.
- **Nessun prezzo.** La scheda riporta ore e date, non importi.
- **Testo da incollare nel ticket.** Restituisci la scheda come testo semplice, con le voci su righe separate e le etichette in chiaro. Produci un file solo se viene chiesto.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Bozza o scheda completa

La scheda è **completa** solo se tutte le voci previste dal livello sono compilate, la stima è stata confermata e nessuna domanda è rimasta senza risposta.

In ogni altro caso produci una **bozza**: la prima riga è "BOZZA INTERNA, DA NON INVIARE AL CLIENTE", e ogni voce incompleta è seguita da una riga "Cosa manca", con ciò che serve e chi deve fornirlo. Una bozza non va incollata nel ticket.

## Controllo finale

1. **Tracciabilità.** Ogni cosa chiesta dal cliente nel ticket compare in "Cosa verrà fatto" oppure in "Cosa resta escluso". Nulla sparisce in silenzio.
2. **Finito quando.** Ogni condizione è verificabile con un sì o un no.
3. **Coerenza con il livello.** Sei voci per il ticket rapido, nove per l'esteso.
4. **Contenuti fuori posto.** Nessuna tecnologia, nessun prezzo, nessuna stima non confermata in una scheda completa.
5. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
