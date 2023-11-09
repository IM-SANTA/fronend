import { Link } from 'react-router-dom';
import star from '../../assets/star.svg';

interface MovieCardProps {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}

const MovieCard = ({ id, poster_path, title, vote_average }: MovieCardProps) => {
  return (
    <Link to={`/movie/${id}`} className="text-decoration-none justify-self-center">
      <div className="flex flex-col">
        <div>
          {poster_path && (
            <img className="object-cover rounded-lg" src={poster_path} alt={`Poster of the movie titled ${title}`} />
          )}
        </div>
        <div className="mt-4">
          <h5 className="text-xl font-bold tracking-tight text-white">{title}</h5>
          <div className="flex">
            <span className="text-sm text-white mr-2">평점</span>
            <img src={star} alt="star" />
            <span className="text-sm text-white ml-0.5">{vote_average.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
