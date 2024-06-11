import { parseAbiItem } from 'viem';
import { CHAIN_ID, PROTOCOL_REWARDS } from '../consts';
import { getPublicClient } from '../viem';

const getRewardsDepositLogs = async () => {
  const publicClient = getPublicClient(CHAIN_ID);
  const { number: toBlock } = await publicClient.getBlock({
    blockTag: 'latest',
  });
  const eventAbi =
    'event RewardsDeposit(address indexed creator,address indexed createReferral,address indexed mintReferral,address firstMinter,address zora,address from,uint256 creatorReward,uint256 createReferralReward,uint256 mintReferralReward,uint256 firstMinterReward,uint256 zoraReward)';
  const blockRange = 1000n;
  const fromBlock = toBlock - blockRange;
  return await publicClient.getLogs({
    address: PROTOCOL_REWARDS,
    event: parseAbiItem(eventAbi),
    fromBlock,
    toBlock,
  });
};

export default getRewardsDepositLogs;
