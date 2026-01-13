export const MEMO_QUIZ_REWARDS_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "sessionId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "score",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
