export const CONTRACT_ADDRESS = '0xF68814d9f4548610A4608dA786501B95d01085f0'; // etherscan 의 contract address

export const CONTRACT_ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_canceller',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_reason',
        type: 'string',
      },
    ],
    name: 'ContractCanceled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_contractAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_lessor',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_tenant',
        type: 'address',
      },
    ],
    name: 'ContractCompleted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_contractAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_lessor',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_rentAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_propertyAddress',
        type: 'string',
      },
    ],
    name: 'ContractInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_signer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: '_isTenant',
        type: 'bool',
      },
    ],
    name: 'ContractSigned',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_tenant',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_tenantSignaturePad',
        type: 'string',
      },
    ],
    name: 'TenantSignatureUpdated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'contractDetails',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'dataHash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'lessorSignatureHash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'tenantSignatureHash',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'contractStatus',
    outputs: [
      {
        internalType: 'enum RealEstateAgreement.ContractStatus',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lessorPublicKey',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'signatures',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tenantPublicKey',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getContractStatus',
    outputs: [
      {
        internalType: 'enum RealEstateAgreement.ContractStatus',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getContractDetails',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tenant',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_rentAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_deposit',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_propertyAddress',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_specialTerms',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_lessorSignaturePad',
        type: 'string',
      },
    ],
    name: 'sendContract',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_tenantSignaturePad',
        type: 'string',
      },
    ],
    name: 'updateTenantSignaturePad',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_signature',
        type: 'bytes',
      },
    ],
    name: 'signContract',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'completeTransaction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_reason',
        type: 'string',
      },
    ],
    name: 'cancelContract',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
