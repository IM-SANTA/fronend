import { useState } from 'react';
import myLocation from '../../assets/myLocation.svg';
import modalClose from '../../assets/modalClose.svg';
import { regions } from './contents';

interface RegionSelectorProps {
  selectedRegion: string;
  selectedSubRegion: string;
  onSave: (region: string, subRegion: string) => void;
  onClose: () => void;
}

const RegionSelector = ({ selectedRegion, selectedSubRegion, onSave, onClose }: RegionSelectorProps) => {
  const [clickedRegion, setClickedRegion] = useState<string>('서울');
  const [clickedSubRegion, setClickedSubRegion] = useState<string>('서울전체');
  const mainRegions = Object.keys(regions);

  const handleRegionClick = (region: string) => {
    setClickedRegion(region);
    setClickedSubRegion(regions[region][0]);
  };

  const handleSubRegionClick = (subRegion: string) => {
    setClickedSubRegion(subRegion);
  };

  const handleReset = () => {
    setClickedRegion(selectedRegion);
    setClickedSubRegion(selectedSubRegion);
  };

  const handleSave = () => {
    onSave(clickedRegion, clickedSubRegion);
    onClose();
  };

  return (
    <div className="absolute bottom-0 flex w-full items-end h-full bg-dim rounded-t-2xl">
      <div className="flex flex-col justify-between h-4/6 w-full rounded-t-2xl bg-[#2C2C34]">
        <header className="flex items-center px-4 text-white rounded-t-2xl h-24 gap-4 border-b border-[#080818]">
          <span className="text-[26px]">관심지역 설정</span>
          <div className="flex grow justify-between">
            <div className="flex gap-x-1">
              <img src={myLocation} alt="myLocation" />
              <span className="text-xs">현재위치로 설정</span>
            </div>
            <button onClick={onClose}>
              <img src={modalClose} alt="close" />
            </button>
          </div>
        </header>
        <main className="flex grow overflow-y-auto scrollbar-hide">
          <section className="flex flex-col w-[36%] text-white bg-[#757585] overflow-y-auto scrollbar-hide">
            {mainRegions.map((region) => (
              <button
                key={region}
                className={`h-12 min-h-[48px] font-medium ${clickedRegion === region ? 'bg-[#F82C47]' : ''}`}
                onClick={() => handleRegionClick(region)}
              >
                {region}
              </button>
            ))}
          </section>
          <section className="flex flex-col w-full text-white overflow-y-auto scrollbar-hide">
            {regions[clickedRegion].map((subRegion) => (
              <button
                key={subRegion}
                className={`h-12 min-h-[48px] flex items-center justify-end ${
                  clickedSubRegion === subRegion ? 'bg-[#F82C47]' : ''
                }`}
                onClick={() => handleSubRegionClick(subRegion)}
              >
                <div className="w-3/4 text-left">{subRegion}</div>
              </button>
            ))}
          </section>
        </main>
        <footer className="flex text-white h-24 px-4 py-6 gap-2">
          <button className="w-1/3 text-xl border border-[#B0B0C2] rounded" onClick={handleReset}>
            초기화
          </button>
          <button className="w-full p-3 text-xl font-medium rounded bg-[#F82C47] text-white" onClick={handleSave}>
            관심지역 설정완료
          </button>
        </footer>
      </div>
    </div>
  );
};

export default RegionSelector;
