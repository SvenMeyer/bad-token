/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');

const infuraKey = "fd09fff3423341508083acb38eefb499";

// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

const mnemonic_mainnet = process.env.MNEMONIC;

// default mnemonic of Ganache GUI
const mnemonic_dev         = "tomorrow draft giggle design purchase daring goddess cute inquiry giant thumb journey";
const mnemonic_dev_candy   = "candy grid episode twelve survey average space piano puzzle tourist hero upon";
const mnemonic_dev_truffle = "pill few wear village tower boat error taste awful panda entire limb";

const infura_project_id = '';

const path = require("path");

module.exports = {

  plugins: ["truffle-security"],

  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  contracts_build_directory: path.join(__dirname, "client/src/contracts"),

  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.

    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },

    local_7545: {
      host: "127.0.0.1",
      port: 7545,            // Ganache GUI default port
      network_id: "*",       // Any network (default: none)
    },

    local_8545: {
      host: "127.0.0.1",
      port: 8545,            // Ganache GUI default port
      network_id: "*",       // Any network (default: none)
    },

    // Another network with more advanced options...
    // advanced: {
      // port: 8777,             // Custom port
      // network_id: 1342,       // Custom network
      // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
      // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
      // from: <address>,        // Account to send txs from (default: accounts[0])
      // websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },

    // Useful for deploying to a public network.
    // // It's important to wrap the provider as a function, otherwise truffle commands may hang in CI

    // Useful for private networks
    // private: {
      // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
      // network_id: 2111,   // This network is yours, in the cloud.
      // production: true    // Treats this network as if it was a public net. (default: false)
    // }

    // Ganache GUI
    gg: {
      provider: () => new HDWalletProvider(mnemonic_dev, 'http://127.0.0.1:7545'),
      network_id: '5777',
      // shareNonce:false,
      // websockets: true,	// enabled to use the confirmations listener or to hear Events using .on or .once
      // production: true,	// Treats this network as if it was a public net. (default: false)
    },

    // Gananche CLI
    gg_candy: {
      provider: () => new HDWalletProvider(mnemonic_dev_candy, 'http://127.0.0.1:7545'),
      network_id: '5777',
      // shareNonce:false,
      // websockets: true,	// enabled to use the confirmations listener or to hear Events using .on or .once
      // production: true,	// Treats this network as if it was a public net. (default: false)
    },

    truffle: {
      provider: () => new HDWalletProvider(mnemonic_dev_truffle, 'http://127.0.0.1:9545'),
      network_id: '*',
      // shareNonce:false,
      // websockets: true,	// enabled to use the confirmations listener or to hear Events using .on or .once
      // production: true,	// Treats this network as if it was a public net. (default: false)
    },

    ropsten: {
      provider: () => new HDWalletProvider(mnemonic_dev, `https://ropsten.infura.io/v3/` + infuraKey),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    kovan: {
      provider: () => new HDWalletProvider(mnemonic_dev, 'https://kovan.infura.io/v3/' + infuraKey),
      network_id: '*',
      gas: 4500000,
      gasPrice: 25000000000
    },

    kovan_wss: {
      provider: () => new HDWalletProvider(mnemonic_dev, 'wss://kovan.infura.io/ws/v3/' + infuraKey),
      network_id: '*',
      gas: 4500000,
      gasPrice: 25000000000
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic_dev, 'https://rinkeby.infura.io/v3/' + infuraKey),
      network_id: '*',
      gas: 4500000,
      gasPrice: 25000000000
    },

    mainnet: {
      provider: () => new HDWalletProvider(mnemonic_mainnet, 'https://mainnet.infura.io/v3/' + infuraKey),
      network_id: '*',
      gas: 4500000,
      gasPrice: 25000000000
    }

  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.7.5",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}
