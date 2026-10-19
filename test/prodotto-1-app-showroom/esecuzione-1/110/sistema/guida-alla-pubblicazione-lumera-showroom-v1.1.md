# Guida alla pubblicazione, Lumera Arredi, applicazione per gli showroom

Interna. Versione 1.1, del 2027-09-17. Deriva dalla v1.0 (2027-08-24, nata nella preparazione del lancio). Unica Guida del sistema: copre `lumera-showroom` e le parti di `lumera-api` che l'applicazione usa.

## 1. Ambienti

- Staging e produzione propri dell'applicazione, separati da quelli del sito. Repository: `lumera-showroom` (applicazione), `lumera-api` (API e database). Rami: `main` per la produzione, `staging` per la prova.
- Gestione: sistemista 1 (incaricato della pubblicazione) e sistemista 2.

## 2. Ordine dei passi

1. Copia di sicurezza del database di `lumera-api`.
2. Pubblicare `lumera-api`.
3. Pubblicare `lumera-showroom`.
4. Verifiche (sezione 4).

## 3. Regole del sistema

- **Dominio mittente delle email.** L'indirizzo dedicato per l'invio delle proposte deve avere le autorizzazioni di invio attive sul dominio prima della pubblicazione. Motivo: il 10 settembre 2027 le proposte inviate al lancio erano scartate da alcuni provider. Introdotta dalla lavorazione 110 (aggiunta nella chiusura).
- **Applicazione installabile sul tablet.** Dopo ogni pubblicazione l'applicazione si aggiorna sul tablet alla prima connessione; un tablet che non si collega per più di sette giorni richiede un nuovo accesso. Introdotta dalla lavorazione 110.
- **Dati locali sul tablet.** Non si cancellano durante gli aggiornamenti. Introdotta dalla lavorazione 110.
- **Cosa manca.** Comando preciso per svuotare l'archiviazione locale di un tablet; chi può fornirlo: team lead.

## 4. Verifiche

- Dopo il passo 2: un ordine di prova viene creato con lo stesso totale della proposta.
- Dopo il passo 3: l'indirizzo risponde, un'utenza di prova entra, l'agenda carica.
- A fine pubblicazione: una proposta di prova arriva a tre provider diversi dall'indirizzo dedicato, con lo sconto visibile.

## 5. Ritorno alla versione precedente

Si decide se l'applicazione non è utilizzabile; decide il product lead con Franco. Si ripubblica la versione precedente di `lumera-showroom`; se il database è stato modificato, si ripristina la copia di sicurezza solo se l'ordine dei dati lo richiede: i dati scritti nel frattempo vanno salvati prima. Per i consulenti: tornare a carta e fogli Excel.

## 6. Backup

Copia di sicurezza del database prima di ogni pubblicazione, conservata dal sistemista 1.

## 7. Contatti

Product lead, sistemista 1, sistemista 2.

## 8. Cronologia

- v1.0, 2027-08-24, lavorazione 110: prima stesura.
- v1.1, 2027-09-17, lavorazione 110: regola sul dominio mittente, emersa al lancio; regole su aggiornamento e dati locali.
