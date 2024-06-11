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

export default fetchUrls;
