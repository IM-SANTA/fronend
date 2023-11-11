import { Link } from 'react-router-dom';
import snowman from '../../assets/snowman.svg';

interface PlaceCardProps {
  id: number;
  title: string;
  address: string;
  link: string;
  images: { id: number; thumbnail_url: string }[];
}

const PlaceCard = ({ title, address, link, images }: PlaceCardProps) => {
  const thumbnail = images[0]?.thumbnail_url;
  const parts = address.split(' ');
  const firstPartTwoLetters = parts[0]?.substring(0, 2);
  const secondPart = parts[1] ? `, ${parts[1]}` : '';
  const city = firstPartTwoLetters + secondPart;
  const imgSrc = thumbnail ? thumbnail : snowman;

  return (
    <Link to={link} className="w-full text-decoration-none justify-self-center">
      <div className="flex flex-col w-full h-full">
        <div className="grow h-full">
          <img className="object-cover rounded-lg w-full h-full" src={imgSrc} alt={title} />
        </div>
        <div className="mt-4">
          <h5 className="text-xl font-bold tracking-tight text-white line-clamp-2">{title}</h5>
          <div className="flex">
            <span className="text-sm text-white mr-0.5">{city}</span>
            <span className="text-sm text-white">· 카페</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
