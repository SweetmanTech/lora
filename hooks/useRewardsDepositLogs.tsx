import getRewardsDepositLogs from '@/lib/zora/getRewardsDepositLogs';
import { useEffect, useState } from 'react';
import { zoraCreator1155ImplABI } from '@zoralabs/protocol-deployments';
import { getPublicClient } from '@/lib/viem';
import { CHAIN_ID } from '@/lib/consts';
import getLink from '@/lib/getLink';

const useRewardsDepositLogs = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const init = async () => {
      const response = await getRewardsDepositLogs();
      setLogs(response as any);

      const zoraUriCall = {
        abi: zoraCreator1155ImplABI,
        functionName: 'uri',
        args: [1n],
      } as const;

      const zoraOwnerCall = {
        abi: zoraCreator1155ImplABI,
        functionName: 'owner',
      } as const;

      const publicClient = getPublicClient(CHAIN_ID);

      // Filter out duplicate addresses
      const uniqueAddresses = new Set();
      const filteredResponse = response.filter((log) => {
        if (uniqueAddresses.has(log.args.from)) {
          return false;
        } else {
          uniqueAddresses.add(log.args.from);
          return true;
        }
      });

      const contracts = filteredResponse.flatMap((log: any) => [
        { ...zoraUriCall, address: log.args.from },
        { ...zoraOwnerCall, address: log.args.from },
      ]);

      const multicallResults = await publicClient.multicall({
        contracts,
      });

      // Extract URI and Owner results
      const urlsAndContracts = filteredResponse.map((log: any, index: number) => ({
        url: getLink(multicallResults[index * 2].result),
        contract: log.args.from,
        owner: multicallResults[index * 2 + 1].result,
      }));

      const filteredUrlsAndContracts = urlsAndContracts.filter((entry) => entry.url !== null);

      const fetchUrls = async (entries: { url: string; contract: any; owner: string }[]) => {
        const promises = entries.map((entry) =>
          fetch(entry.url)
            .then((response) => response.json())
            .then((data) => ({
              data,
              collectionAddress: entry.contract,
              owner: entry.owner,
            }))
            .catch((error) => {
              console.error(`Failed to fetch ${entry.url}:`, error);
              return null;
            }),
        );
        return Promise.allSettled(promises);
      };

      try {
        const fetchedResults = await fetchUrls(filteredUrlsAndContracts);
        // Filter out failed fetches (where status is 'rejected' or value is null)
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

  return { logs, results };
};

export default useRewardsDepositLogs;
