---
name: milestone-report
description: Scrive il Milestone report, il documento interno con cui chi gestisce il progetto capisce come è andato lo sviluppo di una milestone: story consegnate, ore previste e reali, margine, variazioni e imprevisti, esito della prova del cliente, stato della milestone successiva. Usala a ogni milestone di un progetto o prodotto, dopo la prova del cliente sullo staging.
---

# Milestone report

## A cosa serve

Il Milestone report è interno. Lo legge chi gestisce il progetto, per vedere come è andato lo sviluppo di una milestone: se le stime hanno retto, dove si sono consumati buffer e margine, cosa è successo che la Nota di sprint non fa vedere da sola. Non va al cliente. Al cliente, per la prova, va il messaggio preparato con la skill `prova-su-staging`.

Non sostituisce la Nota di sprint, che racconta un solo sprint: il Milestone report mette insieme gli sprint della milestone e li legge nell'insieme.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **La milestone.** Codice, nome e il SAL corrispondente.
3. **Le fonti.** Il Documento tecnico (capitolo Piano delle milestone), il Piano dei SAL, le Note di sprint della milestone, lo stato e i tempi delle issue in ClickUp, History and decision (variazioni, riprogrammazioni, imprevisti, esito della prova) e il Manuale del prodotto per i criteri di accettazione.
4. **Il momento.** Prima della prova (report con l'esito da compilare) oppure dopo (report con l'esito).

Non inventare ore, stati o date: ciò che non sai, chiedilo.

## Contenuto

Il report ha queste voci, in quest'ordine:

1. **Milestone e stato.** Codice, nome, SAL, data prevista e data reale della prova, stato: in linea, a rischio o in ritardo.
2. **Story consegnate.** Con codice e nome presi dal Manuale, e per ognuna l'esito della prova del cliente: accettata, accettata con difetto non bloccante (con la data di correzione), non accettata per difetto bloccante (con la data della nuova verifica). Se la prova non è ancora stata fatta, lo spazio per l'esito.
3. **Ore.** Previste e reali, per issue o per story se più chiaro, e la somma. Dove lo scarto è grande, la causa.
4. **Buffer e margine.** Quanto buffer di milestone era previsto, quanto è stato consumato e da cosa (stime sbagliate, assenze, lavorazioni minori urgenti, variazioni piccole), quanto margine resta.
5. **Variazioni, riprogrammazioni e imprevisti.** Quelli di questa milestone, con il loro effetto su ore e date, presi da History and decision.
6. **Cosa ha funzionato e cosa no.** Poche righe: stime, dipendenze, materiali del cliente, qualità delle story, difetti trovati alla prova. Serve a stimare meglio e a riempire il Report di progetto.
7. **Prossima milestone.** Cosa si consegna, data prevista della prova, stato, rischi e materiali in scadenza.

## Regole di contenuto

- **Interno.** Ore, buffer, nomi del team e problemi interni sono ammessi. Il report non va al cliente.
- **Numeri veri.** Le ore vengono dal tracciamento in ClickUp. Nessun dato si ricostruisce a occhio.
- **Se la milestone è a rischio o in ritardo**, il report lo dichiara e rimanda alla skill `history-and-decision`, che prepara le leve e la comunicazione al cliente.
- **Una richiesta nuova emersa in prova non è un difetto:** è una variazione. Si annota in History and decision con la skill `history-and-decision`.
- **Non attribuire un esito che History and decision non sostiene.** Se per una story non risulta l'esito, chiedilo.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere (unica eccezione: le tabelle del Piano dei SAL). Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Formato

Una pagina o due, solo Markdown, senza PDF: `milestone-report-SAL<N>.md` in `develop`. Una bozza (esito o ore non definitivi) porta in prima riga "BOZZA" e ogni voce incompleta termina con un blocco "Cosa manca".

## Dove si salva

Nella cartella `develop` della lavorazione, solo Markdown, senza PDF.

## Controllo finale

1. Ogni story della milestone compare, con il suo esito (o lo spazio, se la prova non c'è ancora), e ogni difetto ha una data.
2. Le ore previste e reali vengono da ClickUp e lo scarto ha una causa.
3. Le date coincidono con quelle del Piano dei SAL, oppure la differenza è motivata.
4. Variazioni, riprogrammazioni e imprevisti sono quelli di History and decision.
5. Nessun prezzo.
6. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
