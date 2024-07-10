export type Item = {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: Number;
    count: Number;
  };
};

export type ProductCardProps = {
  item: Item;
};
