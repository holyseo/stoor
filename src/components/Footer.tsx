import React from "react";
import Link from "next/link";
import { Bot, Linkedin, Mail, Rss } from "lucide-react";

export default function Footer() {
  return (
    <>
      <hr className="mt-8 mx-10 border border-[#9494942d]" />
      <footer className=" bottom-0 mt-10 h-fit grid grid-cols-1 gap-5 lg:place-content-between lg:grid-cols-3 p-5 bg-[#F4F4F4] text-[#353535] text-sm">
        <div className="w-2/3 mx-auto flex flex-col gap-5 ">
          <h3 className="font-bold text-lg ">Quick Links</h3>
          <div className="flex gap-5 xl:gap-10">
            <div>
              <Link href="/">
                <p>Home</p>
              </Link>
            </div>
            <div>
              <Link href="">
                <p className=" whitespace-nowrap">T-Shirts</p>
              </Link>
            </div>
            <div>
              <Link href="">
                <p>Jeans</p>
              </Link>
            </div>
            <div>
              <Link href="">
                <p>Shoes</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-2/3 lg:w-4/5 mx-auto flex flex-col gap-5 justify-between">
          <h3 className="font-bold text-lg ">STOOR</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nullam leo condimentum
            turpis aliquet. Fermentum purus amet vitae sed nam imperdiet. Sit
            cursus sed commodo aliquet ultricies mi volutpat tortor at. A
            gravida enim ut quis et in lectus. Dolor tortor facilisi egestas
            faucibus nulla. Nibh accumsan felis tempor convallis nunc porta
            integer.
          </p>
        </div>
        <div className="w-2/3 mx-auto flex flex-col gap-2 justify-between">
          <h3 className="font-bold text-lg">Contact</h3>
          <p className="">Email: info@stoor.co.uk</p>
          <p className="">Phone: +44 (078) 132-4796</p>
          <div className="flex justify-start gap-2">
            <Linkedin className="cursor-pointer" size={24} />
            <Rss className="cursor-pointer" size={24} />
            <Mail className="cursor-pointer" size={24} />
            <Bot className="cursor-pointer" size={24} />
          </div>
        </div>
      </footer>
      <div className="my-10 flex justify-center">
        <p className="text-sm">
          © {new Date().getFullYear()} STOOR. All rights reserved.
        </p>
      </div>
    </>
  );
}
