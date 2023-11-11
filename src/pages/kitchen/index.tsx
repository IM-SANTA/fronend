import Layout from '../Layout';
import leftArrow from '../../assets/leftArrow.svg';
import cookie from '../../assets/cookie.svg';
import goToHome from '../../assets/goToHome.svg';
import GenreChips, { genres } from './GenreChips';
import MusicCard, { KitchenProps } from './KitchenCard';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Kitchen = () => {
  const navigate = useNavigate();
  const [kitchens, setKitchens] = useState<KitchenProps[]>();
  const [filteredKitchens, setFilteredKitchens] = useState<KitchenProps[]>();

  const genreNamesById = Object.fromEntries(Object.entries(genres).map(([name, id]) => [id, name]));

  const handleGenreClick = (genreId: number) => {
    if (genreId === 0) {
      setFilteredKitchens(kitchens);
    } else {
      const genreName = genreNamesById[genreId];
      const filtered = kitchens?.filter((kitchen) => {
        return kitchen.category === genreName;
      });
      setFilteredKitchens(filtered);
    }
  };

  const fetchKitchens = async () => {
    const url = `https://rudolph.getsolaris.kr/kitchens`;

    try {
      const response = await fetch(url);
      const kitchenData = await response.json();
      const kitchenWithId = kitchenData.data.map((kitchen: KitchenProps, index: number) => ({ ...kitchen, id: index }));
      setKitchens(kitchenWithId);
      setFilteredKitchens(kitchenWithId);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchKitchens();
  }, []);

  return (
    <Layout>
      <header className="flex items-center justify-between h-16 mx-6">
        <button onClick={() => navigate('/home')}>
          <img src={leftArrow} />
        </button>
        <div className="flex gap-1 justify-center items-center">
          <img src={cookie} alt="cookie" />
          <span className="text-2xl font-medium text-white">쿠키키친</span>
        </div>
        <button onClick={() => navigate('/home')}>
          <img src={goToHome} alt="goToHome" />
        </button>
      </header>
      <div className="flex flex-col mx-5 border-t border-[#2C2D32] py-5 gap-9">
        <GenreChips onGenreClick={handleGenreClick} />
        <section className="container">
          <div className="grid grid-cols-2 gap-x-3 gap-y-9">
            {filteredKitchens?.map((music) => <MusicCard key={music.id} {...music} />)}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Kitchen;
