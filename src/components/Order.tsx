import { OrderItem } from "../types";
import { formatCurrency } from "../utils/formatCurrency";

type Props = {
  order: OrderItem[];
  removeItem: (id: number) => void;
};
export const Order = ({ order, removeItem }: Props) => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-black">Order</h2>

        <ul className="space-y-3 mt-5">
          {order.map((item) => (
            <li
              key={item.id}
              className="flex justify-between border-t border-gray-200 py-5 "
            >
              <div>
                <p>
                  {item.name} - {formatCurrency(item.price)}
                </p>

                <p className="font-bold">
                  Quantity: {item.quantity} -{" "}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <button
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
