---
name: allineamento-documenti
description: Trova i documenti di altri lavori toccati da un ticket o da un progetto (Manuale del prodotto, Documento tecnico, Guida alla pubblicazione, documenti di progetti, Schede di intervento di altri ticket) e ne propone l'aggiornamento. Usala a lavoro concluso (per un ticket, dopo la chiusura) e prima di sviluppare alla conferma di una proposta.
---

# Allineamento dei documenti

## A cosa serve

Un ticket o un progetto può cambiare un comportamento descritto nei documenti di un altro lavoro. Se nessuno se ne accorge, quei documenti diventano falsi: il Manuale del prodotto descrive qualcosa che il sistema non fa più, oppure un progetto viene costruito su una base che un ticket ha appena cambiato.

La skill cerca i documenti toccati, dice cosa cambia in ciascuno e propone le modifiche. Le applica solo dopo la conferma del responsabile del lavoro.

Si usa in due momenti:

- **Prima di iniziare.** Per un progetto o un prodotto, alla conferma della Proposta di soluzione: serve a scoprire i conflitti con altri lavori quando costa ancora poco risolverli. Per un ticket questo controllo è già nell'analisi, dentro la verifica preliminare, che può rimandare il lavoro.
- **A lavoro concluso.** Serve ad aggiornare i documenti con ciò che è stato realmente fatto. Per un ticket, urgente o no, avviene dopo la chiusura: il ticket si chiude al rilascio e le procedure interne seguono, così il cliente non aspetta. Per un progetto o un prodotto avviene dopo il rilascio.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Il lavoro di partenza.** Il ticket (con la sua Scheda di intervento) o il progetto (con Proposta di soluzione e Manuale), e il sistema su cui interviene.
2. **Il momento.** Prima di iniziare, oppure a lavoro concluso.
3. **Dove sono i documenti.** I documenti sono nella knowledge base del prodotto: i documenti del sistema nella loro cartella, quelli di ogni lavoro nella cartella che ha per nome il codice della lavorazione, divisi in cartelle per fase. Se hai accesso alla knowledge base, cerca tu. Se non hai accesso, chiedi che i documenti vengano forniti e dichiara che il controllo copre solo quelli ricevuti.
4. **Per un ticket, la fonte.** Le voci "Su cosa intervenire" e "Documenti collegati" della Scheda di intervento: dicono quali parti del sistema (con il loro repository) sono toccate e, per codice della lavorazione, quali documenti controllare per primi. Se lo sviluppatore ha toccato parti diverse da quelle previste, la scheda deve essere stata corretta prima di usarla: se non lo è, chiedilo.
5. **A lavoro concluso**: cosa è stato realmente fatto, se diverso da quanto previsto.

## Dove cercare

Sullo stesso sistema:

- il **Manuale del prodotto** e il **Documento tecnico** del sistema;
- i documenti dei **progetti**, in corso o chiusi: Stato di partenza, Proposta di soluzione, Documento tecnico con il capitolo Milestone, wireframe e mockup;
- le **Schede di intervento** degli altri ticket, aperti o chiusi, sulla stessa parte.

Su altri sistemi dello stesso cliente, solo se dialogano con la parte toccata: integrazioni, dati condivisi.

La ricerca parte dai codici delle lavorazioni citati nella Scheda di intervento, dalla verifica preliminare o dallo Stato di partenza: ogni codice è il nome di una cartella della knowledge base, e le sue cartelle di fase dicono dove cercare. Non si cerca tra tutte le lavorazioni.

## Come riconoscere un documento toccato

Parti da ciò che il lavoro cambia: schermate, comportamenti, dati, integrazioni, permessi. Un documento è toccato se:

- descrive un comportamento che cambia;
- dà per scontato un comportamento che cambia, anche senza descriverlo;
- prevede di modificare la stessa parte in un altro modo;
- contiene un wireframe o un mockup di una schermata che cambia.

Un documento va modificato solo se il lavoro ha cambiato qualcosa di rilevante nella parte di codice che riguarda. Leggi i documenti per intero: una ricerca per parole chiave non basta, perché la stessa cosa può essere chiamata in modi diversi in documenti vecchi. Se trovi due nomi per la stessa cosa, segnalalo.

## Rapporto di impatto

Restituisci in conversazione un rapporto con un elenco, senza modificare nulla. Non è un documento da salvare: le modifiche restano nelle versioni dei documenti e nello storico.

Per ogni documento toccato:

- **Documento**: nome, versione, lavoro a cui appartiene.
- **Punto toccato**: sezione, e codice della story se c'è.
- **Cosa cambia**: com'è scritto oggi e come dovrebbe diventare.
- **Tipo**:
  - **Aggiornamento**: il documento va allineato, nessun conflitto.
  - **Conflitto**: un altro lavoro in corso prevede qualcosa di incompatibile. Va risolto prima di sviluppare.
  - **Documento approvato dal cliente per un lavoro aperto**: vedi la regola sotto.
- **Chi deve decidere.**

In coda al rapporto:

- **Documenti controllati senza impatto**, così è chiaro cosa è stato guardato.
- **Documenti non raggiunti**: quelli che non hai potuto leggere o trovare. Un controllo parziale va dichiarato come tale.

## Regola sui documenti approvati dal cliente

Un documento già approvato da un cliente per un lavoro ancora aperto non si modifica in silenzio. Se il lavoro lo tocca, la skill si ferma: segnala che per quel lavoro serve una variazione o una comunicazione al cliente, e lascia la decisione al responsabile.

I documenti di lavori già chiusi, e quelli del sistema (Manuale del prodotto, Documento tecnico), si aggiornano a lavoro concluso, con una nuova versione numerata e l'origine della modifica dichiarata.

## Applicare le modifiche

Solo dopo la conferma del responsabile del lavoro, e solo per le voci confermate.

- Manuale del prodotto, Documento tecnico e Guida alla pubblicazione: nuova versione, con le modifiche registrate e la loro origine (codice del ticket o del progetto). Appartengono al sistema: si aggiornano, non se ne creano di nuovi.
- Story eliminate: restano con il loro codice e la dicitura "Rimossa". Story nuove: codice successivo all'ultimo usato.
- Documenti di lavori già chiusi: modifica con l'indicazione del lavoro che l'ha causata.
- Capitolo Milestone del Documento tecnico di un progetto aperto: non modificarlo. Segnala al responsabile le milestone e le issue (in ClickUp) toccate.

Dopo l'applicazione, elenca cosa è stato modificato e cosa resta in attesa di una decisione.

## Dove si salva

Il rapporto di impatto non si salva. I documenti del sistema aggiornati stanno in `sistema/`, e le modifiche sono registrate nelle loro versioni e nello storico della lavorazione.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

I documenti aggiornati mantengono il proprio lessico e le proprie regole: quelli per il cliente restano senza tecnologie, prezzi e date.

## Controllo finale

1. Ogni cosa che il lavoro cambia è stata cercata in tutti i documenti raggiunti.
2. Ogni voce del rapporto riporta il testo attuale e quello proposto.
3. Nessun documento è stato modificato prima della conferma.
4. Nessun documento approvato per un lavoro aperto è stato modificato.
5. I documenti non raggiunti sono dichiarati.
6. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
