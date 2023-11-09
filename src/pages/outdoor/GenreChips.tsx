// 장르 데이터 객체

import { useState } from 'react';

export interface Genre {
  [key: string]: number;
}

const categories = {
  카페: 1,
  음식점: 2,
  편의시설: 3,
  공원: 4,
  백화점: 5,
  '크리스마스 마켓': 6,
  축제: 7,
  이벤트: 8,
};

interface GenreChipProps {
  genreName: string;
  onClick: () => void;
}

const GenreChip = ({ genreName, onClick, isSelected }: GenreChipProps & { isSelected: boolean }) => {
  const className = isSelected
    ? 'flex-shrink-0 px-3 text-white bg-[#F82C47] rounded-full h-[37px]'
    : 'flex-shrink-0 px-3 text-[#62626C] border border-[#62626C] rounded-full h-[37px]';

  return (
    <button onClick={onClick} className={className}>
      {genreName}
    </button>
  );
};

interface GenreChipsProps {
  onGenreClick: (genreId: number) => void;
}

const GenreChips = ({ onGenreClick }: GenreChipsProps) => {
  const [selectedGenre, setSelectedGenre] = useState(0);

  const handleGenreClick = (genreId: number) => {
    setSelectedGenre(genreId); // 선택된 장르 상태를 업데이트합니다.
    onGenreClick(genreId); // 부모 컴포넌트의 핸들러를 호출합니다.
  };

  return (
    <div className="flex flex-nowrap overflow-x-auto gap-1 scrollbar-hide">
      <GenreChip key="all" genreName="전체" isSelected={selectedGenre === 0} onClick={() => handleGenreClick(0)} />
      {Object.entries(categories).map(([genreName, genreId]) => (
        <GenreChip
          key={genreId}
          genreName={genreName}
          isSelected={selectedGenre === genreId}
          onClick={() => handleGenreClick(genreId)}
        />
      ))}
    </div>
  );
};

export default GenreChips;
