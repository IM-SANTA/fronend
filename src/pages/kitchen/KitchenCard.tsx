import { useState } from 'react';
import { Link } from 'react-router-dom';

export interface KitchenProps {
  id: number;
  title: string;
  url: string;
  channel_name: string;
  youtube_id: string;
  category: string;
}

const KitchenCard = ({ title, url, channel_name, youtube_id }: KitchenProps) => {
  const [imgUrl, setImgUrl] = useState(`https://img.youtube.com/vi/${youtube_id}/maxresdefault.jpg`);

  const handleImgError = () => {
    setImgUrl('../../assets/santa.svg');
  };

  return (
    <Link to={url} className="text-decoration-none">
      <div className="overflow-hidden mb-2 scrollbar-hide">
        <img className="rounded w-full h-[116px]" src={imgUrl} alt="channel_name" onError={handleImgError} />
      </div>
      <div className="flex flex-col gap-x-1">
        <span className="text-xl text-white line-clamp-2">{title}</span>
        <span className="text-sm text-white line-clamp-1">{channel_name}</span>
      </div>
    </Link>
  );
};

export default KitchenCard;
