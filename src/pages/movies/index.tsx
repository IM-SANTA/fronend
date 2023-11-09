import Layout from '../Layout';
import GenreChips from './GenreChips';
import MovieCard from './MovieCard';
import leftArrow from '../../assets/leftArrow.svg';
import santa from '../../assets/santa.svg';
import { useEffect, useState } from 'react';

export interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  overview: string;
  vote_average: number;
  poster_path: string;
  genre_names: string[];
  release_date: string;
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string | number>(0);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const handleGenreClick = (genreId: string | number) => {
    setSelectedGenre(genreId);
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://rudolph.getsolaris.kr/movies');
      const movieData = await response.json();
      setMovies(movieData.data);
      setFilteredMovies(movieData.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (selectedGenre === 0) {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) => movie.genre_ids.includes(parseInt(selectedGenre as string)));
      setFilteredMovies(filtered);
    }
  }, [selectedGenre, movies]);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Layout>
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
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Movies;
