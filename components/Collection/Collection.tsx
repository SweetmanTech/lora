import { Avatar, AvatarFallback } from '../Avatar';
import Button from '../Button';
import Input from '../Input';
import HeartIcon from './HeartIcon';
import MessageCircleIcon from './MessageCircleIcon';

const Collection = ({ collection }: any) => (
  <div className="border border-1px-[#ddd] rounded m-[10px] p-[10px] ">
    <p>
      <strong>Collection:</strong> {collection}
    </p>
    <div className="px-4">
      <div className="flex items-center space-x-2">
        <Avatar>
          <img src="/placeholder.svg" alt="randomuser" />
          <AvatarFallback>RU</AvatarFallback>
        </Avatar>
        <p className="font-bold">randomuser</p>
      </div>
      <img
        src="/placeholder.svg"
        alt="Artistic representation of a sunrise"
        className="mt-2 rounded-lg"
      />
      <p className="mt-2 font-semibold">rise</p>
      <Button variant="outline" className="mt-1">
        Mint
      </Button>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-1">
          <HeartIcon className="h-5 w-5" />
          <span>45</span>
          <MessageCircleIcon className="h-5 w-5" />
          <span>13</span>
        </div>
        <Input placeholder="Add a comment..." className="flex-1" />
      </div>
    </div>
  </div>
);

export default Collection;
