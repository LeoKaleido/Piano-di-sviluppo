# Analisi, prodotto 1 (110, applicazione per gli showroom), prova 1

Data: 2026-10-11. Fonti: `base-comune.md`, `scenario.md`, `diario.md`, i file di `esecuzione-1/110/`, Piano di prodotto (con i ritocchi del giorno), Piano di progetto, Regole comuni, Ciclo di sviluppo e le skill `kickoff`, `interpretazione-conversazioni`, `proposta-di-soluzione`, `wireframe-e-prototipo`, `mockup`, `manuale-del-prodotto`, `documento-tecnico`, `piano-delle-milestone`, `sprint`, `riprogrammazione`, `prova-su-staging`, `milestone-report`, `variazione`, `collaudo-e-rilascio`, `piano-di-lancio`, `guida-alla-pubblicazione`, `allineamento-documenti`, `report-di-progetto`, `pacchetto-di-garanzia`. Nessuna prova precedente. Le milestone dalla seconda alla quinta sono dati dello scenario, non recitati.

## 1. Sintesi

Il Piano di prodotto ha retto dall'inizio alla fine: tre conferme del cliente (Proposta, prototipo e mockup, Manuale), tempo del kickoff rispettato (stima a occhio 15 giorni lavorativi, Proposta v0.1 il 2 novembre), Piano dei SAL con le date calcolate sulla capacità reale, una milestone in ritardo gestita con le leve, una variazione media e una grande, collaudo, lancio graduale con un imprevisto, chiusura e garanzia. Nessuna delle cose "che non devono succedere" è successa.

Dove ha retto meno: i rapporti tra la scadenza del cliente e le stime che cambiano; le leve per una milestone in ritardo, dove skill e regole si contraddicono; la durata della garanzia di un prodotto, non definita; la distanza tra il Piano di prodotto aggiornato oggi e le skill del rilascio (`collaudo-e-rilascio`, `piano-di-lancio`); il controllo delle configurazioni esterne prima del lancio.

Due osservazioni ad alta gravità, sedici medie, il resto bassa. I codici P-n di questa analisi sostituiscono quelli grezzi del diario.

## 2. Controlli dello scenario

**Valutazione**

- Nessuna urgenza, prodotto, responsabile designato, presa visione: emerso.
- Stima a occhio e tempo del kickoff al 10%: emerso, con una lacuna sull'unità (P-1).
- Scadenza giudicata fattibile o no: emerso in parte (fattibile con poco margine, mai ricontrollata: P-3).
- Verifica sui soli lavori aperti e sui sistemi del cliente: emerso. Le API da cui il prodotto dipende sono state lette come fatti della base: emerso in parte (P-5).
- Incontro con Franco trascritto e interpretato, Franco referente, richieste non prese come decisioni: emerso.
- Torino non disponibile, parti non verificate: emerso in parte (diventano assunzioni: P-4).
- Stato di partenza nella forma del prodotto, con le decisioni in testa: emerso.
- `storico.md` e `decisioni.md` creati: emerso.

**Stima e Proposta**

- Stima precisa per release, con i Report di progetto 96 e 58: emerso.
- Proposta con divisione in release, domande con codice, materiali senza date, wireframe: emerso. Contiene la data di scadenza del cliente (13 settembre 2027) nella parte 1: ammessa come parole del cliente, ma la regola dice nessuna data: da chiarire (P-13). Lunghezza di 2-3 pagine: non misurata.
- Franco vuole tutto nella prima release: regola applicata, referente conferma: emerso.
- Conferma a voce con riepilogo scritto, allineamento con 100 e ticket 103: emerso.

**Prototipo e design**

- Prototipo navigabile, materiale per i mockup, sessione con Elena, modifica (non variazione) di Franco, approvazione a voce con riepilogo: emerso. Prototipo v2 e PDF dei mockup non prodotti (strumenti assenti): dichiarato.

**Documentazione**

- Manuale con story complete e criteri verificabili, nessuna tecnologia, prezzo o data: emerso (una data corretta durante la stesura).
- Franco non risponde, sollecito, si prosegue: emerso in parte (si è atteso, P-9).
- Documento tecnico con capitolo Milestone, fondamenta in M1, buffer del 20%, date dalla capacità con festività: emerso.
- Piano dei SAL senza nulla di interno; stima più alta di quella della Proposta, spiegata: emerso.

**Sviluppo**

