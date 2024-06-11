import getProposalData from '@/lib/party/getProposalData';
import Button from '../Button';
import { useProvider } from '@/providers/Provider';

const GenerateButton = () => {
  const { collectionAddress, saleStrategy, fundsRecipient, setProposalData, ethPrice, tokenId } =
    useProvider();

  const handleClick = () => {
    const response = getProposalData(
      collectionAddress,
      saleStrategy,
      fundsRecipient,
      ethPrice,
      tokenId,
    );
    setProposalData(response);
  };

  return (
    <Button onClick={handleClick} className="bg-black px-12 py-4 rounded-3xl" di>
      Generate
    </Button>
  );
};

export default GenerateButton;
