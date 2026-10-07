---
name: kickoff
description: Esegue la fase iniziale di un progetto o di un prodotto: confronto con i lavori aperti, controllo del codice, valutazione (categoria, stima di durata, responsabile), Stato di partenza con la fattibilità di ogni punto, tempo del kickoff. Per i ticket esiste la skill kickoff-ticket. Sostituisce verifica preliminare, valutazione della richiesta e stato di partenza. Usala all'apertura di ogni richiesta che non sia un ticket, prima di qualunque altro documento.
---

# Kickoff

## A cosa serve

Ogni richiesta entra da osTicket e prima di tutto va capita. Il kickoff è la fase iniziale di un progetto o di un prodotto: dice se il lavoro va aperto, quanto durerà e cosa tocca. Per i ticket c'è una skill snella a parte, `kickoff-ticket`. La categoria la decide sempre l'azienda, mai il cliente. La skill propone, la decisione resta a chi esegue la fase.

Prima di promettere qualcosa servono tre cose:

- **se il lavoro esiste già altrove**: dentro un progetto in corso, in un altro ticket, in una variazione registrata, in una consegna ancora in garanzia;
- **se va davvero fatto**: il codice può mostrare che il sistema lo fa già, che basta una configurazione, o che l'intervento è più grande di come appare;
- **che cosa è**: progetto o prodotto (o ticket: allora si usa `kickoff-ticket`), con stima e responsabile.

Senza questa fase capita di stimare un lavoro già compreso in un progetto, di correggere una parte che un progetto sta per rifare, o di trattare un progetto come ticket, che parte senza proposta né conferma.

## Chi la esegue

Il responsabile, designato appena la richiesta si profila come lavoro: project manager per un progetto, product lead per un prodotto. Il kickoff comprende anche il confronto con il cliente: incontro, domande, nome del referente.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **La richiesta.** Il testo del ticket, allegati compresi, oppure dove si trova. Leggila per intero.
2. **Cliente e sistema.** Il nome con cui indicare il cliente e il sistema coinvolto, se esiste.
3. **La scadenza del cliente**, se l'ha indicata su osTicket (di rado: ferie, Black Friday, un'emergenza).
4. **Dove sono i lavori aperti e i documenti.** Si trovano nella knowledge base del prodotto: i documenti del sistema nella loro cartella, quelli di ogni lavoro nella cartella che ha per nome il codice della lavorazione. Servono i Documenti tecnici con il capitolo Milestone dei progetti in corso, le Schede di intervento dei ticket aperti, il Registro delle variazioni, i verbali delle ultime prove. Cerca tu, se hai accesso, altrimenti chiedi che vengano forniti.
5. **Dove si trova il codice.** Il repository del sistema (il sistema può averne più di uno), e se puoi accedervi.
6. **Le conversazioni**, per progetti e prodotti: trascrizioni e sintesi dell'incontro con il cliente, prodotte con la skill `interpretazione-conversazioni`.

## Tempo

All'inizio il responsabile fa una stima a occhio della durata, in una decina di minuti, solo interna. Il tempo del kickoff è il 10% di quella stima ed è fissato subito. Dentro quel tempo si fanno la valutazione, la stima precisa e la prima versione della Proposta. I giri di revisione successivi, il Manuale e il Documento tecnico non rientrano, e il tempo non limita l'attesa del cliente. Allo scadere la prima versione si invia comunque: ciò che non si è riusciti a controllare va dichiarato, e ogni incognita rimasta diventa una issue di tipo Spike nella prima milestone. Una stima fatta senza aver guardato il codice è provvisoria.

## Cartella della lavorazione

All'inizio, quando si crea la cartella della lavorazione, si creano anche due file vuoti: `storico.md` e `decisioni.md`. Si popolano a mano con le skill `storico-lavorazione` e `registro-decisioni`. Per stimare la durata, i tempi dei progetti già fatti si leggono nei loro Report di progetto.

