import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  posterUrl: string;
  title: string;
  rating: number;
}

const MovieCard = ({ id, posterUrl, title, rating }: MovieCardProps) => {
  return (
    <Link to={`/movie/${id}`} className="text-decoration-none">
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md overflow-hidden">
        {posterUrl && (
          <img className="object-cover w-full h-96" src={posterUrl} alt={`Poster of the movie titled ${title}`} />
        )}
        <div className="p-5">
          <h5 className="text-lg font-bold tracking-tight text-gray-900">{title}</h5>
          <div className="flex mt-2.5 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-star-fill text-yellow-500 w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.457c-.146.318-.287.307-.44 0L1.05 12.31l-2.122-.327c-.25-.039-.465-.216-.573-.472L0 10.753l1.545-1.501-1.045-6.09c-.07-.412.055-.426.281-.028L5 6.904l2.957-1.561c.197-.104.392.02.392.28v9.836z" />
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-900">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
