import { toast } from 'react-toastify';
import Button from '../Button';
import Input from '../Input';
import HeartIcon from './HeartIcon';
import MessageCircleIcon from './MessageCircleIcon';

const CollectionActions = () => {
  const handleClick = () => {
    toast.success('coming soon!!!');
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        <Button variant="outline" className="mt-1 bg-black px-3" onClick={handleClick}>
          Mint
        </Button>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-1">
          <HeartIcon onClick={handleClick} className="h-5 w-5" />
          <span>45</span>
          <MessageCircleIcon onClick={handleClick} className="h-5 w-5" />
          <span>13</span>
        </div>
        <Input placeholder="Add a comment..." className="flex-1" />
      </div>
    </div>
  );
};

export default CollectionActions;
