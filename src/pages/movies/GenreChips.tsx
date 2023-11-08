// 장르 데이터 객체

import { useState } from 'react';

export interface Genre {
  [key: string]: number;
}

const genres = {
  액션: 28,
  모험: 12,
  애니메이션: 16,
  코미디: 35,
  범죄: 80,
  다큐멘터리: 99,
  드라마: 18,
  가족: 10751,
  판타지: 14,
  역사: 36,
  공포: 27,
  음악: 10402,
  미스터리: 9648,
  로맨스: 10749,
  '과학 공상': 878,
  'TV 영화': 10770,
  스릴러: 53,
  전쟁: 10752,
  서부: 37,
};

interface GenreChipProps {
  genreName: string;
  onClick: () => void;
}

// 장르 칩을 표현할 컴포넌트
const GenreChip = ({ genreName, onClick, isSelected }: GenreChipProps & { isSelected: boolean }) => {
  // 선택된 칩과 선택되지 않은 칩의 스타일을 조건부로 적용합니다.
  const className = isSelected
    ? 'flex-shrink-0 px-3 py-1 mr-2 mb-2 text-white bg-gray-700 rounded-full focus:outline-none focus:shadow-outline'
    : 'flex-shrink-0 px-3 py-1 mr-2 mb-2 text-gray-700 border border-gray-700 rounded-full focus:outline-none focus:shadow-outline';

  return (
    <button onClick={onClick} className={className}>
      {genreName}
    </button>
  );
};

interface GenreChipsProps {
  onGenreClick: (genreId: number) => void;
}

// 장르 칩들을 렌더링하는 컴포넌트
const GenreChips = ({ onGenreClick }: GenreChipsProps) => {
  // 선택된 장르의 상태를 관리합니다. 기본값은 "전체"로 설정됩니다.
  const [selectedGenre, setSelectedGenre] = useState(0);

  // 장르 칩 클릭 핸들러
  const handleGenreClick = (genreId: number) => {
    setSelectedGenre(genreId); // 선택된 장르 상태를 업데이트합니다.
    onGenreClick(genreId); // 부모 컴포넌트의 핸들러를 호출합니다.
  };

  return (
    <div className="flex flex-nowrap overflow-x-auto">
      {/* "전체" 칩을 맨 앞에 추가하고, 선택 여부에 따라 스타일을 적용합니다. */}
      <GenreChip key="all" genreName="전체" isSelected={selectedGenre === 0} onClick={() => handleGenreClick(0)} />

      {/* 나머지 장르 칩들을 렌더링합니다. */}
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
