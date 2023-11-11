import Layout from '../Layout';
import leftArrow from '../../assets/leftArrow.svg';
import santa from '../../assets/santa.svg';
import GenreChips, { genres } from './GenreChips';
import MusicCard, { Music } from './musicCard';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Musics = () => {
  const navigate = useNavigate();
  const [musics, setMusics] = useState<Music[]>();
  const [filteredMusics, setFilteredMusics] = useState<Music[]>();

  const genreNamesById = Object.fromEntries(Object.entries(genres).map(([name, id]) => [id, name]));

  const handleGenreClick = (genreId: number) => {
    if (genreId === 0) {
      setFilteredMusics(musics);
    } else {
      const genreName = genreNamesById[genreId];
      const filtered = musics?.filter((music) => music?.categories.includes(genreName));
      setFilteredMusics(filtered);
    }
  };

  const fetchMusics = async () => {
    const url = `https://rudolph.getsolaris.kr/musics`;

    try {
      const response = await fetch(url);
      const musicData = await response.json();
      const musicsWithId = musicData.data.map((music: Music, index: number) => ({ ...music, id: index }));
      setMusics(musicsWithId);
      setFilteredMusics(musicsWithId);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMusics();
  }, []);

  return (
    <Layout>
      <header className="flex items-center justify-between h-16 mx-6">
        <button onClick={() => navigate('/home')}>
          <img src={leftArrow} />
        </button>
        <div className="flex gap-1 justify-center items-center">
          <img src={santa} alt="santa" />
          <span className="text-2xl font-medium text-white">DJ루돌프</span>
        </div>
        <div />
      </header>
      <div className="flex flex-col mx-5 border-t border-[#2C2D32] py-5 gap-9">
        <GenreChips onGenreClick={handleGenreClick} />
        <section className="container">
          <div className="grid grid-cols-2 gap-x-3 gap-y-9">
            {filteredMusics?.map((music) => <MusicCard key={music.id} {...music} />)}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Musics;
