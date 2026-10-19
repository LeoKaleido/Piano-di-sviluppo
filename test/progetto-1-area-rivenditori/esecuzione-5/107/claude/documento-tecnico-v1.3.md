# Documento tecnico, Lumera Arredi, sito di vendita online

Cliente: Lumera Arredi. Sistema: sito di vendita online e gestionale. Versione 1.3, del 2026-12-04. Si riferisce al Manuale v1.4. Interno. Documento a scopo di test, scritto per intero.

Le funzionalità nuove di questo progetto (F6, F7, F8) sono descritte a livello di implementazione. Le altre funzionalità (F1-F5, F10-F12) sono descritte con il livello di dettaglio che il documento aveva già. Dove il nome di un file, di una tabella o di un endpoint già esistenti non è noto a chi ha scritto il documento, è indicato "da confermare" e raccolto nelle domande per il team del capitolo 10.

## 1. Panoramica

Il sistema ha tre parti, ciascuna in un repository.

- `lumera-sito`: interfaccia del sito, con un server per il rendering lato server (SSR). Parla solo con `lumera-api`.
- `lumera-api`: servizio di API e database relazionale. È usato dal sito e dal gestionale. Contiene tutte le regole di calcolo e di accesso ai dati.
- `lumera-gestionale`: interfaccia interna per prodotti, ordini, clienti, codici sconto, messaggi di contatto, anagrafica dei rivenditori e, con il progetto 107, collegamento ai rivenditori e listini. Parla solo con `lumera-api`.

Due servizi esterni: il servizio di pagamento con carta e il servizio di invio delle email.

Flussi principali:

- Navigazione, carrello e pagamento: browser, server SSR di `lumera-sito`, `lumera-api`, database. Il pagamento chiama anche il servizio esterno.
- Area dei rivenditori (progetto 107): browser, server SSR di `lumera-sito` (con controllo della sessione sulle rotte `/rivenditore`), `lumera-api` (con controllo del ruolo e del collegamento a ogni richiesta), database. Nessun servizio esterno, tranne l'email per l'invito all'accesso.
- Gestione dei rivenditori e dei listini: browser, `lumera-gestionale`, `lumera-api` (rotte `/gestionale`, con controllo dei permessi), database.

Confini: il sito e il gestionale non leggono mai il database; ogni regola di accesso e di calcolo sta in `lumera-api`.

## 2. Tecnologie

- **React e TypeScript.** Interfaccia del sito e del gestionale. Scelte per la conoscenza del team e per la possibilità di condividere componenti.
- **Server SSR.** Rende le pagine del sito lato server. Va riavviato dopo ogni pubblicazione del sito (vedi il capitolo 7, Pubblicazione). Nel progetto 107 controlla la sessione sulle rotte `/rivenditore` prima di rendere la pagina.
- **API e database relazionale.** Un solo servizio per sito e gestionale, per tenere un'unica regola di calcolo dei prezzi e delle disponibilità. Il database è relazionale: i vincoli di unicità e le chiavi esterne servono a far rispettare le regole del Manuale (un rivenditore, un accesso).
- **Servizio esterno di pagamento.** Gestisce i dati di carta, che il sistema non conserva. Gli ordini grandi non lo usano.
- **Servizio esterno di invio email.** Usato per le conferme d'ordine, per le email all'assistenza e, con il progetto 107, per l'invito del rivenditore a impostare la password.
- **File CSV per i listini e per gli ordini grandi.** Formato di testo, leggibile e scrivibile da Excel, che Diego sa già produrre. Scelto al posto del formato Excel, che richiederebbe una libreria in più e ha più varianti.

## 3. Struttura del codice

Convenzioni valide per tutti i repository: ogni repository ha un `CLAUDE.md` con le convenzioni; i nomi dei file sono in minuscolo con i trattini; i test stanno accanto al codice che provano.

**`lumera-api`.** Un modulo per ogni dominio, in cui stanno le rotte, il servizio con le regole e l'accesso ai dati. Il `CLAUDE.md` fissa tre regole: ogni modifica a un modulo di calcolo ha un test automatico; i moduli non si importano a vicenda in modo circolare; i nomi dei file sono in minuscolo con i trattini. Moduli toccati dal progetto 107:

- `prezzi` (esistente, modulo di calcolo). Cambia la funzione che restituisce il prezzo di un prodotto: riceve anche il rivenditore, se c'è (vedi F7). Importa `listini` in sola lettura.
- `listini` (nuovo). Legge e scrive i listini dei rivenditori e fa l'importazione dei file. Non importa `prezzi`: l'import verso `prezzi` è a senso unico, per rispettare la regola dei moduli non circolari. Importa `prodotti` per riconoscere i codici.
- `rivenditori` (nuovo). Anagrafica dei rivenditori vista dall'area dei rivenditori e dal gestionale, e collegamento con gli accessi.
- `ordini-grandi` (nuovo). Anteprima e registrazione degli ordini da elenco, e elenco degli ordini del rivenditore. Importa `prezzi` e `ordini`, mai il contrario.
- `ordini`, `carrello`, accesso degli utenti (esistenti). Modifiche piccole descritte in F6, F7 e F8.
- Migrazioni del database: nella cartella delle migrazioni esistente (nome da confermare). Cinque migrazioni nuove, nell'ordine del capitolo 7. Ogni migrazione ha la sua marcia indietro.

**`lumera-sito`.** Cartelle per pagine, componenti e stili. Un componente per ogni blocco di schermata. Pagine nuove, tutte sotto `/rivenditore`: `accesso` (S1), la pagina principale (S2), `catalogo` e `prodotto/<codice>` (S3), `ordine-grande` (S4). Componenti nuovi: `AccessoRivenditore`, `PaginaRivenditore`, `ElencoOrdiniRivenditore`, `CaricaOrdine`, `TabellaRigheOrdine`. `Catalogo` e `SchedaProdotto` esistenti sono riusati con un parametro che dice di usare i prezzi del rivenditore.

