export const CONTRACT_ADDRESSES = {
    MARKET_FACTORY: process.env.VITE_MARKET_FACTORY_ADDRESS || '',
    PREDICTION_MARKET: process.env.VITE_PREDICTION_MARKET_ADDRESS || '',
    ORACLE: process.env.VITE_ORACLE_ADDRESS || '',
    TOKEN: process.env.VITE_TOKEN_ADDRESS || '',
  }
  
  export const NETWORKS = {
    SEPOLIA: {
      chainId: 11155111,
      name: 'Sepolia',
      rpcUrl: 'https://sepolia.infura.io/v3/YOUR_INFURA_KEY',
      blockExplorer: 'https://sepolia.etherscan.io',
    },
  } as const


