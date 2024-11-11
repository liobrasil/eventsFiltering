const { ethers } = require("ethers");

const swapEventAbiV2 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "to", type: "address" },
    ],
    name: "Swap",
    type: "event",
  },
];

const swapEventAbiV3 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount0",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount1",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      { indexed: false, internalType: "int24", name: "tick", type: "int24" },
      {
        indexed: false,
        internalType: "uint128",
        name: "protocolFeesToken0",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "protocolFeesToken1",
        type: "uint128",
      },
    ],
    name: "Swap",
    type: "event",
  },
];

const uniquePartialLogV2 = {
  address: "0xafa189508699700ff29539ef9aed4e6a2f3b6580",
  topics: [
    "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
    "0x000000000000000000000000a08a96303abcaf78789104567cc59ba891de0864",
    "0x000000000000000000000000a08a96303abcaf78789104567cc59ba891de0864",
  ],
  data: "0x00000000000000000000000000000000000000000000000000006807962f0167000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002090a20115c24",
};

const uniquePartialLogV3 = {
  address: "0x247f51881d1e3ae0f759afb801413a6c948ef442",
  topics: [
    "0x19b47279256b2a23a1665c810c8d55a1758940ee09377d4f8d26497a3577dc83",
    "0x000000000000000000000000802b65b5d9016621e66003aed0b16615093f328b",
    "0x000000000000000000000000802b65b5d9016621e66003aed0b16615093f328b",
  ],
  data: "0xffffffffffffffffffffffffffffffffffffffffffffffa1d07010a00eeefde9000000000000000000000000000000000000000000000000004bcee86cd08634000000000000000000000000000000000000000000e5ac1b42f8c9a798d3070c000000000000000000000000000000000000000000000b437e57bca81c6439cefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe46480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a3f3163c1f",
};

async function decodeSwapEvent() {
  // Create an Interface instance with the event ABI
  const ifaceV2 = new ethers.Interface(swapEventAbiV2);
  const ifaceV3 = new ethers.Interface(swapEventAbiV3);

  // Decode the Swap event
  const parsedLog = ifaceV3.parseLog(uniquePartialLogV3);
  console.log("parsedLog keys: ", Object.keys(parsedLog));
  console.log("parsedLog: ", parsedLog);

  if (!parsedLog) {
    console.log("Wrong ABI");
    return;
  }

  // for V2
  if (parsedLog.name === "Swap") {
    console.log("Decoded Swap Event:");
    console.log("Sender:", parsedLog.args.sender);
    console.log("Amount0In:", parsedLog.args.amount0In.toString());
    console.log("Amount1In:", parsedLog.args.amount1In.toString());
    console.log("Amount0Out:", parsedLog.args.amount0Out.toString());
    console.log("Amount1Out:", parsedLog.args.amount1Out.toString());
    console.log("To:", parsedLog.args.to);
  }
}

decodeSwapEvent();
