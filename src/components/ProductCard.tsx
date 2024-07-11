import React from "react";
import { ProductCardProps } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const ProductCard = ({ item }: ProductCardProps) => {
  const rate = Math.round(item.rating.rate);
  const stars = [];

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
      className=" max-w-xs max-h-96 p-4 flex flex-col items-center gap-5 border border-slate-200 shadow-lg"
    >
      <div className=" w-52 h-36 md:w-60 md:h-48 relative">
        <Image
          src={item.image}
          alt={item.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="text-sm font-medium flex justify-between w-full ">
        <p className="has-tooltip">
          <span className="tooltip bg-[#333333e6] text-white px-2 py-1">
            {item.title}
          </span>
          {item.title.length > 25
            ? item.title.substring(0, 25) + "..."
            : item.title}
        </p>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div className="text-[10px] font-medium flex gap-8 items-center w-full">
        <div className="flex has-tooltip">
          <span className="tooltip px-1 mt-1">Rating: {item.rating.rate}</span>
          {stars}
        </div>
        <p>from {item.rating.count} reviews</p>
      </div>
      <Link
        href={`/product/${item.id}`}
        className="bg-black text-white text-center font-medium text-sm w-full p-2"
      >
        VIEW PRODUCT
      </Link>
    </div>
  );
};

export default ProductCard;
