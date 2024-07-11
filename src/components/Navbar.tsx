import Link from "next/link";
import React from "react";

// Navbar component

export default function Navbar() {
  return (
    <header className=" grid gap-4 lg:grid-cols-5 p-8 mb-3 text-sm place-content-center w-full bg-[#F4F4F4] text-[#353535]">
      {/* Navigation links */}
      <div className="flex justify-center order-2 gap-8 py-5 my-3 font-normal border-y-2 lg:m-0 lg:border-0 lg:p-1 lg:order-1 lg:col-span-2 lg:justify-start lg:flex-row lg:gap-14">
        <Link href={"/"}>
          <p className="">HOME</p>
        </Link>
        <Link href={""}>
          <p className="whitespace-nowrap">T-SHIRTS</p>
        </Link>
        <Link href={""}>
          <p>JEANS</p>
        </Link>
        <Link href={""}>
          <p>SHOES</p>
        </Link>
      </div>
      {/* Logo */}
      <div className="justify-center order-1 text-xl font-medium text-center lg:order-2 lg:col-span-1">
        <Link href={"/"}>
          <p>STOOR</p>
        </Link>
      </div>
      {/* Cart */}
      <div className="flex justify-center order-3 text-sm font-normal cursor-pointer lg:col-span-2 lg:justify-end">
        CART
      </div>
    </header>
  );
}
