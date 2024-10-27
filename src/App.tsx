import MenuItems from "./components/MenuItems";
import { OrderReceipt } from "./components/OrderReceipt";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { addItem, order, removeItem, tip, setTip, saveOrder } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Tip Calculator</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md: grid-cols-2">
        <div className="p-5">
          <h2 className="text-3xl font-black">Menu</h2>
          <ul className="space-y-3 my-3">
            {menuItems?.map((item) => (
              <MenuItems key={item.id} item={item} addItem={addItem} />
            ))}
          </ul>
        </div>
        <div className="p-5 border border-dashed border-slate-300 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderReceipt
                order={order}
                removeItem={removeItem}
                saveOrder={saveOrder}
                tip={tip}
                setTip={setTip}
              />
            </>
          ) : (
            <p>The order is empty.</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
