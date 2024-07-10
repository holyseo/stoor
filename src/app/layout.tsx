import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "STOOR: Your Fashion and Tech Destination | Shop Trendy Clothing & Gadgets",
  description:
    "Explore STOOR for the latest in fashion and technology. Discover trendy clothing and cutting-edge gadgets. Shop now for fast shipping and excellent customer service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F4F4F4]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