## Parte A: confronto con i lavori aperti

Cerca la richiesta in ciò che è già in corso sullo stesso sistema.

- **Progetti in corso.** Nel Manuale del prodotto e nel Documento tecnico: esiste una story o una issue (in ClickUp) che copre la richiesta, in tutto o in parte? Il progetto prevede di modificare la stessa parte?
- **Ticket aperti.** Nelle Schede di intervento: qualcuno ha già chiesto la stessa cosa, o un intervento sulla stessa parte?
- **Variazioni.** Nel Registro delle variazioni: la richiesta è già stata registrata, approvata o rifiutata?
- **Consegne recenti.** Nei verbali di accettazione e nelle schede chiuse: la parte coinvolta è stata consegnata da poco ed è ancora in garanzia?

Leggi i documenti per intero. Una ricerca per parole chiave non basta: il cliente chiama le cose in modo diverso dai documenti. Cita ogni lavoro per codice della lavorazione.

Esiti della parte A:

- **Già compresa in un progetto.** Una story la copre. Non si apre lavoro: al cliente si risponde con la story e la data del SAL in cui arriverà.
- **Compresa, ma serve prima.** Il cliente la vuole in anticipo: una variazione media sul progetto.
- **Compresa in parte.** Va detto quale parte resta fuori: solo quella può diventare lavoro.
- **In conflitto con un progetto.** Il progetto sta per rifare quella parte, oppure la richiesta cambia qualcosa su cui il progetto si appoggia. Le opzioni sono tre: rinviarla, assorbirla nel progetto come variazione, farla comunque perché urgente.
- **Doppione di un ticket aperto.** Si unisce a quello.
- **Già decisa.** Una variazione identica è stata rifiutata o è in attesa del cliente: si rimanda a quella.
- **Difetto di una consegna recente.** Non è lavoro nuovo: è un pacchetto di garanzia (skill `pacchetto-di-garanzia`), o un difetto della milestone.
- **Nessuna sovrapposizione.**

## Parte B: controllo del codice

Guarda il codice della parte coinvolta, in sola lettura. Il kickoff non modifica nulla: niente correzioni, niente commit, nemmeno se la correzione sembra banale. Per un prodotto, che non ha ancora un codice, la parte B non c'è: si analizza il contesto (vedi Stato di partenza) e si confronta con i sistemi che il cliente ha già.

Se hai accesso al repository, cercala tu. Se non ce l'hai, questa parte la fa chi conosce il sistema o uno sviluppatore: prepara per lui le domande precise a cui deve rispondere, e riporta le risposte come "Riferito".

Cosa cercare:

- **Il comportamento attuale.** Cosa fa davvero il sistema in quel punto, confrontato con ciò che descrive il cliente e con ciò che dicono i documenti.
- **Se il sistema lo fa già.** La funzione chiesta può esistere ed essere sconosciuta al cliente, nascosta da un permesso, o disattivata da una configurazione.
- **Per un bug: se si riproduce e dove nasce.** La causa può essere nel codice, nei dati, in una configurazione o in un sistema esterno.
- **Quanto è esteso l'intervento.** Quali repository, file e parti tocca, e chi altro usa quel codice: altre schermate, altre funzioni, integrazioni, dati condivisi.
- **Sviluppi non rilasciati.** Rami o modifiche in corso che toccano la stessa parte.
- **Lo stato del codice.** Test presenti o assenti, parti fragili, debito tecnico: incidono sulla stima.
- **I comportamenti non documentati**, che il cliente dà per scontato restino.

Esiti della parte B:

