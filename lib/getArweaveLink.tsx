const getArweaveLink = (hash: string): string => {
  if (!hash) return '';
  return hash?.indexOf?.('ar://') > -1 ? hash.replace('ar://', `https://ar-io.dev/`) : hash;
};

export default getArweaveLink;
