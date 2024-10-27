import { Dispatch, SetStateAction } from "react";

type Props = {
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchTerm: string;
};

export const Search = ({ setSearchTerm, searchTerm }: Props) => {
  const handleSearch = () => {
    setSearchTerm(searchTerm.trim());
  };
  return (
    <div className="relative mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="w-full rounded-2xl p-3 shadow-md focus:outline-none pr-10"
      />
      <button
        onClick={handleSearch}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#F76D6A] hover:bg-[#D9534F] text-white rounded-full px-3 py-1 flex items-center"
      >
        <img src="./img/icons/search.svg" alt="Search" className="w-5 h-5" />
      </button>
    </div>
  );
};
