"use client";
import React, { useEffect, useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { SlClose } from "react-icons/sl";
import Container from "@/components/common/Container";
import { useSelector } from "react-redux";
import axios from "axios";
import Link from "next/link";

const ShoppingCard = () => {
  const user = useSelector((state) => state.auth.userInfo);
  const [cartList, setCartList] = useState([]);

  // const [quantity, setQuantity] = useState(1);

  const handleIncrement = (id, quantity) => {
    // if (currentQty >= stock) return;
    const newQty = quantity + 1;
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/cart/update-quantity/${id}`,
        { quantity: newQty },
        { withCredentials: true }
      )
      .then((res) => {
        window.location.reload();
        setCartList((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, quantity: newQty } : item
          )
        );
      })
      .catch((err) => {
        alert(err.response.data.message || "Something went wrong");
      });
  };

  const handleDecrement = (id, quantity) => {
    if (quantity == 1) return;
    const newQty = quantity - 1;
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/cart/update-quantity/${id}`,
        { quantity: newQty },
        { withCredentials: true }
      )
      .then((res) => {
        window.location.reload();
        setCartList((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, quantity: newQty } : item
          )
        );
      })
      .catch((err) => {
        alert(err.response.data.message || "Something went wrong");
      });
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/cart/get-cartbyuserid/${user?._id}`
      )
      .then((res) => {
        setCartList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?._id]);

  const handleDeleteCart = (id) => {
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/cart/delete-remove-from-cart/${id}`,
        { withCredentials: true }
      )
      .then((res) => {
        // window.location.reload();
        // পেজ রিলোড না করে state আপডেট
        setCartList((prev) => prev.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container>
        <div className=" mx-auto px-4 py-8">
          <div className="">
            {/* Products Table */}
            <div className=" bg-white shadow rounded-lg w-full p-3">
              <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr className="text-gray-600 text-left">
                    <th className="p-4">PRODUCTS</th>
                    <th className="p-4">VARIANT</th>
                    <th className="p-4">PRICE</th>
                    <th className="p-4">QUANTITY</th>
                    <th className="p-4">SUB‑TOTAL</th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  {!cartList ? (
                    <tr className="align-middle">
                      <td className="p-4 flex items-center gap-4">
                        <span className="text-[#929FA5]">
                          There are no items in this cart
                        </span>
                      </td>
                    </tr>
                  ) : (
                    cartList?.map((item) => (
                      <tr key={item._id} className="align-middle">
                        <td className="p-4 flex items-center gap-4">
                          <SlClose
                            onClick={() => handleDeleteCart(item?._id)}
                            className="w-6 h-6 text-[#929FA5] hover:text-[#EE5858] cursor-pointer"
                          />
                          <img
                            src={
                              item?.product?.thumbnail || item?.product?.image
                            }
                            alt=""
                            className="h-16 w-24 object-cover"
                          />
                          <span>
                            {item?.product?.title || item?.product?.name}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-col">
                            <span className="font-medium">
                              {item.variant ? item?.variant?.size : "N/A"}
                            </span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-col">
                            <span className="font-medium">
                              ${item?.product?.price}
                            </span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div
                            className={`flex items-center space-x-4 border-2 border-[#E4E7E9] w-[164px] h-14 rounded-[3px] `}
                          >
                            <button
                              onClick={() =>
                                handleDecrement(item._id, item.quantity)
                              }
                              className=" text-[30px] px-4 py-2 rounded"
                            >
                              −
                            </button>
                            <h1
                              className={`text-[#475156] leading-6 font-poppins w-[30px] flex items-center justify-center `}
                            >
                              {item.quantity < 10
                                ? `0${item.quantity}`
                                : item.quantity}
                            </h1>
                            <button
                              onClick={() =>
                                handleIncrement(item._id, item.quantity)
                              }
                              className="  text-[30px]  px-4 py-2 rounded"
                            >
                              +
                            </button>
                            {/* add to cart */}
                          </div>
                        </td>
                        <td className="p-4 font-medium">{item?.totalPrice}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <div className="border-t-1 mt-3 border-[#E4E7E9]"></div>
              <div className="mt-6 font-Poppins leading-6 flex justify-between">
                <Link href="/shop">
                  <button className="font-medium py-4 px-12 border-[2px] border-[#2DA5F3] flex items-center gap-2 text-[#2DA5F3] rounded-[4px] uppercase">
                    <HiArrowLongLeft className="w-6 h-6" /> Return To Shop
                  </button>
                </Link>
                <button className="font-medium py-4 px-12 border-[2px] border-[#2DA5F3] text-[#2DA5F3] rounded-[4px] uppercase">
                  Update Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShoppingCard;
