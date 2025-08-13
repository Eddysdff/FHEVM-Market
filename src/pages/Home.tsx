import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { 
  ChartBarIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          去中心化
          <span className="text-primary-600"> 预测市场</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          基于Zama FHE技术的隐私保护预测市场，让您的投注完全加密，保护您的隐私和策略。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/markets">
            <Button size="lg">
              开始预测
            </Button>
          </Link>
          <Link to="/create">
            <Button variant="outline" size="lg">
              创建市场
            </Button>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto">
            <ShieldCheckIcon className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold">隐私保护</h3>
          <p className="text-gray-600 dark:text-gray-300">
            使用FHE技术加密所有数据，保护您的投注隐私
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto">
            <ChartBarIcon className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold">去中心化</h3>
          <p className="text-gray-600 dark:text-gray-300">
            基于区块链技术，无需信任第三方中介
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto">
            <CurrencyDollarIcon className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold">透明结算</h3>
          <p className="text-gray-600 dark:text-gray-300">
            智能合约自动执行，确保公平公正的结算
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto">
            <UserGroupIcon className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold">社区驱动</h3>
          <p className="text-gray-600 dark:text-gray-300">
            任何人都可以创建和参与预测市场
          </p>
        </div>
      </div>

      {/* Recent Markets */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">热门市场</h2>
          <Link to="/markets">
            <Button variant="outline">查看全部</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for market cards */}
          <div className="card p-6 space-y-4">
            <h3 className="font-semibold">比特币价格预测</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              预测比特币在2024年底的价格走势
            </p>
            <div className="flex justify-between text-sm">
              <span>总池: 1000 ETH</span>
              <span>结束: 2024-12-31</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


