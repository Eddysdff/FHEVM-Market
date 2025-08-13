import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from './ui/Button'

export function ConnectButton() {
  const { address, isConnected } = useAccount()
  const { connect, connectors, isPending } = useConnect()
  const { disconnect } = useDisconnect()

  if (isConnected) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </span>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => disconnect()}
        >
          断开连接
        </Button>
      </div>
    )
  }

  return (
    <div className="flex space-x-2">
      {connectors.map((connector) => (
        <Button
          key={connector.uid}
          variant="primary"
          size="sm"
          disabled={!connector.ready || isPending}
          onClick={() => connect({ connector })}
        >
          {isPending ? '连接中...' : `连接 ${connector.name}`}
        </Button>
      ))}
    </div>
  )
}
