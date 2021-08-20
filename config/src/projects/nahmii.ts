import {
  DATA_AVAILABILITY,
  FORCE_TRANSACTIONS,
  RISK_VIEW,
  STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const nahmii: Project = {
  name: 'Nahmii 1.0',
  slug: 'nahmii',
  bridges: [
    {
      address: '0xCc8D82f6ba952966E63001c7B320EEF2Ae729099',
      sinceBlock: 6921581,
      tokens: ['NII'],
    },
  ],
  associatedToken: 'NII',
  details: {
    purpose: 'Payments',
    links: {
      websites: ['https://nahmii.io/'],
      apps: [],
      documentation: [
        'https://www.nahmii.io/public/file/nahmii.White.Paper.v2.0.pdf',
      ],
      explorers: [],
      repositories: ['https://github.com/hubiinetwork/nahmii-contracts'],
      socialMedia: [
        'https://blog.nahmii.io/',
        'https://twitter.com/nahmii_io',
        'https://t.me/nahmii',
        'https://discord.gg/GKTsUTH',
      ],
    },
    riskView: {
      stateValidation: RISK_VIEW.STATE_FP,
      dataAvailability: RISK_VIEW.DATA_EXTERNAL_DAC,
      upgradeability: RISK_VIEW.UPGRADABLE_NO,
      operatorCensoring: RISK_VIEW.CENSORING_WITHDRAW_L1,
      operatorDown: RISK_VIEW.DOWN_ESCAPE_U,
    },
    technology: {
      category: {
        name: 'State Pools',
      },
      stateCorrectness: {
        ...STATE_CORRECTNESS.FRAUD_PROOFS,
        description:
          'Because Nahmii is more similar to state channels than to any other technology fraud proofs are used to detect fraudulent exists as there is no state published on chain.',
        risks: [
          {
            category: 'Funds can be stolen if',
            text: 'there is no one that checks the published exists. Fraud proofs assume at least one honest and able validator.',
          },
        ],
        isIncomplete: true,
      },
      dataAvailability: {
        ...DATA_AVAILABILITY.GENERIC_OFF_CHAIN,
        description:
          DATA_AVAILABILITY.GENERIC_OFF_CHAIN.description +
          ' Nahmii uses a Data Availability Oracle. The Oracle is a game theory-based distributed intelligence tool that continually tests statements related to data availability.',
        risks: [
          ...DATA_AVAILABILITY.GENERIC_OFF_CHAIN.risks,
          {
            category: 'Users can be censored if',
            text: 'the committee restricts their access to the external data.',
          },
        ],
        isIncomplete: true,
      },
      operator: {
        name: 'The system has a centralized operator',
        description:
          'All transactions require signature from the operator which is run by the Nahmii foundation.',
        risks: [
          {
            category: 'Users can be censored if',
            text: 'the operator refuses to service their requests.',
          },
        ],
        references: [],
        isIncomplete: true,
      },
      forceTransactions: {
        ...FORCE_TRANSACTIONS.WITHDRAW,
        isIncomplete: true,
      },
      exitMechanisms: [
        {
          name: 'Regular exit',
          description:
            'Users submit exit requests and wait 5 days for the possibility of someone challenging that request',
          references: [],
          risks: [],
          isIncomplete: true,
        },
      ],
      massExit: {
        name: 'Mass exit problem does not occur',
        description:
          'Nahmii claims that the mass exit problem is solved via checkpoints and lack of time restrictions.',
        references: [],
        risks: [],
        isIncomplete: true,
      },
      contracts: {
        addresses: [
          {
            name: 'ClientFund',
            address: '0xCc8D82f6ba952966E63001c7B320EEF2Ae729099',
          },
          {
            name: 'BalanceTracker',
            address: '0xBC1bCC29Edf605095BF4fE7A953b7C115Ecc8Cad',
          },
        ],
        risks: [],
      },
    },
    news: [
      {
        date: '2021-05-11',
        name: 'DARMA Capital Bets $3M on Scalable DeFi Exchange With Settlement Finality',
        link: 'https://www.coindesk.com/darma-capital-bets-3m-on-scalable-defi-exchange-with-settlement-finality/',
      },
    ],

    // DEPRECATED ITEMS BELOW

    technologyName: 'State Pools',
    technologyDetails: 'User carried state, pooled security model',
    parameters: [
      {
        name: 'Primary use case',
        value: 'Payments',
      },
      {
        name: 'Hypothetical level of decentralization',
        value: 'High',
        sentiment: 'good',
      },
      {
        name: 'Current level of decentralization',
        value: 'Low',
        tooltip:
          'Operated by Nahmii foundation. All transactions require signature from the Operator.',
        sentiment: 'bad',
      },
      {
        name: 'Can funds be stolen by the operator?',
        value: 'No',
        tooltip:
          'Users can safely exit to L1 even if the operator is malicious.',
        sentiment: 'good',
      },
      {
        name: 'State Correctness',
        value: 'Fraud Proofs.',
      },
      {
        name: 'Data Availability',
        value: 'Off Chain.',
        tooltip:
          'Nahmii uses a Data Availability Oracle. The Oracle is a game theory-based distributed intelligence tool that continually tests statements related to data availability.',
      },
      {
        name: 'Mass Exit',
        value: 'Solved via checkpoints and lack of time restrictions.',
      },
      {
        name: 'Source Code',
        value:
          'The Nahmii 1.0 smart contracts are publicly available on Github and open source.',
      },
      {
        name: 'Privacy',
        value: 'No additional privacy compared to L1.',
      },
      {
        name: 'Sequencer',
        value: 'Centralized for Nahmii 1.0.',
      },
      {
        name: 'Force Transactions',
        value: 'Not a design goal for Nahmii 1.0.',
        sentiment: 'warning',
      },
      {
        name: 'Exit Mechanism',
        value: 'Trustless',
        tooltip:
          'Users submit exit requests and wait 5 days for the possibility of someone challenging that request',
        sentiment: 'good',
      },
    ],
    notes: {
      text: 'Nahmii 1.0 is live on Ethereum mainnet and targets payments. Nahmii 2.0 is a generalized L2 scaling solution with smart contract support that has a public testnet available.',
      pointers: [
        {
          name: 'Nahmii 1.0 Whitepaper',
          href: 'https://nahmii.github.io/assets/doc/nahmii-1-whitepaper.pdf',
        },
        {
          name: 'Nahmii 2.0 Whitepaper',
          href: 'https://www.nahmii.io/public/file/nahmii.White.Paper.v2.0.pdf',
        },
        {
          name: 'Nahmii 2.0 Testnet - Nahmii blog',
          href: 'https://blog.nahmii.io/nahmii-2-0-testnet-goes-live-integrated-with-metamask-releases-white-paper-94f61d603ed1',
        },
      ],
    },
  },
}