import { useProvider } from '@/providers/Provider';
import Input from '../Input';

const FundsRecipientInput = () => {
  const { setFundsRecipient } = useProvider();

  const handleChange = (e: any) => {
    setFundsRecipient(e.target.value);
  };

  return <Input onChange={handleChange} placeholder="zora collection address" />;
};

export default FundsRecipientInput;
