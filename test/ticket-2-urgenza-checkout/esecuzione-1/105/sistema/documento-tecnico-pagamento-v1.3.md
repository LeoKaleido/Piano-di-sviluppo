# Documento tecnico del pagamento, estratto della versione 1.3

Solo il capitolo toccato dal ticket 105. Il resto è invariato rispetto alla versione precedente. Il codice della lavorazione originale del nuovo pagamento non è noto alla base: la versione precedente è indicata come "nuovo pagamento, rilasciato il 14 settembre 2026".

## Integrazioni

### Servizio esterno di pagamento

- Il sito invia l'ordine al servizio esterno e riceve la sigla del circuito della carta.
- I circuiti accettati sono in un file di configurazione. Il codice confronta la sigla ricevuta con quelle accettate.
- Dal 14 ottobre 2026 il servizio indica la Mastercard con `MASTERCARD` invece di `MC`. La configurazione accetta entrambe.
- Rischio noto: il confronto è esatto per gli altri circuiti, quindi un cambio di formato del servizio blocca il pagamento con quel circuito. Il servizio ha annunciato un cambio analogo per Maestro. Rimedio previsto: mappa delle sigle per circuito con confronto non sensibile alle maiuscole (ticket 110).
- Se il servizio non risponde: l'ordine non parte e l'utente vede un errore generico. Da rivedere: oggi il messaggio non dice la causa.

## Modifiche rispetto alla versione precedente

- 1.3, 2026-10-15, origine ticket 105: sigle accettate per la Mastercard.
