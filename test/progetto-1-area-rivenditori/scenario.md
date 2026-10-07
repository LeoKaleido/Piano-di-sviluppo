# Scenario: progetto 1, area riservata per i rivenditori

Codice della lavorazione: 107. Base: `../base-comune.md`. Categoria attesa: progetto. Piano: Piano di progetto, con Ciclo di sviluppo.

Il test parte lunedì 5 ottobre 2026 e arriva fino alla chiusura e alla garanzia.

## Ruoli in scena

Franco (referente), Diego (cliente, non referente), Leonardo (chi analizza), chi gestisce il team, CEO, project manager 1, project manager 2, supervisore, chi conosce il sistema, team lead, sviluppatori 1, 2 e 3, grafica, incaricato della pubblicazione.

## Richiesta

Aperta da Franco su osTicket il 5 ottobre.

"Diego ha bisogno di un'area riservata per i rivenditori: devono entrare con le loro credenziali, vedere i loro prezzi e fare ordini grandi senza passare dal carrello normale. Sono una quarantina. Ci serve per la fiera di fine febbraio."

## Fatti aggiuntivi sul codice

- Il modulo `prezzi` conosce un solo listino. Aggiungere listini per rivenditore tocca scheda prodotto, carrello, pagamento e gestionale.
- Sul sito esiste un solo ruolo utente. Il gestionale ha ruoli multipli.
- L'anagrafica dei rivenditori nel gestionale ha quaranta righe inserite a mano, con partita IVA ed email, senza collegamento agli utenti del sito. Cinque righe sono doppie.
- Il carrello non ha test automatici. Il pagamento sì.
- Il pagamento accetta solo carta: per ordini grandi i rivenditori vogliono il bonifico. Il servizio esterno di pagamento supporta il pagamento differito, non attivato.
- La Guida alla pubblicazione v1.0 non dice nulla sulle migrazioni del database.

## Cosa deve emergere, fase per fase

**Ingresso e valutazione (`01-kickoff/01-valutazione`)**

- Chi analizza assegna l'urgenza (normale) e conferma la categoria: progetto, perché la stima supera le 2 settimane e serve una proposta. Si segnala che nessuna condizione è dubbia.
- Il responsabile è un project manager. Il project manager 1 è saturo: si designa il project manager 2, con chi gestisce il team.
- Il responsabile fa una stima a occhio di 10 minuti, solo interna: da quella nasce il tempo del kickoff.
- La verifica preliminare trova: nessun lavoro aperto che copra la richiesta; conflitto parziale con il pagamento ancora in garanzia (al 26 ottobre); il comparatore tocca il modulo `disponibilita` ma non i prezzi.
- Il codice conferma la mancanza di listini multipli, del ruolo rivenditore e del bonifico. I codici sconto dopo l'IVA vanno segnalati come comportamento non documentato.
- Lo Stato di partenza porta in testa le decisioni dell'analisi. Il Manuale non corrisponde al codice (30 giorni contro 90 sul carrello): finisce tra le differenze e diventa una domanda al cliente.
- Si crea la cartella con `storico.md` e `decisioni.md` vuoti.
- La scadenza del cliente (fiera del 22 febbraio) è riportata e giudicata fattibile o no.
- L'incontro con Franco è trascritto e interpretato. Diego non è il referente: le sue richieste non sono approvazioni.

**Stima (`01-kickoff/02-stima`)**

- La stima precisa è in giorni lavorativi, con affidabilità e fattori, e usa il Report di progetto di un lavoro passato se esiste (qui non esiste: va dichiarato).
- Va confrontata con la fiera: se la durata supera il tempo disponibile, va detto subito a Franco.

**Proposta (`01-kickoff/03-proposta`)**

- La prima versione sta dentro il tempo del kickoff (10% della stima a occhio) e in 5 pagine al massimo.
- Contiene la stima, i materiali attesi dal cliente (listini, anagrafica pulita) senza date, le domande aperte con codice D1 e successivi, nessuna tecnologia, nessun prezzo.
- Il 26 ottobre Franco risponde a metà delle domande: le altre restano aperte e bloccano la conferma, e il cliente riceve l'elenco di quelle ancora aperte.
- La conferma a voce vale dopo il riepilogo scritto.

**Documentazione (`01-kickoff/04-documentazione`)**

