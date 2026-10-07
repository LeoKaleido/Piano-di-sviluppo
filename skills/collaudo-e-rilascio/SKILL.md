---
name: collaudo-e-rilascio
description: Prepara il collaudo finale di un progetto sullo staging e il piano di rilascio, e guida la pubblicazione e la chiusura. Produce la checklist del collaudo, il piano di rilascio per il cliente e, se serve, la scheda interna dei passi tecnici. Usala quando l'ultima milestone sta per essere accettata, prima della pubblicazione in produzione.
---

# Collaudo e rilascio

## A cosa serve

L'accettazione delle singole milestone non basta: prima della produzione si prova l'insieme, sullo staging, e il cliente lo accetta. Poi si pubblica, con un piano concordato che dice quando, in che ordine, come si torna indietro se qualcosa fallisce e chi va avvisato.

La skill prepara tre cose:

- **Checklist del collaudo finale**, in ClickUp (un task con un sottotask per percorso): cosa si prova, in che ordine, con quali dati.
- **Piano di rilascio**, per il cliente: quando si pubblica, cosa cambia per gli utenti, cosa succede se qualcosa fallisce, chi viene avvisato.
- **Scheda tecnica di rilascio**, interna: i passi tecnici di quel rilascio in ordine e il ritorno alla versione precedente, ricavati dalla Guida alla pubblicazione del sistema (skill `guida-alla-pubblicazione`).

La prova finale del cliente sullo staging si prepara con la skill `prova-su-staging`. Questa skill prepara ciò che le sta intorno.

Vale per i progetti e per i prodotti. Il rilascio di un ticket non ha un piano a parte. Per un prodotto, il rilascio è il lancio: si aggiunge il Piano di lancio (skill `piano-di-lancio`), che per un prodotto sta in `03-rilascio/02-preparazione` insieme al piano di rilascio.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Le fonti.** Manuale del prodotto, Documento tecnico (soprattutto il capitolo su infrastruttura e ambienti e quello sulle milestone), Guida alla pubblicazione, Stato di partenza, Registro delle variazioni, i Milestone report e i verbali delle prove precedenti.
3. **Lo stato dello staging.** Se contiene tutte le milestone, con quali dati.
4. **I difetti noti.** Quelli non bloccanti accettati nelle prove e non ancora corretti.
5. **Il calendario del cliente.** Giorni e ore in cui il sistema è meno usato, chiusure, eventi in cui non toccare nulla.
6. **Chi usa il sistema** e chi va avvisato.
7. **L'incaricato della pubblicazione**: la persona designata a seguire la pubblicazione. Se non è stata designata, chiedilo.

## Collaudo finale

Si prova l'insieme, non le singole story già accettate.

1. **Percorsi completi.** I percorsi dell'utente che attraversano più milestone, dall'inizio alla fine, ricavati dalle story del Manuale.
2. **Regressioni.** Le parti del sistema che esistevano già e che il progetto ha toccato, indicate dallo Stato di partenza e dal Documento tecnico. Per ognuna: cosa funzionava prima e va ancora provato.
3. **Integrazioni e dati.** Le integrazioni con i sistemi esterni e i dati reali, oppure una copia fedele. Cosa si scambia, cosa succede se il sistema esterno non risponde.
4. **Difetti noti.** Quelli non bloccanti già accettati, da dichiarare subito.

Per ogni prova: cosa si fa, cosa deve succedere, esito. Un esito è uno fra tre:

- **Superata.**
- **Difetto non bloccante.** Resta un difetto, si elenca con la data di correzione.
- **Difetto bloccante.** Va corretto prima della pubblicazione e la prova si ripete.

Se un comportamento rispetta il Manuale ma non piace al cliente non è un difetto: è una richiesta nuova, da trattare come variazione.

## Piano di rilascio per il cliente

Concordato con il cliente. Linguaggio non tecnico. Contiene:

- **Quando.** Data e ora, scelte per ridurre il disturbo a chi usa il sistema.
- **Cosa cambia per gli utenti.** Cosa vedranno e cosa dovranno fare, in poche righe.
- **Interruzioni.** Se il sistema sarà fermo o rallentato, per quanto.
- **Se qualcosa fallisce.** Che si tornerà alla versione precedente e cosa il cliente vedrà in quel caso, con una nuova data.
- **Chi viene avvisato, e quando.** Prima e dopo la pubblicazione.
- **A chi segnalare un problema** dopo la pubblicazione.

