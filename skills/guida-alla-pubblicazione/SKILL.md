---
name: guida-alla-pubblicazione
description: Scrive e aggiorna la Guida alla pubblicazione, il documento del sistema che dice a chi pubblica cosa sapere di quel sistema: ordine dei passi, regole del server, riavvii, cache, verifiche, ritorno alla versione precedente. Usala nella preparazione del rilascio di un progetto, dopo la pubblicazione per aggiornarla, e a ogni lavoro che cambia il modo di pubblicare.
---

# Guida alla pubblicazione

## A cosa serve

La Guida alla pubblicazione raccoglie tutto ciò che serve a chi pubblica un sistema, e che non sta nel Manuale né nel resto del Documento tecnico: le regole del server, i riavvii necessari, le cache su certe rotte, le verifiche da fare. Per esempio: "dopo la pubblicazione va riavviato il server SSR", "la rotta /catalogo ha una cache da svuotare", "una regola Apache reindirizza queste pagine".

È un documento del sistema, come il Manuale del prodotto e il Documento tecnico. Appartiene al sistema e non al singolo lavoro: un sistema ha una sola Guida, ogni lavoro che cambia il modo di pubblicare la aggiorna, e chi pubblica la prossima volta, anche per un ticket, parte da lì. È interno: il cliente non lo legge.

Non si confonde con la scheda tecnica di rilascio, che è il documento di un singolo rilascio: l'elenco dei passi di quella pubblicazione, ricavato dalla Guida con le particolarità di quel lavoro (skill `collaudo-e-rilascio`).

## Quando si usa

- **Durante lo sviluppo.** Una issue che cambia il modo di pubblicare lascia un'annotazione (condizione della DoD base). La skill le raccoglie.
- **Preparazione del rilascio.** Si scrive o si aggiorna la Guida, prima di preparare la scheda tecnica.
- **Chiusura.** Dopo la pubblicazione si aggiorna con ciò che è emerso: un passo mancante, un riavvio dimenticato, una cache scoperta.
- **Ticket.** Un ticket che cambia il modo di pubblicare aggiorna la Guida come parte dell'aggiornamento dei documenti.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **La Guida esistente**, se c'è, e dove si trova nella knowledge base (cartella dei documenti del sistema). Se non c'è, è la prima stesura.
3. **Il lavoro che la cambia**, con il suo codice.
4. **Le fonti.** Il capitolo del Documento tecnico su infrastruttura e ambienti, le annotazioni lasciate dalle issue in ClickUp (commento e etichetta `guida`), le repository del sistema (anche i loro file CLAUDE.md e la documentazione per Claude), e per un progetto la scheda tecnica di rilascio precedente.
5. **L'incaricato della pubblicazione**, se la Guida va riletta da lui.

## Struttura

1. **Ambienti.** Staging e produzione: indirizzi, repository e rami, chi li gestisce. Il sistema può avere più repository.
2. **Ordine dei passi.** I passi di una pubblicazione normale, uno per riga, con chi li esegue.
3. **Regole del sistema.** Tutto ciò che è particolare di questo sistema, ognuna con il motivo e il lavoro che l'ha introdotta:
   - regole del server web (per esempio Apache) e reindirizzamenti;
   - processi da riavviare (per esempio il server SSR) e in che ordine;
   - cache, con le rotte coinvolte e come si svuotano;
   - code, worker, lavori pianificati;
   - variabili e configurazioni per ambiente, senza scrivere segreti;
   - certificati e scadenze.
4. **Verifiche.** Dopo ogni passo e a pubblicazione finita, con cosa deve succedere.
5. **Ritorno alla versione precedente.** Quando si decide, chi lo decide, i passi, e cosa succede ai dati scritti nel frattempo.
6. **Backup.** Cosa si salva prima e dove.
7. **Contatti.** Chi avvisare se qualcosa va storto.
8. **Cronologia.** Per ogni modifica: versione, lavoro (codice della lavorazione) e cosa è cambiato.

## Come si aggiorna

- Parti dall'ultima versione. Aggiungi, correggi o togli solo ciò che il lavoro ha cambiato, e registra l'origine nella cronologia.
- Una regola che non vale più si toglie, con la cronologia che dice quando e perché.
- Se due regole si contraddicono, segnalalo: non risolverlo in silenzio.
- Ciò che manca non si inventa: va in un blocco "Cosa manca", con chi può fornirlo.

## Regole di contenuto

- **Documento interno e tecnico.** Nomi di file, server, rotte e comandi si scrivono come sono.
- **Nessun segreto.** Password, chiavi e token non si scrivono: si indica dove sono custoditi.
- **Concreto.** "Svuotare la cache" non basta: serve il comando o il pannello e la rotta.
- **Una sola Guida per sistema.** Se il sistema ha più repository, la Guida le copre tutte.

## Formato e dove si salva

Markdown, `guida-pubblicazione-<cliente>-<sistema>-v<N>.md`, con numero di versione. La Guida vigente sta in `sistema/`. Ciò che emerge da una pubblicazione va nello storico della lavorazione (skill `storico-lavorazione`).

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

Le sezioni tecniche usano i nomi come sono.

## Controllo finale

1. Ogni regola del sistema ha il motivo e il lavoro che l'ha introdotta.
2. Ogni passo ha verifiche, e c'è il ritorno alla versione precedente.
3. Nessun segreto è scritto.
4. La cronologia registra la modifica con il codice della lavorazione.
5. Ciò che manca è dichiarato.
6. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
