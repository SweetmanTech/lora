import useRewardsDepositLogs from '@/hooks/useRewardsDepositLogs';
import Collection from '../Collection';

const Feed = () => {
  const { logs } = useRewardsDepositLogs();

  return (
    <div>
      {logs.length > 0 ? (
        logs.map((log, index) => <Collection collection={log.args.from} key={index} />)
      ) : (
        <p>No logs available.</p>
      )}
    </div>
  );
};

export default Feed;
