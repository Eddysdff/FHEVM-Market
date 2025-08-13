export interface Market {
  id: string
  title: string
  description: string
  endTime: number
  totalPool: string
  outcomeA: string
  outcomeB: string
  isActive: boolean
  isResolved: boolean
  winningOutcome?: string
}

export interface Bet {
  id: string
  marketId: string
  user: string
  outcome: string
  amount: string
  timestamp: number
  isEncrypted: boolean
}

export interface User {
  address: string
  balance: string
  totalBets: number
  totalWinnings: string
}

export interface FHEEncryptedValue {
  ciphertext: string
  publicKey: string
}