**`lumera-gestionale`.** Schermate per prodotti, ordini, clienti, messaggi e anagrafica. Nuove: `CollegamentoRivenditore` (S5, collegamento) e `ListinoRivenditore` (S5, listino). L'elenco degli ordini esistente riceve il filtro per stato "da confermare".

## 4. Dati

Convenzioni: nomi di tabelle e colonne in minuscolo con il trattino basso, come le tabelle esistenti (per esempio `messaggi_contatto`); date in UTC; importi con due decimali, con la stessa convenzione di IVA del prezzo base del prodotto.

Entità esistenti, con le story che le usano:

- **Prodotto**: codice, nome, descrizione, immagini, prezzo, marca, categoria, disponibilità. F1, F2, F10, F11, F12.
- **Cliente**: accesso, indirizzi, lista dei desideri. F4, F5.
- **Carrello**: righe con prodotto e quantità, data dell'ultimo uso. Il prezzo non è salvato nella riga: il totale è calcolato a ogni lettura. F3, F7.2.
- **Utente del gestionale**: ruoli multipli, solo nel gestionale.
- **Confronto**: elenco dei prodotti scelti, conservato nel browser e in un link condiviso. F10, F11, F12.1.

Entità modificate dal progetto 107:

- **Utente del sito**: nuova colonna `ruolo`, testo, obbligatoria, valore predefinito `cliente`, valori ammessi `cliente` e `rivenditore`. Gli utenti esistenti restano `cliente`. F6.1.
- **Rivenditore** (anagrafica del gestionale, circa quaranta righe inserite a mano, con partita IVA ed email, cinque doppie). Nuovo vincolo di unicità sulla partita IVA, che si aggiunge solo dopo la pulizia dei doppioni. F6.2, F7.
- **Ordine**: nuova colonna `rivenditore_id`, numero, facoltativa, chiave esterna verso il rivenditore; nuova colonna `origine`, testo, valori `carrello` (predefinito) e `elenco`; nuovo valore di stato `da_confermare`. Un ordine con `origine` uguale a `elenco` non ha pagamento. F8.1, F8.2, F8.3.

Entità nuove:

