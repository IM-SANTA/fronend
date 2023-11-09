/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import leftArrow from '../../assets/leftArrow.svg';
import snowman from '../../assets/snowman.svg';
import location from '../../assets/location.svg';
import arrow from '../../assets/arrow.svg';
import close from '../../assets/close.svg';

import Layout from '../Layout';
import GenreChips from './GenreChips';
import PlaceCard from './PlaceCard';

interface image {
  id: number;
  thumbnail_url: string;
}

export interface Place {
  id: number;
  title: string;
  category: string;
  address: string;
  mapx: string;
  mapy: string;
  images: image[];
}

const mockPlaces: Place[] = [
  {
    id: 1,
    title: '남산타워',
    category: '랜드마크',
    address: '서울특별시 용산구 남산공원길 105',
    mapx: '126.988227',
    mapy: '37.551169',
    images: [
      {
        id: 1,
        thumbnail_url: 'https://ak-d.tripcdn.com/images/1i65b2215c11x5k3415B1.jpg?proc=source/trip',
      },
    ],
  },
  {
    id: 2,
    title: '한강공원',
    category: '자연',
    address: '서울특별시 서초구 잠원동',
    mapx: '126.987750',
    mapy: '37.519377',
    images: [
      {
        id: 2,
        thumbnail_url: 'https://img.einet.kr/P202101016/travel/4564370/01.jpg?v=1611643241',
      },
    ],
  },
  {
    id: 3,
    title: '롯데월드타워',
    category: '쇼핑/엔터테인먼트',
    address: '서울특별시 송파구 올림픽로 300',
    mapx: '127.102490',
    mapy: '37.513950',
    images: [
      {
        id: 3,
        thumbnail_url: 'https://image.newsis.com/2021/09/13/NISI20210913_0000828102_web.jpg',
      },
    ],
  },
  {
    id: 4,
    title: '남산타워',
    category: '랜드마크',
    address: '서울특별시 용산구 남산공원길 105',
    mapx: '126.988227',
    mapy: '37.551169',
    images: [
      {
        id: 1,
        thumbnail_url: 'https://ak-d.tripcdn.com/images/1i65b2215c11x5k3415B1.jpg?proc=source/trip',
      },
    ],
  },
  {
    id: 5,
    title: '한강공원',
    category: '자연',
    address: '서울특별시 서초구 잠원동',
    mapx: '126.987750',
    mapy: '37.519377',
    images: [
      {
        id: 2,
        thumbnail_url: 'https://img.einet.kr/P202101016/travel/4564370/01.jpg?v=1611643241',
      },
    ],
  },
  {
    id: 6,
    title: '롯데월드타워',
    category: '쇼핑/엔터테인먼트',
    address: '서울특별시 송파구 올림픽로 300',
    mapx: '127.102490',
    mapy: '37.513950',
    images: [
      {
        id: 3,
        thumbnail_url: 'https://image.newsis.com/2021/09/13/NISI20210913_0000828102_web.jpg',
      },
    ],
  },
];

const Outdoor = () => {
  const navigate = useNavigate();
  const [region, setRegion] = useState<string | number>('서울시');
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['서울', '카페']);
  const [places, setPlaces] = useState<Place[]>([]);

  const handleGenreClick = () => {
    console.log('clicked!');
  };

  return (
    <Layout>
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
        <div className="flex items-center text-white border-r pr-4 mr-4 flex-shrink-0">
          <img src={location} alt="location" />
          <span className="ml-1 mr-2 font-bold">{region}</span>
          <img src={arrow} alt="arrow" />
        </div>
        <GenreChips onGenreClick={handleGenreClick} />
      </section>
      {/* <div className="flex flex-col mx-5 border-t border-[#2C2D32] py-5 gap-9"> */}
      <section className="flex gap-x-4 mx-5">
        {selectedOptions.map((option, index) => (
          <div key={index} className="flex gap-x-1">
            <span className="text-white font-medium">{option}</span>
            <img src={close} alt="close" />
          </div>
        ))}
      </section>
      <section className="container">
        <div className="grid grid-cols-2 gap-x-3 gap-y-9 mx-5 my-4">
          {mockPlaces.map((place) => (
            <PlaceCard key={place.id} {...place} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Outdoor;