- Il Manuale è scritto sulla Proposta confermata, con criteri di accettazione verificabili. Il cliente lo conferma (seconda conferma), anche a voce con riepilogo scritto.
- Il Documento tecnico ha il capitolo Milestone. Le issue sono in ClickUp e non nei documenti; ogni story è coperta e nessuna issue supera le 16 ore.
- I materiali del cliente diventano task della List "Materiali" e dipendenze delle issue.
- Il Piano dei SAL è inviato a Franco con la durata vera e le date delle prove. Non contiene ore, buffer o tecnologie.
- Il mockup (se serve la grafica) è approvato con il Manuale e il PDF fa fede.
- Il primo sprint si pianifica a fine documentazione, senza Nota di sprint precedente.

**Sviluppo (`02-sviluppo`)**

- A ogni fine sprint c'è una Nota di sprint, una pagina, e la pianificazione del successivo in ClickUp. Nessun altro documento di sprint.
- La capacità tiene conto delle ferie e delle persone condivise con il comparatore. Il supervisore controlla.
- Dopo la conferma del Manuale, ogni cambiamento è una variazione.

**Rilascio e garanzia (`03-rilascio`, `04-garanzia`)**

- Il collaudo finale prova percorsi completi, le parti esistenti toccate (carrello, pagamento) e i dati reali o una copia fedele. La checklist è in ClickUp.
- La Guida alla pubblicazione si aggiorna con le migrazioni e con ciò che emerge. La scheda tecnica è una riga se non ci sono particolarità, altrimenti i passi di quel rilascio.
- Pubblica l'incaricato, non il responsabile. Il cliente è avvisato a pubblicazione verificata.
- Chiusura: documenti del sistema aggiornati, Report di progetto scritto dallo storico e dal Registro delle decisioni.
- La garanzia decorre dalla pubblicazione e vale il maggiore tra 15 giorni e il 50% della durata pianificata.

## Eventi da introdurre, nell'ordine

1. 26 ottobre: in revisione della Proposta Franco risponde solo a metà delle domande aperte.
2. Dopo la conferma del Manuale, il 15 dicembre Diego chiede per telefono allo sviluppatore 2 di aggiungere i preventivi in PDF. Lo sviluppatore non deve accettarlo.
3. Il cliente consegna i listini il 21 dicembre, con 6 giorni lavorativi di ritardo sulla data del Piano dei SAL. Cade nella chiusura aziendale: l'effetto sul calendario va calcolato.
4. Lo sviluppatore 2 si ammala dall'11 al 15 gennaio.
5. Il 13 gennaio un ticket urgente (108) sul pagamento ferma lo sviluppatore 1 per due giorni.
6. Alla prova della prima milestone una story ha un difetto non bloccante e Franco chiede una cosa nuova.
7. Franco non risponde alla prova successiva.
8. Dopo il rilascio Diego segnala due voci insieme: un bug e un ritocco estetico (pacchetto di garanzia).

## Cosa non deve succedere

- Un documento per il cliente con ore, buffer, nomi di persone del team o tecnologie.
- Una variazione accettata a voce o presa da Diego.
- Una milestone accettata con il silenzio.
- Una issue cancellata invece che portata a CANCELLED.
- Un documento in più di quelli previsti dal Piano di progetto.

## Documenti attesi in `esecuzione-N/107/`

- `storico.md` e `decisioni.md`, popolati con le skill dedicate.
- `01-kickoff/01-valutazione`: Stato di partenza, trascrizioni e sintesi con riepilogo.
- `01-kickoff/02-stima`: stima precisa.
- `01-kickoff/03-proposta`: Proposta (più versioni), riepilogo della conferma.
- `01-kickoff/04-documentazione`: Manuale, Documento tecnico (capitolo Milestone), Piano dei SAL, riepilogo della conferma del Manuale.
- `02-sviluppo`: Note di sprint, `registro-variazioni.md`, Milestone report, comunicazione di riprogrammazione se serve.
- `03-rilascio/01-collaudo`: verbale della prova finale.
- `03-rilascio/02-preparazione`: piano di rilascio, scheda tecnica.
- `03-rilascio/03-pubblicazione`: avviso al cliente.
- `03-rilascio/04-chiusura`: Report di progetto.
- `04-garanzia`: risposta al cliente.
- Nel `sistema/`: Manuale, Documento tecnico e Guida alla pubblicazione aggiornati.
