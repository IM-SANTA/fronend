import { Link } from 'react-router-dom';

interface MusicCardProps {
  id: number;
  thumbnail: string;
  title: string;
  creator: string;
}

const MusicCard = ({ id, thumbnail, title, creator }: MusicCardProps) => {
  return (
    <Link to={`/music/${id}`} className="text-decoration-none">
      <div className="overflow-hidden mb-2">
        <img className="rounded w-full h-[116px]" src={thumbnail} />
      </div>
      <div className="flex flex-col gap-x-1">
        <span className="text-xl text-white">{title}</span>
        <span className="text-sm text-white">{creator}</span>
      </div>
    </Link>
  );
};

export default MusicCard;
