"use client";
import Container from "@/components/common/Container";
import React, { useRef, useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { AiTwotoneShop } from "react-icons/ai";
import { RiPokerHeartsLine } from "react-icons/ri";
import { MdOutlineRateReview } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { UserInfoSet } from "@/lib/slices/authSlice";
import Cookies from "js-cookie";

const UserPopup = () => {
  const dispatch = useDispatch();
  const userRef = useRef(null);
  const [cartList, setCartList] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setCartList(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        Cookies.remove("ecommerce");
        toast.success("Logout Successfull!");
        window.location.reload(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message || "Something went wrong");
      });
  };

  return (
    <div
      ref={userRef}
      className="absolute top-16 right-0 z-50 bg-white w-[350px] rounded-[3px] shadow-2xl"
    >
      <Toaster position="top-center" reverseOrder={false} />
      <Container>
        <ul className="p-4">
          <li className="text-base text-black mb-3 flex items-center font-normal gap-4 cursor-pointer">
            <FaUserEdit className="w-6 h-6" /> Manage My Account
          </li>
          <li className="text-base text-black mb-3 flex items-center font-normal gap-4 cursor-pointer">
            <AiTwotoneShop className="w-6 h-6" /> My Orders
          </li>
          <li className="text-base text-black mb-3 flex items-center font-normal gap-4 cursor-pointer">
            <RiPokerHeartsLine className="w-6 h-6" /> My Wishlist
          </li>
          <li className="text-base text-black mb-3 flex items-center font-normal gap-4 cursor-pointer">
            <MdOutlineRateReview className="w-6 h-6" /> My Review
          </li>
          <li className="text-base text-black mb-3 flex items-center font-normal gap-4 cursor-pointer">
            <ImCancelCircle className="w-6 h-6" /> My Returns & Cancellations
          </li>
          <li
            onClick={handleLogout}
            className="text-base text-black flex items-center font-normal gap-4 cursor-pointer"
          >
            <BiLogOut className="w-6 h-6" /> Logout
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default UserPopup;
