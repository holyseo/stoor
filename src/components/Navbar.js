import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className=" grid grid-cols-5 p-8 mb-3 text-sm place-content-center w-full bg-[#F4F4F4] text-[#353535]">
      <div className="  col-span-2 flex flex-col gap-1 self-center lg:flex-row lg:gap-14 font-normal">
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
      <div className="  col-span-1 text-center self-center text-xl font-medium">
        <Link href={"/"}>
          <p>STOOR</p>
        </Link>
      </div>
      <div className=" cursor-pointer col-span-2 self-center text-sm font-normal flex justify-end">
        CART
      </div>
    </header>
  );
}
