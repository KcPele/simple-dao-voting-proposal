/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GovenanceToken,
  GovenanceTokenInterface,
} from "../GovenanceToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "pos",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "fromBlock",
            type: "uint32",
          },
          {
            internalType: "uint224",
            name: "votes",
            type: "uint224",
          },
        ],
        internalType: "struct ERC20Votes.Checkpoint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "s_maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x61014060405269d3c21bcecceda1000000600a553480156200002057600080fd5b506040518060400160405280600f81526020016e23b7bb32b93730b731b2aa37b5b2b760891b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600f81526020016e23b7bb32b93730b731b2aa37b5b2b760891b8152506040518060400160405280600281526020016111d560f21b8152508160039080519060200190620000bf9291906200077c565b508051620000d59060049060208401906200077c565b5050825160209384012082519284019290922060e08390526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818901819052818301979097526060810194909452608080850193909352308483018190528151808603909301835260c094850190915281519190960120905292909252610120525050600a54620001789033906200017e565b620008b6565b6200019582826200019960201b62000a1a1760201c565b5050565b620001b082826200025060201b62000aaa1760201c565b6001600160e01b03620001c46200033f8216565b1115620002315760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b60648201526084015b60405180910390fd5b6200024a600962000b956200034560201b17836200035a565b50505050565b6001600160a01b038216620002a85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640162000228565b8060026000828254620002bc91906200082e565b90915550506001600160a01b03821660009081526020819052604081208054839290620002eb9084906200082e565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3620001956000838362000511565b60025490565b60006200035382846200082e565b9392505050565b825460009081908015620003ac57856200037660018362000849565b8154811062000389576200038962000863565b60009182526020909120015464010000000090046001600160e01b0316620003af565b60005b6001600160e01b03169250620003c683858760201c565b91506000811180156200040a57504386620003e360018462000849565b81548110620003f657620003f662000863565b60009182526020909120015463ffffffff16145b156200047e5762000426826200052960201b62000ba11760201c565b866200043460018462000849565b8154811062000447576200044762000863565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b0316021790555062000503565b856040518060400160405280620004a0436200059860201b62000c0e1760201c565b63ffffffff168152602001620004c1856200052960201b62000ba11760201c565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b505050565b6200050c838383620005ff60201b62000c731760201c565b60006001600160e01b03821115620005945760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b606482015260840162000228565b5090565b600063ffffffff821115620005945760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b606482015260840162000228565b620006178383836200050c60201b62000ca51760201c565b6001600160a01b038381166000908152600760205260408082205485841683529120546200050c92918216911683818314801590620006565750600081115b156200050c576001600160a01b03831615620006e3576001600160a01b038316600090815260086020908152604082208291620006a091906200076e901b62000caa17856200035a565b91509150846001600160a01b0316600080516020620024f68339815191528383604051620006d8929190918252602082015260400190565b60405180910390a250505b6001600160a01b038216156200050c576001600160a01b03821660009081526008602090815260408220829162000727919062000345901b62000b9517856200035a565b91509150836001600160a01b0316600080516020620024f683398151915283836040516200075f929190918252602082015260400190565b60405180910390a25050505050565b600062000353828462000849565b8280546200078a9062000879565b90600052602060002090601f016020900481019282620007ae5760008555620007f9565b82601f10620007c957805160ff1916838001178555620007f9565b82800160010185558215620007f9579182015b82811115620007f9578251825591602001919060010190620007dc565b50620005949291505b8082111562000594576000815560010162000802565b634e487b7160e01b600052601160045260246000fd5b6000821982111562000844576200084462000818565b500190565b6000828210156200085e576200085e62000818565b500390565b634e487b7160e01b600052603260045260246000fd5b600181811c908216806200088e57607f821691505b60208210811415620008b057634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e0516101005161012051611bf06200090660003960006110ac015260006110fb015260006110d60152600061102f01526000611059015260006110830152611bf06000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80636fcfff45116100c3578063a457c2d71161007c578063a457c2d7146102e9578063a9059cbb146102fc578063c3cda5201461030f578063d505accf14610322578063dd62ed3e14610335578063f1127ed81461034857600080fd5b80636fcfff451461025757806370a082311461027f5780637ecebe00146102a85780638e539e8c146102bb57806395d89b41146102ce5780639ab24eb0146102d657600080fd5b80633644e515116101155780633644e515146101c757806339509351146101cf5780633a46b1a8146101e2578063587cde1e146101f55780635c19a95c146102395780635d6418471461024e57600080fd5b806306fdde0314610152578063095ea7b31461017057806318160ddd1461019357806323b872dd146101a5578063313ce567146101b8575b600080fd5b61015a610385565b60405161016791906118a1565b60405180910390f35b61018361017e366004611912565b610417565b6040519015158152602001610167565b6002545b604051908152602001610167565b6101836101b336600461193c565b61042f565b60405160128152602001610167565b610197610453565b6101836101dd366004611912565b610462565b6101976101f0366004611912565b610484565b610221610203366004611978565b6001600160a01b039081166000908152600760205260409020541690565b6040516001600160a01b039091168152602001610167565b61024c610247366004611978565b610503565b005b610197600a5481565b61026a610265366004611978565b610510565b60405163ffffffff9091168152602001610167565b61019761028d366004611978565b6001600160a01b031660009081526020819052604090205490565b6101976102b6366004611978565b610538565b6101976102c9366004611993565b610556565b61015a6105b2565b6101976102e4366004611978565b6105c1565b6101836102f7366004611912565b610648565b61018361030a366004611912565b6106c3565b61024c61031d3660046119bd565b6106d1565b61024c610330366004611a15565b610807565b610197610343366004611a7f565b61096b565b61035b610356366004611ab2565b610996565b60408051825163ffffffff1681526020928301516001600160e01b03169281019290925201610167565b60606003805461039490611af2565b80601f01602080910402602001604051908101604052809291908181526020018280546103c090611af2565b801561040d5780601f106103e25761010080835404028352916020019161040d565b820191906000526020600020905b8154815290600101906020018083116103f057829003601f168201915b5050505050905090565b600033610425818585610cb6565b5060019392505050565b60003361043d858285610dda565b610448858585610e4e565b506001949350505050565b600061045d611022565b905090565b600033610425818585610475838361096b565b61047f9190611b3d565b610cb6565b60004382106104da5760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064015b60405180910390fd5b6001600160a01b03831660009081526008602052604090206104fc9083611149565b9392505050565b61050d3382611206565b50565b6001600160a01b03811660009081526008602052604081205461053290610c0e565b92915050565b6001600160a01b038116600090815260056020526040812054610532565b60004382106105a75760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064016104d1565b610532600983611149565b60606004805461039490611af2565b6001600160a01b0381166000908152600860205260408120548015610635576001600160a01b0383166000908152600860205260409020610603600183611b55565b8154811061061357610613611b6c565b60009182526020909120015464010000000090046001600160e01b0316610638565b60005b6001600160e01b03169392505050565b60003381610656828661096b565b9050838110156106b65760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104d1565b6104488286868403610cb6565b600033610425818585610e4e565b834211156107215760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e6174757265206578706972656400000060448201526064016104d1565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b03881691810191909152606081018690526080810185905260009061079b906107939060a0016040516020818303038152906040528051906020012061127f565b8585856112cd565b90506107a6816112f5565b86146107f45760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e63650000000000000060448201526064016104d1565b6107fe8188611206565b50505050505050565b834211156108575760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016104d1565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886108868c6112f5565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006108e18261127f565b905060006108f1828787876112cd565b9050896001600160a01b0316816001600160a01b0316146109545760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016104d1565b61095f8a8a8a610cb6565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60408051808201909152600080825260208201526001600160a01b0383166000908152600860205260409020805463ffffffff84169081106109da576109da611b6c565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b610a248282610aaa565b6002546001600160e01b031015610a965760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b60648201526084016104d1565b610aa46009610b958361131d565b50505050565b6001600160a01b038216610b005760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104d1565b8060026000828254610b129190611b3d565b90915550506001600160a01b03821660009081526020819052604081208054839290610b3f908490611b3d565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3610b9160008383611496565b5050565b60006104fc8284611b3d565b60006001600160e01b03821115610c0a5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b60648201526084016104d1565b5090565b600063ffffffff821115610c0a5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b60648201526084016104d1565b6001600160a01b03838116600090815260076020526040808220548584168352912054610ca5929182169116836114a1565b505050565b60006104fc8284611b55565b6001600160a01b038316610d185760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104d1565b6001600160a01b038216610d795760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104d1565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610de6848461096b565b90506000198114610aa45781811015610e415760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104d1565b610aa48484848403610cb6565b6001600160a01b038316610eb25760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104d1565b6001600160a01b038216610f145760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104d1565b6001600160a01b03831660009081526020819052604090205481811015610f8c5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104d1565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610fc3908490611b3d565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161100f91815260200190565b60405180910390a3610aa4848484611496565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561107b57507f000000000000000000000000000000000000000000000000000000000000000046145b156110a557507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b8154600090815b818110156111ad57600061116482846115de565b90508486828154811061117957611179611b6c565b60009182526020909120015463ffffffff161115611199578092506111a7565b6111a4816001611b3d565b91505b50611150565b81156111f157846111bf600184611b55565b815481106111cf576111cf611b6c565b60009182526020909120015464010000000090046001600160e01b03166111f4565b60005b6001600160e01b031695945050505050565b6001600160a01b038281166000818152600760208181526040808420805485845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610aa48284836114a1565b600061053261128c611022565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006112de878787876115f9565b915091506112eb816116e6565b5095945050505050565b6001600160a01b03811660009081526005602052604090208054600181018255905b50919050565b8254600090819080156113685785611336600183611b55565b8154811061134657611346611b6c565b60009182526020909120015464010000000090046001600160e01b031661136b565b60005b6001600160e01b0316925061138483858763ffffffff16565b91506000811180156113c25750438661139e600184611b55565b815481106113ae576113ae611b6c565b60009182526020909120015463ffffffff16145b15611422576113d082610ba1565b866113dc600184611b55565b815481106113ec576113ec611b6c565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b0316021790555061148d565b85604051806040016040528061143743610c0e565b63ffffffff16815260200161144b85610ba1565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b610ca5838383610c73565b816001600160a01b0316836001600160a01b0316141580156114c35750600081115b15610ca5576001600160a01b03831615611551576001600160a01b038316600090815260086020526040812081906114fe90610caa8561131d565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611546929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610ca5576001600160a01b0382166000908152600860205260408120819061158790610b958561131d565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516115cf929190918252602082015260400190565b60405180910390a25050505050565b60006115ed6002848418611b82565b6104fc90848416611b3d565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561163057506000905060036116dd565b8460ff16601b1415801561164857508460ff16601c14155b1561165957506000905060046116dd565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156116ad573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166116d6576000600192509250506116dd565b9150600090505b94509492505050565b60008160048111156116fa576116fa611ba4565b14156117035750565b600181600481111561171757611717611ba4565b14156117655760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016104d1565b600281600481111561177957611779611ba4565b14156117c75760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104d1565b60038160048111156117db576117db611ba4565b14156118345760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104d1565b600481600481111561184857611848611ba4565b141561050d5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016104d1565b600060208083528351808285015260005b818110156118ce578581018301518582016040015282016118b2565b818111156118e0576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461190d57600080fd5b919050565b6000806040838503121561192557600080fd5b61192e836118f6565b946020939093013593505050565b60008060006060848603121561195157600080fd5b61195a846118f6565b9250611968602085016118f6565b9150604084013590509250925092565b60006020828403121561198a57600080fd5b6104fc826118f6565b6000602082840312156119a557600080fd5b5035919050565b803560ff8116811461190d57600080fd5b60008060008060008060c087890312156119d657600080fd5b6119df876118f6565b955060208701359450604087013593506119fb606088016119ac565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a031215611a3057600080fd5b611a39886118f6565b9650611a47602089016118f6565b95506040880135945060608801359350611a63608089016119ac565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611a9257600080fd5b611a9b836118f6565b9150611aa9602084016118f6565b90509250929050565b60008060408385031215611ac557600080fd5b611ace836118f6565b9150602083013563ffffffff81168114611ae757600080fd5b809150509250929050565b600181811c90821680611b0657607f821691505b6020821081141561131757634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611b5057611b50611b27565b500190565b600082821015611b6757611b67611b27565b500390565b634e487b7160e01b600052603260045260246000fd5b600082611b9f57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fdfea264697066735822122074634abfa08c308251501177c826d123f5dfcfac71f94e2e3c30bac7b989028f64736f6c63430008090033dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724";

type GovenanceTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GovenanceTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GovenanceToken__factory extends ContractFactory {
  constructor(...args: GovenanceTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "GovenanceToken";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GovenanceToken> {
    return super.deploy(overrides || {}) as Promise<GovenanceToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GovenanceToken {
    return super.attach(address) as GovenanceToken;
  }
  connect(signer: Signer): GovenanceToken__factory {
    return super.connect(signer) as GovenanceToken__factory;
  }
  static readonly contractName: "GovenanceToken";
  public readonly contractName: "GovenanceToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovenanceTokenInterface {
    return new utils.Interface(_abi) as GovenanceTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovenanceToken {
    return new Contract(address, _abi, signerOrProvider) as GovenanceToken;
  }
}
