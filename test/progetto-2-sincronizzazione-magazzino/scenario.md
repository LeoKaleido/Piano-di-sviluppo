# Scenario: progetto 2, sincronizzazione con il magazzino

Codice della lavorazione: 109. Base: `../base-comune.md`. Categoria attesa: progetto. Piano: Piano di progetto, con Ciclo di sviluppo.

Il test parte lunedì 12 ottobre 2026. Questo scenario esercita ciò che il progetto 1 tocca poco: integrazione con un sistema esterno, lavoro in conflitto con un altro progetto, riprogrammazione e rilascio che fallisce.

## Ruoli in scena

Franco (referente), Marta (utilizzatrice), Leonardo (chi analizza), chi gestisce il team, CEO, project manager 2, project manager 1 (per il conflitto con il comparatore), supervisore, team lead, sviluppatori 2 e 3, fornitore del magazzino, incaricato della pubblicazione.

## Richiesta

Aperta da Franco su osTicket il 12 ottobre.

"Oggi la disponibilità dei prodotti la aggiorna Marta a mano, e spesso il sito dice disponibile cose che sono finite. Vogliamo che il sito legga la disponibilità direttamente dal programma del magazzino, ogni pochi minuti. Meglio se anche i prezzi di listino arrivano da lì. Prima di Natale."

## Fatti aggiuntivi sul codice e sul cliente

- Il magazzino usa un software di un fornitore esterno con API REST documentate in un PDF di 40 pagine. Le credenziali di prova arrivano dal fornitore su richiesta del cliente, in tempi non noti.
- Il modulo `disponibilita` oggi legge solo valori inseriti a mano. È usato da scheda prodotto, carrello e comparatore. Il ramo del comparatore lo sta modificando e va in produzione con il SAL3, il 27 novembre.
- Il modulo `prezzi` ha un solo listino ed è usato anche dal pagamento, ancora in garanzia fino al 26 ottobre.
- Non esiste un servizio che esegue operazioni a intervalli regolari: va aggiunto, con nuove regole sul server. La Guida alla pubblicazione non ne parla.
- I codici prodotto del sito e quelli del magazzino non coincidono per circa 120 prodotti su 1.900.
- Il magazzino ammette 60 chiamate al minuto.

## Cosa deve emergere, fase per fase

**Valutazione e stima**

- Categoria: progetto (integrazione, più persone, serve una proposta).
- La verifica preliminare trova il conflitto con il comparatore sul modulo `disponibilita`: si decide quale lavoro passa prima e cosa cambia nell'altro. La decisione va in `decisioni.md`.
- I prezzi di listino sono una richiesta diversa ("meglio se"): si decide se entrano o restano fuori e lo si dice nella Proposta tra ciò che non si potrà fare o come suggerimento opzionale.
- La mancanza di credenziali di prova è un'incognita: diventa una issue di tipo spike nella prima milestone, e la stima si dichiara provvisoria dove dipende da lì.
- La scadenza "prima di Natale" è confrontata con la durata e con la chiusura aziendale dal 24 dicembre.

**Proposta e documentazione**

- La Proposta propone una divisione in più lavori se la richiesta è troppo grande (disponibilità prima, prezzi dopo), con il primo che ha valore da solo.
- Il Manuale descrive il comportamento visto dall'utente: cosa vede il cliente finale se il magazzino non risponde. Il Documento tecnico descrive il servizio periodico, la mappatura dei codici, il limite di chiamate, la gestione dell'errore.
- I codici diversi sono una domanda al cliente (chi li riconcilia) e un materiale atteso.
- Il Manuale conferma o corregge F3 sul carrello. Il comportamento "disponibile subito, ordinabile, esaurito" è in F2.

**Sviluppo**

- La prima milestone contiene lo spike sul magazzino e le parti rischiose.
- Il margine della milestone si calcola a ogni chiusura di sprint, con le stime rivalutate.
- Un evento porta la milestone a rischio, poi in ritardo: la skill `riprogrammazione` presenta le tre leve con i numeri e non decide. La comunicazione al cliente parte solo se una data già comunicata cambia.

**Rilascio**

- La Guida alla pubblicazione si aggiorna con il servizio periodico, le variabili, i riavvii, la verifica che i dati arrivino.
- Il primo tentativo di pubblicazione fallisce: ritorno alla versione precedente, nuova data, avviso immediato al cliente, annotazione nello storico e nella Guida.
- Il collaudo include il caso del magazzino che non risponde e quello dei codici non mappati.

## Eventi da introdurre, nell'ordine

1. 19 ottobre: Franco conferma a voce la divisione in due lavori. Vale dopo il riepilogo scritto.
2. Le credenziali di prova del magazzino arrivano il 17 novembre, tre settimane dopo la data attesa.
3. Il 24 novembre il fornitore comunica che il limite scende a 30 chiamate al minuto. La story sulla frequenza dell'aggiornamento cambia: è una variazione, o un'ambiguità del Manuale, e si decide quale.
4. Il 2 dicembre lo sviluppatore 3 viene preso in prestito per un ticket urgente per tre giorni.
5. La milestone con l'integrazione va in ritardo. Franco rifiuta di spostare la data e si decide con chi gestisce il team e il CEO se aggiungere ore.
6. Il 14 dicembre il primo rilascio fallisce: il servizio periodico non parte su produzione per una variabile mancante.
7. Il 18 dicembre la prova finale di Franco è accettata con un difetto non bloccante.
8. Dopo il rilascio Marta segnala, entro la garanzia, che 30 prodotti risultano esauriti pur essendo in magazzino (bug da mappatura).

## Cosa non deve succedere

- Una data promessa a Franco prima delle credenziali di prova senza dichiarare l'incognita.
- Una modifica al modulo `disponibilita` senza il confronto con il comparatore.
- La riprogrammazione che sceglie una leva al posto di chi decide.
- Il rilascio fallito che non lascia traccia nella Guida o nello storico.
- Più di una Nota di sprint per sprint, o documenti di sprint che non siano la nota.

## Documenti attesi in `esecuzione-N/109/`

Come nel progetto 1, con in più:

- `02-sviluppo`: comunicazione di riprogrammazione (evento 5), voci nel Registro delle variazioni (evento 3).
- `03-rilascio/03-pubblicazione`: avviso del ritorno alla versione precedente e dell'avviso a pubblicazione riuscita.
- `04-garanzia`: risposta al cliente sulla segnalazione di Marta.
- `sistema/`: Guida alla pubblicazione v1.1 con le regole del servizio periodico.
