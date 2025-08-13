import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config/wagmi'
import { ThemeProvider } from './components/ThemeProvider'
import { AppRouter } from './components/Router'
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
