import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import Layout from '../Layout';
import leftArrow from '../../assets/leftArrow.svg';
import star from '../../assets/star.svg';
import disney from '../../assets/disney.svg';

interface MovieDetails {
  ageRating: string;
  title: string;
  info: string;
  story: string;
  availableOTT: string[];
  similarContent: string[];
  trailerId: string;
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

  useEffect(() => {
    const fetchMovieDetails = async () => {
      // 실제 API 호출로 데이터를 가져오는 로직을 구현합니다.
      // 예시를 위해 하드코딩된 데이터를 사용합니다.
      setMovieDetails({
        ageRating: '15+',
        title: '영화 제목',
        info: '2023 | 1시간 45분 | 액션 / 모험',
        story: '영화의 줄거리가 여기에 들어갑니다...',
        availableOTT: ['Netflix', 'Disney+'],
        similarContent: ['영화 A', '영화 B', '영화 C'],
        trailerId: 'dQw4w9WgXcQ', // 유튜브 예고편 비디오 ID
      });
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <header className="flex items-center justify-start h-16 mx-6">
        <img src={leftArrow} />
      </header>
      <section className="flex flex-col mx-4">
        <div className="max-w-md mx-auto w-full mb-10">
          <MovieTrailer videoId={movieDetails.trailerId} />
        </div>
        <div className="border-b border-[#2C2D32]">
          <div className="p-2 bg-[#129148] text-xs text-white font-medium rounded w-max">All</div>
          <div className="mt-2.5 mb-6">
            <h1 className="font-bold text-2xl text-white">{movieDetails.title}</h1>
            <p className="text-xs text-white">{movieDetails.info}</p>
            <div className="flex">
              <span className="text-sm text-white mr-2">평점</span>
              <img src={star} alt="star" />
              <span className="text-sm text-white ml-0.5">2</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-4">
            <p className="text-xs text-white">줄거리</p>
            <p className="text-[8px] text-white">{movieDetails.story}</p>
          </div>
        </div>
        {/* 상영가능한 OTT */}
        <div className="mt-5">
          <h2 className="text-xs font-bold text-white mb-3">상영가능한 OTT</h2>
          <div className="flex">
            <img src={disney} alt="disney" />
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xs font-bold text-white mb-3">유사 콘텐츠</h2>
          <div className="flex gap-x-2" />
        </div>
        {/* <div>
          <div>
            <h2>Available on:</h2>
            <ul>
              {movieDetails.availableOTT.map((ott, index) => (
                <li key={index}>{ott}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Similar Movies:</h2>
            <ul>
              {movieDetails.similarContent.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
          </div>
        </div> */}
      </section>
    </Layout>
  );
};

export default MovieDetail;
