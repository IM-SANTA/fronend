import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import Layout from '../Layout';

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
    // ...여기에 다른 YouTube player 매개변수를 추가할 수 있습니다.
  };
}

const MovieTrailer = ({ videoId }: MovieTrailerProps) => {
  const opts: YouTubePlayerOptions = {
    // height: '390',
    // width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="aspect-w-16 aspect-h-9 w-full">
      <YouTube videoId={videoId} opts={opts} />;
    </div>
  );
};

const MovieDetail: React.FC = () => {
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
    <Layout title={'영화상세'}>
      <div className="max-w-md mx-auto w-full">
        <MovieTrailer videoId={movieDetails.trailerId} />
      </div>
      <div>
        <img src="/path-to-age-rating-icon.png" alt="Age Rating" />
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.info}</p>
        <p>{movieDetails.story}</p>
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
      </div>
    </Layout>
  );
};

export default MovieDetail;
