import { GITHUB_REPO } from '@/lib/consts';

const MadeBySweets = () => (
  <div className="flex flex-col gap-3">
    <a
      href="https://base.party.app/party/0x4273e913cb67fcc350065d850f942352b74c18a8"
      target="_blank"
      className="flex justify-center items-center gap-5"
    >
      Based in Colombia 🇨🇴
    </a>
    <a href={GITHUB_REPO} target="_blank" className="flex justify-center items-center gap-5">
      made with <img className="rounded rounded-full" src="/images/zorb.png" width="50" /> by
      sweetman
    </a>
  </div>
);

export default MadeBySweets;
