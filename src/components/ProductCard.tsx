import React from "react";
import { ProductCardProps } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

//Productcard component
const ProductCard = ({ item }: ProductCardProps) => {
  const rate = Math.round(item.rating.rate);
  const stars = [];

  // Generate star icons based on the rating
  for (let i = 0; i < rate; i++) {
    stars.push(
      <div key={i}>
        <Star strokeWidth={2} size={14} className="fill-black" />
      </div>
    );
  }

  return (
    <div
      key={item.id}
      className="flex flex-col items-center max-w-xs gap-5 p-4 border shadow-lg max-h-96 border-slate-200"
    >
      {/* Product image */}
      <div className="relative w-52 h-36 md:w-60 md:h-48">
        <Image
          src={item.image}
          alt={item.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      {/* Product title and price */}
      <div className="flex justify-between w-full text-sm font-medium ">
        <p className="has-tooltip">
          <span className="tooltip bg-[#333333e6] text-white px-2 py-1">
            {item.title}
          </span>
          {item.title.length > 25
            ? item.title.substring(0, 25) + "..."
            : item.title}
        </p>
        <p className="text-gray-600">£{item.price}</p>
      </div>
      {/* Rating and review counts */}
      <div className="text-[10px] font-medium flex gap-8 items-center w-full">
        <div className="flex has-tooltip">
          <span className="px-1 mt-1 tooltip">Rating: {item.rating.rate}</span>
          {stars}
        </div>
        <p>from {item.rating.count} reviews</p>
      </div>
      {/* View product button */}
      <Link
        href={`/product/${item.id}`}
        className="w-full p-2 text-sm font-medium text-center text-white bg-black"
      >
        VIEW PRODUCT
      </Link>
    </div>
  );
};

export default ProductCard;
