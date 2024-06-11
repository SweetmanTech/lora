import getLink from '@/lib/getLink';
import CollectionAvatar from './CollectionAvatar';
import CollectionActions from './CollectionActions';

const Collection = ({ collection }: any) => (
  <div className="border border-1px-[#ddd] rounded m-[10px] p-[10px] ">
    <div className="px-4 flex flex-col items-center">
      <a className="w-full" href={`https://zora.co/${collection.owner}`} target="_blank">
        <CollectionAvatar address={collection.owner} />
      </a>
      <p className="mt-2 font-semibold">{collection.data.name}</p>
      <a href={`https://zora.co/collect/base:${collection.collectionAddress}/1`} target="_blank">
        <img
          src={getLink(collection.data.image)}
          alt="zora media"
          width={333}
          height={333}
          className="mt-2 rounded-lg"
        />
      </a>
      <CollectionActions />
    </div>
  </div>
);

export default Collection;
