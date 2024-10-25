import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../utils/formatCurrency";

type Props = {
  order: OrderItem[];
  tip: number;
  saveOrder: () => void;
};
export const OrderTotals = ({ order, tip, saveOrder }: Props) => {
  const subtotalAmount = useMemo(
    () =>
      order.reduce((total, item) => total + (item.quantity + item.price), 0),
    [order]
  );
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, subtotalAmount]);
  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [tipAmount, subtotalAmount]
  );

  return (
    <>
      <div className="space-y3">
        <h3 className="font-bold text-xl">Total + Tip</h3>
        <p></p>
        <p>
          Subtotal:{" "}
          <span className="font-semibold">
            {formatCurrency(subtotalAmount)}
          </span>
        </p>{" "}
        <p>
          Tip:{" "}
          <span className="font-semibold"> {formatCurrency(tipAmount)}</span>
        </p>{" "}
        <p>
          Total:{" "}
          <span className="font-semibold"> {formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={() => saveOrder()}
      >
        Save order
      </button>
    </>
  );
};
