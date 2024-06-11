import Feed from '../Feed';
import MadeBySweets from '../MadeBySweets';
import LandingPageHeader from './LandingPageHeader';

const LandingPageContent = () => (
  <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
    <LandingPageHeader />
    <Feed />
    <MadeBySweets />
  </div>
);

export default LandingPageContent;
