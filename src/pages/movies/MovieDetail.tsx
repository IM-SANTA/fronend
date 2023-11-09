import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import Layout from '../Layout';
import leftArrow from '../../assets/leftArrow.svg';
import star from '../../assets/star.svg';

// interface MovieDetails {
//   ageRating: string;
//   title: string;
//   info: string;
//   story: string;
//   similarContent: string[];
//   trailerId: string;
// }

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  genres: { id: number; name: string }[];
  release_date: string;
  runtime: string;
  tagline: string;
  production_countries: { iso_3166_1: string; name: string }[];
  videos: { id: string; key: string; name: string; url: string }[];
  similar: {
    id: number;
    title: string;
    genre_ids: number[];
    overview: string;
    vote_average: number;
    poster_path: string;
    genre_names: string[];
  }[];
}

interface MovieTrailerProps {
  videoId: string;
}

interface YouTubePlayerOptions {
  height?: string;
  width?: string;
  playerVars?: {
    autoplay?: 0 | 1;
    rel?: 0 | 1;
  };
}

const MovieTrailer = ({ videoId }: MovieTrailerProps) => {
  const opts: YouTubePlayerOptions = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      rel: 0,
    },
  };

  return (
    <div className="aspect-w-16 aspect-h-9 w-full">
      <YouTube videoId={videoId} opts={opts} />;
    </div>
  );
};

const MovieDetail = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  const trailer = movieDetails?.videos.find((video) => video.name.includes('예고'))?.url || movieDetails?.videos[0].url;
  const extractVideoId = (url: string) => {
    const match = url?.match(/(?:\?|&)v=([^&]+)/);
    return match ? match[1] : null;
  };

  const videoId = trailer && extractVideoId(trailer);
  const country = movieDetails?.production_countries[0].name;
  const releaseYear = movieDetails?.release_date.slice(0, 4);
  const genres = movieDetails?.genres.map((genre) => genre.name).join(', ');
  const movieInfo = `${country} \u00B7 ${releaseYear} \u00B7 ${genres} \u00B7 ${movieDetails?.runtime}분`;

  const fetchMovieData = async () => {
    try {
      const response = await fetch(`https://rudolph.getsolaris.kr/movies/${movieId}`);
      const movieData = await response.json();
      setMovieDetails(movieData.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <header className="flex items-center justify-start h-16 mx-6">
        <img src={leftArrow} />
      </header>
      <section className="flex flex-col mx-4">
        {videoId && (
          <div className="mb-10">
            <MovieTrailer videoId={videoId} />
          </div>
        )}
        <div className="border-b border-[#2C2D32]">
          <div className="p-2 bg-[#129148] text-xs text-white font-medium rounded w-max">All</div>
          <div className="mt-2.5 mb-6">
            <h1 className="font-bold text-2xl text-white">{movieDetails.title}</h1>
            <p className="text-xs text-white">{movieInfo}</p>
            <div className="flex">
              <span className="text-sm text-white mr-2">평점</span>
              <img src={star} alt="star" />
              <span className="text-sm text-white ml-0.5">{movieDetails.vote_average.toFixed(1)}</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-4">
            <p className="text-xs text-white">줄거리</p>
            <p className="text-[8px] text-white">{movieDetails.overview}</p>
          </div>
        </div>
        <div className="my-6">
          <h2 className="text-xs font-bold text-white mb-3">유사 콘텐츠</h2>
          <div className="flex gap-x-2 overflow-scroll">
            {movieDetails.similar.map((movie) => (
              <img
                width="33%"
                key={movie.id}
                src={movie.poster_path}
                alt={movie.title}
                className="rounded flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MovieDetail;
