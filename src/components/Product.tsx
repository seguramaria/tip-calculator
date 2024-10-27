import { Product } from "../types";
import { formatCurrency } from "../utils/formatCurrency";

type Props = {
  item: Product;
  addItem: (item: Product) => void;
};

export const ProductDetail = ({ addItem, item }: Props) => {
  const { name, price } = item;
  return (
    <li>
      <button
        className="bg-[#FFFFFF] rounded-lg  shadow-md hover:text-[#D9534F]   w-full p-3 flex justify-between"
        onClick={() => addItem(item)}
      >
        <h3 className="font-semibold">{name}</h3>
        <p className="font-light"> {formatCurrency(price)}</p>
      </button>
    </li>
  );
};

export default ProductDetail;
