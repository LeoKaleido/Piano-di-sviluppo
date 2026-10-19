# Analisi, progetto 1 (107, area riservata per i rivenditori), prova 1

Data: 2026-10-11. Fonti: `base-comune.md`, `scenario.md`, `diario.md`, i file di `esecuzione-1/107/`, Piano di progetto, Regole comuni, Ciclo di sviluppo e le skill `kickoff`, `interpretazione-conversazioni`, `proposta-di-soluzione`, `manuale-del-prodotto`, `mockup`, `documento-tecnico`, `piano-delle-milestone`, `sprint`, `riprogrammazione`, `variazione`, `prova-su-staging`, `milestone-report`, `collaudo-e-rilascio`, `guida-alla-pubblicazione`, `allineamento-documenti`, `report-di-progetto`, `pacchetto-di-garanzia`. Nessuna prova precedente. La terza milestone è un dato dello scenario. Le prove del ticket (103) e del prodotto (110) sono indipendenti: i codici Q-n di questa analisi sono propri; i rimandi a T1-n e P-n indicano lo stesso punto emerso altrove.

## 1. Sintesi

Il Piano di progetto ha retto: kickoff in quattro sottofasi dentro il tempo fissato (6 giorni lavorativi), due conferme del cliente a voce con riepilogo scritto, la soluzione troppo grande per la fiera divisa in due progetti, Piano dei SAL con le date calcolate sulla capacità reale (festività e chiusura aziendale comprese), una variazione chiesta al telefono non accettata e poi approvata per iscritto, il ritardo di un materiale e una malattia gestiti dalla Nota di sprint e dalla riprogrammazione, il rilascio quattro giorni prima della fiera, la garanzia dalla durata pianificata. Nessuna delle cose "che non devono succedere" è successa.

Dove ha retto meno: la capacità per il collaudo e il rilascio non è in nessuna milestone, il margine verso la scadenza del cliente non è mai ricontrollato (come nella prova del prodotto), la regola "ogni giorno di ritardo sposta di un giorno" non tiene conto del margine nascosto nella data del materiale, e il contrasto tra pianificare "per intero" e il buffer di milestone.

Due osservazioni ad alta gravità, undici medie, il resto bassa.

## 2. Controlli dello scenario

**Valutazione**

