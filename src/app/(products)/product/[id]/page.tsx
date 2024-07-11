"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FetchProductDetails } from "@/components/API";
import { Confirmation } from "../../../../components/Confirmation";
import Accordion from "@/components/Accordion";
import { Item } from "@/app/types";
import LoadingSpinner from "@/components/LoadingSpinner";

// Page component to display product details
const Page = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Item | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const { id } = params;

  //Fetch product details on component mount
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

  // Handle add to bag action
  const handleAddToBag = () => {
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  //Show loading spinner while data is being fetched
  if (isLoading)
    return (
      <div className="flex items-center justify-center p-20">
        <LoadingSpinner />
      </div>
    );

  //Show message if product not found
  if (!product) return <div>Product not found</div>;

  return (
    <>
      {/* Show confirmation message on add to bag */}
      {showConfirmation && (
        <Confirmation showConfirmation={showConfirmation} product={product} />
      )}
      {/* Main content */}
      <main className="grid grid-cols-1 lg:grid-cols-2 place-items-center bg-[#F4F4F4]">
        <section className="flex flex-col justify-between w-full p-4 bg-white shadow-lg ">
          <div className="self-end text-sm font-medium border-[#E0E0E0] border px-10 py-1 w-fit rounded-full">
            POPULAR
          </div>
          {/* Product image section */}
          <div className="my-20 mx-auto w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>
        {/* Product details section */}
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
          <div className="my-3 text-lg text-right ">
            PRICE: £{product.price}
          </div>
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
