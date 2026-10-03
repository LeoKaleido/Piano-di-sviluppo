---
name: proposta-di-soluzione
description: Scrive e aggiorna la Proposta di soluzione per il cliente, con richiesta come compresa, soluzione e allegato con le user story. Usala dopo lo Stato di partenza, e ogni volta che il cliente manda correzioni o risposte a una versione già inviata.
---

# Proposta di soluzione

## A cosa serve

La Proposta di soluzione è l'unico documento che il cliente riceve prima della conferma. Il suo messaggio è: "si farebbe così, cosa ne pensa?". Riformula la richiesta, descrive la soluzione, dichiara compromessi e limiti, raccoglie le decisioni che spettano al cliente.

Il cliente la corregge e risponde alle domande; la proposta viene aggiornata e rimandata fino alla conferma. La versione confermata è la base del Manuale del prodotto.

Vale per progetti e prodotti. Un ticket non ha proposta: ha la Scheda di intervento.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Il cliente.** Il nome con cui chiamarlo nel testo.
2. **Progetto o prodotto.**
3. **Le fonti.** La richiesta, gli appunti del primo confronto e lo Stato di partenza. Chiedi dove si trovano. Se lo Stato di partenza manca, avvisa: i limiti della proposta verrebbero scritti senza un'indagine. Procedi solo se confermato.
4. **Situazione.** Prima stesura, oppure riscontro del cliente a una versione già inviata.

## Informazioni mancanti

Chiedi in un unico elenco numerato ciò che manca. Non colmare i buchi con supposizioni: un'informazione inventata in questo documento diventa un impegno verso il cliente.

- **Domande per il team**: bloccano il completamento finché non hanno risposta.
- **Domande per il cliente**: decisioni che spettano a lui. Vanno nella sezione delle domande aperte.

## Struttura

Intestazione: titolo, cliente, data, versione.

**In sintesi.** Mezza pagina al massimo: cosa verrà realizzato, i limiti principali, cosa deve decidere il cliente. È per chi non leggerà il resto.

**Parte 1: la richiesta come è stata compresa.** Poche righe con le parole del cliente.

**Parte 2: la soluzione.**

1. **Obiettivo e utenti.** A cosa serve e chi lo userà.
2. **Soluzione proposta.** Cosa potrà fare ciascun tipo di utente.
3. **Compromessi.** Cose chieste che verranno realizzate in forma diversa: cosa era stato chiesto, perché non si fa così, con cosa viene sostituito.
4. **Suggerimenti.** Cose non chieste che si propone di aggiungere, dichiarate opzionali, con il beneficio.
5. **Cosa non si potrà fare.** I limiti e ciò che resta fuori, in particolare ciò che il cliente potrebbe dare per scontato. Una richiesta esplicita esclusa senza alternativa va spiegata tra i compromessi e ripetuta qui.
6. **Divisione in rilasci.** Solo per il prodotto: cosa entra nel primo rilascio e cosa dopo. Nel primo entra solo ciò senza cui il prodotto non è utilizzabile.
7. **Assunzioni.** Ciò che è stato dato per scontato.
8. **Domande aperte.** Vedi il formato sotto.
9. **Cosa serve dal cliente.** I materiali da fornire (testi, immagini, dati, accessi, documentazione di sistemi esterni, utenze di prova), ancora senza date, e il nome del decisore.
10. **Prossimi passi.**

**Parte 3: allegato.**

- **Elenco delle user story.** Raggruppate per funzionalità. Ogni funzionalità ha un codice fisso (F1, F2), ogni story un codice derivato (F1.1). Di ogni story solo titolo e frase: "Come [tipo di utente], voglio [azione], per [beneficio]". Il dettaglio arriverà nel Manuale del prodotto.
- **Sunto della lavorazione.** Come procederà il lavoro dopo la conferma: documentazione, sviluppo a milestone con demo, rilascio. Senza date.
- **Wireframe.** Se il lavoro tocca l'interfaccia, segnala che sono allegati i wireframe delle schermate nuove o modificate e che il cliente li conferma con la proposta.

## Formato delle domande aperte

