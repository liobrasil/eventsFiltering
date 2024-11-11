const { ethers } = require("ethers");

const swapEventAbi = [
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
  address: "0x49aF5fB5de94C93Ee83Ad488Fe8CAb30b0ef35f2",
  topics: [
    "0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67",
  ],
  data: "0x00000000000000000000000000000000000000000000000007f8f970955d7c37fffffffffffffffffffffffffffffffffffffffffffffffffcc6d904aa6f24db0000000000000000000000000000000000000000a2cb46e402ea5d36db724fdc00000000000000000000000000000000000000000000000721649bd70e7d0b2affffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdca1",
};

async function decodeSwapEvent() {
  // Create an Interface instance with the event ABI
  const iface = new ethers.Interface(swapEventAbi);

  // Decode the Swap event
  const parsedLog = iface.parseLog(uniquePartialLogV3);
  console.log("parsedLog", parsedLog);

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
