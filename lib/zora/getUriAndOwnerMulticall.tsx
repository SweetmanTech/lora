import { zoraCreator1155ImplABI } from '@zoralabs/protocol-deployments';
import { getPublicClient } from '@/lib/viem';
import { CHAIN_ID } from '@/lib/consts';
import getLink from '../getLink';

const getUriAndOwnerMulticall = async (rawLogs: any[]) => {
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

  const uniqueAddresses = new Set();
  const filteredResponse = rawLogs.filter((log) => {
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

  return filteredResponse.map((log: any, index: number) => ({
    url: getLink(multicallResults[index * 2].result as string),
    contract: log.args.from,
    owner: multicallResults[index * 2 + 1].result,
  }));
};

export default getUriAndOwnerMulticall;
