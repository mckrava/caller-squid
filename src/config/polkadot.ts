import { ProcessorConfig } from './processorConfig';

const config: ProcessorConfig = {
  srcConfig: {
    chainName: 'polkadot',
    prefix: 'polkadot',
    dataSource: {
      archive: 'https://polkadot.archive.subsquid.io/graphql',
      chain: 'wss://rpc.polkadot.io'
    },
    batchSizeSaveThreshold: 3000
  }
};

export default config;