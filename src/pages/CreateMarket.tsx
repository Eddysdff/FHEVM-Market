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
        <h1 className="text-3xl font-bold">创建预测市场</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          创建一个新的预测市场，让社区参与预测
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card p-6 space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">市场标题</label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="例如：比特币价格预测"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">市场描述</label>
          <textarea
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="详细描述这个预测市场..."
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">选项 A</label>
            <input
              type="text"
              required
              value={formData.outcomeA}
              onChange={(e) => setFormData({ ...formData, outcomeA: e.target.value })}
              placeholder="例如：上涨"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">选项 B</label>
            <input
              type="text"
              required
              value={formData.outcomeB}
              onChange={(e) => setFormData({ ...formData, outcomeB: e.target.value })}
              placeholder="例如：下跌"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">结束时间</label>
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
            创建市场
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => navigate('/markets')}
            className="flex-1"
          >
            取消
          </Button>
        </div>
      </form>
    </div>
  )
}
