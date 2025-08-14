import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { useMarketStore } from '@/stores/marketStore'

export function CreateMarket() {
  const navigate = useNavigate()
  const { addMarket } = useMarketStore()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    outcomeA: '',
    outcomeB: '',
    endTime: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newMarket = {
      id: Date.now().toString(),
      ...formData,
      endTime: new Date(formData.endTime).getTime(),
      totalPool: '0',
      isActive: true,
      isResolved: false,
    }

    addMarket(newMarket)
    navigate('/markets')
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Create Prediction Market</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Create a new prediction market for the community to participate
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card p-6 space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Market Title</label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g., Bitcoin Price Prediction"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Market Description</label>
          <textarea
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe this prediction market in detail..."
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Option A</label>
            <input
              type="text"
              required
              value={formData.outcomeA}
              onChange={(e) => setFormData({ ...formData, outcomeA: e.target.value })}
              placeholder="e.g., Up"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Option B</label>
            <input
              type="text"
              required
              value={formData.outcomeB}
              onChange={(e) => setFormData({ ...formData, outcomeB: e.target.value })}
              placeholder="e.g., Down"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">End Time</label>
          <input
            type="datetime-local"
            required
            value={formData.endTime}
            onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-4">
                      <Button type="submit" className="flex-1">
              Create Market
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => navigate('/markets')}
              className="flex-1"
            >
              Cancel
            </Button>
        </div>
      </form>
    </div>
  )
}
