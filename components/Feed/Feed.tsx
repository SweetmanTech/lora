import useRewardsDepositLogs from '@/hooks/useRewardsDepositLogs';

const Feed = () => {
  const { logs } = useRewardsDepositLogs();
  console.log('SWEETS LOGS', logs);

  return (
    <div>
      {logs.length > 0 ? (
        logs.map((log, index) => (
          <div key={index} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
            <p>
              <strong>Collection:</strong> {log.args.from}
            </p>
          </div>
        ))
      ) : (
        <p>No logs available.</p>
      )}
    </div>
  );
};

export default Feed;
