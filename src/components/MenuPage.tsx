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

  const filteredCategories = selectedCategory
    ? data.filter((category) => category.name === selectedCategory)
    : data;

  const filteredItems = filteredCategories.flatMap((category) =>
    category.products.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="bg-[#FFFFFF] text-[#333333] flex justify-center items-center flex-col">
        <h1 className="text-3xl">Welcome</h1>
        <main className="max-w-7xl grid md:grid-cols-2 mx-auto py-20">
          <div className="p-5">
            <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <CategoryButtons
              categories={data}
              activeCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />

            <ul className="space-y-3 my-4 ">
              {filteredItems.map((item) => (
                <MenuItems key={item.id} item={item} addItem={addItem} />
              ))}
            </ul>
          </div>
          <div className="p-5 space-y-10">
            {order.length > 0 ? (
              <OrderDetails
                order={order}
                removeItem={removeItem}
                saveOrder={saveOrder}
                tip={tip}
                setTip={setTip}
              />
            ) : (
              <p>The order is empty.</p>
            )}
          </div>
        </main>
      </div>{" "}
      <footer className="bg-[#FFD966] text-white py-5 text-center">
        <p>
          &copy; {new Date().getFullYear()} María Segura. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default MenuPage;
