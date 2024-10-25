import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);
  const addItem = (item: MenuItem) => {
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
    console.log("saved");
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
