export type Item = {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type ProductCardProps = {
  item: Item;
};
