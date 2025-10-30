"use client";
import React, { useState } from "react";
import { FiX, FiMinus, FiPlus } from "react-icons/fi";
import { HiArrowLongLeft } from "react-icons/hi2";
import { SlClose } from "react-icons/sl";
import Container from "@/components/common/Container";

export default function CartPage() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);


  return (
    <div>
      <Container>
        <div className=" mx-auto px-4 py-8">
          <div className="flex gap-8 justify-between">
            {/* Products Table */}
            <div className=" bg-white shadow rounded-lg w-[872px] p-3">
              <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr className="text-gray-600 text-left">
                    <th className="p-4">PRODUCTS</th>
                    <th className="p-4">PRICE</th>
                    <th className="p-4">QUANTITY</th>
                    <th className="p-4">SUB‑TOTAL</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="align-middle">
                    <td className="p-4 flex items-center gap-4">
                      <SlClose className="w-10 h-10 text-[#929FA5] hover:text-[#EE5858] cursor-pointer" />
                      <img
                        src="./cart1.png"
                        alt=""
                        className="h-16 w-24 object-cover"
                      />
                      <span>4K UHD LED Smart TV with Chromecast Built-in</span>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-400 line-through mr-2">
                        $500
                      </span>
                      <span className="font-medium">$200</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-4 border-2 border-[#E4E7E9] w-[164px] h-14 rounded-[3px]">
                        <button
                          onClick={handleDecrement}
                          className=" text-[30px] px-4 py-2 rounded"
                        >
                          −
                        </button>
                        <h1 className="text-[#475156] leading-6 font-poppins w-[30px] flex items-center justify-center">
                          {" "}
                          {count}
                        </h1>
                        <button
                          onClick={handleIncrement}
                          className="  text-[30px]  px-4 py-2 rounded"
                        >
                          +
                        </button>
                        {/* add to cart */}
                      </div>
                    </td>
                    <td className="p-4 font-medium">$500</td>
                  </tr>
                </tbody>
              </table>
              <div className="border-t-1 mt-3 border-[#E4E7E9]"></div>
              <div className="mt-6 font-Poppins leading-6 flex justify-between">
                <button className="font-medium py-4 px-12 border-[2px] border-[#2DA5F3] flex items-center gap-2 text-[#2DA5F3] rounded-[4px] uppercase">
                  <HiArrowLongLeft className="w-6 h-6" /> Return To Shop
                </button>
                <button className="font-medium py-4 px-12 border-[2px] border-[#2DA5F3] text-[#2DA5F3] rounded-[4px] uppercase">
                  Update Cart
                </button>
              </div>
            </div>
            {/* Summary Sidebar */}
            <aside className="lg:col-span-5 bg-white shadow rounded-lg p-6 space-y-4 w-[424px]">
              <h2 className="text-xl font-medium">Card Totals</h2>
              <div className="flex justify-between">
                <span>Sub‑total</span>
                <span>$320</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>−$24</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$61.99</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>$357.99 USD</span>
              </div>
              <button className="w-full bg-[#FA8232] text-white py-3 rounded uppercase font-semibold
              ">
                PROCEED TO CHECKOUT →
              </button>
              <div className="border-t pt-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="w-full p-2 border rounded mb-2"
                />
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                  APPLY COUPON
                </button>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </div>
  );
}
