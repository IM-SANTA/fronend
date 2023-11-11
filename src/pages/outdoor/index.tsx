/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import leftArrow from '../../assets/leftArrow.svg';
import snowman from '../../assets/snowman.svg';
import location from '../../assets/location.svg';
import arrow from '../../assets/arrow.svg';
// import close from '../../assets/close.svg';

import Layout from '../Layout';
import CategoryChips from './CategoryChips';
import PlaceCard from './PlaceCard';
import RegionSelector from './RegionSelector';

interface image {
  id: number;
  thumbnail_url: string;
}

export interface Place {
  id: number;
  title: string;
  category: string;
  link: string;
  address: string;
  mapx: string;
  mapy: string;
  images: image[];
}

const Outdoor = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState<string>('전국');
  const [selectedSubRegion, setSelectedSubRegion] = useState<string>('서울');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [places, setPlaces] = useState<Place[]>([]);

  const handleRegionClick = () => {
    setIsModalOpen(true);
  };

  const handleRegionOnClose = () => {
    setIsModalOpen(false);
  };

  const handleRegionOnSave = (region: string, subRegion: string) => {
    setSelectedRegion(region);
    setSelectedSubRegion(subRegion);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedOption(category);
  };

  const fetchPlaces = async (subRegion: string, option: string, latitude = '', longitude = '') => {
    const subRegionQueryParam = subRegion.replace(/전체/, '');
    const optionQueryParam = option ? `, ${option}` : '';
    const mapxParam = latitude ? `mapx=${latitude}&` : '';
    const mapyParam = longitude ? `mapy=${longitude}&` : '';
    const url = `https://rudolph.getsolaris.kr/places?query=${subRegionQueryParam}${optionQueryParam}${mapxParam}${mapyParam}`;

    try {
      const response = await fetch(url);
      const placeData = await response.json();
      setPlaces(placeData.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPlaces(selectedSubRegion, selectedOption);
  }, [selectedSubRegion, selectedOption]);

  return (
    <Layout position="relative">
      <header className="flex items-center justify-between h-16 mx-6">
        <button onClick={() => navigate('/home')}>
          <img src={leftArrow} />
        </button>
        <div className="flex gap-1 justify-center items-center">
          <img src={snowman} alt="santa" />
          <span className="text-2xl font-medium text-white">오픈더도어</span>
        </div>
        <div />
      </header>
      <section className="flex mx-5 border-t border-[#2C2D32] py-5">
        <div
          className="flex items-center text-white border-r pr-4 mr-4 flex-shrink-0 cursor-pointer"
          onClick={handleRegionClick}
        >
          <img src={location} alt="location" />
          <span className="ml-1 mr-2 font-bold">{selectedSubRegion.replace(/전체/, '')}</span>
          <img src={arrow} alt="arrow" />
        </div>
        <CategoryChips onCategoryClick={handleCategoryClick} />
      </section>
      {/* <section className="flex gap-x-4 mx-5">
        {[selectedSubRegion.replace(/전체/, ''), selectedOption].map(
          (option, index) =>
            option && (
              <div key={index} className="flex gap-x-1">
                <span className="text-white font-medium">{option}</span>
                <img src={close} alt="close" />
              </div>
            ),
        )}
      </section> */}
      <section className="container">
        <div className="grid grid-cols-2 gap-x-3 gap-y-9 mx-5 my-4">
          {places?.map((place) => <PlaceCard key={place.id} {...place} />)}
        </div>
      </section>
      {isModalOpen && (
        <RegionSelector
          selectedRegion={selectedRegion}
          selectedSubRegion={selectedSubRegion}
          onClose={handleRegionOnClose}
          onSave={handleRegionOnSave}
        />
      )}
    </Layout>
  );
};

export default Outdoor;
