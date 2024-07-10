"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { Item } from "../types";
import { FetchAllProducts, FetchCateogires } from "@/components/API";
import { LoaderPinwheel } from "lucide-react";

function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Item[]>([]);
  const [filteredCategory, setFilteredCategory] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCategoryChange = async (category: string, checked: boolean) =>
    checked
      ? setFilteredCategory((prev) => [...prev, category])
      : setFilteredCategory((prev) => prev.filter((cat) => cat !== category));

  const filteredProducts = products.filter((product) =>
    filteredCategory.length === 0
      ? true
      : filteredCategory.includes(product.category)
  );

  const getAllProducts = async () => {
    setLoading(true);
    const data = await FetchAllProducts();
    setProducts(data);
    setLoading(false);
  };

  const getCategories = async () => {
    setLoading(true);
    const data = await FetchCateogires();
    setCategories(data);
    setLoading(false);
  };

  useEffect(() => {
    getAllProducts();
    getCategories();
  }, []);

  return (
    <div className="bg-white flex flex-col px-10">
      <div className="flex flex-col mx-auto items-center xl:w-1/2 mt-10 gap-10">
        <div className="text-2xl font-medium">Our Clothing</div>
        <div className="text-sm text-center font-normal">
          Lorem ipsum dolor sit amet consectetur. Nullam leo condimentum turpis
          aliquet. Fermentum purus amet vitae sed nam imperdiet. Sit cursus sed
          commodo aliquet ultricies mi volutpat tortor at. A gravida enim ut
          quis et in lectus. Dolor tortor facilisi egestas faucibus nulla. Nibh
          accumsan felis tempor convallis nunc porta integer.
        </div>
      </div>
      <hr className="my-12" />
      <div className="flex flex-col items-center gap-5 xl:flex-row xl:items-start">
        <div className="flex flex-col gap-5 xl:w-1/6 text-sm font-medium">
          <div className="font-normal">Filter by category</div>
          {loading ? (
            <div className="flex gap-5 items-center">
              <span>
                <LoaderPinwheel />
              </span>
              <span>Fetching categories...</span>
            </div>
          ) : (
            categories.map((category) => (
              <div key={category} className="flex gap-3">
                <input
                  value={category.toLowerCase()}
                  type="checkbox"
                  onChange={(e) =>
                    handleCategoryChange(
                      category.toLowerCase(),
                      e.target.checked
                    )
                  }
                />
                <span>{category.toUpperCase()}</span>
              </div>
            ))
          )}
        </div>
        <div className="flex-auto grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {loading ? (
            <div className="flex gap-5 items-center text-2xl">
              <span>
                <LoaderPinwheel size={30} />
              </span>
              <span>Fetching products...</span>
            </div>
          ) : (
            filteredProducts.map((item: Item, index: number) => (
              <ProductCard key={index} item={item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
