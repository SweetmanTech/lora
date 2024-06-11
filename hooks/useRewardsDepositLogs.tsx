import { useEffect, useState } from 'react';
import getInitialFeed from '@/lib/getInitialFeed';

const useRewardsDepositLogs = () => {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const init = async () => {
      try {
        const fetchedResults = await getInitialFeed();
        const successfulResults = fetchedResults
          .filter((result) => result.status === 'fulfilled' && result.value !== null)
          .map((result: any) => result.value);
        setResults(successfulResults);
      } catch (err) {
        console.error(err);
      }
    };
    init();
  }, []);

  return { results };
};

export default useRewardsDepositLogs;