- Urgenza normale, progetto, project manager 2 al posto del saturo project manager 1: emerso.
- Stima a occhio di 10 minuti e tempo del kickoff al 10% (6 giorni): emerso, con la lacuna sull'oggetto della stima (Q-1).
- Verifica: nessun lavoro che copra; pagamento in garanzia fino al 26 ottobre; comparatore su `disponibilita`; ticket 103 su `prezzi`: emerso (Q-2 per l'esito del ticket).
- Codice: nessun listino multiplo, ruolo, bonifico; codici sconto non documentati; Manuale 30 contro 90 giorni come differenza e domanda: emerso.
- Stato di partenza con le decisioni in testa, cartella con `storico.md` e `decisioni.md`, scadenza della fiera giudicata: emerso.
- Franco referente, Diego non approva: emerso.

**Stima e Proposta**

- Stima precisa in giorni lavorativi e settimane con fattori, uso dei Report 96 e 58: emerso. Confronto con la fiera e problema detto a Franco: emerso.
- Prima versione dentro il tempo, cinque pagine al massimo, senza tecnologie, prezzi e date: emerso. Lunghezza non misurata.
- Domande con codice; il 26 ottobre Franco risponde a metà; elenco delle aperte e il lavoro che non dipende prosegue: emerso.
- Conferma a voce con riepilogo scritto e allineamento: emerso.

**Documentazione**

- Manuale con criteri verificabili, mockup approvato con il Manuale, conferma a voce con riepilogo: emerso (Q-5).
- Documento tecnico con il capitolo Milestone; issue in ClickUp tutte entro le 16 ore; materiali come dipendenze: emerso.
- Piano dei SAL senza nulla di interno; primo sprint pianificato dopo l'invio: emerso.

**Sviluppo**

- Nota di sprint con i numeri del margine: emerso.
- Capacità con ferie e persone condivise, controllo del supervisore: emerso in parte (supervisore dichiarato nel diario).
- Variazione chiesta a voce da Diego non accettata; approvata per iscritto da Franco: emerso.
- Materiale in ritardo di 6 giorni lavorativi a cavallo della chiusura, effetto sul calendario calcolato: emerso (Q-12).
- Assenza e ticket urgente su buffer e margine: emerso (Q-14).
- Difetto non bloccante e richiesta nuova alla prova, silenzio di Franco: emerso.

**Rilascio e garanzia**

- Collaudo con percorsi, parti esistenti toccate e dati reali; checklist; Guida aggiornata con le migrazioni; scheda tecnica non di una riga; pubblica l'incaricato; avviso a verifiche superate: emerso.
- Chiusura con documenti e Report di progetto dallo storico: emerso.
- Garanzia dalla durata pianificata, pacchetto con bug e ritocco estetico: emerso in parte (Q-17, Q-18, Q-19).

**Cosa non deve succedere**

- Ore, buffer, nomi del team o tecnologie in un documento per il cliente: non successo (verificato a ricerca; un'indicazione di "server SSR" resta solo nella scheda interna).
- Variazione accettata a voce o presa da Diego: non successo.
- Milestone accettata con il silenzio: non successo.
- Issue cancellata invece che portata a CANCELLED: non successo (nessuna issue superata).
- Documento in più di quelli previsti: la domanda aperta del 27 ottobre e il Piano dei SAL v2 sono documenti non elencati ma previsti dai piani.

## 3. Documenti

Prodotti in `esecuzione-1/107/`: tutti quelli dello scenario. Versioni 0.2 e 0.3 della Proposta non scritte come file (accorpate nella v1.0). Mockup in PDF e wireframe non prodotti (strumenti assenti; il materiale per i mockup c'è). In `sistema/` ci sono Manuale v1.6, Documento tecnico v1.5 e Guida alla pubblicazione v1.2 scritti per intero. Fuori posto: nessuno.

Ricerca dei caratteri vietati, della prima o seconda persona e delle tabelle: nessun risultato (a parte le parole del cliente fra virgolette).

## 4. Osservazioni

**Alta**

- **Q-8, Buco.** Dove: Piano di progetto (rilascio), `piano-delle-milestone` ("lavori trasversali espliciti"), Ciclo di sviluppo. Cosa è successo: collaudo, preparazione, pubblicazione e chiusura non stanno in nessuna milestone e non hanno capacità calcolata. Il Documento tecnico ha messo le tre milestone fino al 12 febbraio e ha lasciato il rilascio nello sprint 13, con un margine di un giorno lavorativo prima della fiera. Correzione proposta: nel capitolo Milestone una voce "Rilascio" con le ore di collaudo, preparazione e pubblicazione e lo sprint che le contiene, e il conto della data di pubblicazione contro le scadenze del cliente.
- **Q-19, Buco.** Dove: Piano di progetto e Piano di prodotto (stima rifatta con le issue), `piano-delle-milestone`. Cosa è successo: la scadenza del cliente (fiera) è stata giudicata fattibile "con poco margine" e nessun passo la ricontrolla quando il piano cambia. Dopo la riprogrammazione e la variazione il margine tra pubblicazione e fiera è sceso a un giorno senza che il cliente lo sapesse. Stesso punto di P-3 del prodotto. Correzione proposta: a ogni riprogrammazione e a ogni ristima si ricalcola il margine verso la scadenza e lo si comunica al cliente quando scende sotto una soglia.

**Media**

- **Q-12, Contraddizione.** Dove: `riprogrammazione` e Ciclo di sviluppo ("il cliente non risponde"), Regole comuni (materiali del cliente). Cosa è successo: la regola dice che ogni giorno di ritardo su un materiale sposta di un giorno le consegne che ne dipendono. Qui il materiale era dovuto il 18 dicembre per un lavoro che iniziava il 7 gennaio: lo slittamento reale è di 2 giorni lavorativi, la regola ne darebbe 6. Correzione proposta: lo slittamento si calcola dalla data in cui la prima issue dipendente era pianificata, non dalla data del materiale.
- **Q-7, Manca.** Dove: `piano-delle-milestone` (materiali del cliente). Cosa è successo: la data di un materiale "da lì si ricava entro quando serve" non dice se compreso un margine di controllo. Correzione proposta: dichiarare il margine nel capitolo (per esempio "una settimana per controllare il file") e usarlo nel calcolo di Q-12.
- **Q-6, Contraddizione.** Dove: Ciclo di sviluppo e `sprint` (pianificare "per intero, non sotto la capacità") e buffer di milestone. Cosa è successo: con il buffer di milestone la milestone M2 pianifica 100 ore su 120 e lo sprint 10 ne pianifica 64 su 84. Le due regole non si accordano. Correzione proposta: dire che si pianifica per intero la capacità al netto del buffer di sprint e del buffer di milestone.
- **Q-13, Buco.** Dove: `riprogrammazione` (comunicazione al cliente). Cosa è successo: lo slittamento nasce da cause miste (materiale, malattia); la skill dice di citare i fatti del cliente quando il ritardo è suo, e di non raccontare i fatti interni. Il messaggio ha citato solo il materiale. Correzione proposta: dire come descrivere uno slittamento con cause miste, senza attribuire al cliente ciò che non è suo.
- **Q-18, Contraddizione.** Dove: Regole comuni (Garanzia: "la richiesta del cliente vale come conferma") e (Contatti: "vale solo l'approvazione del referente"). Cosa è successo: Diego ha segnalato il ritocco estetico; si è chiesta la conferma a Franco. Correzione proposta: in garanzia le segnalazioni di bug le fa chiunque dal cliente, le variazioni piccole e le richieste estetiche hanno bisogno del referente.
- **Q-19b, Buco.** Dove: `pacchetto-di-garanzia`. Cosa è successo: un importo di pagamento sbagliato è stato trattato come urgente per interpretazione; la definizione non lo dice (stesso punto di P-18 del prodotto e T1-18). Correzione proposta: aggiungere "danno economico" tra i criteri.
- **Q-17, Manca.** Dove: Regole comuni (Garanzia). Cosa è successo: la durata pianificata di un progetto non è definita (sviluppo 10 settimane, tutta la lavorazione circa 19, la Proposta); stesso punto di P-2. Correzione proposta: definirla come durata dello sviluppo del Piano dei SAL.
- **Q-5, Passaggio.** Dove: `allineamento-documenti` e `manuale-del-prodotto`. Cosa è successo: il ticket 103 ha portato il Manuale vigente da v1.3 a v1.4 durante il kickoff; l'allineamento sta alla conferma della Proposta e il Manuale si scrive tre settimane dopo. Nessuna regola dice di riprendere la versione vigente. Correzione proposta: all'inizio della sottofase di documentazione si riprende la versione vigente dei documenti del sistema.
- **Q-2, Buco.** Dove: Regole comuni e `kickoff` (parte A). Cosa è successo: nessun esito per un ticket aperto che tocca lo stesso modulo di un progetto che parte dopo. Si è deciso "prima il ticket". Correzione proposta: aggiungere l'esito (stesso punto di T1-1).
- **Q-10, Manca.** Dove: `variazione`. Cosa è successo: come cambia il margine della milestone con una variazione media non è detto (stesso punto di P-16). Correzione proposta: dire che le ore di una media si aggiungono alla milestone e riducono il margine.
- **Q-11, Manca.** Dove: `prova-su-staging` e `milestone-report`. Cosa è successo: Diego (utilizzatore) ha fatto la prova e il referente ha accettato; le skill non distinguono chi dà gli esiti e chi accetta (stesso punto di P-17).

**Bassa**

- **Q-1, Manca.** Dove: Piano di progetto, `kickoff`. Cosa è successo: oggetto e unità della stima a occhio non definiti. Correzione proposta: durata di sviluppo in giorni lavorativi (come P-1).
- **Q-3, Buco.** Dove: `kickoff`. Cosa è successo: la divisione in più progetti è un imprevisto del Piano di progetto ma non una decisione del kickoff. Correzione proposta: nominarla anche nella skill.
- **Q-4, Passaggio.** Dove: `proposta-di-soluzione`. Cosa è successo: la v0.2 e la v0.3 non sono scritte come file. Correzione proposta: nessuna per i piani; per i test si dichiara.
- **Q-9, Buco.** Dove: Regole comuni (Contatti), `guide-della-giornata`. Cosa è successo: lo sviluppatore non ha una risposta pronta quando il cliente gli chiede una variazione a voce. Correzione proposta: una frase standard nella guida dello sviluppatore.
- **Q-14, Manca.** Dove: Ciclo di sviluppo (buffer di sprint). Cosa è successo: il buffer è "il 20% della capacità di ogni persona" ma si consuma come un fondo dello sprint. Correzione proposta: dichiarare che è un fondo unico dello sprint.
- **Q-15, Esecuzione.** Dove: Piano dei SAL v2. Cosa è successo: la variazione V1 avrebbe dovuto aggiornare il Piano dei SAL il 22 dicembre, non il 15 gennaio. Nessuna modifica ai piani.
- **Q-16, Buco.** Come Q-8, nella fase di rilascio. Correzione proposta: come Q-8.
- **Nota di base.** La base non dice quali lavori occupano il team a marzo 2027, e le prove del prodotto 110 e del progetto 107 usano le stesse persone nel febbraio 2027. Da correggere nella base se le prove si ripetono nello stesso calendario.

## 5. Peso della procedura

- **Costo.** Circa trenta documenti per 423 ore di lavoro. Il peso maggiore è nella documentazione (Manuale, mockup, Documento tecnico, Piano dei SAL, sintesi di tre conversazioni).
- **Proposte.** Sintesi brevi per le conversazioni con una sola conferma (come P-20). La Proposta in versioni intermedie (v0.2, v0.3) può restare nella v1.0 con l'elenco delle modifiche.

## 6. Confronto con la prova precedente

Non c'è.

## 7. Decisioni per Leonardo

1. **Capacità del rilascio (Q-8).** Opzioni: (a) voce "Rilascio" nel capitolo Milestone con ore e sprint; (b) lasciare e dichiarare nel Piano dei SAL il margine verso la scadenza. Raccomandato (a).
2. **Scadenza del cliente (Q-19, P-3).** Ricontrollo a ogni ristima e riprogrammazione, con comunicazione sotto una soglia. Raccomandato.
3. **Slittamento per i materiali (Q-12, Q-7).** Calcolo dalla data della prima issue dipendente, margine dichiarato nel capitolo. Raccomandato.
4. **Pianificare per intero e buffer di milestone (Q-6).** Chiarire che il buffer di milestone non si pianifica.
5. **Garanzia (Q-17, P-2, Q-18).** Durata pianificata come durata dello sviluppo del Piano dei SAL; richieste in garanzia: bug da chiunque del cliente, variazioni piccole dal referente.
6. **Urgenza in garanzia (Q-19b, P-18, T1-18).** Danno economico come criterio.

## 8. Aggiunta: documenti del sistema scritti per intero

Dopo la prima stesura di questa analisi, Leonardo ha chiesto i documenti del sistema per intero al posto degli estratti. Il progetto parte dai documenti comuni di `test/sistema-base/` aggiornati dal ticket 103 (Manuale v1.4, Documento tecnico v1.3, Guida v1.1). Ora ci sono: in `01-kickoff/04-documentazione` Manuale v1.5 (281 righe) e Documento tecnico v1.4 (162); in `sistema/` Manuale v1.6 (290), Documento tecnico v1.5 (165) e Guida alla pubblicazione v1.2 (60). I passi non sono stati rifatti. I controlli sui caratteri e sulla persona, fatti a ricerca, non danno risultati.

- **Q-20, Base.** Dove: Proposta v0.1 e v1.0, Manuale. Cosa è successo: il secondo progetto numerava il download dei listini F10, codice già usato dal comparatore. Scrivendo il Manuale intero la collisione è emersa; corretto in F13 nella Proposta e nel Manuale. In più la Guida risultava v1.1 sia per il ticket 103 sia per questo progetto: gli scenari sono prove indipendenti ma il progetto presuppone il ticket concluso; ora la Guida del progetto è v1.2 e la scheda tecnica cita la v1.1. Correzione proposta: nessuna ai piani; dichiarare nella base che il progetto parte dopo la chiusura del ticket 103.
- **Q-21, Buco.** Dove: `manuale-del-prodotto` e `documento-tecnico` (numerazione delle versioni). Cosa è successo: la skill assegna la versione "successiva a quella corrente", ma se un altro lavoro (qui un ticket) aggiorna il Manuale mentre il progetto ha una bozza inviata al cliente, la bozza ha già un numero. Qui il ticket è finito prima della bozza e non c'è stato conflitto, ma nulla impedisce il caso inverso. Correzione proposta: la bozza porta un numero provvisorio e la versione definitiva si assegna alla conferma del cliente, partendo dalla versione vigente in quel momento.
- **Q-22, Passaggio.** Dove: `documento-tecnico` (capitolo Milestone) e `allineamento-documenti`. Cosa è successo: il sistema ha due lavori aperti con milestone (comparatore e questo progetto) e un solo capitolo Milestone. Nei documenti interi il capitolo è diviso per lavorazione, ma nessuna skill lo prevede. In più gli stati del comparatore restano quelli della v1.2 (il capitolo è "invariato") mentre il comparatore avanza: nessuno li aggiorna dal documento del sistema. Correzione proposta: dire che il capitolo Milestone ha una sezione per lavorazione, che la aggiorna il responsabile di quella lavorazione, e che un altro lavoro non la tocca.
- **Q-23, Buco.** Dove: `manuale-del-prodotto`, struttura. Cosa è successo: F6.2 e F7.3 sono funzioni del gestionale (strumento interno, usato dal responsabile commerciale), ma lo scopo del Manuale è descrivere il sito e il gestionale è dichiarato fuori ambito. Per scrivere le due story è stata necessaria un'eccezione nel capitolo 1. Correzione proposta: dire nella skill che le funzioni di strumenti interni richieste dal progetto entrano nel Manuale come story di un tipo di utente interno, e dichiararlo nello scopo.
- **Q-24, Buco.** Dove: Guida alla pubblicazione, "Cosa manca". Cosa è successo: il blocco sul gestionale (nato dal ticket 103) è ancora aperto dopo la seconda pubblicazione del gestionale, il 18 febbraio. Nessun passo lo chiude e nessuna scheda tecnica chiede di completarlo. Correzione proposta: la scheda tecnica di rilascio riporta i blocchi "Cosa manca" della Guida che riguardano i repository pubblicati, e l'incaricato li completa o li lascia con una data.
- **Q-25, Peso.** Dove: `documento-tecnico`. Cosa è successo: al kickoff il Documento tecnico passa da 134 a 162 righe e tocca dieci capitoli su dodici (1, 3, 4, 5, 6, 7, 8, 9, 10, 11) per un progetto di nove story su un sistema esistente. Correzione proposta: nessuna: il capitolo 5 e il capitolo 11 sono necessari; per gli altri ammettere "invariato" in una riga, come già per 7 e 8.
