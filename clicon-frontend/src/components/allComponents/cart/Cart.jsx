"use client";
import React from "react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="absolute top-14.5 right-0 z-50 shadow-2xl">
      <Container>
        <div className="w-[376px] bg-white rounded-[4px] p-6">
          <h3 className="font-poppins font-semibold text-sm leading-5 text-black mb-4">
            Shopping Cart <span className="text-[#5F6C72]">(02)</span>
          </h3>
          <div className="border-y-2 border-y-[#E4E7E9] py-4">
            <div className=" flex items-center justify-between">
              <Image src="/cart1.png" width={80} height={80} alt="cart1" />
              <div>
                <p className="font-poppins text-sm leading-5 text-[#191C1F] max-w-[200px] mb-2">
                  Canon EOS 1500D DSLR Camera Body+ 18-55 mm
                </p>
                <p className="font-poppins text-sm leading-5 text-[#5F6C72]">
                  1 x{" "}
                  <span className="font-semibold text-[#2DA5F3]">$1,500</span>
                </p>
              </div>
              <IoClose className="text-[#929FA5] w-6 h-6 cursor-pointer" />
            </div>
            <div className=" flex items-center justify-between mt-4">
              <Image src="/cart2.png" width={80} height={80} alt="cart2" />
              <div>
                <p className="font-poppins text-sm leading-5 text-[#191C1F] max-w-[200px] mb-2">
                  Canon EOS 1500D DSLR Camera Body+ 18-55 mm
                </p>
                <p className="font-poppins text-sm leading-5 text-[#5F6C72]">
                  1 x{" "}
                  <span className="font-semibold text-[#2DA5F3]">$1,500</span>
                </p>
              </div>
              <IoClose className="text-[#929FA5] w-6 h-6 cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="font-poppins text-sm leading-5 text-[#475156] py-5">
              Sub-Total:
            </h3>
            <h4 className="font-poppins text-sm leading-5 text-[#191C1F] font-medium">
              $2038.00 USD
            </h4>
          </div>
          <div>
            <Button
              className={`w-full font-poppins text-sm leading-12 tracking-[1.2%] font-bold text-white bg-[#FA8232] rounded-[2px] uppercase hover:bg-[#FA8232] z-50 py-6 cursor-pointer`}
            >
              Checkout now <FaArrowRight className="font-bold w-6 h-6" />
            </Button>
            <Link href="/shopping-card" className="">
              <Button
                className={`w-full font-poppins text-sm leading-12 tracking-[1.2%] font-bold text-black bg-white rounded-[2px] uppercase hover:bg-[#FA8232] hover:text-white border-2 border-[#FA8232] z-50 py-6 cursor-pointer mt-4`}
              >
                View Cart
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
