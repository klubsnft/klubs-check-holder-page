/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { KIP37Receiver, KIP37ReceiverInterface } from "../KIP37Receiver";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
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
        name: "ids",
        type: "uint256[]",
      },
      {
        name: "values",
        type: "uint256[]",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "onKIP37BatchReceived",
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
        name: "id",
        type: "uint256",
      },
      {
        name: "value",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "onKIP37Received",
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
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

export class KIP37Receiver__factory {
  static readonly abi = _abi;
  static createInterface(): KIP37ReceiverInterface {
    return new utils.Interface(_abi) as KIP37ReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KIP37Receiver {
    return new Contract(address, _abi, signerOrProvider) as KIP37Receiver;
  }
}
