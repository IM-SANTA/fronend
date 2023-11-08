import Layout from '../Layout';
import GenreChips from './GenreChips';
import MovieCard from './MovieCard';

const movies = [
  {
    id: 1,
    posterUrl: '영화1_포스터_URL',
    title: '영화 제목 1',
    rating: 8.5,
  },
  {
    id: 2,
    posterUrl: '영화2_포스터_URL',
    title: '영화 제목 2',
    rating: 7.5,
  },
  {
    id: 3,
    posterUrl: '영화2_포스터_URL',
    title: '영화 제목 3',
    rating: 7.5,
  },
  {
    id: 4,
    posterUrl: '영화2_포스터_URL',
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
    <Layout title="산타극장" className="bg-white">
      <GenreChips onGenreClick={handleGenreClick} />
      <div className="container mx-auto px-4">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4"> */}
        <div className="grid grid-cols-2 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Movies;
