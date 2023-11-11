import Layout from '../Layout';
import leftArrow from '../../assets/leftArrow.svg';
import santa from '../../assets/santa.svg';
import GenreChips, { genres } from './GenreChips';
import MusicCard, { Music } from './musicCard';
import { useEffect, useState } from 'react';

const Musics = () => {
  const [musics, setMusics] = useState<Music[]>();
  const [filteredMusics, setFilteredMusics] = useState<Music[]>();

  // 장르 ID에서 이름으로 매핑
  const genreNamesById = Object.fromEntries(Object.entries(genres).map(([name, id]) => [id, name]));

  const handleGenreClick = (genreId: number) => {
    console.log('Selected Genre ID:', genreId);
    if (genreId === 0) {
      // '전체' 장르 선택 시 모든 음악 표시
      setFilteredMusics(musics);
    } else {
      // 장르 이름 찾기
      const genreName = genreNamesById[genreId];
      // 해당 장르 이름을 포함하는 음악만 필터링
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
        <img src={leftArrow} />
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
