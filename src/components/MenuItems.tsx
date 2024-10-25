import { MenuItem } from "../types";

type Props = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export const MenuItems = ({ addItem, item }: Props) => {
  const { name, price } = item;
  return (
    <li>
      <button
        className="border-2 border-teal-400 hover:background-teal-200 w-full p-3 flex justify-between"
        onClick={() => addItem(item)}
      >
        <h3>{name}</h3>
        <p className="font-black"> {price}</p>
      </button>
    </li>
  );
};

export default MenuItems;
