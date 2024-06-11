import { AbiCoder } from 'ethers';
import { Address } from 'viem';

const getProposalBytecode = (target: Address, value: bigint, data = '0x') => {
  const abiCoder = AbiCoder.defaultAbiCoder();

  const encodedBytecodeProposalData = abiCoder.encode(
    [
      'tuple(address payable target,uint256 value,bytes data,bool optional,bytes32 expectedResultHash)[]',
    ],
    [
      [
        {
          target,
          value,
          data,
          optional: false,
          expectedResultHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
        },
      ],
    ],
  );

  return encodedBytecodeProposalData;
};

export default getProposalBytecode;
