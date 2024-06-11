import getRewardsDepositLogs from '@/lib/zora/getRewardsDepositLogs';
import { useEffect, useState } from 'react';

const useRewardsDepositLogs = () => {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    const init = async () => {
      const response = await getRewardsDepositLogs();
      setLogs(response as any);
    };
    init();
  }, []);

  return { logs };
};

export default useRewardsDepositLogs;