- Primo sprint pianificato a fine documentazione entro la capacità: emerso.
- Nota di sprint 12 con i numeri, milestone in ritardo: emerso (meno 8 ore).
- Riprogrammazione: leve con effetto, nessuna scelta dalla skill, nessuna story spostabile dichiarata: emerso in parte (P-7, P-8).
- Silenzio del cliente alla prova non vale accettazione: emerso (Elena prova, Franco accetta dopo 3 giorni lavorativi).
- Variazione media non nello sprint in corso, approvazione scritta, comunicazione senza ore né prezzi: emerso. Variazione grande rifiutata: emerso.

**Rilascio**

- Collaudo con percorsi trasversali, regressioni sulle API degli ordini estese, integrazioni, prova finale accettata con difetto: emerso.
- Piano di lancio approvato da Franco, dati iniziali, formazione, informativa in ritardo che sposta il lancio degli stessi giorni, Guida alla pubblicazione che nasce con il prodotto: emerso.
- Gruppo ristretto, problema al lancio, apertura a tutti dopo la correzione, Guida aggiornata a fine pubblicazione: emerso.
- Chiusura con documenti aggiornati e Report di progetto: emerso.
- Garanzia dalla durata pianificata, assistenza rafforzata, bug coperto e richiesta fuori garanzia: emerso in parte (P-2, P-12).

**Cosa non deve succedere**

- Urgenza a un prodotto: non successo.
- Indagine sul codice come per un progetto: non successo (con riserva su P-5).
- Richiesta di Franco o di Elena presa come approvazione: non successo.
- Tecnologie, ore, prezzi o date nella Proposta e nel Manuale: una data nella Proposta (P-13), corretta una nel Manuale.
- Manuale prima dell'approvazione di prototipo e mockup: non successo.
- Prova accettata in silenzio: non successo.
- Lancio senza informativa sulla privacy: non successo.

## 3. Documenti

Prodotti in `esecuzione-1/110/`: tutti quelli dello scenario, più `promemoria-interno-lancio.md` (previsto dalla skill `piano-di-lancio`), `sollecito-manuale-2027-01-07.md`, `comunicazione-variazione-V1.md`, `avvisi-al-cliente.md`, la versione 2 del Piano di lancio e la versione 0.2 della Proposta (versioni numerate previste dal piano).

Mancanti: prototipo v2 e mockup in PDF (strumenti assenti nel test). Fuori posto: in `sistema/` ci sono Manuale v1.2, Documento tecnico v1.2 e Guida v1.1 per intero; le versioni v1.0 sono anche in `01-kickoff/05-documentazione`, perché nessun passo dice quando il documento confermato passa nella cartella del sistema (P-14). Il file `sintesi-sessione-lumera-110-2026-12-02.md` non segue la convenzione di nome della skill.

Ricerca dei caratteri vietati, della prima o seconda persona e delle tabelle sui file dell'esecuzione: nessun risultato (a parte le parole del cliente fra virgolette).

## 4. Osservazioni

Ordinate per gravità, poi per codice.

**Alta**

- **P-3, Buco.** Dove: Piano di prodotto (1.2 stima, 1.5 documentazione), Piano di progetto (stima rifatta con le issue), `piano-delle-milestone` (stima di durata). Cosa è successo: la scadenza del cliente (13 settembre 2027) è stata giudicata fattibile "con poco margine" alla stima precisa (circa una settimana). Con la stima rifatta (due settimane in più) il lancio è arrivato a coincidere con l'apertura di Verona (margine nullo), ma nessun passo prevede di ricontrollare la scadenza e di dirlo al cliente. Il Piano dei SAL e il Piano di lancio non lo dicono; solo la versione 2 del Piano di lancio lo annota. Correzione proposta: nel passo di ristima con le issue, ricalcolare la fattibilità della scadenza e comunicare al cliente il margine, anche se la stima non peggiora.
- **P-2, Manca.** Dove: Regole comuni (Garanzia), Piano di prodotto (Lancio), `piano-di-lancio` e `pacchetto-di-garanzia`. Cosa è successo: la garanzia è "il maggiore tra 15 giorni e il 50% della durata pianificata della lavorazione". Per un prodotto la durata pianificata non è definita: la durata di sviluppo del Piano dei SAL (26 settimane, garanzia 91 giorni) o tutta la lavorazione dal kickoff (circa 11 mesi, circa 168 giorni)? Il test ha usato la prima, per scelta. Correzione proposta: definire la durata pianificata di un progetto e di un prodotto come la durata dello sviluppo del Piano dei SAL, e scriverlo nelle Regole comuni.

**Media**

