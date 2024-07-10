import React from "react";
import { ProductCardProps } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <div
      key={item.id}
      className=" max-w-auto max-h-96 p-4 flex flex-col items-center gap-5 border border-slate-200 shadow-lg"
    >
      <div className="w-60 h-48 relative">
        <Image
          src={item.image}
          alt={item.title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="text-sm font-medium flex justify-between w-full">
        <p className="truncate">
          {item.title.length > 30
            ? item.title.substring(0, 30) + "..."
            : item.title}
        </p>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div className="text-[10px] font-medium flex gap-8 items-center w-full">
        <div className="flex ">
          <span>
            <Star strokeWidth={2} size={14} className="fill-black" />
          </span>
          <span>
            <Star strokeWidth={2} size={14} className="fill-black" />
          </span>
          <span>
            <Star strokeWidth={2} size={14} className="fill-black" />
          </span>
          <span>
            <Star strokeWidth={2} size={14} className="fill-black" />
          </span>
          <span>
            <Star strokeWidth={2} size={14} className="fill-black" />
          </span>
        </div>
        <p>from 120 reviews</p>
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