- **Collegamento rivenditore-accesso** (tabella `utenti_rivenditori`): `id`, `utente_id` (chiave esterna verso l'utente del sito, unico), `rivenditore_id` (chiave esterna verso il rivenditore, unico), `creato_il`, `creato_da` (utente del gestionale). Il doppio vincolo di unicità fa rispettare le due regole di F6.2: un rivenditore ha al più un accesso e un accesso appartiene al più a un rivenditore. Per togliere un collegamento si cancella la riga. F6.1, F6.2.
- **Listino del rivenditore** (tabella `listini_rivenditore`): `id`, `rivenditore_id` (chiave esterna), `prodotto_id` (chiave esterna), `prezzo` (decimale, maggiore di zero), `aggiornato_il`, `aggiornato_da`. Vincolo di unicità su `rivenditore_id` e `prodotto_id`; indice su `rivenditore_id`. Un prodotto senza riga nel listino è un prodotto "prezzo su richiesta" per quel rivenditore. F7.1, F7.2, F7.3, F8.1.

Regole di validità: le quantità sono intere positive; un ordine accetta solo prezzi calcolati dal servizio di calcolo dei prezzi; un prodotto esaurito non entra in un ordine; un utente con ruolo `rivenditore` e senza collegamento non apre l'area riservata; il rivenditore di un ordine viene sempre dalla sessione, mai dal corpo della richiesta.

I file caricati (listini e ordini da elenco) non si conservano: si leggono in memoria e si scartano.

## 5. Realizzazione delle funzionalità

**F1 Catalogo** (`lumera-sito`, `lumera-api`). Elenco, ricerca e filtri sono richieste alle API con parametri; la paginazione è lato API. Rami di errore: nessun risultato (F1.1, F1.2, F1.3), intervallo di prezzo invertito (F1.3).

**F2 Scheda prodotto** (`lumera-sito`, `lumera-api`). Una richiesta per prodotto; il prezzo viene dal modulo `prezzi`. Rami di errore: prodotto non trovato (F2.1), prodotto esaurito (F2.2).

**F3 Carrello** (`lumera-sito`, `lumera-api`). Il carrello è salvato lato API, associato alla sessione o al cliente. Il totale è calcolato dal modulo `prezzi`, che arrotonda ogni riga. Un lavoro pianificato svuota i carrelli non usati da 90 giorni (F3.3). Rami di errore: quantità non valida (F3.2), prodotto esaurito (F3.1).

**F3.4 Sconto di importo fisso prima dell'IVA** (`lumera-api`, `lumera-gestionale`). Il modulo `prezzi` di `lumera-api` calcola il totale in questo ordine: somma delle righe, sottrazione del codice sconto di importo fisso ripartito in proporzione al valore delle righe per aliquota, IVA di ogni riga, arrotondamento dell'ultima riga. I codici in percentuale restano applicati con lo stesso risultato di prima. Il pagamento riceve il totale già calcolato e non ricalcola lo sconto. La stessa funzione è usata dai preventivi manuali di `lumera-gestionale`: cambia insieme al carrello.

**F3.5 Totale non negativo** (`lumera-api`). Il modulo `prezzi` limita il totale delle righe, dopo lo sconto di importo fisso, a un valore non inferiore a zero, prima di aggiungere la spedizione. I codici in percentuale non possono superare il 100% e non cambiano. Test: articolo da 15 euro e codice da 20 euro. Origine: Scheda del ticket 103.

**F4 Pagamento** (`lumera-sito`, `lumera-api`). Il riepilogo riceve il totale dalle API; il pagamento invia l'importo al servizio esterno e, a pagamento riuscito, crea l'ordine con le API degli ordini. I circuiti di carta accettati stanno in un file di configurazione. L'email di conferma parte dalle API tramite il servizio email. Rami di errore: circuito non accettato, pagamento rifiutato, connessione interrotta (F4.3), email fallita (F4.4). Per la connessione interrotta il servizio di pagamento riceve una chiave di unicità, così un secondo tentativo non addebita due volte.

**F5 Area cliente** (`lumera-sito`, `lumera-api`). Ordini, indirizzi e lista dei desideri sono letti e scritti con le API del cliente.

### F6 Accesso dei rivenditori

**F6.1 Accesso del rivenditore** (`lumera-sito`, `lumera-api`).

- **Parti e file.** Pagina `/rivenditore/accesso` con il componente `AccessoRivenditore` (S1). Modulo di accesso esistente in `lumera-api` (rotta di accesso esistente, nome da confermare). Controllo di sessione nel server SSR sulle rotte `/rivenditore`.
- **Flusso.**
  1. Il rivenditore invia nome utente e password dalla pagina S1 alla rotta di accesso esistente.
  2. Le API verificano le credenziali con la stessa funzione degli utenti esistenti.
  3. Se le credenziali sono valide e `ruolo` è `rivenditore`, le API cercano la riga in `utenti_rivenditori` con quell'`utente_id`.
  4. Se la riga esiste, la sessione si crea e contiene `ruolo` e `rivenditore_id`; il sito reindirizza a `/rivenditore` (S2).
  5. Ogni richiesta delle rotte `/rivenditore/*` e `/rivenditore-api/*` rilegge il collegamento: se la riga è stata tolta nel frattempo, la richiesta è rifiutata con 403 e la sessione si chiude. Così "il collegamento tolto" vale subito, senza aspettare la scadenza della sessione.
  6. Un utente con ruolo `cliente` che apre `/rivenditore` è reindirizzato alla pagina di accesso dei rivenditori.
- **Interfaccia di errore.** Credenziali errate: 401, codice `CREDENZIALI_NON_VALIDE`, un solo messaggio che non dice quale dato è sbagliato. Utente con ruolo `rivenditore` senza collegamento: 403, codice `ACCESSO_NON_ATTIVO`, messaggio "Accesso non attivo", nessuna sessione e nessuna pagina.
- **Rami di errore dei casi particolari.** Credenziali errate: ramo 401, vedi sopra. Accesso non collegato: ramo 403, vedi sopra.
- **Test.** Accesso riuscito con ruolo `rivenditore` e collegamento; credenziali errate; ruolo `rivenditore` senza collegamento; ruolo `cliente` sulla pagina dei rivenditori; collegamento tolto con sessione già aperta (la richiesta successiva è rifiutata).

**F6.2 Collegamento rivenditore-accesso** (`lumera-gestionale`, `lumera-api`).

- **Parti e file.** Schermata `CollegamentoRivenditore` (S5) in `lumera-gestionale`. Modulo `rivenditori` in `lumera-api`, rotte `/gestionale/rivenditori`. Permesso nuovo `gestione_rivenditori`, assegnato al ruolo del responsabile commerciale (la creazione del permesso e dell'assegnazione fa parte della prima issue di M1).
- **Interfacce.**
  - `GET /gestionale/rivenditori`: elenco dei rivenditori con stato del collegamento (collegato o no, con il nome utente). Parametro `solo_non_collegati` facoltativo.
  - `POST /gestionale/rivenditori/{id}/collegamento`: corpo con `utente_id` per scegliere un accesso esistente, oppure `nuovo_utente` con `nome_utente` ed `email` per crearne uno nuovo. Risposta 201 con il collegamento. Per un utente nuovo la password non è inserita dal gestionale: le API creano l'utente con ruolo `rivenditore` e inviano all'email del rivenditore il link per impostarla, con il meccanismo di reimpostazione della password esistente (da confermare nel codice).
  - `DELETE /gestionale/rivenditori/{id}/collegamento`: risposta 204; cancella la riga di `utenti_rivenditori`.
  - Tutte richiedono il permesso `gestione_rivenditori`; senza, 403.
- **Flusso della creazione.** Verifica del permesso. Una transazione: se `nuovo_utente`, crea l'utente con ruolo `rivenditore`; inserisce la riga in `utenti_rivenditori`; conferma. L'invio dell'email avviene dopo la conferma della transazione, così un errore di invio non annulla il collegamento (il responsabile può rinviare l'invito dal gestionale).
- **Rami di errore.**
  - Rivenditore già collegato (violazione del vincolo su `rivenditore_id`): 409, codice `RIVENDITORE_GIA_COLLEGATO`, nessuna modifica. Il gestionale mostra il messaggio.
  - Accesso già collegato a un altro rivenditore (vincolo su `utente_id`): 409, codice `ACCESSO_GIA_COLLEGATO`, nessuna modifica.
  - Rivenditore o utente non trovato: 404.
  - Collegamento tolto: la riga sparisce; al successivo accesso o alla successiva richiesta vale il ramo 403 `ACCESSO_NON_ATTIVO` di F6.1.
  - Anagrafica con partita IVA doppia: la pulizia dei cinque doppioni è un'issue di M1, e il vincolo di unicità sulla partita IVA si aggiunge dopo.
- **Test.** Collegamento riuscito con utente esistente e con utente nuovo; rivenditore già collegato; accesso già collegato; rimozione; richiesta senza permesso.

### F7 Prezzi per rivenditore

**F7.1 Prezzi nel catalogo e nella scheda** (`lumera-api`, `lumera-sito`).

- **Parti e file.** Modulo `prezzi` (modifica), modulo `listini` (nuovo, lettura), rotte di catalogo e scheda esistenti con un parametro di contesto, pagine `/rivenditore/catalogo` e `/rivenditore/prodotto/<codice>` (S3) che riusano `Catalogo` e `SchedaProdotto`.
- **Flusso.**
  1. Le pagine S3 chiamano le stesse rotte di catalogo e scheda dei clienti; il server SSR passa il cookie di sessione.
  2. Le API leggono dalla sessione il `rivenditore_id`. Se non c'è, il comportamento è quello di sempre.
  3. La funzione di `prezzi` che restituisce il prezzo riceve `prodotto_id` e `rivenditore_id` facoltativo. Con `rivenditore_id`: cerca la riga in `listini_rivenditore`; se la trova, restituisce il suo prezzo con origine `listino`; se non la trova, restituisce l'origine `su_richiesta` e nessun prezzo. Il prezzo base non è mai usato come ripiego per un rivenditore.
  4. Le rotte aggiungono ai prodotti il campo `prezzo_su_richiesta` (booleano). Il sito mostra "Prezzo su richiesta" e disattiva l'aggiunta al carrello.
  5. Se il rivenditore non ha alcuna riga in `listini_rivenditore`, le rotte rispondono con `listino_disponibile` falso e il sito mostra "Listino non disponibile" con l'invito a contattare il responsabile commerciale.
  6. Le risposte per un rivenditore portano `Cache-Control: private, no-store`.
- **Rami di errore.** Prodotto senza prezzo nel listino: `prezzo_su_richiesta`. Listino vuoto: `listino_disponibile` falso (F7.1).
- **Cache.** Le rotte `/rivenditore/*` mostrano prezzi diversi per utente e non vanno in cache del server SSR né delle API. Le rotte pubbliche `/catalogo` e `/prodotto` mantengono la cache per chi non è rivenditore. Il dettaglio della configurazione è un rischio del capitolo 10, da chiudere entro M2.
- **Test.** Due rivenditori di prova con prezzi diversi per lo stesso prodotto; cliente non rivenditore con il prezzo di sempre; prodotto senza riga; rivenditore senza listino. Il modulo `prezzi` non ha test sul resto: i test nuovi coprono la funzione modificata, come chiede il `CLAUDE.md`.

**F7.2 Carrello e pagamento con i prezzi del rivenditore** (`lumera-api`, `lumera-sito`).

- **Parti e file.** Moduli `carrello` e `ordini` e funzione di totale di `prezzi`. Nessuna pagina nuova: carrello e pagamento sono quelli esistenti.
- **Flusso.**
  1. La riga di carrello non salva il prezzo. A ogni lettura del carrello il totale si calcola con la funzione di `prezzi`, passando il `rivenditore_id` della sessione. Quindi un listino cambiato mentre il carrello è pieno si riflette alla lettura successiva.
  2. Il riepilogo del pagamento e l'importo inviato al servizio esterno usano la stessa funzione, con lo stesso contesto: il totale del carrello e quello del riepilogo coincidono per costruzione (F4.2).
  3. L'aggiunta di un prodotto con prezzo su richiesta è rifiutata dall'aggiunta al carrello.
  4. Le API degli ordini continuano ad accettare solo prezzi calcolati da `prezzi`: l'ordine di un rivenditore registra il prezzo del listino al momento dell'ordine e il suo `rivenditore_id`.
- **Rami di errore.** Prodotto con prezzo su richiesta: 422, codice `PREZZO_SU_RICHIESTA`, il prodotto non entra nel carrello. Listino cambiato con il carrello pieno: nessun errore, prezzi aggiornati.
- **Test.** Il carrello con tre prodotti di un rivenditore ha gli stessi prezzi del catalogo e lo stesso totale del riepilogo. Arrotondamento: con più righe il totale resta quello del riepilogo (stesso punto del ticket 101). Prodotto su richiesta rifiutato. Il carrello è senza test automatici nel sistema esistente: i test nuovi lo coprono per questa parte.

**F7.3 Caricamento e correzione dei listini** (`lumera-gestionale`, `lumera-api`).

- **Parti e file.** Schermata `ListinoRivenditore` (S5). Modulo `listini` con le rotte `/gestionale/rivenditori/{id}/listino`, permesso `gestione_rivenditori`.
- **Formato del file.** CSV in UTF-8, separatore `;`, intestazione `codice;prezzo`, una riga per prodotto, decimale con virgola o con punto, dimensione massima 2 MB e 5.000 righe. Il formato è una proposta da validare: i file veri di Diego non si conoscono (spike all'inizio di M2, prima issue).
- **Interfacce.**
  - `POST /gestionale/rivenditori/{id}/listino/importazione?modalita=anteprima`: carica il file, non scrive nulla. Risposta 200 con le righe valide (codice, nome, prezzo) e le righe segnalate (numero di riga, codice errore).
  - `POST /gestionale/rivenditori/{id}/listino/importazione?modalita=conferma`: riceve di nuovo lo stesso file, lo rivalida e lo applica. Risposta 200 con il numero di righe scritte e segnalate. Lo stato non resta sul server: la conferma ricarica il file, quindi non c'è un'anteprima da far scadere.
  - `PUT /gestionale/rivenditori/{id}/listino/{prodotto_id}`: corpo `prezzo`. Risposta 200.
- **Flusso della conferma.** Verifica del permesso e del rivenditore. Lettura del file in memoria. Validazione riga per riga. Una transazione: per ogni riga valida inserisce o aggiorna la riga di `listini_rivenditore` (chiave `rivenditore_id` e `prodotto_id`), valorizzando `aggiornato_il` e `aggiornato_da`. Le righe valide si applicano anche se altre sono segnalate. Le righe non presenti nel file non si toccano: l'importazione aggiorna e non sostituisce (da confermare, vedi domande per il team).
- **Rami di errore.**
  - Codice non riconosciuto: riga segnalata, `CODICE_SCONOSCIUTO`, non scritta.
  - Prezzo non valido (vuoto, negativo, zero, non numerico): riga segnalata, `PREZZO_NON_VALIDO`, non scritta.
  - Codice ripetuto nel file: riga segnalata, `CODICE_DUPLICATO`; vale la prima occorrenza.
  - File vuoto o con la sola intestazione: 422, codice `FILE_VUOTO`, listino invariato.
  - File troppo grande o con un'intestazione diversa: 422, codice `FILE_NON_VALIDO`.
  - Correzione di un singolo prezzo non valido: 422, `PREZZO_NON_VALIDO`.
- **Test.** Importazione di un file di prova con righe valide e segnalate (anteprima e conferma); file vuoto; due rivenditori con file diversi i cui prezzi compaiono nel catalogo di ciascuno; correzione di un singolo prezzo. Il modulo `listini` è nuovo e nasce con i test.

### F8 Ordini grandi

**F8.1 Ordine da elenco** (`lumera-sito`, `lumera-api`).

- **Parti e file.** Pagina `/rivenditore/ordine-grande` con i componenti `CaricaOrdine` e `TabellaRigheOrdine` (S4). Modulo `ordini-grandi` con le rotte `/rivenditore-api/ordini-grandi`. Modulo `ordini` per la creazione.
- **Formato del file.** CSV in UTF-8, separatore `;`, intestazione `codice;quantita`, una riga per prodotto, dimensione massima 1 MB e 2.000 righe (da confermare sui file veri).
- **Interfacce.**
  - `POST /rivenditore-api/ordini-grandi/anteprima`: carica il file, non scrive nulla. Risposta 200 con le righe valide (codice, nome, quantità, prezzo del listino, importo di riga), le righe segnalate (numero di riga, codice errore) e il totale.
  - `POST /rivenditore-api/ordini-grandi`: riceve di nuovo il file, lo rivalida e crea l'ordine. Risposta 201 con l'identificativo dell'ordine. Il rivenditore viene sempre dalla sessione.
  - Entrambe richiedono la sessione di un rivenditore con collegamento; altrimenti 403.
- **Flusso della registrazione.**
  1. Rilettura del file e validazione riga per riga: il codice esiste, la quantità è un intero positivo, il prodotto ha un prezzo nel listino del rivenditore.
  2. Se non resta alcuna riga valida, 422 `NESSUNA_RIGA_VALIDA` e nessun ordine.
  3. Una transazione: crea l'ordine con `origine` uguale a `elenco`, `stato` uguale a `da_confermare`, `rivenditore_id` dalla sessione, le righe con il prezzo del listino calcolato da `prezzi` e il totale. Nessuna chiamata al servizio di pagamento. Nessuna email di pagamento (Manuale, requisiti generali).
  4. Le righe segnalate non entrano nell'ordine; la risposta le elenca.
  5. L'ordine compare nell'elenco degli ordini del gestionale con il filtro "da confermare". La conferma, fatta da chi gestisce gli ordini, porta lo stato a `confermato` con il cambio di stato esistente del gestionale (da confermare nel codice).
- **Rami di errore dei casi particolari.**
  - Codice non trovato: riga segnalata, `CODICE_SCONOSCIUTO`, non inserita.
  - Quantità non valida (non intera, zero, negativa, vuota): `QUANTITA_NON_VALIDA`.
  - Prodotto con prezzo su richiesta: `PREZZO_SU_RICHIESTA`.
  - File vuoto o senza righe: 422, `FILE_VUOTO`.
  - Prodotto esaurito: `PRODOTTO_ESAURITO`, non inserita. Il caso discende dalla regola di validità del capitolo 4; il Manuale non lo elenca tra i casi particolari di F8.1 (domanda per il team).
- **Test.** File di prova con dieci righe, di cui due con codice errato: otto righe valide con i prezzi del listino, due segnalate, ordine creato con il solo importo valido; ordine che compare nel gestionale; file vuoto; nessuna riga valida; tentativo di indicare un altro rivenditore nel corpo (ignorato). Le API degli ordini hanno già test: si estendono.

**F8.2 Elenco degli ordini del rivenditore** (`lumera-sito`, `lumera-api`).

- **Parti e file.** Componente `ElencoOrdiniRivenditore` nella pagina `/rivenditore` (S2). Rotta `GET /rivenditore-api/ordini`.
- **Flusso.** Le API leggono il `rivenditore_id` dalla sessione e restituiscono gli ordini con quel `rivenditore_id`, dal più recente, con data, totale e stato (`da_confermare` o `confermato`), a pagine. Nessun parametro dall'esterno può cambiare il rivenditore.
- **Rami di errore.** Nessun ordine: risposta 200 con elenco vuoto, il sito mostra "Nessun ordine". Richiesta del dettaglio di un ordine di un altro rivenditore: 404, per non rivelare che esiste.
- **Test.** Rivenditore con due ordini in ordine di data; rivenditore senza ordini; due rivenditori che non vedono gli ordini l'uno dell'altro, anche indicando l'identificativo a mano.

**F10 Selezione nel comparatore** (`lumera-sito`). Il confronto vive nel browser; nessuna scrittura lato API. Limite di quattro prodotti applicato nell'interfaccia.

**F11 Confronto** (`lumera-sito`, `lumera-api`). Le caratteristiche dei prodotti scelti si leggono con una richiesta unica alle API. La vista "Solo differenze" è calcolata nell'interfaccia. Il filtro sui prodotti disponibili subito riusa il dato di disponibilità già restituito con il prodotto.

**F12 Condivisione e acquisto** (`lumera-sito`, `lumera-api`). Il link contiene i codici dei prodotti. Dal confronto si riusa l'aggiunta al carrello di F3.1.

**F10 Selezione nel comparatore** (`lumera-sito`). Il confronto vive nel browser; nessuna scrittura lato API. Limite di quattro prodotti applicato nell'interfaccia.

**F11 Confronto** (`lumera-sito`, `lumera-api`). Le caratteristiche dei prodotti scelti si leggono con una richiesta unica alle API. La vista "Solo differenze" è calcolata nell'interfaccia. Il filtro sui prodotti disponibili subito riusa il dato di disponibilità già restituito con il prodotto.

**F12 Condivisione e acquisto** (`lumera-sito`, `lumera-api`). Il link contiene i codici dei prodotti. Dal confronto si riusa l'aggiunta al carrello di F3.1.

## 6. Integrazioni

- **Servizio di pagamento.** Scambio: importo e dati di carta (inseriti dal cliente direttamente nel servizio), esito. Se non risponde, il pagamento non si completa e il carrello resta intatto. Gli ordini grandi non lo usano. Il pagamento differito (bonifico) è del secondo progetto.
- **Servizio di invio email.** Scambio: destinatario, testo. Se non risponde, l'ordine resta valido e la conferma è visibile nell'area cliente. Nel progetto 107 il servizio invia anche l'invito del rivenditore a impostare la password (F6.2): se non risponde, il collegamento resta creato e il responsabile commerciale può rinviare l'invito dal gestionale; l'errore è registrato nel log delle API.
- **File CSV di Diego.** Non è un'integrazione tra sistemi: è l'unico canale di ingresso dei listini. Scambio: file con le colonne del capitolo 5 (F7.3), caricato dal gestionale. Se il formato dei file veri differisce da quello proposto, si adatta la lettura nel modulo `listini` senza toccare il resto: è l'incognita dello spike di M2.

## 7. Infrastruttura e pubblicazione

Questo capitolo contiene anche il capitolo Pubblicazione: tutto ciò che serve a chi pubblica. Copre il sito (`lumera-sito`) e le API (`lumera-api`); per il gestionale (`lumera-gestionale`) manca ancora ogni regola (vedi Cosa manca).

### Ambienti

- **Staging.** Ambiente di prova di sito e API, separato dalla produzione. Rami `staging` di `lumera-sito` e `lumera-api`. Usa una copia dei dati di produzione, con le email dei rivenditori sostituite da indirizzi di prova, per non inviare inviti veri.
- **Produzione.** Sito e API pubblici. Rami `main` di `lumera-sito` e `lumera-api`.
- **Gestione.** Sistemista 1 e sistemista 2. Uno dei due è l'incaricato della pubblicazione.
- Il gestionale ha un proprio ambiente, non ancora descritto qui.

### Ordine dei passi

La pubblicazione non avviene in CI: l'incaricato esegue i passi a mano.

1. Copia di sicurezza del database di `lumera-api`. Chi: incaricato.
2. Pubblicare `lumera-api` dal ramo `main`. Chi: incaricato.
3. Pubblicare `lumera-sito` dal ramo `main`. Chi: incaricato.
4. Riavviare il server SSR del sito (vedi Regole del sistema).
5. Svuotare la cache sulle rotte `/catalogo` e `/prodotto` (vedi Regole del sistema).
6. Verifiche.

Il progetto 107 aggiunge un passo di migrazione prima del passo 2 e la pubblicazione del gestionale: le particolarità del rilascio stanno nel piano di rilascio e entrano nel capitolo alla chiusura del progetto.

### Migrazioni del progetto 107

Il progetto 107 introduce cinque migrazioni del database, da eseguire in quest'ordine:

1. Pulizia dei doppioni dell'anagrafica dei rivenditori (la fa il responsabile commerciale dal gestionale prima di pubblicare; la migrazione non cancella dati) e vincolo di unicità sulla partita IVA.
2. Colonna `ruolo` sulla tabella degli utenti del sito, valore predefinito `cliente`.
3. Tabella `utenti_rivenditori`.
4. Tabella `listini_rivenditore`.
5. Colonne `rivenditore_id` e `origine` sulla tabella degli ordini, nuovo stato `da_confermare`.

Ogni migrazione ha la sua marcia indietro. La marcia indietro della numero 1 rimuove solo il vincolo; quella della numero 5 non cancella gli ordini con `origine` uguale a `elenco`: si convertono in `carrello` solo se serve tornare indietro (decisione da prendere al momento). Le migrazioni non sono ancora nei passi sopra: entrano nel capitolo alla chiusura, dopo essere state scritte nel piano di rilascio.

### Regole del sistema

- **Riavvio del server SSR.** Dopo ogni pubblicazione del sito va riavviato il server SSR, dal pannello del server o dal gestore dei processi. Motivo: senza riavvio il server serve ancora le pagine della versione precedente. Introdotta dalla lavorazione 96.
- **Cache su `/catalogo` e `/prodotto`.** Dopo ogni pubblicazione del sito va svuotata la cache sulle rotte `/catalogo` e `/prodotto`, dal pannello della cache, voce di svuotamento per percorso. Motivo: le due rotte sono in cache e mostrerebbero prezzi e disponibilità vecchi. Introdotta dalla lavorazione 96.
- **Circuiti di carta.** I circuiti accettati stanno in un file di configurazione del sito: una modifica richiede una pubblicazione. Introdotta dalla lavorazione 96.
- **Segreti.** Le credenziali del servizio di pagamento e del servizio email sono custodite dal sistemista 1 e non stanno nei repository.

**Cosa manca.** Le regole per il gestionale (ordine rispetto a API e sito, riavvii, cache). Può fornirle: sistemista 1.

### Verifiche

- Dopo il passo 2: un ordine di prova viene creato con il prezzo atteso.
- Dopo i passi 3, 4 e 5: la home risponde, il catalogo mostra un prodotto di prova con il prezzo atteso, la scheda di quel prodotto mostra la stessa disponibilità del gestionale.
- A fine pubblicazione: un acquisto di prova con carta di prova riesce fino alla conferma e l'email di conferma arriva.

### Ritorno alla versione precedente

Si decide se il sito non è utilizzabile o i prezzi mostrati sono sbagliati; decide il responsabile del lavoro con l'incaricato. Si ripubblicano le versioni precedenti di `lumera-sito` e di `lumera-api` e si ripetono i passi 4 e 5. Se il database è stato modificato, i dati scritti nel frattempo vanno salvati prima di ripristinare la copia di sicurezza.

### Backup

Copia di sicurezza del database prima di ogni pubblicazione, conservata dal sistemista 1.

### Contatti

Responsabile del lavoro, sistemista 1, sistemista 2.

## 8. Sicurezza e dati personali

- Gli utenti del sito hanno ora due ruoli: cliente e rivenditore. I ruoli multipli del gestionale restano solo nel gestionale.
- Un rivenditore vede solo il proprio listino e i propri ordini: ogni rotta `/rivenditore-api` legge il `rivenditore_id` dalla sessione, non dalla richiesta, e filtra per quello. Una richiesta su una risorsa di un altro rivenditore risponde 404.
- Il collegamento si rilegge a ogni richiesta: togliere il collegamento chiude l'accesso subito.
- Le rotte `/gestionale` per rivenditori e listini richiedono il permesso `gestione_rivenditori`; nessuna è raggiungibile con una sessione del sito.
- File caricati: tipo e dimensione controllati prima della lettura; contenuto trattato solo come testo, mai eseguito; nessun file conservato.
- I prezzi dei listini sono dati commerciali riservati: non compaiono nei log, non si servono con cache condivise (`Cache-Control: private, no-store`).
- Le password sono conservate cifrate. I dati di carta non sono conservati.
- Copia di sicurezza del database prima di ogni pubblicazione.
- Dati personali dei clienti: nome, indirizzi, email. Dati dei rivenditori: partita IVA ed email. Conservati finché l'account esiste.

## 9. Decisioni tecniche

- 2023-03, un solo servizio di API per sito e gestionale. Alternativa scartata: API separate. Motivo: un'unica regola di calcolo.
- 2026-08, il confronto del comparatore vive nel browser, con link condivisibile che contiene solo i codici dei prodotti. Alternativa scartata: confronto salvato lato API. Motivo: meno dati da conservare e nessun accesso necessario.
- 2026-08, pagamento con il servizio esterno con chiave di unicità (lavorazione 96).
- 2026-10-29, il totale del carrello non scende sotto zero. Alternativa scartata: rifiutare il codice quando supera il totale. Motivo: decisione di Franco, il comportamento c'era già prima. Origine: ticket 103, DEC6.
- 2026-10-14, ripartizione dell'importo fisso tra aliquote IVA in proporzione al valore delle righe, con l'ultima riga che assorbe il centesimo. Alternativa scartata: sconto sulla sola aliquota piena. Origine: ticket 103, DEC5.
- 2026-12-02, listino per rivenditore come tabella di prezzi, non come percentuale. Motivo: risposta D1 di Franco. Alternativa scartata: percentuale sul listino di tutti.
- 2026-12-02, ordine grande senza pagamento: stato `da_confermare` nel gestionale. Motivo: risposta D6.
- 2026-12-02, ruolo come colonna sull'utente del sito, non come tabella dei ruoli. Alternativa scartata: tabella dei ruoli come nel gestionale. Motivo: i ruoli del sito sono due e non ne sono previsti altri; si cambia se ne servono altri.
- 2026-12-02, collegamento in una tabella con doppio vincolo di unicità. Alternativa scartata: colonna `rivenditore_id` sull'utente. Motivo: i due vincoli fanno rispettare le due regole di F6.2 senza codice, e togliere il collegamento è cancellare una riga.
- 2026-12-02, un prodotto senza riga nel listino è "prezzo su richiesta", mai il prezzo base. Motivo: il rivenditore non deve vedere né pagare un prezzo che non è il suo.
- 2026-12-03, importazione in due passaggi senza stato sul server: la conferma ricarica lo stesso file. Alternativa scartata: anteprima salvata con un identificativo. Motivo: nessun dato da conservare né da far scadere.
- 2026-12-03, nessun file conservato dopo l'importazione. Motivo: i listini sono dati commerciali e il file non serve dopo la lettura.
- 2026-12-03, il rivenditore dell'ordine viene sempre dalla sessione. Motivo: impedire di ordinare a nome di un altro.

## 10. Rischi e debito tecnico

- Il modulo `prezzi` ha test sul calcolo dello sconto; restano senza test il resto del modulo e il carrello. Ogni modifica richiede test nuovi, come chiede il `CLAUDE.md` di `lumera-api`. Il pagamento e le API degli ordini hanno test.
- Il modulo di contatto del sito non ha test automatici.
- Migrazioni del database: il capitolo 7 non le inserisce ancora nei passi; vanno completate prima della pubblicazione.
- Formato dei listini sconosciuto: incognita contenuta dal campione di file di Diego e dallo spike di M2.
- Cache delle rotte con prezzi diversi per utente: da definire prima della pubblicazione, entro M2.
- Il pagamento (lavorazione 96) è in garanzia fino al 26 ottobre 2026: concluso prima dello sviluppo di questo progetto.

Domande per il team (bloccano la chiusura del documento in versione definitiva, non il lavoro):

- **T1.** Il filtro per prezzo del catalogo (F1.3) per un rivenditore usa il prezzo del listino? Proposta: sì, e i prodotti su richiesta restano fuori dai risultati con filtro di prezzo.
- **T2.** I codici sconto valgono per i rivenditori e su quale prezzo? Il Manuale non lo dice. Se serve una regola, va portata a Franco con una domanda.
- **T3.** L'importazione di un listino aggiorna le righe presenti nel file e lascia le altre, o sostituisce l'intero listino? Proposta: aggiorna. Da confermare con Diego.
- **T4.** Un prodotto esaurito in un ordine da elenco: riga segnalata (proposta) oppure ordine accettato? Il Manuale non lo elenca.
- **T5.** Nomi esistenti da confermare con il codice: rotta di accesso, tabella degli utenti del sito, cartella delle migrazioni, meccanismo di reimpostazione della password, cambio di stato degli ordini nel gestionale.

## 11. Piano delle milestone

### Lavorazione 100, comparatore di prodotti

Lo aggiorna il project manager 1. Stato dei dati alla v1.2 del documento (25 settembre 2026): gli stati successivi li registra lui.

#### Parametri (lavorazione 100)

- **Data di avvio:** 1 settembre 2026.
- **Squadra:** sviluppatore 1, 30 ore a settimana; sviluppatore 2, 15 ore a settimana per il comparatore. 45 ore a settimana, 90 a sprint, 72 al netto del buffer di sprint del 20%.
- **Buffer di milestone:** 20% delle ore stimate.
- **Ferie:** sviluppatore 2 assente dal 19 al 23 ottobre 2026.

#### Quadro delle milestone

- **M1 (SAL1), Selezione e confronto base.** Obiettivo: il visitatore sceglie prodotti e li vede affiancati. Story F10.1, F10.2, F10.3, F11.1. Ore stimate 110, buffer 22. Prova venerdì 25 settembre 2026. Stato: Accettata.
- **M2 (SAL2), Confronto avanzato.** Obiettivo: il visitatore evidenzia le differenze e acquista dal confronto. Story F11.2, F12.2. Ore stimate 140, buffer 28 (metà consumato, 14 ore rimaste), ore ancora da fare 80, capacità netta rimanente al 12 ottobre 96 ore, margine 16. Prova venerdì 30 ottobre 2026. Stato: In corso.
- **M3 (SAL3), Filtri e condivisione.** Obiettivo: il confronto mostra solo i prodotti disponibili subito e si condivide con un link. Story F11.3, F12.1. Ore stimate 100, buffer 20. Prova venerdì 27 novembre 2026. Stato: Da avviare.

#### Materiali del cliente

Nessuno ancora atteso.

#### Rischi e incognite

- Il filtro sui prodotti disponibili subito dipende dal dato di disponibilità.
- Il Black Friday (27 novembre 2026) coincide con la prova del SAL3.

#### Copertura

F10.1, F10.2, F10.3, F11.1 in M1. F11.2, F12.2 in M2. F11.3, F12.1 in M3.

#### Stima di durata

13 settimane di sviluppo, dal 1 settembre al 27 novembre 2026.

### Lavorazione 107, area riservata per i rivenditori (primo progetto)

#### Parametri

- **Data di avvio:** lunedì 7 dicembre 2026 (sprint 8).
- **Squadra:** sviluppatore 1, 30 ore a settimana; sviluppatore 2, 30; sviluppatore 3, 15. 75 ore a settimana, 150 a sprint, 120 al netto del buffer di sprint del 20%. Le ore del project manager, del team lead e della grafica non sono contate.
- **Buffer di milestone:** 20% delle ore stimate (più persone).
- **Durata:** da uno a due sprint.

#### Calendario di progetto

- Martedì 8 dicembre (festività), sprint 8: un giorno in meno per ogni persona: capacità lorda 135, netta 108.
- Chiusura aziendale dal 24 dicembre al 6 gennaio: sprint 9 con tre giorni (21, 22, 23 dicembre): lorda 45, netta 36. Sprint 10 con sette giorni (7, 8, 11-15 gennaio, il 6 è festività): lorda 105, netta 84.
- Sprint 11 e 12: 120 ore nette ciascuno.
- Ferie individuali: non note, da chiedere a ogni inizio milestone. Chiusure del cliente: nessuna nel periodo. Fiera: lunedì 22 febbraio 2027.

#### Quadro delle milestone

- **M1 (SAL1), Accesso dei rivenditori.** Obiettivo dimostrabile: un rivenditore collegato all'anagrafica entra nell'area riservata. Story F6.1, F6.2. Ore stimate 90, buffer 18, durata 1 sprint (sprint 8), capacità 108 ore. Prova venerdì 18 dicembre 2026. Stato: Da avviare.
$1  - Cosa verifica il cliente: un rivenditore di prova entra con le sue credenziali, e Diego collega un rivenditore a un accesso.
- **M2 (SAL2), Prezzi del rivenditore.** Obiettivo: due rivenditori di prova vedono prezzi diversi nel catalogo e Diego carica i listini. Story F7.3, F7.1. Ore 100, buffer 20, durata 2 sprint (sprint 9 e 10), capacità 120 ore. Prova venerdì 15 gennaio 2027. Stato: Da avviare.
$1  - Cosa verifica il cliente: due rivenditori di prova vedono prezzi diversi per lo stesso prodotto, e Diego carica un listino con un errore e lo corregge.
- **M3 (SAL3), Carrello, ordini grandi e collaudo.** Obiettivo: il rivenditore ordina con un elenco e il carrello usa i suoi prezzi. Story F7.2, F8.1, F8.2. Ore 200, buffer 40, durata 2 sprint (sprint 11 e 12), capacità 240 ore. Prova venerdì 12 febbraio 2027. Stato: Da avviare.
$1  - Cosa verifica il cliente: un ordine da elenco arriva fino alla conferma con i prezzi del rivenditore, l'elenco degli ordini lo mostra.
- **Totale.** Ore stimate 390, buffer 78, ore con buffer 468, capacità 468 ore. Collaudo finale e pubblicazione: sprint 13, dal 15 al 18 febbraio, prima della fiera.

#### Materiali del cliente

- Elenco dei rivenditori senza doppioni: per M1, entro venerdì 11 dicembre 2026.
- Utenze di prova per i rivenditori: per M1, entro lunedì 14 dicembre 2026.
- File dei listini dei rivenditori: per M2, entro venerdì 18 dicembre 2026.

#### Rischi e incognite

- Formato dei listini (spike nella prima issue di M2).
- Test mancanti su `prezzi` e carrello.
- Migrazioni del database.
- Fiera il 22 febbraio: margine di un giorno lavorativo dopo la pubblicazione.

#### Copertura

F6.1, F6.2 in M1. F7.3, F7.1 in M2. F7.2, F8.1, F8.2 in M3.

#### Stima di durata

Circa 2 mesi e mezzo di sviluppo, dal 7 dicembre 2026 al 12 febbraio 2027 (chiusura aziendale compresa), con la messa in produzione tra il 15 e il 18 febbraio, dentro la finestra della Proposta (tra metà e fine febbraio 2027).

## 12. Modifiche rispetto alla versione precedente

- v1.3 (2026-12-04): capitolo 7 con il capitolo Pubblicazione (prima era una Guida a parte, v1.0); capitolo 5 con F3.4 e F3.5, capitoli 9 e 10 recepiti dalla Scheda del ticket 103; capitolo 11 con le lavorazioni di ogni milestone; capitoli 1, 2, 3, 4, 5, 6, 8, 9 e 10 per il progetto 107 (F6, F7, F8, F3.3 a 90 giorni). Capitoli 3, 4, 5 e 6 scritti a livello di implementazione per le funzionalità nuove. Origine: Manuale v1.4.
- v1.2 (2026-09-25): capitolo 5 per F10, F11, F12; capitolo 9 con la decisione sul confronto; capitolo 11 con le milestone del comparatore. Origine: lavorazione 100.
- v1.1: carrello e pagamento rifatti. Origine: lavorazione 96.
- v1.0 (2023-10-02): prima versione, con il lancio del sito.
