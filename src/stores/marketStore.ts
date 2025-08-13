import { create } from 'zustand'
import { Market, Bet } from '@/types'

interface MarketState {
  markets: Market[]
  userBets: Bet[]
  loading: boolean
  error: string | null
  
  // Actions
  setMarkets: (markets: Market[]) => void
  addMarket: (market: Market) => void
  updateMarket: (id: string, updates: Partial<Market>) => void
  setUserBets: (bets: Bet[]) => void
  addBet: (bet: Bet) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

export const useMarketStore = create<MarketState>((set) => ({
  markets: [],
  userBets: [],
  loading: false,
  error: null,
  
  setMarkets: (markets) => set({ markets }),
  addMarket: (market) => set((state) => ({ 
    markets: [...state.markets, market] 
  })),
  updateMarket: (id, updates) => set((state) => ({
    markets: state.markets.map(market => 
      market.id === id ? { ...market, ...updates } : market
    )
  })),
  setUserBets: (bets) => set({ userBets: bets }),
  addBet: (bet) => set((state) => ({ 
    userBets: [...state.userBets, bet] 
  })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}))
