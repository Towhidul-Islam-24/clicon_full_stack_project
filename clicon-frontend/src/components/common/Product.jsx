"use client";
import Container from "@/components/common/Container";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Product = ({ product, id, onClick }) => {

  return (
    <div
      onClick={onClick}
      key={id}
      className="border border-[#E4E7E9] p-4 rounded-[3px] hover:shadow-xl z-45"
    >
      <div className="relative group flex flex-col items-center">
        <Image
          // src={`${process.env.NEXT_PUBLIC_URL}${product?.thumbnail}`}
          src={product?.thumbnail || product.image}
          width={202}
          height={172}
          className=" object-contain "
          alt="product"
        />
        <div className="absolute bg-black/50 top-0 left-0 opacity-0 group-hover:opacity-100 w-full h-full z-50 transition-all duration-300 cursor-pointer">
          <ul className="h-full flex items-center justify-center gap-4">
            <li className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full hover:bg-[#FA8232] hover:text-white transition-all duration-300 cursor-pointer">
              <GrFavorite className="w-6 h-6" />
            </li>
            <li className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full hover:bg-[#FA8232] hover:text-white transition-all duration-300 cursor-pointer">
              <FiShoppingCart className="w-6 h-6" />
            </li>
            <li className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full hover:bg-[#FA8232] hover:text-white transition-all duration-300 cursor-pointer">
              <Link href={`/shop/${product._id}`}>
                <FiEye className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex gap-1 mt-6">
          <li className="text-[#FA8232]">
            <BsFillStarFill />
          </li>
          <li className="text-[#FA8232]">
            <BsFillStarFill />
          </li>
          <li className="text-[#FA8232]">
            <BsFillStarFill />
          </li>
          <li className="text-[#FA8232]">
            <BsFillStarFill />
          </li>
          <li className="text-[#FA8232]">
            <BsFillStarFill />
          </li>
          <li className="text-[#77878F] text-[12px] leading-4">(738)</li>
        </ul>
        <p className="text-sm leading-5 text-[#191C1F] my-2">{product.title}</p>
        <p>{product.description}</p>
        <p className="text-[#2DA5F3] text-sm leading-5 font-semibold">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default Product;
