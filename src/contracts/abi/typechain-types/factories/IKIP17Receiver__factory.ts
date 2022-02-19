/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IKIP17Receiver,
  IKIP17ReceiverInterface,
} from "../IKIP17Receiver";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "operator",
        type: "address",
      },
      {
        name: "from",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "onKIP17Received",
    outputs: [
      {
        name: "",
        type: "bytes4",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IKIP17Receiver__factory {
  static readonly abi = _abi;
  static createInterface(): IKIP17ReceiverInterface {
    return new utils.Interface(_abi) as IKIP17ReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKIP17Receiver {
    return new Contract(address, _abi, signerOrProvider) as IKIP17Receiver;
  }
}
