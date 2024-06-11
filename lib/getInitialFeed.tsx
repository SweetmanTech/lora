import fetchUrls from './zora/fetchUrls';
import getRewardsDepositLogs from './zora/getRewardsDepositLogs';
import getUriAndOwnerMulticall from './zora/getUriAndOwnerMulticall';

const getInitialFeed = async () => {
  const response = await getRewardsDepositLogs();
  const urlsAndContracts = await getUriAndOwnerMulticall(response);
  const filteredUrlsAndContracts = urlsAndContracts.filter((entry) => entry.url !== null);
  return await fetchUrls(filteredUrlsAndContracts as any);
};

export default getInitialFeed;
