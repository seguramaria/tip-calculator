import { useState } from "react";
import { Product, OrderItem } from "../types";

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);
  const addItem = (item: Product) => {
    const itemAlreadyAdded = order.find(
      (orderItem) => orderItem.id === item.id
    );

    if (itemAlreadyAdded) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      return setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };
  const removeItem = (id: number) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const saveOrder = () => {
    setOrder([]);
    setTip(0);
  };
  return {
    order,
    addItem,
    removeItem,
    tip,
    setTip,
    saveOrder,
  };
};

export default useOrder;
