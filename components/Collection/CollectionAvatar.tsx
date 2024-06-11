import { zorbImageDataURI } from '@zoralabs/zorb';
import { Avatar } from '../Avatar';
import { useMemo } from 'react';

const CollectionAvatar = ({ address }: any) => {
  const zorbImage = useMemo(() => zorbImageDataURI(address), [address]);

  const truncatedAddress = useMemo(() => {
    if (address.length > 8) {
      return `${address.slice(0, 4)}...${address.slice(-4)}`;
    }
    return address;
  }, [address]);

  return (
    <div className="flex items-center space-x-2">
      <Avatar>
        <img src={zorbImage} alt="zorb" />
      </Avatar>
      <p className="font-bold">{truncatedAddress}</p>
    </div>
  );
};

export default CollectionAvatar;
