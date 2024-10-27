import { useState } from "react";
import MenuItems from "./Product";
import { OrderDetails } from "./OrderDetails";
import { data } from "../data/db";
import useOrder from "../hooks/useOrder";
import CategoryButtons from "./CategoryButtons";
import { Search } from "./Search";

export const MenuPage = () => {
  const { addItem, order, removeItem, tip, setTip, saveOrder } = useOrder();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Burgers");
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  const filteredCategories = selectedCategory
    ? data.filter((category) => category.name === selectedCategory)
    : data;

  const filteredItems = searchTerm
    ? data.flatMap((category) =>
        category.products.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : filteredCategories.flatMap((category) => category.products);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  const selectedCategoryData = data.find(
    (category) => category.name === selectedCategory
  );

  return (
    <>
      <header className="bg-[#FFFFFF] text-[#333333] w-full">
        <div className="max-w-7xl pt-20 p-5 mx-auto flex items-end justify-between px-5 py-3">
          <div className="flex items-center">
            <span className="p-2 mr-2">
              <img
                src="./img/icons/hello.svg"
                className="w-10 h-10"
                alt="Hello"
              />
            </span>
            <h1 className="text-2xl md:text-3xl">Welcome, are you hungry?</h1>
          </div>

          <div className="flex md:hidden">
            <button
              className="bg-[#F76D6A] text-white p-3 rounded-full shadow-md flex items-center"
              onClick={() => setShowOrderDetails(true)}
            >
              <img
                src="./img/icons/shopping_cart.svg"
                alt="Cart"
                className="w-6 h-6 mr-1"
              />
              {order.length > 0 && <span>({order.length})</span>}
            </button>
          </div>
        </div>
      </header>

      <div className="bg-[#FFFFFF] text-[#333333] flex justify-center items-center flex-col">
        <main className="w-full overflow-hidden">
          <div className="max-w-7xl mx-auto py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
              <div className="p-5 space-y-4">
                <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
                <CategoryButtons
                  categories={data}
                  activeCategory={selectedCategory}
                  onSelectCategory={handleCategorySelect}
                />
                {selectedCategoryData && (
                  <div className="my-4 bg-[#FFEBC1] rounded-3xl p-6 flex justify-center">
                    <img
                      src={`./img/categories/${selectedCategoryData.img}`}
                      alt={selectedCategoryData.name}
                      className="max-w-[30%] h-auto object-cover"
                    />
                  </div>
                )}
                <ul className="space-y-3 my-4">
                  {filteredItems.map((item) => (
                    <MenuItems key={item.id} item={item} addItem={addItem} />
                  ))}
                </ul>
              </div>
              <div className="p-5 space-y-10 hidden md:block">
                <OrderDetails
                  order={order}
                  removeItem={removeItem}
                  saveOrder={saveOrder}
                  tip={tip}
                  setTip={setTip}
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {showOrderDetails && (
        <div className="fixed inset-0 bg-white z-50 p-4 overflow-auto">
          <button
            className="text-2xl font-light text-[#F76D6A] mb-4 flex justify-center items-center"
            onClick={() => setShowOrderDetails(false)}
          >
            <img
              src="./img/icons/arrow_back.svg"
              alt="Back"
              className="w-6 h-6 inline"
            />
            <p>Back</p>
          </button>
          <OrderDetails
            order={order}
            removeItem={removeItem}
            saveOrder={saveOrder}
            tip={tip}
            setTip={setTip}
          />
        </div>
      )}

      <footer className="bg-[#FFD966] text-white py-5 w-full">
        <div className="w-full text-center px-4">
          <p>
            &copy; {new Date().getFullYear()} María Segura. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default MenuPage;
