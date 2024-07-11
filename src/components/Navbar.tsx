import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className=" grid gap-4 lg:grid-cols-5 p-8 mb-3 text-sm place-content-center w-full bg-[#F4F4F4] text-[#353535]">
      <div className=" order-2 lg:order-1 lg:col-span-2 flex gap-8 justify-center lg:justify-start lg:flex-row lg:gap-14 font-normal">
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
      <div className=" order-1 lg:order-2 lg:col-span-1 text-center justify-center text-xl font-medium">
        <Link href={"/"}>
          <p>STOOR</p>
        </Link>
      </div>
      <div className=" order-3 cursor-pointer lg:col-span-2 justify-center text-sm font-normal flex lg:justify-end">
        CART
      </div>
    </header>
  );
}
