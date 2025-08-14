import { useAccount } from 'wagmi'
import { useMarketStore } from '@/stores/marketStore'
import { 
  UserIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

export function Profile() {
  const { address, isConnected } = useAccount()
  const { userBets } = useMarketStore()

  if (!isConnected) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-300">Please connect your wallet first</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Header */}
      <div className="card p-8 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
            <UserIcon className="w-8 h-8 text-primary-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Profile</h1>
            <p className="text-gray-600 dark:text-gray-300">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto">
              <CurrencyDollarIcon className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm text-gray-500">Total Earnings</p>
            <p className="text-xl font-bold">0 ETH</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto">
              <ChartBarIcon className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm text-gray-500">Total Bets</p>
            <p className="text-xl font-bold">{userBets.length}</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mx-auto">
              <TrophyIcon className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="text-sm text-gray-500">Wins</p>
            <p className="text-xl font-bold">0</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto">
              <UserIcon className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm text-gray-500">Markets Joined</p>
            <p className="text-xl font-bold">0</p>
          </div>
        </div>
      </div>

      {/* Betting History */}
      <div className="card p-6 space-y-6">
        <h2 className="text-xl font-semibold">Betting History</h2>
        
        {userBets.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-300">No betting records</p>
          </div>
        ) : (
          <div className="space-y-4">
            {userBets.map((bet) => (
              <div key={bet.id} className="flex justify-between items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div>
                  <p className="font-medium">Market #{bet.marketId}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Bet: {bet.outcome} - {bet.amount} ETH
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    {new Date(bet.timestamp).toLocaleDateString()}
                  </p>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    bet.isEncrypted 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                  }`}>
                                         {bet.isEncrypted ? 'Encrypted' : 'Not Encrypted'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