- **Il sistema lo fa già.** Non serve sviluppo: è una risposta di assistenza, con le istruzioni per il cliente.
- **Basta una configurazione.** L'intervento non cambia il codice.
- **Bug confermato.** Si riproduce e la causa è individuata, con il punto del codice.
- **Bug non riprodotto.** Servono altre informazioni dal cliente, in domande puntuali.
- **La causa è fuori dal codice.** Dati, configurazione o sistema esterno: l'intervento è diverso da quello chiesto.
- **Intervento come appare.**
- **Intervento più esteso di come appare.** Tocca più parti o codice usato altrove: stima e categoria possono cambiare.
- **Sovrapposizione con uno sviluppo in corso.**

## Grado di certezza

Ogni affermazione sul sistema o sul cliente porta il suo grado di certezza:

- **Verificato**: visto nel codice, nel sistema in uso o in un documento approvato.
- **Riferito**: raccontato da qualcuno, non controllato.
- **Supposto**: dedotto, da confermare.

Non presentare come verificato ciò che non lo è. Una parte non eseguita va dichiarata: "Parte B non eseguita: codice non accessibile". Una proposta non si scrive su affermazioni supposte: se il codice non è stato guardato, la fattibilità è provvisoria.

## Valutazione

Dai due esiti ricava le decisioni. Se il lavoro è già compreso altrove, è un doppione o il sistema lo fa già, l'esito è "non da fare" e non c'è nulla da classificare: riporta l'esito e il testo della risposta al cliente.

1. **Categoria.** In quest'ordine:
   - **Prodotto**: il sistema non esiste ancora.
   - **Progetto**: il sistema esiste e vale almeno una condizione: la stima supera le 2 settimane; serve più di una persona; serve una proposta perché il cliente deve decidere come funzionerà; cambia l'aspetto grafico, quindi serve un mockup.
   - **Ticket**: il sistema esiste e nessuna condizione vale. Se il kickoff scopre che è un ticket, si passa alla skill `kickoff-ticket`.
2. **Stima.** All'inizio una stima a occhio, interna, solo per fissare il tempo del kickoff. Poi la stima precisa: per un progetto la durata complessiva in giorni lavorativi, con la squadra ipotizzata; per un prodotto lo stesso, per release. Si ricava dalla richiesta, analizzando la codebase, insieme ai tempi dei progetti già fatti letti nei loro Report di progetto. Parte da ciò che si è visto nel codice, non da come appare la richiesta. Dichiara quanto è affidabile e quali fattori l'hanno determinata. Se non hai elementi, dillo e indica chi può farlo. La stima compare nella Proposta.
3. **Tempo del kickoff.** Il 10% della stima a occhio, fissato all'inizio. Dillo a chi esegue la fase subito.
4. **Responsabile.** Il project manager per un progetto, il product lead per un prodotto, designati con chi gestisce il team e, se serve, con il CEO. Proponi il criterio, non il nome, se non conosci la disponibilità.
5. **Interfaccia.** Se cambia l'aspetto grafico non è un ticket.
6. **Scadenza del cliente**, se indicata: fattibile, non fattibile, da verificare. Se non è fattibile si dice subito al cliente, con ciò che si può fare.
7. **Parti del sistema toccate e documenti collegati.** Con repository e codice della lavorazione di ogni lavoro. Alimenta l'aggiornamento dei documenti a fine lavoro.
8. **Domande per il cliente.** Numerate, puntuali, a risposta breve. Niente soluzioni né alternative: si raccolgono informazioni.

## Documenti che produce

**Decisioni dell'analisi (in testa allo Stato di partenza).** Nota breve, da riportare anche nel ticket su osTicket. Voci:

- richiesta in una frase, con parole del cliente;
- esito della parte A e della parte B, con riferimenti precisi (lavoro, documento, codice della story, file e punti del codice);
- categoria proposta con il criterio, esito, stima a occhio e stima precisa con affidabilità e fattori, responsabile, interfaccia, scadenza;
- parti toccate e documenti collegati;
- dubbi: cosa potrebbe far cambiare la classificazione e quale informazione lo deciderebbe;
- cosa non è stato verificato e cosa servirebbe;
- domande per il cliente;
- prossimo passo: la Proposta di soluzione; per un non da fare la risposta al cliente; per un ticket la skill `kickoff-ticket`.

