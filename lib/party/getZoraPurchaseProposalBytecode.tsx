import {
  Address,
  encodeAbiParameters,
  encodeFunctionData,
  parseAbiParameters,
  parseEther,
} from 'viem';
import { zoraCreator1155ImplABI } from '@zoralabs/protocol-deployments';
import getProposalBytecode from './getProposalBytecode';

const getZoraPurchaseProposalBytecode = (
  collectionAddress: Address,
  minter: Address,
  recipient: Address,
  ethPrice: number = 0,
  tokenId: bigint = 1n,
) => {
  const price = parseEther(ethPrice.toString());
  const zoraFee = parseEther('0.000777');
  const value = price + zoraFee;

  const quantity = 1n;
  const minterArguments = encodeAbiParameters(parseAbiParameters('address x, string y'), [
    recipient,
    'Based in Colombia 🇨🇴',
  ]);
  const mintReferral = recipient;
  const data = encodeFunctionData({
    abi: zoraCreator1155ImplABI,
    functionName: 'mintWithRewards',
    args: [minter, tokenId, quantity, minterArguments, mintReferral],
  });
  const encodedBytecodeProposalData = getProposalBytecode(collectionAddress, value, data);
  return encodedBytecodeProposalData;
};

export default getZoraPurchaseProposalBytecode;
