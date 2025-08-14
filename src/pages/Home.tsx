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
          Decentralized
          <span className="text-primary-600"> Prediction Market</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Privacy-protected prediction market based on Zama FHE technology, keeping your bets fully encrypted and protecting your privacy and strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/markets">
            <Button size="lg">
              Start Predicting
            </Button>
          </Link>
          <Link to="/create">
            <Button variant="outline" size="lg">
              Create Market
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
          <h3 className="text-lg font-semibold">Privacy Protection</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Encrypt all data using FHE technology to protect your betting privacy
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto">
            <ChartBarIcon className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold">Decentralized</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Based on blockchain technology, no need to trust third-party intermediaries
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto">
            <CurrencyDollarIcon className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold">Transparent Settlement</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Smart contracts automatically execute to ensure fair and just settlement
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto">
            <UserGroupIcon className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold">Community Driven</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Anyone can create and participate in prediction markets
          </p>
        </div>
      </div>

      {/* Recent Markets */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Popular Markets</h2>
          <Link to="/markets">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for market cards */}
          <div className="card p-6 space-y-4">
            <h3 className="font-semibold">Bitcoin Price Prediction</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Predict Bitcoin's price trend by the end of 2025
            </p>
            <div className="flex justify-between text-sm">
              <span>Total Pool: 1000 ETH</span>
              <span>Ends: 2024-12-31</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


