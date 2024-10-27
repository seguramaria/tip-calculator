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
    <div className="relative mb-10">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="w-full rounded-2xl p-2 shadow-md focus:outline-none pr-10"
      />
      <button
        onClick={handleSearch}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#F76D6A] hover:bg-[#D9534F] text-white rounded-full px-3 py-1 flex items-center"
      >
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </button>
    </div>
  );
};
