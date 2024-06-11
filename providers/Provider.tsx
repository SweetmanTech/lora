import { createContext, useContext, useMemo, useState } from 'react';
import { Address } from 'viem';

const Context = createContext<any>(null);

const Provider = ({ children }: any) => {
  const [proposalData, setProposalData] = useState<any>();
  const [fundsRecipient, setFundsRecipient] = useState<Address>();
  const [saleStrategy, setSaleStrategy] = useState<Address>(
    '0x04E2516A2c207E84a1839755675dfd8eF6302F0a',
  );
  const [collectionAddress, setCollectionAddress] = useState<Address>();
  const [tokenId, setTokenId] = useState<bigint>(1n);
  const [ethPrice, setEthPrice] = useState<number>(0);

  const value = useMemo(
    () => ({
      fundsRecipient,
      setFundsRecipient,
      collectionAddress,
      setCollectionAddress,
      saleStrategy,
      setSaleStrategy,
      proposalData,
      setProposalData,
      tokenId,
      setTokenId,
      ethPrice,
      setEthPrice,
    }),
    [
      fundsRecipient,
      setFundsRecipient,
      collectionAddress,
      setCollectionAddress,
      saleStrategy,
      setSaleStrategy,
      proposalData,
      setProposalData,
      tokenId,
      setTokenId,
      ethPrice,
      setEthPrice,
    ],
  );

  return <Context.Provider value={value as any}>{children}</Context.Provider>;
};

export const useProvider = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useProvider must be used within a Provider');
  }
  return context;
};

export default Provider;
