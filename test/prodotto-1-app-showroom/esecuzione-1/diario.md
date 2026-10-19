# Diario, prodotto 1 (110), prova 1

Data dell'esecuzione: 2026-10-11. Piani e skill nella versione del repository a quella data, compresi i ritocchi al Piano di prodotto fatti il giorno stesso (non ancora committati). Le osservazioni hanno il codice P-n e il tipo, riprese poi nell'analisi. Dove lo scenario e la base non danno un dato, è scritto e non è inventato.

## 12-13 ottobre 2026, valutazione

- **Franco (cliente).** Apre la richiesta su osTicket il 12 ottobre con scadenza 13 settembre 2027.
- **Leonardo (chi analizza), nessuna skill.** Vede che il sistema non esiste: prodotto. Non assegna l'urgenza (come dice il piano). Designa il product lead 1 con chi gestisce il team (libero). Risposta al cliente per presa visione, senza data, e senza obbligo. Produce: DEC1. Nessun problema.
- **Product lead 1, `kickoff`.** Avvio: richiesta, cliente, scadenza, documenti (base), nessun codice da indagare (prodotto). Stima a occhio di 150 giorni lavorativi in una decina di minuti, interna. Tempo del kickoff 15 giorni lavorativi: 13 ottobre al 2 novembre. Cartella 110 con `storico.md` e `decisioni.md` vuoti.
  - P-1, Manca: il 10% di "una stima a occhio della durata" non dice in che unità si calcola né cosa misura il 10% (giorni di calendario, giorni lavorativi della sola persona che esegue, giorni di tutto il team). Si sono usati giorni lavorativi di calendario, solo per il responsabile.
  - P-2, Buco: i piani dicono che la stima a occhio è "della durata" ma non di cosa (prima release? dalla richiesta alla produzione? solo sviluppo?). Si è presa la durata di sviluppo della prima release.

## 14 ottobre, incontro con Franco

- **Product lead 1 e Franco.** Trascrizione scritta a mano. `interpretazione-conversazioni` produce sintesi in tre parti e un riepilogo scritto. Il riepilogo chiede alle persone di rispondere solo se qualcosa non torna.
  - Franco è il referente. Pagamento, firma e riepilogo sono "preferenze", non decisioni: la skill le tratta come richieste da collocare. Nessun problema.
  - P-3, Peso: sei conversazioni nel corso del lavoro (due incontri di valutazione, una telefonata sulla Proposta, una sessione e una telefonata sul prototipo, una telefonata sul Manuale) generano ciascuna una sintesi in tre parti. Per una telefonata di tre battute con una sola conferma la parte 1 e la parte 2 ripetono la parte 3.

## 20 ottobre, incontro con Elena e Paolo

- **Product lead 1.** Incontro nello showroom, trascrizione e sintesi (nessun riepilogo, perché nessuna decisione). Torino non disponibile.
  - P-4, Buco: il piano dice che, se gli utilizzatori non sono disponibili, l'analisi del contesto si chiude al tempo del kickoff e le parti non verificate diventano domande aperte nella Proposta. La Proposta non può però essere confermata con domande aperte (skill `proposta-di-soluzione`, Conferma). Il risultato è che la domanda su Torino e Bologna è diventata un'assunzione. Il piano non dice come si sciolgono le assunzioni (quale prova le verifica, chi la fa).

## 21-22 ottobre, Stato di partenza e stima

- **Product lead 1, `kickoff`.** Parte A: lavori aperti (100, 101, 102, 103, 96) e sistemi del cliente. Parte B: non applicabile. Produce lo Stato di partenza (forma prodotto) con le decisioni in testa e la stima precisa (`02-stima`). Giorno 8 di 15 al termine della stima.
  - P-5, Buco: la parte B è dichiarata "non c'è" per un prodotto, ma l'applicazione dipende da API esistenti e dal gestionale. Verificare che le API degli ordini accettino lo sconto del consulente è controllo del codice, non del contesto. Si è fatto come "verificato dalla base", ma la skill non lo prevede.
  - P-6, Manca: l'affidabilità della scadenza (fattibile con poco margine, circa una settimana) non ha una regola di rivalutazione quando la stima cambia. Vedi P-12.

## 2-24 novembre, Proposta

