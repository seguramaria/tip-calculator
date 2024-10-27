export type Category = {
  id: number;
  name: string;
  img: string;
  url: string;
  products: Product[];
};

export type Product = {
  id: number;
  name: string;
  price: number;
};

export type OrderItem = Product & {
  quantity: number;
};
