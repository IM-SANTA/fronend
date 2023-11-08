import Layout from '../Layout';
import GenreChips from './GenreChips';
import MovieCard from './MovieCard';
import leftArrow from '../../assets/leftArrow.svg';
import santa from '../../assets/santa.svg';

const movies = [
  {
    id: 1,
    posterUrl:
      'https://i.namu.wiki/i/yKCKWxSAUkSiQHdKyRckkA-miB0VZeIJcpgjtoYPcutixTS9IYbvpXpwD7TvmCIFEf5J52lSfXKFuJzH3UILLA.webp',
    title: '영화 제목 1',
    rating: 8.5,
  },
  {
    id: 2,
    posterUrl:
      'https://i.namu.wiki/i/yKCKWxSAUkSiQHdKyRckkA-miB0VZeIJcpgjtoYPcutixTS9IYbvpXpwD7TvmCIFEf5J52lSfXKFuJzH3UILLA.webp',
    title: '영화 제목 2',
    rating: 7.5,
  },
  {
    id: 3,
    posterUrl:
      'https://i.namu.wiki/i/yKCKWxSAUkSiQHdKyRckkA-miB0VZeIJcpgjtoYPcutixTS9IYbvpXpwD7TvmCIFEf5J52lSfXKFuJzH3UILLA.webp',
    title: '영화 제목 3',
    rating: 7.5,
  },
  {
    id: 4,
    posterUrl:
      'https://i.namu.wiki/i/yKCKWxSAUkSiQHdKyRckkA-miB0VZeIJcpgjtoYPcutixTS9IYbvpXpwD7TvmCIFEf5J52lSfXKFuJzH3UILLA.webp',
    title: '영화 제목 4',
    rating: 7.5,
  },
  // 추가 영화 데이터...
];

const Movies = () => {
  const handleGenreClick = (genreId: number) => {
    console.log('Selected Genre ID:', genreId);
    // 여기서 장르 ID에 따른 액션을 취할 수 있습니다.
  };

  return (
    <Layout className="bg-white">
      <header className="flex items-center justify-between h-16 mx-6">
        <img src={leftArrow} />
        <div className="flex gap-1 justify-center items-center">
          <img src={santa} alt="santa" />
          <span className="text-2xl font-medium text-white">산타극장</span>
        </div>
        <div />
      </header>
      <div className="flex flex-col mx-5 border-t border-[#2C2D32] py-5 gap-9">
        <GenreChips onGenreClick={handleGenreClick} />
        <section className="container">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4"> */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-9">
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Movies;
