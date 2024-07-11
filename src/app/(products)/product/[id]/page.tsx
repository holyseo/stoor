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
      <div className="flex justify-center items-center p-20 font-bold">
        Loading...
      </div>
    );
  if (!product) return <div>Product not found</div>;

  return (
    <>
      {showConfirmation && (
        <Confirmation showConfirmation={showConfirmation} product={product} />
      )}
      <main className="grid grid-cols-1 lg:grid-cols-2 place-items-center bg-[#F4F4F4]">
        <section className=" shadow-lg flex flex-col w-full justify-between bg-white p-4">
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
        <section className="col-span-1 font-medium flex flex-col gap-6 w-full lg:w-2/3 p-4">
          <h1 className="text-xl lg:text-3xl mt-5">{product.title}</h1>
          <div className="text-sm">SELECT SIZE</div>
          <select
            name="size"
            id="size"
            className="block p-5 w-full border-slate-300 border"
          >
            <option value="small">SMALL</option>
            <option value="medium">MEDIUM</option>
            <option value="large">LARGE</option>
          </select>
          <button
            onClick={handleAddToBag}
            className="bg-black text-white w-full py-5 text-center"
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
