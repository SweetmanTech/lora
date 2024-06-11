import Input from '../Input';
import { useProvider } from '@/providers/Provider';

const InputGroup = () => {
  const { fundsRecipient, setFundsRecipient, collectionAddress, setCollectionAddress } =
    useProvider();

  return (
    <div className="flex flex-col gap-5">
      <Input
        placeholder="party (base)"
        value={fundsRecipient}
        onChange={(e: any) => setFundsRecipient(e.target.value)}
      />
      <Input
        placeholder="zora collection (base)"
        value={collectionAddress}
        onChange={(e: any) => setCollectionAddress(e.target.value)}
      />
    </div>
  );
};

export default InputGroup;
