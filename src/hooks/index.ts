import { ethers } from "ethers";

import { Contract } from "@ethersproject/contracts";
import { useContractCall, useContractFunction,useCall} from "@usedapp/core";
import nftContractAbi from "../abi/nftContractAbi.json";
import { nftContractAddress } from "../contracts";


const nftContractInterface = new ethers.utils.Interface(nftContractAbi);
const mintContract = new Contract(nftContractAddress, nftContractInterface);



{/** Mint */}
export function useMint () {
  const [newItemId]  =
  useContractCall({
    abi: nftContractInterface,
    address: nftContractAddress,
    method: "mintNFT",
    args: [],
  }) ?? [];
  return newItemId;
}


{/** Review User */}
export function useReview (score: number, reviewText : string | null | undefined, recipientAddress : string | null | undefined) {
  
  console.log("Score = " + score, ", Review text = " + reviewText + ", recipientAdress = " + recipientAddress)


  const {value, error} =
  
  useCall({
    contract: mintContract,
    method: "reviewUser",
    args: [score,reviewText,recipientAddress],
  }) ?? {};

  if (error) {
    console.error(error.message)
  }

  

  return value?.[0];
}


export function useFetchReviews (address : string | null | undefined) {
 


  const {value, error} =
  
  useCall({
    contract: mintContract,
    method: "returnPerson",
    args: [address],
  }) ?? {};

  if (error) {
    console.error(error.message)
  }
   
  console.log(value)

  return value;

  
}


{/** Generic */}
export function useContractMint (methodName: string) {
  const { state, send } = useContractFunction(mintContract, methodName, {});
  return { state, send };
}

export function useReviewFunction () {
  const { state, send } = useContractFunction(mintContract, "reviewUser", {});
  return { state, send };
}

export function useGetReview () {
  const {state,send} = useContractFunction(mintContract,"returnPerson",{});
  return {state,send};
}
