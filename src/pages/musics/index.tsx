import Layout from '../Layout';
import leftArrow from '../../assets/leftArrow.svg';
import santa from '../../assets/santa.svg';
import GenreChips from './GenreChips';
import MusicCard from './musicCard';

const musics = [
  {
    id: 1,
    thumbnail: 'https://img.kr.news.samsung.com/kr/wp-content/uploads/2014/08/0149.jpg',
    title: '노래 제목 1',
    creator: '가수 1',
  },
  {
    id: 2,
    thumbnail:
      'https://news.airbnb.com/wp-content/uploads/sites/4/2021/12/%E3%80%8A%E5%B0%8F%E9%AC%BC%E5%BD%93%E5%AE%B6%E3%80%8B%E5%8F%96%E6%99%AF%E5%9C%B0%E5%AE%A2%E5%8E%85.jpg',
    title: '노래 제목 2',
    creator: '가수 2',
  },
  {
    id: 3,
    thumbnail: 'https://img.kr.news.samsung.com/kr/wp-content/uploads/2014/08/0149.jpg',
    title: '노래 제목 3',
    creator: '가수 3',
  },
  {
    id: 4,
    thumbnail: 'https://img.kr.news.samsung.com/kr/wp-content/uploads/2014/08/0149.jpg',
    title: '노래 제목 4',
    creator: '가수 4',
  },
  // 추가 노래 데이터...
];

const Musics = () => {
  const handleGenreClick = (genreId: number) => {
    console.log('Selected Genre ID:', genreId);
    // 여기서 장르 ID에 따른 액션을 취할 수 있습니다.
  };

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
            {musics.map((music) => (
              <MusicCard
                key={music.id}
                id={music.id}
                thumbnail={music.thumbnail}
                title={music.title}
                creator={music.creator}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Musics;
