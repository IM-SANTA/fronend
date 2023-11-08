import { Link } from 'react-router-dom';
import star from '../../assets/star.svg';

interface MovieCardProps {
  id: number;
  posterUrl: string;
  title: string;
  rating: number;
}

const MovieCard = ({ id, posterUrl, title, rating }: MovieCardProps) => {
  return (
    <Link to={`/movie/${id}`} className="text-decoration-none">
      <div className="flex flex-col bg-primary">
        {posterUrl && (
          <img className="object-cover rounded-lg" src={posterUrl} alt={`Poster of the movie titled ${title}`} />
        )}
        <div className="mt-4">
          <h5 className="text-xl font-bold tracking-tight text-white">{title}</h5>
          <div className="flex">
            <span className="text-sm text-white mr-2">평점</span>
            <img src={star} alt="star" />
            <span className="text-sm text-white ml-0.5">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
