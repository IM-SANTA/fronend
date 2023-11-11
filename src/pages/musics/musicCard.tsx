import { Link } from 'react-router-dom';

export interface Music {
  id: number;
  title: string;
  url: string;
  channel_name: string;
  youtube_id: string;
  categories: string[];
}

const MusicCard = ({ id, title, channel_name, youtube_id }: Music) => {
  return (
    <Link to={`/music/${id}`} className="text-decoration-none">
      <div className="overflow-hidden mb-2 scrollbar-hide">
        <img className="rounded w-full h-[116px]" src={`https://img.youtube.com/vi/${youtube_id}/maxresdefault.jpg`} />
      </div>
      <div className="flex flex-col gap-x-1">
        <span className="text-xl text-white line-clamp-2">{title}</span>
        <span className="text-sm text-white line-clamp-1">{channel_name}</span>
      </div>
    </Link>
  );
};

export default MusicCard;
