import useRewardsDepositLogs from '@/hooks/useRewardsDepositLogs';
import Collection from '../Collection';

const Feed = () => {
  const { results } = useRewardsDepositLogs();
  return (
    <div>
      {results.length > 0 ? (
        results.map((log, index) => <Collection collection={log} key={index} />)
      ) : (
        <p>No logs available.</p>
      )}
    </div>
  );
};

export default Feed;
