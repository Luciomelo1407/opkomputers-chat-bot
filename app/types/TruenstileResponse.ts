export interface TurnstileResponse {
  'success': boolean
  'error-codes'?: string[] // A propriedade é opcional, pois só existe em caso de erro
  'challenge_ts'?: string // Timestamp do desafio
  'hostname'?: string // Domínio do site
}
