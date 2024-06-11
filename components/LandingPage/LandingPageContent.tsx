import { useEffect, useState } from 'react';
import MadeBySweets from '../MadeBySweets';
import LandingPageHeader from './LandingPageHeader';
import { getPublicClient } from '@/lib/viem';
import { base } from 'viem/chains';
import { parseAbiItem } from 'viem';

const LandingPageContent = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const init = async () => {
      const publicClient = getPublicClient(base.id);
      const { number: latestBlockNumber } = await publicClient.getBlock({
        blockTag: 'latest',
      });
      console.log('block', latestBlockNumber);

      const response = await publicClient.getLogs({
        address: '0x7777777F279eba3d3Ad8F4E708545291A6fDBA8B',
        event: parseAbiItem(
          'event RewardsDeposit(address indexed creator,address indexed createReferral,address indexed mintReferral,address firstMinter,address zora,address from,uint256 creatorReward,uint256 createReferralReward,uint256 mintReferralReward,uint256 firstMinterReward,uint256 zoraReward)',
        ),
        fromBlock: latestBlockNumber - 1000n,
        toBlock: latestBlockNumber,
      });
      setLogs(response as any);
    };
    init();
  }, []);

  console.log('SWEETS LOGS', logs);

  return (
    <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
      <LandingPageHeader />
      <MadeBySweets />
    </div>
  );
};

export default LandingPageContent;
