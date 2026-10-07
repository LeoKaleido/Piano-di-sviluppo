---
name: riprogrammazione
description: Gestisce un imprevisto che tocca i tempi di un progetto o prodotto (assenza lunga, festività dimenticata, sprint non completati, ticket urgente, blocco tecnico, ritardo del cliente, milestone a rischio). Usala quando una milestone va ripianificata o quando lo sprint segnala uno stato a rischio o in ritardo.
---

# Riprogrammazione

## A cosa serve

Gli imprevisti sono tanti, ma ognuno ha già una risposta decisa nei piani. Questa skill riconosce l'imprevisto, applica la risposta prevista, e quando una data è in pericolo presenta le leve possibili con il loro effetto, così che chi decide abbia i numeri davanti.

La skill non decide: prepara la decisione. Dopo la decisione aggiorna il piano e prepara la comunicazione al cliente.

Una variazione chiesta dal cliente non passa da qui: ha la sua skill. Qui arrivano gli imprevisti che non nascono da una richiesta di cambiamento.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **L'imprevisto**: cosa è successo, quando, quanto dura o quante ore è costato.
3. **Il Documento tecnico** (capitolo Milestone) e l'ultima Nota di sprint.
4. **La capacità residua**: le ore disponibili di ogni persona negli sprint rimanenti della milestone.

Non inventare durate o disponibilità: ciò che non sai, chiedilo.

## Passo 1: riconoscere l'imprevisto

**Persone**

- **Ferie programmate**: sono già nel calendario. Nessuna riprogrammazione.
- **Ferie chieste a lavoro avviato**: si valuta l'effetto sulla milestone prima di approvarle.
- **Malattia o assenza breve**: le issue PLANNED meno prioritarie escono dallo sprint e tornano in BACKLOG; quelle IN PROGRESS della persona tornano a PLANNED con un commento.
- **Assenza lunga o uscita dal team**: passaggio di consegne su issue e documenti, nuova pianificazione della milestone.
- **Nuova persona nel team**: capacità ridotta nel suo primo sprint.
- **Una persona è chiamata per una garanzia**: pacchetto di garanzia con un prestito di ore. Le ore pesano sul margine della milestone da cui la persona è presa (skill `pacchetto-di-garanzia`).
- **Festività non considerata**: si corregge il calendario e si ricalcolano le date.

**Tempi**

- **Sprint non completato**: le issue non COMPLETED passano allo sprint successivo con la priorità, lo sprint non si allunga.
- **Stime sbagliate**: a ogni chiusura chi sviluppa rivaluta le ore delle issue non COMPLETED e la rivalutazione alimenta il margine della milestone.
- **Ticket urgenti oltre il buffer di sprint**: le ore vanno sul ticket, escono dallo sprint le issue meno prioritarie.
- **Blocco tecnico o di un servizio esterno**: issue di tipo spike a tempo limitato, poi nuova stima.

**Cliente**

- **Materiali o risposte in ritardo**: il progetto non è mai fermo. Le issue che ne dipendono escono dallo sprint, si sposta altro lavoro non dipendente, le date della parte bloccata slittano degli stessi giorni.
- **Progetto sospeso dal cliente**: si registra lo stato raggiunto. La ripresa richiede una nuova pianificazione.

Se l'imprevisto non rientra in nessun caso, dillo: descrivi la situazione e proponi il caso più vicino, senza forzare.

## Quale buffer si usa

Ci sono due buffer, con scopi diversi.

- **Buffer di sprint.** Il 20% della capacità di ogni persona in ogni sprint, riservato ai ticket urgenti. Si usa solo per i ticket urgenti entrati nello sprint. Se a metà sprint non è stato usato, il responsabile può anticipare issue da BACKLOG a PLANNED con la parte avanzata.
- **Buffer di milestone.** Le ore aggiunte alla milestone (20%, 30% con una sola persona). Si usa per stime sbagliate, assenze brevi, urgenze oltre il buffer di sprint e variazioni piccole (al massimo metà del buffer).

Ordine d'uso: un ticket urgente usa prima il buffer di sprint. Oltre quello escono dallo sprint le issue meno prioritarie e le ore pesano sul buffer di milestone, cioè riducono il margine.

## Passo 2: ricalcolo

Rifai il controllo della milestone con i nuovi dati. Calcola il margine: capacità rimanente fino alla data della prova, al netto del buffer di sprint, meno le ore rimanenti (stime delle issue non COMPLETED, rivalutate da chi sviluppa). Mostra i numeri usati.

- **In linea**: il margine è almeno metà del buffer di milestone iniziale. Si aggiorna il piano e non si comunica nulla al cliente.
- **A rischio**: il margine è tra zero e metà del buffer iniziale. Si segnala al responsabile. Se nessuna data già comunicata cambia, il cliente non si avvisa e decide il responsabile come gestire la situazione. Se una data già comunicata cambia, il cliente è avvisato subito.
- **In ritardo**: il margine è sotto zero. Servono le leve.

Controlla anche le milestone successive: uno slittamento può propagarsi.

## Passo 3: le leve

Quando la milestone è in ritardo, presenta le leve con l'effetto di ciascuna, calcolato:

- **Spostare una story** a una milestone successiva. Indica quali story sono candidate (non ancora iniziate, senza altre story che ne dipendono) e quante ore libera ciascuna. In un prodotto la story può andare anche al rilascio successivo.
- **Spostare la data.** Indica la nuova data e l'effetto sulle milestone successive.
- **Aggiungere ore.** Indica quante ne servono ed entro quando. Una persona nuova rende meno nel suo primo sprint.

Chi decide:

- spostare una story o una data si decide con il cliente;
- aggiungere ore lo decide chi gestisce il team, con il CEO se serve.

Presenta le leve senza sceglierne una. Puoi indicare quale ha l'effetto minore sul cliente, dichiarando che è una valutazione.

Quando lo slittamento nasce da un ritardo del cliente non servono leve: le date slittano degli stessi giorni, e si comunica la nuova data.

## Passo 4: dopo la decisione

1. **Capitolo Milestone del Documento tecnico**: nuova versione, con le modifiche e la loro origine. I codici non cambiano. Le issue toccate si aggiornano in ClickUp.
2. **Calendario di progetto**: aggiornato, se l'imprevisto lo riguarda.
3. **Piano dei SAL**: rigenerato, se una data o il contenuto di un SAL sono cambiati.
4. **Comunicazione al cliente**: solo nei casi in cui cambia una data o il contenuto di una consegna.

## Comunicazione al cliente

Testo da inviare, breve:

- cosa cambia: quale consegna, quale nuova data, oppure quale story si sposta;
- la proposta, quando la decisione spetta al cliente, con le alternative;
- cosa deve fare il cliente ed entro quando.

Regole:

- va inviata subito, non alla scadenza;
- non racconta i fatti interni: malattie, nomi, ticket di altri clienti, errori di stima. Comunica l'effetto e la soluzione;
- quando lo slittamento nasce da un ritardo del cliente, lo dice con i fatti: quale materiale, quale data era concordata, di quanti giorni slitta la consegna;
- nessun prezzo.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Dove si salva

La comunicazione al cliente e il ricalcolo in `02-sviluppo` della lavorazione.

## Controllo finale

1. L'imprevisto è stato ricondotto a un caso previsto, o dichiarato fuori dai casi.
2. Il ricalcolo riporta i numeri usati e considera anche le milestone successive.
3. Ogni leva ha il suo effetto calcolato, e nessuna è stata scelta al posto di chi decide.
4. La comunicazione al cliente esiste solo se cambia una data o una consegna, e non contiene fatti interni.
5. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
