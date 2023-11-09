import { Link } from 'react-router-dom';

interface PlaceCardProps {
  id: number;
  title: string;
  address: string;
  images: { id: number; thumbnail_url: string }[];
}

const PlaceCard = ({ id, title, address, images }: PlaceCardProps) => {
  const thumbnail = images[0]?.thumbnail_url;

  return (
    <Link to={`/movie/${id}`} className="text-decoration-none justify-self-center">
      <div className="flex flex-col w-full h-full">
        <div className="grow">
          {thumbnail && <img className="object-cover rounded-lg w-full h-full" src={thumbnail} alt={title} />}
        </div>
        <div className="mt-4">
          <h5 className="text-xl font-bold tracking-tight text-white">{title}</h5>
          <div className="flex">
            <span className="text-sm text-white mr-2">{address}</span>
            <span className="text-sm text-white ml-0.5">카페</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
