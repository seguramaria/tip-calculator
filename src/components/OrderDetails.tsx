import { useMemo, SetStateAction, Dispatch } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../utils/formatCurrency";

type Props = {
  order: OrderItem[];
  removeItem: (id: number) => void;
  saveOrder: () => void;
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

const tipOptions = [
  { id: "tip-10", value: 0.1, label: "10%" },
  { id: "tip-20", value: 0.2, label: "20%" },
  { id: "tip-50", value: 0.5, label: "50%" },
  { id: "tip-0", value: 0, label: "No tip" },
];

export const OrderDetails = ({
  order,
  removeItem,
  saveOrder,
  setTip,
  tip,
}: Props) => {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, subtotalAmount]);
  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount]
  );

  return (
    <div className="bg-white p-6 shadow-md border border-dashed border-slate-300 rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-light text-center mb-4">Order Details</h2>

      <ul className="space-y-4">
        {order.map((item) => (
          <li key={item.id} className="flex justify-between">
            <div className="text-sm">
              <p className="font-bold tracking-wide uppercase">{item.name}</p>
              <p className="text-gray-500">Cantidad: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p>{formatCurrency(item.price * item.quantity)}</p>
              <button
                className="text-[#F76D6A] text-xs mt-1"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Tipping options:</h3>
        <form className="space-y-2">
          {tipOptions.map((tipOption) => (
            <label key={tipOption.id} className="flex items-center space-x-2">
              <input
                type="radio"
                name="tip"
                value={tipOption.value}
                checked={tipOption.value === tip}
                onChange={(e) => setTip(+e.target.value)}
                className="form-radio"
              />
              <span className="text-sm">{tipOption.label}</span>
            </label>
          ))}
        </form>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="text-lg font-bold">Totales</h3>
        <p className="flex justify-between">
          <span>Subtotal:</span>
          <span>{formatCurrency(subtotalAmount)}</span>
        </p>
        <p className="flex justify-between">
          <span>Tip:</span>
          <span>{formatCurrency(tipAmount)}</span>
        </p>
        <p className="flex justify-between font-bold text-xl">
          <span>Total:</span>
          <span>{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button
        className="w-full mt-4 bg-[#F76D6A] p-2 text-white font-bold rounded"
        disabled={totalAmount === 0}
        onClick={() => saveOrder()}
      >
        Place order
      </button>
    </div>
  );
};
