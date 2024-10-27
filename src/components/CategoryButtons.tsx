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
  console.log(activeCategory);
  return (
    <div className="flex space-x-2 mb-10">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`p-2 rounded-xl shadow-md ${
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