Quando non si apre lavoro, o la richiesta è già compresa in un progetto, aggiungi il testo della risposta al cliente: cosa è stato trovato, dove e quando lo riceverà. Niente tecnologie, nomi di file o ore.

**Stato di partenza.** Documento interno che fotografa la situazione prima del lavoro, così la Proposta poggia su fatti. Ha due forme.

Forma progetto (indagine sull'esistente):

1. Parte del sistema coinvolta, in una frase.
2. Come funziona oggi, visto da chi lo usa, per tipo di utente.
3. Cosa verrà toccato: schermate, dati, integrazioni, dipendenze, e per il codice dove si trova, chi altro lo usa, in che stato è.
4. Comportamenti non documentati.
5. Vincoli: cosa non si può fare o costa molto, con il motivo.
6. Fattibilità, per ogni punto della richiesta: fattibile, fattibile con un compromesso, non fattibile, con il motivo.
7. Incognite: per ognuna cosa non si sa, come si scopre, chi può farlo.
8. Lavori e documenti sullo stesso sistema, con le sovrapposizioni e le differenze tra documenti e codice. Ogni differenza diventa una domanda al cliente.
9. Fonti consultate.

Forma prodotto (analisi del contesto): come lavora oggi il cliente; chi userà il prodotto e cosa fa ciascuno; sistemi con cui dialogare (cosa scambiano, documentazione, accesso); vincoli (scadenze, obblighi di legge, identità grafica, limiti tecnici); fattibilità; incognite; fonti.

Lo Stato di partenza è in Markdown, `stato-di-partenza-<cliente>-<sistema>.md`. Se le fonti non bastano a compilare una sezione, si produce comunque: la sezione riporta ciò che si sa e termina con "Cosa manca", con ciò che serve e chi può fornirlo.

## Dove si salva

Lo Stato di partenza, con le decisioni in testa, in `01-kickoff/01-valutazione`; la stima precisa in `01-kickoff/02-stima`.

## Regole

- **Sola lettura.** Né il codice né i documenti degli altri lavori vengono modificati.
- **Riferimenti precisi.** "È già previsto nel progetto" non basta: serve il codice della story e la data.
- **Nessuna soluzione.** Il kickoff dice cosa c'è e cosa manca. Come intervenire lo diranno la Scheda di intervento o la Proposta.
- **Proponi, non decidere.** Davanti a un conflitto o a due classificazioni possibili presenta le opzioni con le conseguenze di ciascuna.
- **Non inventare.** Ciò che manca va tra i dubbi o le incognite, non viene supposto.
- **Segnala il confine.** Se una richiesta è vicina alla soglia tra ticket e progetto, dillo: un ticket che cresce durante la lavorazione va fermato e convertito.
- **Linguaggio.** Lo Stato di partenza è interno: le tecnologie e i nomi di file si scrivono come sono. La risposta al cliente non li contiene.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Controllo finale

1. Entrambe le parti hanno un esito, oppure è dichiarato perché una non è stata eseguita.
2. Ogni esito ha un riferimento preciso e un grado di certezza.
3. Ogni classificazione è motivata da un criterio o da un fatto.
4. La stima è in durata complessiva, con la sua affidabilità e i fattori che l'hanno determinata.
5. Per progetti e prodotti ogni punto della richiesta ha un giudizio di fattibilità e ogni incognita indica come scioglierla e chi può farlo.
6. Nessuna soluzione è stata proposta e nulla è stato modificato, nel codice o nei documenti.
7. Le domande per il cliente sono numerate e a risposta breve. La risposta al cliente, se presente, non contiene tecnologie, nomi di file o ore.
8. Il prossimo passo corrisponde al piano della categoria proposta.
9. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
