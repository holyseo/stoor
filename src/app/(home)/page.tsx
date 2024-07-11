"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { Item } from "../types";
import { FetchAllProducts, FetchCateogires } from "@/components/API";
import { LoaderPinwheel } from "lucide-react";
import LoadingSpinner from "@/components/LoadingSpinner";

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
    <div className="flex flex-col px-10 bg-white">
      <section className="flex flex-col items-center gap-10 mx-auto mt-10 xl:w-1/2">
        <div className="text-2xl font-medium">Our Clothing</div>
        <div className="text-sm font-normal text-center">
          Lorem ipsum dolor sit amet consectetur. Nullam leo condimentum turpis
          aliquet. Fermentum purus amet vitae sed nam imperdiet. Sit cursus sed
          commodo aliquet ultricies mi volutpat tortor at. A gravida enim ut
          quis et in lectus. Dolor tortor facilisi egestas faucibus nulla. Nibh
          accumsan felis tempor convallis nunc porta integer.
        </div>
      </section>
      <hr className="my-12" />
      <main className="flex flex-col items-center gap-10 lg:gap-36 xl:gap-20 lg:flex-row lg:items-start">
        <aside className="flex flex-col gap-5 mb-10 text-sm font-medium lg:w-1/6">
          <h2 className="font-normal">Filter by category</h2>
          {loading ? (
            <div className="flex ">
              <p>Fetching categories...</p>
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
        </aside>
        <section className="grid flex-auto gap-5 mb-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {loading ? (
            <div className="flex col-span-3 mx-auto ">
              <LoadingSpinner />
            </div>
          ) : (
            filteredProducts.map((item: Item, index: number) => (
              <ProductCard key={index} item={item} />
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;
