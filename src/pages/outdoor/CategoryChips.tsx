import { useState } from 'react';

export interface Category {
  [key: string]: number;
}

const categories: Category = {
  카페: 1,
  음식점: 2,
  편의시설: 3,
  공원: 4,
  백화점: 5,
  '크리스마스 마켓': 6,
  축제: 7,
  이벤트: 8,
};

interface CategoryChipProps {
  genreName: string;
  onClick: () => void;
}

const CategoryChip = ({ genreName, onClick, isSelected }: CategoryChipProps & { isSelected: boolean }) => {
  const className = isSelected
    ? 'flex-shrink-0 px-3 text-white bg-[#F82C47] rounded-full h-[37px]'
    : 'flex-shrink-0 px-3 text-[#62626C] border border-[#62626C] rounded-full h-[37px]';

  return (
    <button onClick={onClick} className={className}>
      {genreName}
    </button>
  );
};

interface CategoryChipsProps {
  onCategoryClick: (category: number) => void;
}

const CategoryChips = ({ onCategoryClick }: CategoryChipsProps) => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleGenreClick = (category: number) => {
    setSelectedCategory(category); // 선택된 장르 상태를 업데이트합니다.
    onCategoryClick(category); // 부모 컴포넌트의 핸들러를 호출합니다.
  };

  return (
    <div className="flex flex-nowrap overflow-x-auto gap-1 scrollbar-hide">
      <CategoryChip key="all" genreName="전체" isSelected={!selectedCategory} onClick={() => handleGenreClick(0)} />
      {Object.entries(categories).map(([genreName, category]) => (
        <CategoryChip
          key={category}
          genreName={genreName}
          isSelected={selectedCategory === category}
          onClick={() => handleGenreClick(category)}
        />
      ))}
    </div>
  );
};

export default CategoryChips;
