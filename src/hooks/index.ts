import { ethers } from "ethers";

import { Contract } from "@ethersproject/contracts";
import { useContractCall, useContractFunction } from "@usedapp/core";
import countContractAbi from "../abi/countContractAbi.json";
import nftContractAbi from "../abi/nftContractAbi.json";
import { nftContractAddress, countContractAddress } from "../contracts";


const nftContractInterface = new ethers.utils.Interface(nftContractAbi);
const mintContract = new Contract(nftContractAddress, nftContractInterface);

export function useMint () {
  const [newItemId]  =
  useContractCall({
    abi: nftContractInterface,
    address: nftContractAddress,
    method: "mintNFT",
    args: [],
  }) ?? [];
  console.log(newItemId);
  return newItemId;
}

export function useContractMint (methodName: string) {
  const { state, send } = useContractFunction(mintContract, methodName, {});
  return { state, send };
}
