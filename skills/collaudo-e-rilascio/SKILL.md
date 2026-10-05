---
name: collaudo-e-rilascio
description: Prepara il collaudo finale di un progetto sullo staging e il piano di rilascio, e guida la pubblicazione e la chiusura. Produce la scaletta del collaudo, il piano di rilascio per il cliente e la scheda interna dei passi tecnici. Usala quando l'ultima milestone sta per essere accettata, prima della pubblicazione in produzione.
---

# Collaudo e rilascio

## A cosa serve

L'accettazione delle singole milestone non basta: prima della produzione si prova l'insieme, sullo staging, e il cliente lo accetta. Poi si pubblica, con un piano concordato che dice quando, in che ordine, come si torna indietro se qualcosa fallisce e chi va avvisato.

La skill prepara tre cose:

- **Scaletta del collaudo finale**: cosa si prova, in che ordine, con quali dati.
- **Piano di rilascio**, per il cliente: quando si pubblica, cosa cambia per gli utenti, cosa succede se qualcosa fallisce, chi viene avvisato.
- **Scheda tecnica di rilascio**, interna: i passi tecnici in ordine e il ritorno alla versione precedente.

La demo finale con il cliente si prepara con la skill `demo`. Questa skill prepara ciò che le sta intorno.

Vale per i progetti. Il rilascio di un ticket non ha un piano a parte, e quello di un prodotto ha anche il Piano di lancio.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Le fonti.** Manuale del prodotto, Documento tecnico (soprattutto il capitolo su infrastruttura e ambienti e quello su milestone e issue), Stato di partenza, Registro delle variazioni, i Milestone report e i verbali delle demo precedenti.
3. **Lo stato dello staging.** Se contiene tutte le milestone, con quali dati.
4. **I difetti noti.** Quelli non bloccanti accettati nelle demo e non ancora corretti.
5. **Il calendario del cliente.** Giorni e ore in cui il sistema è meno usato, chiusure, eventi in cui non toccare nulla.
6. **Chi usa il sistema** e chi va avvisato.

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

Interna. Contiene:

- l'**ordine dei passi**, uno per riga, con chi li esegue;
- le **verifiche** da fare dopo ogni passo e al termine;
- il **ritorno alla versione precedente**: quando si decide di tornare indietro, chi lo decide, i passi, e cosa succede ai dati scritti nel frattempo;
- i **backup** da fare prima;
- i **contatti** da avvisare se qualcosa va storto.

Si ricava dal capitolo del Documento tecnico su infrastruttura e ambienti. Se manca qualcosa, non inventarlo: va tra le domande per chi sviluppa.

## Pubblicazione e dopo

1. Si pubblica secondo la scheda tecnica, e si fanno le verifiche.
2. Si invia al cliente l'avviso di sistema in produzione.
3. Decorre la garanzia: il 50% della durata pianificata del lavoro, con minimo 15 giorni di calendario. I bug segnalati in questo periodo sono un pacchetto di garanzia.
4. Si ricorda al responsabile la chiusura del progetto: Manuale del prodotto e Documento tecnico vanno aggiornati con ciò che è stato realmente fatto, con la skill `allineamento-documenti`. Un progetto è chiuso solo dopo questo aggiornamento.

## Regole di contenuto

- **Il collaudo dice cosa provare, non lo prova.** La skill non esegue prove né pubblica.
- **Il cliente accetta in modo esplicito.** Il silenzio non vale come accettazione di una demo.
- **Nulla di inventato.** Date, ambienti e procedure vengono dalle fonti o dalle risposte del responsabile.
- **Cliente e interno separati.** Il piano per il cliente non contiene nulla di tecnico; la scheda tecnica non va al cliente.

## Regole di scrittura

{{SCRITTURA}}

Nella scheda tecnica i nomi di tecnologie, server e file si scrivono come sono.

## Formato

Markdown. Scaletta del collaudo e scheda tecnica interne, piano di rilascio testo da inviare al cliente: `collaudo-<cliente>-<sistema>.md`, `scheda-rilascio-<cliente>-<sistema>.md`, `piano-rilascio-<cliente>-<sistema>.md`.

## Controllo finale

1. Ogni story del Manuale compare in almeno un percorso del collaudo, oppure è dichiarata già provata nelle demo di milestone.
2. Ogni parte toccata del sistema esistente ha la sua prova di regressione.
3. Il ritorno alla versione precedente è descritto, con chi lo decide.
4. Il piano per il cliente non contiene tecnologie, ore o nomi interni.
5. I difetti noti sono elencati.
6. {{CONTROLLO}}
