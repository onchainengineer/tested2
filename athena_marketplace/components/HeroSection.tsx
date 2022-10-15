import { MbText } from 'mintbase-ui';

function HeroSection(): JSX.Element {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="items-center justify-center">
        <MbText className="text-3xl uppercase p-4 border-gray-100">
          Marketplace
        </MbText>
        <MbText className="text-2xl"> </MbText>
      </div>
    </div>
  );
}

export default HeroSection;
