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
  onCategoryClick: (category: string) => void;
}

const CategoryChips = ({ onCategoryClick }: CategoryChipsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    onCategoryClick(categoryName);
  };

  return (
    <div className="flex flex-nowrap overflow-x-auto gap-1 scrollbar-hide">
      <CategoryChip key="all" genreName="전체" isSelected={!selectedCategory} onClick={() => handleCategoryClick('')} />
      {Object.entries(categories).map(([genreName, index]) => (
        <CategoryChip
          key={index}
          genreName={genreName}
          isSelected={selectedCategory === genreName}
          onClick={() => handleCategoryClick(genreName)}
        />
      ))}
    </div>
  );
};

export default CategoryChips;
