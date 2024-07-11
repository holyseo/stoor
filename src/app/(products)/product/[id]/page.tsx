"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FetchProductDetails } from "@/components/API";
import { Confirmation } from "../../../../components/Confirmation";
import Accordion from "@/components/Accordion";
import { Item } from "@/app/types";

const Page = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Item | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const { id } = params;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await FetchProductDetails(id);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToBag = () => {
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center p-20">
        <div className="relative w-12 h-12">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
        </div>
      </div>
    );

  if (!product) return <div>Product not found</div>;

  return (
    <>
      {showConfirmation && (
        <Confirmation showConfirmation={showConfirmation} product={product} />
      )}
      <main className="grid grid-cols-1 lg:grid-cols-2 place-items-center bg-[#F4F4F4]">
        <section className="flex flex-col justify-between w-full p-4 bg-white shadow-lg ">
          <div className="self-end text-sm font-medium border-[#E0E0E0] border px-10 py-1 w-fit rounded-full">
            POPULAR
          </div>
          <div className="my-20 mx-auto w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>
        <section className="flex flex-col w-full col-span-1 gap-6 p-4 font-medium lg:w-2/3">
          <h1 className="mt-5 text-xl lg:text-3xl">{product.title}</h1>
          <div className="text-sm">SELECT SIZE</div>
          <select
            name="size"
            id="size"
            className="block w-full p-5 border border-slate-300"
          >
            <option value="small">SMALL</option>
            <option value="medium">MEDIUM</option>
            <option value="large">LARGE</option>
          </select>
          <button
            onClick={handleAddToBag}
            className="w-full py-5 text-center text-white bg-black"
          >
            <span className="text-sm font-medium">ADD TO BAG</span>
          </button>
          <Accordion title="DESCRIPTION" detail={product.description} />
          <Accordion title="PRODUCT RATING" detail={product.rating} />
          <Accordion
            title="DELIVERY OPTIONS"
            detail="Free shipping available in the UK"
          />
        </section>
      </main>
    </>
  );
};

export default Page;
