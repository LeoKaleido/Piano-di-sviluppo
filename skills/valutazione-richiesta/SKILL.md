---
name: valutazione-richiesta
description: Valuta la richiesta di un cliente appena arrivata e propone la categoria (ticket, progetto, prodotto) e, per un ticket, esito della verifica, stima in ore, tipo, urgenza e responsabile, con le prime domande da fare. Usala all'apertura di ogni richiesta, prima di qualunque altro documento.
---

# Valutazione della richiesta

## A cosa serve

Ogni richiesta di un cliente entra dal sistema di ticket e va classificata prima di fare qualunque altra cosa, perché la categoria decide quale piano si applica: Piano dei ticket, Piano di progetto o Piano di prodotto. La categoria la decide sempre l'azienda, mai il cliente. Una classificazione sbagliata costa cara: un progetto trattato come ticket parte senza proposta né conferma del cliente, un ticket trattato come progetto si carica di documenti inutili.

Questa skill legge la richiesta e produce una valutazione: una proposta di classificazione motivata. La decisione resta a chi analizza la richiesta.

## Avvio

Chiedi solo ciò che non è già stato detto nel messaggio che richiama la skill.

1. **La richiesta.** Il testo del ticket, oppure dove si trova.
2. **Il cliente.** Il nome con cui indicarlo.
3. **Il sistema coinvolto.** Su quale sistema del cliente si interviene, se esiste.

Leggi la richiesta per intero, allegati compresi, prima di valutare.

## Prima di valutare: verifica preliminare

La classificazione non si basa sul solo testo della richiesta. Prima di proporre categoria e stima serve l'esito della verifica preliminare (skill `verifica-preliminare`), che confronta la richiesta con i lavori già aperti e con il codice del sistema. Se l'esito non è disponibile, chiedilo oppure esegui quella skill.

L'esito può chiudere la valutazione prima di iniziare: se il lavoro è già compreso in un progetto, è un doppione, o il sistema lo fa già, l'esito è "non da fare" e non c'è nulla da classificare. In quel caso riporta l'esito e il prossimo passo indicato dalla verifica.

Se la verifica non si può fare, procedi comunque, ma dichiara in testa alla valutazione che è basata sul solo testo della richiesta e che categoria e stima vanno confermate dopo la verifica.

Un ticket urgente non aspetta la verifica: si interviene subito.

## Cosa valutare

### 1. Quante richieste contiene

Un ticket può contenere più richieste indipendenti. Se è così, elencale e valuta ciascuna separatamente: ognuna diventerà un ticket a sé.

### 2. Categoria

Applica i criteri in quest'ordine.

- **Prodotto**: la richiesta riguarda un sistema che non esiste ancora.
- **Progetto**: il sistema esiste, e vale almeno una di queste condizioni: la stima supera le 2 settimane; serve più di una persona; serve una proposta, perché il cliente deve decidere come funzionerà; cambia l'aspetto grafico, quindi serve un mockup.
- **Ticket**: il sistema esiste e nessuna delle condizioni vale. Dura da circa 2 ore a 2 settimane.

### 3. Esito della verifica (solo per i ticket)

Riporta l'esito complessivo della verifica preliminare, uno fra:

- **Da fare.**
- **Non da fare.** Con il motivo da dare al cliente.
- **Da fare in parte.** Con la parte che resta fuori.
- **Da rimandare.** Con ciò da cui dipende.

### 4. Stima

Per un ticket la stima è in ore. Per un progetto è la durata complessiva, in giorni lavorativi, e serve a fissare il tempo massimo del kickoff (10% della stima). La stima parte da ciò che la verifica ha visto nel codice, non da come appare la richiesta: un intervento che sembra piccolo può toccare codice usato in molti punti. Indicala in ore e dichiara quanto è affidabile. Se non hai elementi per stimare, dillo e indica chi può farlo (chi conosce quella parte del sistema). Una stima fatta senza aver guardato il codice è provvisoria.

La stima serve alla pianificazione dello sprint e va nella Scheda di intervento.

### 5. Tipo (solo per i ticket)

- **Bug**: il sistema fa una cosa diversa da quanto previsto.
- **Feature**: una funzione nuova o cambiata, ma contenuta.
- **Entrambi**: un bug la cui correzione richiede anche una funzione nuova o cambiata.
- **Assistenza**: domanda, controllo o operazione che non cambia il codice.

Per distinguere bug e feature conta ciò che era previsto, descritto nel Manuale del prodotto se esiste. Se non hai accesso a quel riferimento, segnala che il tipo va verificato e su quale documento.

### 6. Urgenza (solo per i ticket)

