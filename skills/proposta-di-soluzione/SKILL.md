---
name: proposta-di-soluzione
description: Scrive e aggiorna la Proposta di soluzione per il cliente, con richiesta come compresa, soluzione e allegato con le user story. Usala dopo lo Stato di partenza, e ogni volta che il cliente manda correzioni o risposte a una versione già inviata, anche a voce in una riunione.
---

# Proposta di soluzione

## A cosa serve

La Proposta di soluzione è il documento che il cliente riceve prima della conferma. Il suo messaggio è: "si farebbe così, cosa ne pensa?". Riformula la richiesta, descrive la soluzione, dichiara compromessi e limiti, raccoglie le decisioni che spettano al cliente.

Il cliente la corregge e risponde alle domande; la proposta viene aggiornata e rimandata fino alla conferma, senza limite di giri. La versione confermata è la base del Manuale del prodotto. La prima versione rientra nel tempo del kickoff (il 10% di una stima a occhio della durata, fissato all'inizio): i giri successivi no.

Vale per progetti e prodotti. Una lavorazione minore non ha proposta: ha la Scheda di intervento.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Il cliente.** Il nome con cui chiamarlo nel testo.
2. **Progetto o prodotto.**
3. **Le fonti.** La cartella `source` del lavoro per intero (richiesta, trascrizioni, sintesi, materiali del cliente) e la voce Stato di partenza di `history-and-decision.md` (in `log`). Chiedi dove si trovano. Se lo Stato di partenza manca, avvisa: i limiti della proposta verrebbero scritti senza un'indagine. Procedi solo se confermato.
4. **Situazione.** Prima stesura, oppure riscontro del cliente a una versione già inviata.

## Informazioni mancanti

Chiedi in un unico elenco numerato ciò che manca. Non colmare i buchi con supposizioni: un'informazione inventata in questo documento diventa un impegno verso il cliente.

- **Domande per il team**: bloccano il completamento finché non hanno risposta.
- **Domande per il cliente**: decisioni che spettano a lui. Vanno nella sezione delle domande aperte.

## Struttura

Intestazione: titolo, cliente, data, versione (v0.1, v0.2, ...). La Proposta confermata dal cliente non porta la versione: vedi "Conferma".

**In sintesi.** Mezza pagina al massimo: cosa verrà realizzato, i limiti principali, cosa deve decidere il cliente. È per chi non leggerà il resto.

**Parte 1: la richiesta come è stata compresa.** Poche righe con le parole del cliente.

**Parte 2: la soluzione.**

1. **Obiettivo e utenti.** A cosa serve e chi lo userà.
2. **Soluzione proposta.** Cosa potrà fare ciascun tipo di utente.
3. **Compromessi.** Cose chieste che verranno realizzate in forma diversa: cosa era stato chiesto, perché non si fa così, con cosa viene sostituito.
4. **Suggerimenti.** Cose non chieste che si propone di aggiungere, dichiarate opzionali, con il beneficio.
5. **Cosa non si potrà fare.** I limiti e ciò che resta fuori, in particolare ciò che il cliente potrebbe dare per scontato. Una richiesta esplicita esclusa senza alternativa va spiegata tra i compromessi e ripetuta qui.
6. **Divisione in release.** Solo per il prodotto: cosa entra nella prima release e cosa dopo. Nella prima entra solo ciò senza cui il prodotto non è utilizzabile.
7. **Assunzioni.** Ciò che è stato dato per scontato.
8. **Domande aperte.** Vedi il formato sotto.
9. **Cosa serve dal cliente.** I materiali da fornire (testi, immagini, dati, accessi, documentazione di sistemi esterni, utenze di prova), ancora senza date, e il nome del referente.
10. **Stima di durata e tempi di rilascio.** Il cliente vuole sapere quanto durerà il lavoro prima che esista un piano preciso, quindi la Proposta lo dice. Contiene: la durata complessiva (per un prodotto, per release) come intervallo, in giorni di calendario fino a due mesi (45 giorni sono 45 giorni), in mesi da due mesi in poi (60 giorni sono 2 mesi), mai in settimane (per esempio "da 40 a 50 giorni" oppure "da 2 a 3 mesi"), ricavata dall'intervallo della stima del kickoff, convertito dalla stima interna in giorni lavorativi; il tempo di rilascio indicativo, come finestra in mesi o in metà mesi (per esempio "tra metà e fine febbraio"), a partire da un mese di avvio ipotizzato e dichiarato (per esempio "se lo sviluppo parte a dicembre"), tenendo conto di festività e ferie note; se la parte alta della finestra supera una scadenza del cliente, lo si dice; l'affidabilità della stima e le ipotesi su cui poggia (squadra, mese di avvio, materiali del cliente nei tempi attesi). Non è una data di consegna: le date precise di ogni prova arrivano con il Piano dei SAL, quando le issue sono stimate, e se la stima cambia il cliente lo sa subito. È il risultato della stima del kickoff, non della stima a occhio, che è interna.
11. **Stima economica (solo prodotto).** Il prodotto lavora a budget, non a consumo: per ogni release la Proposta riporta la stima economica, un importo con la sua affidabilità e le ipotesi (cosa comprende, cosa no). Il cliente la approva insieme alla Proposta. Parte dalla stima di durata di ogni release e dalle tariffe dell'azienda, che non sono in questi piani: se non le hai, chiedile al responsabile e non inventare cifre. Per progetti la sezione non esiste: si lavora a consumo.
12. **Prossimi passi.**

**Parte 3: allegato.**

- **Elenco delle user story.** Raggruppate per funzionalità. Ogni funzionalità ha un codice fisso (F1, F2), ogni story un codice derivato (F1.1). Di ogni story solo titolo e frase: "Come [tipo di utente], voglio [azione], per [beneficio]". Il dettaglio arriverà nel Manuale del prodotto.
- **Sunto della lavorazione.** Come procederà il lavoro dopo la conferma: documentazione, sviluppo a milestone con prova dal vivo del cliente (UAT), rilascio. Senza date.
- **Wireframe.** Facoltativi. Se il lavoro tocca l'interfaccia e si decide di allegarli, segnala che sono allegati i wireframe delle schermate nuove o modificate e che il cliente li conferma con la proposta.

## Formato delle domande aperte

- Ogni domanda ha un codice fisso (D1, D2), mai cambiato né riutilizzato, così il cliente può rispondere "D3: sì".
- La sezione ha due parti: prima le **domande ancora aperte**, con la versione da cui lo sono, poi le **domande con risposta**, con la risposta del cliente riportata sotto, la data e le sezioni in cui è stata applicata.
- Una risposta va anche integrata nel testo delle sezioni interessate.
- Una risposta parziale lascia la domanda aperta, riformulata su ciò che manca.

## Compromessi e suggerimenti

Li fornisce il team. Puoi proporne di tuoi, partendo dai vincoli dello Stato di partenza, ma entrano in una versione completa solo dopo essere stati accettati. In una bozza compaiono marcati con "[Proposta da validare]".

## Regole di contenuto

- **Nessuna tecnologia e nessun flusso tecnico.** Il cliente valuta cosa fa il prodotto.
- **Nessun prezzo e nessuna data precisa, tranne la stima economica del prodotto.** Per progetti i prezzi e i preventivi sono seguiti a parte; per un prodotto l'unico importo ammesso è la stima economica di ogni release (sezione 11); le date precise nascono dal capitolo Piano delle milestone del Documento tecnico. Nella Proposta il tempo compare solo come durata e come finestra di rilascio indicativa, mai come data di calendario.
- **Lunghezza.** Da 2 a 3 pagine, al massimo 5, allegato compreso. La sintesi iniziale resta breve. Se per stare nel limite bisogna togliere qualcosa, si toglie il dettaglio: arriverà nel Manuale del prodotto.
- **Comprensibile a chi non è del settore.** Un termine tecnico inevitabile va spiegato alla prima occorrenza.
- **Formula delle user story.** È in prima persona dal punto di vista dell'utente ed è l'unica eccezione alla forma impersonale.

## Dove si salva

Nella cartella della lavorazione: PDF della versione corrente nella radice (le precedenti escono dalla radice); bozze, versioni precedenti e sorgente in `claude`; wireframe in `design`. L'elenco delle domande aperte e il riepilogo scritto della conferma sono messaggi: si inviano e si salvano in `source`.

## Ogni versione è completa e indipendente

Una versione nuova di Proposta si legge da sola. Chi la apre non deve cercare le versioni precedenti.

- **Si parte dall'ultima versione, copiata per intero.** Si modifica ciò che cambia e il resto resta scritto, parola per parola. La versione nuova è un file nuovo.
- **Mai "invariato", mai rimandi.** Non si scrive "invariato", "come nella versione precedente", "resta quello delle versioni precedenti", "vedi la v1.3" al posto del contenuto. Una sezione che non cambia si riscrive uguale.
- **Il capitolo delle modifiche è storia, non un rimando.** Elenca che cosa è cambiato, dove e da quale lavoro. Il resto del documento non lo richiama e non dipende da esso.
- **Le versioni precedenti restano tutte in `claude`, come Markdown.** Non si cancellano e non si sovrascrivono, comprese le versioni intermedie e le bozze condivise: servono per completezza e per ricostruire la storia. `claude` contiene la catena completa, dalla prima versione disponibile alla corrente, anche per le versioni nate in altre lavorazioni: all'inizio del lavoro, se il documento esiste già, si copiano in `claude` dalle cartelle di quelle lavorazioni tutte le versioni precedenti. Prima di scrivere la versione nuova si controlla che la catena sia intera; se manca una versione si ripristina da dove si trova, e se non esiste più lo si dichiara.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere (unica eccezione: le tabelle del Piano dei SAL). Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Bozza o versione completa

La proposta è completa se tutte le sezioni sono compilate, nessuna domanda per il team è senza risposta e ogni tua proposta è stata accettata o scartata. Le domande aperte per il cliente non impediscono la completezza.

- **Bozza**: Markdown, `proposta-di-soluzione-bozza-<N>.md`. Prima riga "BOZZA INTERNA, DA NON CONDIVIDERE CON IL CLIENTE". Ogni sezione incompleta termina con un blocco "Cosa manca", con ciò che serve e chi deve fornirlo.
- **Versione completa**: PDF, `<NN>-proposta-di-soluzione-v0.<N>.pdf`, partendo da v0.1. Conserva il sorgente Markdown.
- **Proposta confermata**: PDF `<NN>-proposta-di-soluzione.pdf`, senza versione, con il sorgente `proposta-di-soluzione.md`. Vedi "Conferma".

## Riscontro del cliente

Il cliente può rispondere in qualunque forma: email, documento modificato, messaggio, o a voce in una riunione o telefonata. Il riscontro grezzo si conserva nella cartella `source` del lavoro. Per una conversazione usa la sintesi prodotta dalla skill `interpretazione-conversazioni`.

1. **Raccogli.** Chiedi dove si trova il riscontro e a quale versione si riferisce. Se il cliente ha restituito il documento modificato, confrontalo con la versione inviata: può aver cambiato una parola in un punto qualsiasi.
2. **Registro del riscontro.** Prima di modificare, scomponi il riscontro in voci e mostrale: cosa ha detto il cliente, il tipo (Correzione, Risposta a una domanda, Nuova richiesta, Domanda del cliente, Da chiarire), le sezioni toccate.
3. **Decisioni.** Per ogni Correzione o Nuova richiesta il responsabile decide: Accolta, Accolta con compromesso, Non accolta. Una richiesta del cliente non è accolta in automatico.
4. **Aggiorna.** Applica gli esiti in tutte le sezioni toccate, allegato compreso. I codici di story e domande non cambiano.
5. **Nuova versione.** Incrementa il numero e aggiungi "Modifiche rispetto alla versione precedente", con cosa è cambiato, dove e da cosa nasce. Le richieste non accolte compaiono anch'esse, con il motivo.

Se il responsabile non può decidere subito tutti gli esiti, la nuova versione è una bozza.

## Conferma

Quando le viene detto che una versione è quella confermata dal cliente, la skill la chiama semplicemente "Proposta di soluzione", senza numero di versione: il file è `proposta-di-soluzione.md` (e `<NN>-proposta-di-soluzione.pdf` nella radice), con il contenuto della versione confermata (per esempio la v0.3) e l'indicazione "confermata da [referente] il [data]". Non esiste una v1.0, una v1.1 né una v2: la Proposta confermata è una sola, e un cambiamento chiesto dopo la conferma è una variazione, non una nuova versione. Le versioni v0.1, v0.2, v0.3 restano in `claude`. La conferma può arrivare a voce, in una riunione: vale dopo il riepilogo scritto che il responsabile invia al cliente. Non può contenere domande aperte: ognuna va chiusa con una risposta, trasformata in assunzione o spostata tra ciò che non si potrà fare. Alla conferma ricorda al team l'allineamento dei documenti: vanno controllati gli altri lavori e documenti toccati dal progetto.

## Controllo finale

1. Ogni cosa chiesta dal cliente compare nella soluzione, nei compromessi o tra ciò che non si potrà fare.
2. Ogni story dell'allegato corrisponde a qualcosa descritto nella soluzione, e viceversa.
3. Ogni vincolo dello Stato di partenza che tocca la richiesta è riflesso nella proposta.
4. Nessuna tecnologia, prezzo o data precisa (tranne, per un prodotto, la stima economica di ogni release): la durata è un intervallo e il rilascio una finestra in mesi, con affidabilità e ipotesi dichiarate.
5. La proposta sta in 5 pagine al massimo.
6. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