- **Product lead 1, `proposta-di-soluzione`.** Prima versione inviata il 2 novembre, nel tempo del kickoff. Wireframe S1 e S3 in HTML (`wireframe-e-prototipo`). Franco risponde il 9 novembre: risposte a D1-D6 e richiesta di mettere tutto nella prima release. Registro del riscontro: D1 a D6 risposte; "tutto nella prima release" richiesta nuova non accolta (regola della prima release). Versione 0.2 inviata il 13 novembre con "Modifiche rispetto alla versione precedente".
  - P-7, Contraddizione: la Proposta v0.2 ha domande con risposta; l'unica domanda che Franco non risolve (Torino e Bologna) diventa assunzione. La skill dice "ogni domanda va chiusa con una risposta, trasformata in assunzione o spostata tra ciò che non si potrà fare": è seguita, ma il Piano di prodotto (imprevisti del kickoff) dice che le parti non verificate diventano "domande aperte" nella Proposta, che poi non si confermerebbe. Due testi, due esiti.
  - La Proposta v0.1 e la v0.2 sono in Markdown, la skill dice PDF: per il test si è tenuto il sorgente.
- **Franco, 24 novembre.** Conferma a voce la v0.2 (diventa v1.0). Riepilogo scritto lo stesso giorno. `allineamento-documenti` alla conferma: rapporto di impatto in conversazione. Lavorazione 100: Manuale e Documento tecnico del comparatore, nessun conflitto (il ramo su `disponibilita` è un'avvertenza). Ticket 103: il modulo `prezzi` ha cambiato la regola dello sconto di importo fisso, il Manuale del sito ha F3.4 dal 21 ottobre; la Proposta non descrive i dettagli del calcolo, quindi nessun conflitto. Lavorazione 96: nessun conflitto per la prima release. Documenti non raggiunti: nessuno.
  - P-8, Passaggio: l'allineamento "prima di iniziare" per un prodotto cerca conflitti con altri lavori, ma la Proposta non contiene i comportamenti (sono nel Manuale, non ancora scritto): il controllo alla conferma della Proposta è fatto su un documento che non ha ancora i dettagli. Il Piano di progetto lo fa "alla conferma della Proposta"; per il Manuale confermato non è previsto un secondo allineamento.

## 25 novembre-15 dicembre, prototipo e design

- **Product lead 1, `wireframe-e-prototipo`, `mockup`, `interpretazione-conversazioni`.** Prototipo v1 in HTML (6 schermate, percorsi). Materiale per i mockup per la grafica (8 ore a settimana). Sessione con Elena il 2 dicembre: richiesta del telefono in agenda (modifica, perché il Manuale non è confermato). Franco il 3 dicembre chiede di spostare un pulsante: modifica. Prototipo v2 (non scritto per intero: descritto nei documenti). Franco approva prototipo e mockup a voce il 15 dicembre; riepilogo scritto lo stesso giorno. Mockup in PDF: richiamo alla copia, i file Figma non esistono nel test.
  - P-9, Passaggio: la skill `mockup` chiede wireframe approvati; i wireframe approvati con la Proposta sono due (S1 e S3). Gli altri nascono dal prototipo, che si approva nello stesso momento dei mockup. Il materiale per i mockup parte quindi da schermate non approvate.
  - P-10, Superfluo: il prototipo e i mockup si approvano con una sola conferma, ma il piano elenca due documenti da conservare, il riepilogo e il PDF; funziona, ma il piano non dice che la conferma è unica.

## 16 dicembre-29 gennaio, documentazione

- **Product lead 1, `manuale-del-prodotto`.** Manuale v0.1 inviato il 23 dicembre. Franco non risponde (chiusura dal 24 dicembre al 6 gennaio, assenza dal 28 al 31). Sollecito scritto il 7 gennaio. Franco risponde il 12 gennaio con due correzioni (modifiche); v0.2. Conferma a voce il 14 gennaio, riepilogo scritto: v1.0. Ritardo di attesa effettiva: 4 giorni lavorativi.
  - P-11, Buco: il Piano di prodotto dice che il Documento tecnico segue il Manuale confermato; la skill `documento-tecnico` dice di usarla "dopo il Manuale". Con il Manuale non confermato per 4 giorni lavorativi di attesa, il piano dice di proseguire con "ciò che non dipende dalla risposta", ma tutto ciò che resta (Documento tecnico, issue, Piano dei SAL) dipende. Si è aspettato. Si poteva scrivere le parti tecniche che non dipendono dalle story (tecnologie, struttura, infrastruttura).
- **Product lead 1 con il team lead, `documento-tecnico` e `piano-delle-milestone`.** Documento tecnico v1.0 con il capitolo Milestone, in 5 milestone. Calcolo della capacità: 4 sviluppatori, 105 ore a settimana, 210 a sprint, 168 al netto del buffer del 20%; sprint 16 e 20 con un giorno di festività: 151,2. Milestone: M1 336 ore (280 più 56), M2 487,2 (406 più 81,2), M3 504 (420 più 84), M4 487,2 (406 più 81,2), M5 336 (280 più 56); totale issue 1.792, buffer 358,4. Le date di prova coincidono con il venerdì dell'ultimo sprint di ogni milestone. Stima di durata 26 settimane contro 24: il cliente è informato con il Piano dei SAL, con la spiegazione. Materiali con date. Piano dei SAL inviato il 29 gennaio.
  - Issue in ClickUp di M1 (dove andrebbero create dopo la conferma del product lead), tutte da 16 ore o meno: I1 ambiente di staging; I2 ambiente di produzione; I3 struttura dell'applicazione; I4 navigazione; I5 spike su catalogo e prezzi (8); I6 e I7 modello dati; I8 e I9 accesso (F1.1); I10 e I11 solo showroom proprio (F1.2); I12 e I13 agenda (F2.1); I14 spike sulle API degli ordini; I15 dati di prova; I16 staging accessibile (8); I17 preparazione della prova (8); I18 correzioni dopo la prova; I19 casi particolari dell'accesso. Totale 280 ore. Dipendenze native tra le issue e verso i materiali (utenze di prova).
  - P-12, Passaggio: il Piano di prodotto dice di ristimare la durata con le issue e di inviare "appena si ha la stima vera" il Piano dei SAL. La stima salita di due settimane ha portato il margine verso la scadenza del cliente da una settimana a circa due giorni lavorativi (30 luglio, collaudo, chiusura estiva dal 9 al 20 agosto, preparazione, lancio il 9 o il 13 settembre). Né il piano né le skill chiedono di ricontrollare la fattibilità della scadenza del cliente quando la stima cambia. Il Piano dei SAL dice "prima dell'apertura dello showroom di Verona" senza dire che il margine è sceso.
  - P-13, Manca: la skill `sprint` chiede le ore realmente disponibili di ogni persona nel prossimo sprint; per il primo sprint di 2027 le ferie individuali non sono note e non esiste una regola su quanto in anticipo chiederle. Il Documento tecnico ha scritto "da chiedere a ogni inizio milestone".
- **Product lead e team, `sprint` (primo sprint).** Il 29 gennaio pianificazione dello sprint 12: capacità 168 al netto del buffer, scelte I1 a I9, I14, I16 (160 ore), supervisore ha controllato. Ordine: prima le issue di supporto e le spike che sbloccano.

## 12 febbraio, Nota di sprint 12

- **Product lead 1, `sprint`.** Nota con i numeri: pianificate 160, completate 128 (I1 a I7, I14, I16), non fatto I8 e I9, imprevisti 12 ore di assenza e 24 ore da nuove issue, ore rimanenti 176, capacità rimanente 168, margine meno 8 ore, in ritardo. Segnalazione: serve la riprogrammazione.
  - P-14, Peso: il buffer di sprint di 42 ore non è stato usato in tutto lo sprint (nessun ticket urgente), e a metà sprint nessuno ha anticipato issue. La regola lo permette ma non lo obbliga. Il margine di M1 è negativo per 8 ore, con 42 ore di capacità non usata nello stesso sprint. In un lavoro senza urgenze il buffer di sprint è capacità che non torna: su tredici sprint sono 546 ore.
  - P-15, Superfluo: la Nota ha otto voci per uno sprint; 5 sono "nessuno" in molti sprint (ticket urgenti, materiali). Una Nota più breve per gli sprint senza eventi.
- **Product lead 1, `riprogrammazione`.** Riconosce il caso (blocco tecnico e assenza breve). Ricalcolo con i numeri. Tre leve con effetto: spostare la story F2.1 (unica non iniziata), spostare la data (oltre il 13 settembre), aggiungere ore (8 per arrivare a zero, 36 per tornare in linea).
  - P-16, Contraddizione: la skill dice che le story candidate da spostare sono "non ancora iniziate, senza altre story che ne dipendono"; in una milestone di fondamenta ogni story ha dipendenti nelle milestone seguenti, quindi nessuna lo è. Il Piano di prodotto dice invece che spostare una story alla release successiva è una variazione media, e le Regole comuni dicono che spostare una story tra milestone è una variazione media: la leva "spostare una story" richiederebbe quindi il procedimento della variazione, che la skill `riprogrammazione` dice di non trattare.
  - P-17, Buco: la leva "aggiungere ore" prende ore dai ticket (sviluppatore 3). Il prestito del piano va dai progetti ai ticket, non l'opposto. Nessuna regola sulla direzione inversa né su chi avvisa i clienti dei ticket.
- **15 febbraio, chi gestisce il team.** Decide 16 ore aggiunte nello sprint 13. Margine più 8 (a rischio). Capitolo Milestone v1.1 (M1 304 ore). Nessuna comunicazione al cliente.

## 26 febbraio-3 marzo, prova di M1

- **Product lead 1, `prova-su-staging` e `milestone-report`.** Verifica interna: story F1.1, F1.2, F2.1 verificate sullo staging con issue COMPLETED. Messaggio per la prova e Milestone report. Il report è inviato il 26 febbraio. Franco non risponde. Elena prova il 1 marzo e comunica gli esiti. Franco accetta per email il 3 marzo. F2.1 accettata con difetto non bloccante, correzione entro il 12 marzo.
  - P-18, Manca: Elena è utilizzatrice, non referente. `prova-su-staging` dice di assegnare l'esito "dalle risposte del cliente" ma non dice chi accetta: gli esiti per story possono venire dagli utilizzatori, l'accettazione esplicita dal referente. Si è fatto così.

## 15 marzo-19 aprile, variazioni

- **Product lead 1, `variazione` (V1).** Franco chiede gli SMS di promemoria il 15 marzo. Passo 1: è una variazione (il Manuale è confermato dal 14 gennaio). Categoria: media, 14 ore [Stima da validare] oltre 4 ore. Impatto: nuova F2.5, M2 sale a 420, nessuna data. Margine di M2: dato non nello scenario, si assume 81,2. Materiale nuovo con data. Comunicazione al cliente. Franco approva il 22 marzo. Entra nello sprint 16.
  - P-19, Manca: la skill `variazione` dice che le piccole consumano il buffer di milestone, per le medie dice solo di stimare l'impatto. Non dice se le ore di una variazione media si aggiungono alla milestone (margine più basso) o consumano il buffer.
  - P-20, Base: lo scenario non dà lo stato di M2 a metà marzo (nota dello sprint 14); l'impatto sul margine è stato calcolato dal valore iniziale.
- **V2 (grande), 12 aprile.** Applicazione per i clienti: cambia ciò che la Proposta ha stabilito. Torna alla Proposta integrativa. Franco rinuncia il 19 aprile dopo la stima d'impatto.

## Da maggio a luglio, milestone 2-5

Non recitate: dati dello scenario. Tutte accettate alle date del Piano dei SAL. Ore reali 1.872 contro 1.792 di issue stimate; con le issue aggiunte (24 della spike e 14 della variazione) le ore stimate sono 1.830. Prestiti di ore ai ticket: 24 ore.

## 2-6 agosto, collaudo

- **Product lead 1, `collaudo-e-rilascio`, `prova-su-staging`.** Checklist del collaudo (task in ClickUp con un sottotask per percorso): P1 percorso completo con ordine nel gestionale; P2 lo stesso senza rete; P3 sconto oltre il 10%; P4 permessi (responsabile e altro showroom); P5 SMS. Regressioni: ordini del sito e del pagamento (le API degli ordini sono state estese), codici sconto, ordini nel gestionale. Integrazioni: email e SMS, catalogo, gestionale. Prova finale del cliente il 6 agosto: accettata con difetto non bloccante su F6.1 (correzione entro il 3 settembre). Verbale di accettazione.

## 23 agosto-3 settembre, preparazione

- **Product lead 1, `piano-di-lancio`, `guida-alla-pubblicazione`, `collaudo-e-rilascio`.** Piano di lancio v1 (24 agosto), approvato da Franco il 25 agosto, che vale come piano di rilascio. Guida alla pubblicazione v1.0 (nasce qui). Scheda tecnica di rilascio (non una riga: è la prima pubblicazione). Promemoria interno. Elena consegna il foglio dei clienti il 31 agosto. L'informativa sulla privacy arriva il 1 settembre (dovuta il 27 agosto, tre giorni lavorativi di ritardo): Piano di lancio v2, tutte le date slittano di tre giorni lavorativi. Formazione il 2 e il 3 settembre.
  - P-21, Contraddizione: `collaudo-e-rilascio` dice che per un prodotto si prepara il "piano di rilascio" e in più il Piano di lancio; il Piano di prodotto aggiornato oggi dice che il Piano di lancio è il piano di rilascio, e toglie il "piano di rilascio" dal Produce. La skill `collaudo-e-rilascio` e la skill `piano-di-lancio` non sono state allineate. Si è prodotto il solo Piano di lancio.
  - P-22, Buco: nessun passo verifica, prima del lancio, le configurazioni esterne alla propria repository (dominio dell'indirizzo di posta, certificati, autorizzazioni di invio). Il promemoria interno chiede backup, monitoraggio e ritorno; le autorizzazioni del dominio sono state aggiunte di iniziativa nel "Da verificare" e non sono state verificate. Al lancio, proprio quel punto ha fallito.

## 9-17 settembre, pubblicazione e chiusura

- **Incaricato della pubblicazione (sistemista 1).** Il 9 settembre pubblica e attiva il gruppo di Milano. Il 10 settembre le proposte sono scartate da alcuni provider: l'applicazione resta sul gruppo ristretto, avviso al cliente. Il 13 mattina corregge il dominio (autorizzazioni di invio), verifica con tre provider, apre a tutti. Avviso di sistema in produzione. Garanzia da lunedì 13 settembre: 91 giorni (la durata pianificata è 26 settimane, 182 giorni; la metà è 91), fino al 13 dicembre 2027. Assistenza rafforzata fino al 27 settembre.
  - P-23, Manca: per la garanzia di un prodotto "durata pianificata della lavorazione" non è definita: tutta la lavorazione dal 12 ottobre 2026 (11 mesi) o il solo sviluppo dal Piano dei SAL (26 settimane)? Si è usato lo sviluppo. Con la lavorazione intera sarebbe stata circa 168 giorni.
  - P-24, Buco: la durata dell'assistenza rafforzata (decisione aperta del Piano di prodotto: 2 settimane proposte) e la risposta "entro un giorno lavorativo" non sono definite da nessun documento. Il test le ha usate come proposte.
- **Product lead 1, `allineamento-documenti`, `manuale-del-prodotto`, `documento-tecnico`, `guida-alla-pubblicazione`, `report-di-progetto`, `storico-lavorazione`, `registro-decisioni`.** Chiusura: Manuale v1.2, Documento tecnico v1.2, Guida v1.1 (con la regola del dominio mittente), Report di progetto. Altri lavori toccati: nessuno. Il prodotto passa a regime. La sezione sulla garanzia del Report dice che il periodo è in corso.

## 23-24 settembre, garanzia

- **Product lead 1, `pacchetto-di-garanzia`.** Garanzia valida (fino al 13 dicembre). Due voci. L'email senza lo sconto è un bug (story violata F4.4), copre sempre: issue di garanzia in ClickUp, tipo bug, etichetta `garanzia`, nome "110 - garanzia - email senza sconto", stima 4 ore, urgenza normale (i fatti non dicono quante email sono partite: non si sa), DoD base. Capacità: normale, capacità dei ticket; serve chi conosce la parte (sviluppatore 4): prestito di 4 ore proposto a chi gestisce il team, effetto sul progetto da cui è preso: non noto (la base non dice a quale lavoro sia assegnato lo sviluppatore 4 in settembre 2027). La stampa in PDF è fuori garanzia (più di 4 ore, una story nuova): ticket nuovo. Risposta a Elena e a Franco in `04-garanzia`.
  - P-25, Manca: lo scenario non dice a quale lavoro sia assegnato lo sviluppatore 4 a settembre 2027, quindi l'effetto del prestito non è calcolabile.
  - P-26, Buco: un bug che manda al cliente finale un prezzo sbagliato è serio ma non rientra nella definizione di "urgente" (sistema fermo, utenti che non possono lavorare, dati a rischio). `pacchetto-di-garanzia` non dice come decidere l'urgenza quando i fatti non bastano.

## Controlli finali

- Caratteri vietati e prima o seconda persona: ricerca eseguita sui file dell'esecuzione, nessun risultato (a parte le parole del cliente fra virgolette).
- Documenti non attesi prodotti: `sintesi-sessione-lumera-110-2026-12-02.md` (nome diverso dalla convenzione della skill), `promemoria-interno-lancio.md` (richiesto dalla skill, ma non nell'elenco dello scenario), `comunicazione-variazione-V1.md`, `sollecito-manuale-2027-01-07.md`, `avvisi-al-cliente.md`.
