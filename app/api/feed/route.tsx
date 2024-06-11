import { NextRequest, NextResponse } from 'next/server';
import { zoraCreator1155ImplABI } from '@zoralabs/protocol-deployments';
import getRewardsDepositLogs from '@/lib/zora/getRewardsDepositLogs';
import { getPublicClient } from '@/lib/viem';
import { CHAIN_ID } from '@/lib/consts';
import getIpfsLink from '@/lib/getIpfsLink';

export const runtime = 'nodejs';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await getRewardsDepositLogs();

    const zora = {
      abi: zoraCreator1155ImplABI,
      functionName: 'uri',
      args: [1n],
    };

    const publicClient = getPublicClient(CHAIN_ID);

    const contracts = response.map((log) => ({
      ...zora,
      address: log.args.from,
    }));

    const multicallResults = await publicClient.multicall({
      contracts,
    });

    const urls = multicallResults.map((result) => getIpfsLink(result.result));

    const fetchUrls = async (urls) => {
      const promises = urls.map((url) => fetch(url).then((response) => response.json()));
      return Promise.all(promises);
    };

    const fetchedResults = await fetchUrls(urls);

    return NextResponse.json({ logs: response, results: fetchedResults });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
