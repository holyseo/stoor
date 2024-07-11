// Define the shape of an item
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

//Props definition for the ProductCard component
export type ProductCardProps = {
  item: Item;
};