Niente tecnologie, nomi di server, ore di lavoro o prezzi.

## Scheda tecnica di rilascio

Interna. Se il rilascio non ha particolarità rispetto alla Guida alla pubblicazione, è una riga: si segue la Guida. Altrimenti contiene:

- l'**ordine dei passi**, uno per riga, con chi li esegue: la pubblicazione la segue l'incaricato della pubblicazione, che non è necessariamente il responsabile e non è un processo automatico (non avviene in CI);
- le **verifiche** da fare dopo ogni passo e al termine;
- il **ritorno alla versione precedente**: quando si decide di tornare indietro, chi lo decide, i passi, e cosa succede ai dati scritti nel frattempo;
- i **backup** da fare prima;
- i **contatti** da avvisare se qualcosa va storto.

Si ricava dalla Guida alla pubblicazione del sistema, che raccoglie le regole del server, i riavvii, le cache e le verifiche, e aggiunge le particolarità di questo rilascio (per esempio una migrazione dei dati). Se la Guida manca o non è aggiornata, prima si usa la skill `guida-alla-pubblicazione`. Se manca qualcosa, non inventarlo: va tra le domande per chi sviluppa.

## Quando si pubblica

Lo sprint finisce sempre di venerdì. La skill prepara in tempo il piano di rilascio e la scheda tecnica, che sono i documenti di aiuto al rilascio: l'incaricato della pubblicazione li legge il lunedì e pubblica. In condizioni normali si può rilasciare anche a metà sprint, purché i documenti siano pronti. Il venerdì sera non è un momento normale: si pubblica solo per un'urgenza, entro le 18. Il piano per il cliente propone date coerenti con queste regole.

## Pubblicazione e dopo

1. L'incaricato della pubblicazione pubblica secondo la scheda tecnica e fa le verifiche. La pubblicazione non avviene in CI: la segue una persona.
2. Si invia al cliente l'avviso di sistema in produzione e si annota nello storico cosa è stato fatto e cosa è emerso.
3. Decorre la garanzia: il 50% della durata pianificata del lavoro, con minimo 15 giorni di calendario. I bug segnalati in questo periodo sono un pacchetto di garanzia.
4. Si ricorda al responsabile la chiusura del progetto: Manuale del prodotto, Documento tecnico e Guida alla pubblicazione vanno aggiornati con ciò che è stato realmente fatto e con ciò che è emerso durante la pubblicazione (un passo mancante, un riavvio, una cache), con le skill `allineamento-documenti` e `guida-alla-pubblicazione`. Si scrive anche il Report di progetto (skill `report-di-progetto`). Un progetto è chiuso solo dopo l'aggiornamento dei documenti e il Report.

## Dove si salva

La checklist del collaudo è in ClickUp. Il piano di rilascio e, se serve, la scheda tecnica in `03-rilascio/02-preparazione`.

## Regole di contenuto

- **Il collaudo dice cosa provare, non lo prova.** La skill non esegue prove né pubblica.
- **Il cliente accetta in modo esplicito.** Il silenzio non vale come accettazione di una prova.
- **Nulla di inventato.** Date, ambienti e procedure vengono dalle fonti o dalle risposte del responsabile.
- **Cliente e interno separati.** Il piano per il cliente non contiene nulla di tecnico; la scheda tecnica non va al cliente.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

Nella scheda tecnica i nomi di tecnologie, server e file si scrivono come sono.

## Formato

Markdown. Piano di rilascio, testo da inviare al cliente: `piano-rilascio-<cliente>-<sistema>.md`. Scheda tecnica, interna: `scheda-rilascio-<cliente>-<sistema>.md`, solo se il rilascio ha particolarità rispetto alla Guida (altrimenti una riga: si segue la Guida).

## Controllo finale

1. Ogni story del Manuale compare in almeno un percorso del collaudo, oppure è dichiarata già provata nelle prove di milestone.
2. Ogni parte toccata del sistema esistente ha la sua prova di regressione.
3. Il ritorno alla versione precedente è descritto, con chi lo decide.
4. Il piano per il cliente non contiene tecnologie, ore o nomi interni.
5. I difetti noti sono elencati.
6. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