- Ogni domanda ha un codice fisso (D1, D2), mai cambiato né riutilizzato, così il cliente può rispondere "D3: sì".
- La sezione ha due parti: prima le **domande ancora aperte**, con la versione da cui lo sono, poi le **domande con risposta**, con la risposta del cliente riportata sotto, la data e le sezioni in cui è stata applicata.
- Una risposta va anche integrata nel testo delle sezioni interessate.
- Una risposta parziale lascia la domanda aperta, riformulata su ciò che manca.

## Compromessi e suggerimenti

Li fornisce il team. Puoi proporne di tuoi, partendo dai vincoli dello Stato di partenza, ma entrano in una versione completa solo dopo essere stati accettati. In una bozza compaiono marcati con "[Proposta da validare]".

## Regole di contenuto

- **Nessuna tecnologia e nessun flusso tecnico.** Il cliente valuta cosa fa il prodotto.
- **Nessun prezzo e nessuna data.** Prezzi e preventivi sono seguiti a parte; le date nascono dal Piano delle milestone.
- **Nessun limite di lunghezza**, ma la sintesi iniziale resta breve.
- **Comprensibile a chi non è del settore.** Un termine tecnico inevitabile va spiegato alla prima occorrenza.
- **Formula delle user story.** È in prima persona dal punto di vista dell'utente ed è l'unica eccezione alla forma impersonale.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Bozza o versione completa

La proposta è completa se tutte le sezioni sono compilate, nessuna domanda per il team è senza risposta e ogni tua proposta è stata accettata o scartata. Le domande aperte per il cliente non impediscono la completezza.

- **Bozza**: Markdown, `proposta-soluzione-<cliente>-bozza-<N>.md`. Prima riga "BOZZA INTERNA, DA NON CONDIVIDERE CON IL CLIENTE". Ogni sezione incompleta termina con un blocco "Cosa manca", con ciò che serve e chi deve fornirlo.
- **Versione completa**: PDF, `proposta-soluzione-<cliente>-v0.<N>.pdf`, partendo da v0.1. Conserva il sorgente Markdown.

## Riscontro del cliente

Il cliente può rispondere in qualunque forma: email, documento modificato, messaggio, appunti di una call.

1. **Raccogli.** Chiedi dove si trova il riscontro e a quale versione si riferisce. Se il cliente ha restituito il documento modificato, confrontalo con la versione inviata: può aver cambiato una parola in un punto qualsiasi.
2. **Registro del riscontro.** Prima di modificare, scomponi il riscontro in voci e mostrale: cosa ha detto il cliente, il tipo (Correzione, Risposta a una domanda, Nuova richiesta, Domanda del cliente, Da chiarire), le sezioni toccate.
3. **Decisioni.** Per ogni Correzione o Nuova richiesta il product lead decide: Accolta, Accolta con compromesso, Non accolta. Una richiesta del cliente non è accolta in automatico.
4. **Aggiorna.** Applica gli esiti in tutte le sezioni toccate, allegato compreso. I codici di story e domande non cambiano.
5. **Nuova versione.** Incrementa il numero e aggiungi "Modifiche rispetto alla versione precedente", con cosa è cambiato, dove e da cosa nasce. Le richieste non accolte compaiono anch'esse, con il motivo.

Se il product lead non può decidere subito tutti gli esiti, la nuova versione è una bozza.

## Conferma

La versione confermata dal cliente diventa la v1.0. Non può contenere domande aperte: ognuna va chiusa con una risposta, trasformata in assunzione o spostata tra ciò che non si potrà fare. Alla conferma ricorda al team l'allineamento dei documenti: vanno controllati gli altri lavori e documenti toccati dal progetto.

## Controllo finale

1. Ogni cosa chiesta dal cliente compare nella soluzione, nei compromessi o tra ciò che non si potrà fare.
2. Ogni story dell'allegato corrisponde a qualcosa descritto nella soluzione, e viceversa.
3. Ogni vincolo dello Stato di partenza che tocca la richiesta è riflesso nella proposta.
4. Nessuna tecnologia, prezzo o data.
5. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