- **P-7, Contraddizione.** Dove: `riprogrammazione` (leva "spostare una story") e Regole comuni (variazione media). Cosa è successo: la skill chiede story candidate "non iniziate e senza altre story che ne dipendono", cioè in una milestone di fondamenta nessuna. Le Regole comuni dicono che spostare una story tra milestone è una variazione media; la skill `riprogrammazione` non tratta le variazioni. Correzione proposta: la candidata non deve avere dipendenti nella stessa milestone; lo spostamento è una variazione media quando cambia il contenuto di un SAL già comunicato, e si chiude con la skill `variazione`.
- **P-8, Buco.** Dove: `riprogrammazione`, leva "aggiungere ore". Cosa è successo: le ore sono state prese dai ticket dello sviluppatore 3, ma il prestito del piano va dai progetti ai ticket. Nessuna regola sulla direzione inversa e sull'effetto sui ticket. Correzione proposta: dire da dove si prendono le ore e che chi gestisce il team avvisa chi analizza dei ticket che slittano.
- **P-4, Contraddizione.** Dove: Piano di prodotto (imprevisti del kickoff: gli utilizzatori non sono disponibili) e `proposta-di-soluzione` (conferma senza domande aperte). Cosa è successo: le parti non verificate diventano "domande aperte nella Proposta", ma la Proposta non si conferma con domande aperte. Le domande su Torino e Bologna sono diventate un'assunzione. Correzione proposta: dire che resta un'assunzione dichiarata e che le differenze emerse in seguito sono richieste nuove, e indicare la prova che la verifica.
- **P-9, Buco.** Dove: Piano di prodotto (1.5) e `documento-tecnico`. Cosa è successo: il Manuale è rimasto senza risposta del cliente per 4 giorni lavorativi di attesa effettiva, e il Documento tecnico non è stato iniziato perché il piano e la skill lo fanno seguire al Manuale confermato. Correzione proposta: le parti tecniche che non dipendono dalle story (tecnologie, struttura, infrastruttura) si possono scrivere durante l'attesa.
- **P-10, Passaggio.** Dove: `mockup` e Piano di prodotto (1.3 e 1.4). Cosa è successo: la skill chiede wireframe approvati; con la Proposta si approvano solo quelli delle schermate principali (S1 e S3). Il materiale per i mockup parte da schermate che il cliente approva insieme ai mockup. Correzione proposta: nel Piano di prodotto dire che il prototipo e i mockup si approvano insieme, e nella skill `mockup` accettare wireframe e prototipo in approvazione.
- **P-11, Contraddizione.** Dove: `collaudo-e-rilascio` e `piano-di-lancio` contro il Piano di prodotto aggiornato oggi. Cosa è successo: il Piano di prodotto dice che il Piano di lancio è il piano di rilascio e lo toglie dai documenti prodotti; `collaudo-e-rilascio` dice di preparare il piano di rilascio e, per un prodotto, in più il Piano di lancio. Correzione proposta: allineare le due skill al Piano di prodotto (un solo documento, il Piano di lancio) e rilanciare la build.
- **P-12, Buco.** Dove: `piano-di-lancio` (promemoria interno) e Guida alla pubblicazione. Cosa è successo: nessun passo verifica prima del lancio le configurazioni fuori dalla repository (dominio dell'indirizzo di posta, autorizzazioni di invio, certificati, account). Il problema del 10 settembre nasce da lì. Correzione proposta: aggiungere al promemoria interno e alla Guida una voce "configurazioni esterne verificate in produzione" con un invio di prova.
- **P-13, Contraddizione.** Dove: `proposta-di-soluzione` (nessuna data) e la scadenza del cliente. Cosa è successo: la Proposta cita la data di apertura di Verona come parola del cliente e dice che la scadenza è fattibile; la regola dice nessuna data. Correzione proposta: ammettere la scadenza del cliente nella Proposta, in parte 1 e nella stima, vietando solo le date di consegna.
- **P-14, Passaggio.** Dove: `manuale-del-prodotto`, `documento-tecnico`, `guida-alla-pubblicazione`, Regole comuni (Dove va ogni documento). Cosa è successo: le versioni condivise stanno nella cartella di fase e quelle vigenti in `sistema/`, ma nessun passo dice quando il Manuale confermato passa a `sistema/`. Correzione proposta: dire che la conferma del Manuale e la pubblicazione del Documento tecnico copiano la versione in `sistema/`.
- **P-15, Buco.** Dove: Ciclo di sviluppo (buffer di sprint) e `sprint`. Cosa è successo: nello sprint 12 il buffer di sprint (42 ore) non è stato usato e a metà sprint nessuno ha anticipato issue, mentre M1 è andata a meno 8 ore di margine. In un lavoro senza urgenze il buffer vale 546 ore su 13 sprint. Correzione proposta: la Nota di sprint registra il buffer non usato e il controllo di metà sprint diventa un passo.
- **P-16, Manca.** Dove: `variazione`, Regole comuni (variazioni). Cosa è successo: per una variazione media si stima l'impatto su ore e date, ma non è detto se le ore consumano il buffer o aumentano la milestone. Correzione proposta: dire che le ore di una variazione media si aggiungono alla milestone e riducono il margine; solo le piccole consumano il buffer.
- **P-17, Manca.** Dove: `prova-su-staging`, `milestone-report`. Cosa è successo: Elena (utilizzatrice) prova e dà gli esiti, Franco (referente) accetta. Le skill dicono "dalle risposte del cliente" senza distinguere. Correzione proposta: dire che gli esiti per story possono venire dagli utilizzatori e l'accettazione esplicita è del referente.
- **P-18, Buco.** Dove: `pacchetto-di-garanzia`. Cosa è successo: un bug che manda al cliente finale un prezzo sbagliato non rientra nell'urgenza (sistema fermo, utenti bloccati, dati a rischio) e i fatti non dicono quante email sono partite. La skill non dice come assegnare l'urgenza quando i fatti non bastano. Correzione proposta: usare la regola di `kickoff-ticket` (si propone il livello più alto con la domanda che scioglie il dubbio) e aggiungere "danno economico al cliente finale" tra i criteri di urgenza.
- **P-1, Manca.** Dove: Piano di progetto e Piano di prodotto (stima a occhio, tempo del kickoff), `kickoff`. Cosa è successo: il 10% di "una stima a occhio della durata" non dice in che unità, di cosa (durata di sviluppo? di tutto?), e se è tempo di una persona o del team. Correzione proposta: scrivere che la stima a occhio è la durata di sviluppo in giorni lavorativi e che il tempo del kickoff è un numero di giorni lavorativi di calendario per il responsabile.
- **P-5, Buco.** Dove: `kickoff` (parte B per un prodotto). Cosa è successo: "non c'è la parte B" per un prodotto, ma il prodotto dipende da API esistenti. Sono state controllate come fatti della base. Correzione proposta: una parte B ridotta per il prodotto: lettura delle API e dei sistemi da cui dipende, per ciò che il prodotto userà.
- **P-6, Superfluo.** Dove: `sprint`, Nota di sprint. Cosa è successo: la Nota ha otto voci anche negli sprint senza eventi. Correzione proposta: una forma breve quando milestone in linea e nessun imprevisto.

**Bassa**

- **P-19, Base.** Dove: scenario e base. Cosa è successo: manca lo stato di M2 a metà marzo (Nota dello sprint 14), manca il lavoro a cui è assegnato lo sviluppatore 4 a settembre 2027, e il Report di progetto non ha le ore del problema delle email. Correzione proposta: aggiungere questi dati alla base.
- **P-20, Peso.** Dove: `interpretazione-conversazioni`. Cosa è successo: sei conversazioni, ciascuna con sintesi in tre parti anche quando c'è una sola conferma. Correzione proposta: una forma breve, riepilogo scritto con una riga di sintesi, quando la conversazione contiene solo una conferma.
- **P-21, Buco.** Dove: Piano di prodotto (assistenza rafforzata) e `piano-di-lancio`. Cosa è successo: la durata (2 settimane) e il tempo di risposta (un giorno lavorativo) non sono definiti. Correzione proposta: chiudere la decisione aperta del Piano di prodotto.
- **P-22, Contraddizione.** Dove: `proposta-di-soluzione`, `manuale-del-prodotto`, `piano-di-lancio`. Cosa è successo: le skill dicono di produrre i documenti per il cliente in PDF; il test li ha tenuti in Markdown. Correzione proposta: dichiarare il formato nel test.
- **P-23, Passaggio.** Dove: `wireframe-e-prototipo`. Cosa è successo: la skill produce una pagina per schermata o un prototipo, ma la Proposta ne cita solo due e il prototipo è un file; nessun passo dice quanti wireframe allegare. Correzione proposta: lasciare libero e indicare le schermate che servono a capire i percorsi principali.

## 5. Peso della procedura

- **Costo.** Circa quaranta documenti. Il prodotto lo giustifica. I più pesanti: le sintesi delle conversazioni in tre parti (P-20), le due versioni del Piano di lancio (necessarie), la Nota di sprint (P-6).
- **Proposte.** Sintesi breve per le conversazioni di sola conferma. Nota di sprint in forma breve quando non c'è nulla da segnalare. Un solo documento per Piano di lancio e piano di rilascio (P-11).

## 6. Confronto con la prova precedente

Non c'è: le prove precedenti sono state cancellate.

## 7. Decisioni per Leonardo

1. **Scadenza del cliente e stime che cambiano (P-3).** Opzioni: (a) ricontrollo obbligatorio quando si ristima con le issue, con comunicazione del margine; (b) solo nel Piano dei SAL. Raccomandato (a).
2. **Durata pianificata per la garanzia (P-2).** Opzioni: (a) durata di sviluppo del Piano dei SAL; (b) dalla data di avvio del kickoff alla messa in produzione. Raccomandato (a), perché è la durata che il cliente ha letto.
3. **Leve di una milestone in ritardo (P-7, P-8).** Opzioni: (a) correggere il criterio e dire che lo spostamento tra milestone è una variazione media quando cambia un SAL già comunicato; (b) togliere la leva "spostare una story". Raccomandato (a).
4. **Piano di rilascio e Piano di lancio (P-11).** Un solo documento, come già scritto nel Piano di prodotto: allineare le skill e rilanciare la build.
5. **Domande aperte e assunzioni (P-4).** Opzioni: (a) l'assunzione dichiarata con prova di verifica; (b) rimandare la conferma finché Torino non risponde. Raccomandato (a).
6. **Buffer di sprint non usato (P-15).** Opzioni: (a) registrarlo nella Nota e rendere obbligatorio il controllo di metà sprint; (b) farlo tornare nel margine della milestone a fine sprint. Raccomandato (a).
7. **Configurazioni esterne al lancio (P-12).** Aggiungere il controllo al promemoria interno e alla Guida. Raccomandato.

## 8. Aggiunta: documenti del sistema scritti per intero

Dopo la prima stesura di questa analisi, Leonardo ha chiesto i documenti del sistema per intero al posto degli estratti. Il prodotto è un sistema nuovo: non ha documenti di partenza. Ora ci sono: in `01-kickoff/05-documentazione` il Manuale v1.0 con tutte le story della prima release complete e il Documento tecnico v1.0 con i rami di errore per funzionalità; in `sistema/` Manuale v1.2 (172 righe, 18 story della prima release con la F2.5 della variazione, più 3 della seconda release a titolo e frase), Documento tecnico v1.2 (126) e Guida v1.1 (45). I passi non sono stati rifatti. I controlli sui caratteri e sulla persona, fatti a ricerca, non danno risultati.

- **P-24, Base.** Dove: regola 3 della base (documenti in forma ridotta). Cosa è successo: la regola ha permesso un Manuale con molte story della prima release a titolo, contro la skill (quelle della prima release sono complete); il capitolo delle modifiche stava inoltre all'inizio invece che come capitolo 11. Corretto nei documenti. Correzione proposta: nella base, dire che il Manuale e il Documento tecnico si scrivono per intero (solo i numeri e gli altri documenti restano ridotti).
- **P-25, Peso.** Dove: `manuale-del-prodotto`. Cosa è successo: scrivere per intero le story della prima release dà un Manuale di circa 170 righe per 18 story, con situazione di partenza, comportamento, casi particolari e criterio per ognuna. Ogni caso particolare ha poi un ramo di errore nel Documento tecnico. È il documento più pesante della fase 5 del kickoff, e la prova non lo mostrava perché le story erano a titolo. Correzione proposta: nessuna: è il costo previsto dalla skill. Va tenuto in conto nella stima del tempo di documentazione.
- **P-26, Contraddizione.** Dove: `allineamento-documenti` e `manuale-del-prodotto`, aggiornamento dopo una variazione. Cosa è successo: la variazione V1 aggiunge F2.5 (SMS di promemoria). Il Manuale v1.2 contiene però ancora in F2.3 "Nessun avviso automatico al cliente", e i passaggi recitati hanno aggiunto F2.5 senza rileggere le story vicine. Il capitolo dei requisiti generali è stato aggiornato scrivendo il Manuale intero; F2.3 resta ambiguo. Correzione proposta: nell'aggiornamento di un Manuale, rileggere tutta la funzionalità della story nuova e i capitoli 7 e 8, perché i comportamenti che una story dà per assenti possono cambiare.
- **P-27, Passaggio.** Dove: `documento-tecnico` e Piano di prodotto (versioni). Cosa è successo: alla chiusura il Documento tecnico passa da v1.0 a v1.2 e il Manuale da v1.0 a v1.2: i numeri coincidono per caso. Se il Manuale avesse avuto una versione in più, nessuna regola direbbe a quale versione del Manuale rimanda ogni versione del Documento tecnico. Correzione proposta: l'intestazione del Documento tecnico dichiara già "si riferisce al Manuale vX": renderlo obbligatorio per ogni versione e controllarlo nel controllo finale.
