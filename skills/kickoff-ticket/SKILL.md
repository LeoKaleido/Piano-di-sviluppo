---
name: kickoff-ticket
description: Esegue la fase iniziale di una richiesta che sembra un ticket: confronto con i lavori aperti, controllo del codice e decisioni (categoria, esito, stima in ore, tipo, urgenza, responsabile). Versione snella del kickoff, senza Stato di partenza. Usala all'apertura di ogni richiesta su un sistema esistente, prima della Scheda di intervento.
---

# Kickoff del ticket

## A cosa serve

Una richiesta non va stimata da sola. Prima di classificarla bisogna sapere se quel lavoro esiste già altrove, se va davvero fatto e di che categoria è. Questa skill è la versione snella del kickoff per i ticket: due controlli, poche decisioni, una nota nel ticket. Se la richiesta si rivela un progetto o un prodotto, si ferma e si passa alla skill `kickoff`.

La skill propone. Le decisioni restano a chi analizza la richiesta.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **La richiesta.** Il testo del ticket, allegati compresi, oppure dove si trova. Leggila per intero.
2. **Cliente e sistema.**
3. **La scadenza del cliente**, se l'ha indicata su osTicket (di rado: ferie, Black Friday, un'emergenza).
4. **Dove sono i lavori aperti e i documenti.** Nella knowledge base del prodotto: i documenti del sistema nella loro cartella, quelli di ogni lavoro nella cartella che ha per nome il codice della lavorazione. Servono i Documenti tecnici dei progetti in corso, le Schede di intervento dei ticket aperti, il Registro delle variazioni, i verbali delle ultime prove. Cerca tu, se hai accesso, altrimenti chiedi che vengano forniti.
5. **Dove si trova il codice.** Il repository del sistema (può essercene più d'uno), e se puoi accedervi.

Se la richiesta è urgente (sistema fermo, utenti che non possono lavorare, dati a rischio), non ritardare l'intervento: si interviene subito e questa skill si usa in parallelo o dopo. Dillo e fermati.

## Tempo

Il tempo massimo è il 10% di una stima a occhio della dimensione della richiesta, fatta prima di guardare il codice. Non è l'indagine di un progetto: deve rispondere a due domande, non descrivere il sistema. Se allo scadere una domanda resta aperta, dichiaralo e indica cosa servirebbe per chiuderla. Una stima fatta senza aver guardato il codice è provvisoria.

## Cartella della lavorazione

Quando si crea la cartella del ticket si creano anche due file vuoti: `storico.md` e `decisioni.md`. Si popolano a mano con le skill `storico-lavorazione` e `registro-decisioni`, quando succede qualcosa che conta.

## Parte A: confronto con i lavori aperti

Cerca la richiesta in ciò che è già in corso sullo stesso sistema: progetti (Manuale e Documento tecnico), ticket aperti (Schede di intervento), variazioni (Registro), consegne recenti ancora in garanzia. Leggi i documenti per intero: una ricerca per parole chiave non basta. Cita ogni lavoro per codice della lavorazione.

Esiti:

- **Già compresa in un progetto.** Una story la copre: al cliente si risponde con la story e la data del SAL.
- **Compresa, ma serve prima.** Una variazione media sul progetto.
- **Compresa in parte.** Solo la parte che resta fuori può diventare un ticket.
- **In conflitto con un progetto.** Opzioni: rinviarla, assorbirla come variazione, farla comunque perché urgente.
- **Doppione di un ticket aperto.** Si unisce a quello.
- **Già decisa.** Una variazione identica rifiutata o in attesa: si rimanda a quella.
- **Difetto di una consegna recente.** Pacchetto di garanzia, non lavoro nuovo: si usa la skill `pacchetto-di-garanzia`.
- **Nessuna sovrapposizione.**

## Parte B: controllo del codice

Guarda il codice della parte coinvolta, in sola lettura: niente correzioni, niente commit, nemmeno se sembrano banali. Se non hai accesso, la fa chi conosce il sistema: prepara le domande precise e riporta le risposte come "Riferito".

Cosa cercare: il comportamento attuale; se il sistema lo fa già; per un bug se si riproduce e dove nasce; quanto è esteso l'intervento (repository, file, chi altro usa quel codice); gli sviluppi non rilasciati sulla stessa parte; lo stato del codice.

Esiti:

- **Il sistema lo fa già.** Risposta di assistenza, con le istruzioni.
- **Basta una configurazione.**
- **Bug confermato**, con il punto del codice.
- **Bug non riprodotto.** Domande puntuali al cliente.
- **Causa fuori dal codice.** L'intervento è diverso da quello chiesto.
- **Intervento come appare** oppure **più esteso di come appare.** Se supera le 2 settimane o serve più di una persona, è un progetto.
- **Sovrapposizione con uno sviluppo in corso.**

## Grado di certezza

Ogni affermazione è verificata (visto nel codice o in un documento approvato), riferita (raccontata, non controllata) o supposta (dedotta). Non presentare come verificato ciò che non lo è. Una parte non eseguita va dichiarata.

## Decisioni

Se il lavoro è già compreso altrove, è un doppione o il sistema lo fa già, l'esito è "non da fare": riporta l'esito e il testo della risposta al cliente, senza altro.

1. **Quante richieste contiene.** Più richieste indipendenti si dividono: un codice per ognuna.
2. **Categoria.** Ticket se il sistema esiste e nessuna di queste condizioni vale: la stima supera le 2 settimane; serve più di una persona; serve una proposta perché il cliente deve decidere come funzionerà; cambia l'aspetto grafico. Se una vale è un progetto (skill `kickoff`); se il sistema non esiste è un prodotto.
3. **Esito complessivo.** Da fare; non da fare (con il motivo); da fare in parte (con la parte che resta fuori); da rimandare (con l'evento che la riapre e chi la riesamina).
4. **Stima in ore.** Parte da ciò che si è visto nel codice. Indica quanto è affidabile. Il supervisore ne controlla la plausibilità alla pianificazione.
5. **Tipo.** Bug, feature, entrambi, assistenza.
6. **Urgenza.** Urgente (sistema fermo, utenti che non possono lavorare, dati a rischio), normale, a tempo perso. Si assegna sui fatti, non sul tono. Se i fatti non bastano, proponi il livello più alto e la domanda che scioglie il dubbio.
7. **Responsabile.** Lo sviluppatore: per un urgente chi conosce meglio la parte coinvolta, per gli altri una delle persone sempre disponibili per i ticket o, se serve, un prestito di ore da un progetto deciso da chi gestisce il team.
8. **Scadenza del cliente**, se indicata: fattibile, non fattibile, da verificare. Non cambia l'urgenza.
9. **Parti toccate e documenti collegati**, con repository e codice della lavorazione di ogni lavoro. Alimenta la Scheda di intervento e l'aggiornamento dei documenti.
10. **Domande per il cliente.** Numerate, puntuali, a risposta breve. Niente soluzioni.

## Cosa restituisci

Le **decisioni dell'analisi**, che per un ticket da fare entrano in testa alla Scheda di intervento (skill `scheda-di-intervento`): non c'è una Scheda di valutazione a parte e non c'è Stato di partenza. Voci: richiesta in una frase; esito della parte A e della parte B con riferimenti precisi; categoria con il criterio; esito complessivo; stima in ore con affidabilità; tipo; urgenza; responsabile; scadenza; parti toccate e documenti collegati; dubbi; cosa non è stato verificato; domande per il cliente; prossimo passo (Scheda di intervento, percorso d'urgenza, risposta al cliente, variazione, unione con un altro ticket, riclassificazione).

Quando non si apre lavoro aggiungi il testo della risposta al cliente: cosa è stato trovato e dove, quando lo riceverà. Niente tecnologie, nomi di file o ore.

## Dove si salva

Le decisioni in testa alla Scheda di intervento, in `01-analisi` del ticket e come nota nel ticket su osTicket. Se il lavoro non va aperto, la risposta al cliente nel ticket.

## Regole

- **Sola lettura.** Né il codice né i documenti degli altri lavori vengono modificati.
- **Riferimenti precisi.** Serve il codice della story o il file, non "è già previsto".
- **Nessuna soluzione.** Come intervenire lo dirà la Scheda di intervento.
- **Proponi, non decidere.** Davanti a un conflitto presenta le opzioni con le conseguenze.
- **Non inventare.** Ciò che manca va tra i dubbi o le domande.
- **Segnala il confine.** Se la richiesta è vicina alla soglia tra ticket e progetto, dillo.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Controllo finale

1. Entrambe le parti hanno un esito, oppure è dichiarato perché una non è stata eseguita.
2. Ogni esito ha un riferimento preciso e un grado di certezza.
3. La stima è in ore, con la sua affidabilità.
4. Nessuna soluzione è stata proposta e nulla è stato modificato.
5. Le domande per il cliente sono numerate e a risposta breve; la risposta al cliente, se presente, non contiene tecnologie, file o ore.
6. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