- **Urgente**: sistema fermo in produzione, utenti che non possono lavorare, dati a rischio. Si interviene subito e il ticket può togliere persone ai progetti.
- **Normale**: tutto il resto. Entra nel primo sprint utile, senza togliere nessuno a un progetto.
- **A tempo perso**: senza scadenza. Entra solo con la capacità che avanza, dopo tutto il resto.

L'urgenza si assegna sui fatti descritti, non sul tono della richiesta. Un cliente può scrivere "urgentissimo" per una richiesta normale, o descrivere con calma un sistema fermo. Se i fatti non bastano a decidere tra due livelli, proponi quello più alto e indica la domanda che scioglie il dubbio.

### 7. Responsabile

Per un ticket è lo sviluppatore a cui assegnarlo. Per un progetto è il PL (project lead), disponibile in quel momento e più adatto al sistema e al tipo di lavoro: lo designa chi analizza con chi gestisce il team e, se serve, con il CEO. Proponi il criterio, non il nome, se non conosci la disponibilità del team. Per un ticket:

- per un ticket urgente, la persona che conosce meglio la parte coinvolta, anche se lavora a un progetto;
- per un ticket normale o a tempo perso, una persona con capacità libera: non si toglie nessuno a un progetto.

### 8. Interfaccia

Indica se l'intervento tocca l'interfaccia. Se cambia l'aspetto grafico non è un ticket: è un progetto, con wireframe e mockup.

### 9. Documenti e lavori che possono essere toccati

Riporta ciò che la verifica preliminare ha trovato: lavori in corso sulla stessa parte, documenti esistenti (Manuale del prodotto, Documento tecnico), parti del codice coinvolte e chi altro le usa. Se ce ne sono, finiscono nella Scheda di intervento e servirà l'allineamento dei documenti a fine lavoro.

### 10. Prime domande per il cliente

Elenca, numerate, le domande senza le quali non si può procedere. Devono essere puntuali e a risposta breve, perché verranno scritte nel ticket.

In questa fase non proporre soluzioni e non suggerire alternative al cliente: si raccolgono informazioni. Le soluzioni arrivano nella Scheda di intervento o nella Proposta di soluzione.

## Formato della valutazione

La valutazione è una nota interna, breve, restituita in risposta e non come file, salvo richiesta diversa. Usa questa struttura:

- **Richiesta in una frase.** Cosa chiede il cliente, con parole sue.
- **Verifica preliminare.** L'esito e i riferimenti, oppure la dichiarazione che non è stata fatta.
- **Categoria proposta.** Con il criterio che la determina.
- **Esito.** Solo per i ticket e per i progetti.
- **Stima.** Per un ticket in ore, per un progetto la durata complessiva, con la sua affidabilità.
- **Tipo.** Solo per i ticket.
- **Urgenza.** Solo per i ticket, con il fatto che la determina.
- **Responsabile.** Per un ticket lo sviluppatore, per un progetto il PL.
- **Interfaccia.** Toccata o no.
- **Documenti e lavori toccati.** Se rilevati.
- **Dubbi.** Cosa potrebbe far cambiare la classificazione, e quale informazione lo deciderebbe.
- **Domande per il cliente.** Numerate.
- **Prossimo passo.** Per un ticket, la Scheda di intervento. Per un ticket urgente, il percorso d'urgenza: si interviene subito e le schede si scrivono a posteriori. Per un progetto, il kickoff e lo Stato di partenza. Per un prodotto, la qualifica del cliente.

Se il ticket contiene più richieste, ripeti la struttura per ognuna.

## Regole

- **Proponi, non decidere.** Scrivi "categoria proposta", e quando sei in dubbio tra due classificazioni presentale entrambe con ciò che le distingue.
- **Non inventare.** Se un'informazione manca, va tra i dubbi o tra le domande, non viene supposta.
- **Segnala il confine.** Se una richiesta è vicina alla soglia tra ticket e progetto, dillo: un ticket che cresce durante la lavorazione va fermato e convertito, ed è meglio saperlo prima.

## Regole di scrittura

{{SCRITTURA}}

## Controllo finale

1. Ogni classificazione è motivata da un criterio o da un fatto presente nella richiesta o nella verifica preliminare, il cui esito è riportato (oppure è dichiarato che manca).
2. La stima è in ore per un ticket e in durata complessiva per un progetto, con la sua affidabilità dichiarata.
3. Nessuna soluzione è stata proposta.
4. Le domande per il cliente sono numerate e a risposta breve.
5. Il prossimo passo corrisponde al piano della categoria proposta.
6. {{CONTROLLO}}
