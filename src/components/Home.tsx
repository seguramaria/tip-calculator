import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#FFEBC1] overflow-hidden px-4 sm:px-8 md:px-12">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <div className="flex items-center justify-center w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-[#FFF6E5] rounded-full">
          <img
            src="/img/categories/8.svg"
            alt="Decorative"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 object-contain"
          />
        </div>

        <h1 className="text-2xl sm:text-4xl  text-[#333333]">
          Enjoy a delicious{" "}
          <span className="text-[#F76D6A] font-bold">meal</span>
        </h1>
        <Link
          to="/menu"
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 text-white bg-[#F76D6A] rounded-full hover:bg-[#D9534F] transition-all duration-200 focus:outline-none active:scale-90"
        >
          <img
            src="./img/icons/arrow_forward.svg"
            alt="Go"
            className="w-6 h-6"
          />
        </Link>
      </div>
    </div>
  );
};
