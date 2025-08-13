import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMarketStore } from '@/stores/marketStore'
import { Button } from '@/components/ui/Button'
import { 
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export function MarketDetail() {
  const { id } = useParams<{ id: string }>()
  const { markets, loading } = useMarketStore()
  const [selectedOutcome, setSelectedOutcome] = useState<string>('')
  const [betAmount, setBetAmount] = useState('')

  const market = markets.find(m => m.id === id)

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">加载中...</p>
      </div>
    )
  }

  if (!market) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-300">市场不存在</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Market Header */}
      <div className="card p-8 space-y-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{market.title}</h1>
            <p className="text-gray-600 dark:text-gray-300">{market.description}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            market.isActive 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
          }`}>
            {market.isActive ? '进行中' : '已结束'}
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <ClockIcon className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">结束时间</p>
              <p className="font-medium">{new Date(market.endTime).toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <CurrencyDollarIcon className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">总池</p>
              <p className="font-medium">{market.totalPool} ETH</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <UserGroupIcon className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">参与者</p>
              <p className="font-medium">0</p>
            </div>
          </div>
        </div>
      </div>

      {/* Betting Section */}
      {market.isActive && (
        <div className="card p-6 space-y-6">
          <h2 className="text-xl font-semibold">投注</h2>
          
          {/* Outcome Selection */}
          <div className="space-y-4">
            <label className="block text-sm font-medium">选择结果</label>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedOutcome(market.outcomeA)}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  selectedOutcome === market.outcomeA
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300'
                }`}
              >
                <p className="font-medium">{market.outcomeA}</p>
              </button>
              <button
                onClick={() => setSelectedOutcome(market.outcomeB)}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  selectedOutcome === market.outcomeB
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300'
                }`}
              >
                <p className="font-medium">{market.outcomeB}</p>
              </button>
            </div>
          </div>

          {/* Bet Amount */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">投注金额 (ETH)</label>
            <input
              type="number"
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
              placeholder="0.0"
              step="0.01"
              min="0"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <Button 
            disabled={!selectedOutcome || !betAmount}
            className="w-full"
          >
            加密投注
          </Button>
        </div>
      )}

      {/* Results */}
      {market.isResolved && (
        <div className="card p-6 space-y-4">
          <h2 className="text-xl font-semibold">结果</h2>
          <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg">
            <p className="text-green-800 dark:text-green-200">
              获胜结果: <span className="font-medium">{market.winningOutcome}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
