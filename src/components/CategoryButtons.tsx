import { Category } from "../types";

type Props = {
  categories: Category[];
  activeCategory?: string;
  onSelectCategory: (category: string) => void;
};

const CategoryButtons = ({
  categories,
  onSelectCategory,
  activeCategory,
}: Props) => {
  return (
    <div className="flex space-x-2 py-4 overflow-x-auto scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`p-2 rounded-xl shadow-md whitespace-nowrap ${
            activeCategory === category.name
              ? "bg-[#F76D6A] text-white"
              : "bg-white text-black"
          }`}
          onClick={() => onSelectCategory(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
