const getIpfsLink = (hash: string): string => {
  if (!hash) return '';
  return hash?.indexOf?.('ipfs://') > -1 ? hash.replace('ipfs://', `https://ipfs.io/ipfs/`) : hash;
};

export default getIpfsLink;
