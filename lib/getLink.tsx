import getArweaveLink from './getArweaveLink';
import getIpfsLink from './getIpfsLink';

const getLink = (hash: string): string => {
  if (hash?.indexOf?.('ipfs://') > -1) {
    return getIpfsLink(hash);
  }
  if (hash?.indexOf?.('ar://') > -1) {
    return getArweaveLink(hash);
  }
  return hash;
};

export default getLink;
