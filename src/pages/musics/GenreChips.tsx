// 장르 데이터 객체

import { useState } from 'react';

export interface Genre {
  [key: string]: number;
}

export const genres: Genre = {
  크리스마스: 1,
  디즈니: 2,
  재즈: 3,
  힙합: 4,
  연주곡: 5,
  케이팝: 6,
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
      {Object.entries(genres).map(([genreName, genreId]) => (
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
