import CopyButton from './CopyButton';

const Output = ({ text }: { text: string }) => (
  <div className="w-[444px] rounded-lg border border-black-200 p-1.5 flex items-center">
    {text && (
      <textarea
        value={text}
        className="w-full h-full bg-transparent"
        readOnly
        rows={4}
        wrap="soft"
      />
    )}
    {text && <CopyButton text={text} />}
  </div>
);

export default Output;
