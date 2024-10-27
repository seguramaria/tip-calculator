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
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="w-full rounded-lg p-2 shadow-md focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-[#F76D6A] text-white rounded-lg px-4 py-2 flex items-center mt-2"
      >
        <svg
          className="w-5 h-5 mr-1"
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
        Search
      </button>
    </div>
  );
};
