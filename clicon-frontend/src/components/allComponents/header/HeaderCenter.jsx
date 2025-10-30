"use client";
import React, { useEffect, useRef } from "react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { PiShoppingCartSimpleBold, PiUserBold } from "react-icons/pi";
import { GrFavorite } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import Cart from "../cart/Cart";
import { useState } from "react";
import Link from "next/link";
import SigninPopup from "../account/Signin";
import { useSelector } from "react-redux";
import UserPopup from "../account/UserPopup";
import axios from "axios";

const HeaderCenter = () => {
  const user = useSelector((state) => state.auth.userInfo);
  const [cartList, setCartList] = useState(false);
  const [signin, setSignin] = useState(false);
  const userRef = useRef(null);
  const cartRef = useRef(null);
  const signinRef = useRef(null);
  const searchRef = useRef(null);
  const [manageUser, setManageUser] = useState(false);
  const [searchProduct, setSearchProduct] = useState([]);
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (cartRef.current && !cartRef.current.contains(event.target)) {
  //       setCartList(false);
  //     }
  //     if (signinRef.current && !signinRef.current.contains(event.target)) {
  //       setSignin(false);
  //     }
  //     if (userRef.current && !userRef.current.contains(event.target)) {
  //       setManageUser(false);
  //     }
  //     if (searchRef.current && !searchRef.current.contains(event.target)) {
  //       setSearchProduct(false);
  //     }
  //   };
  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  useEffect(() => {
  const handleClickOutside = (event) => {
    const clickedNode = event.target;
    const isInsideCart = cartRef.current?.contains(clickedNode);
    const isInsideSignin = signinRef.current?.contains(clickedNode);
    const isInsideUser = userRef.current?.contains(clickedNode);
    const isInsideSearch = searchRef.current?.contains(clickedNode);

    if (!isInsideCart && !isInsideSignin && !isInsideUser && !isInsideSearch) {
      setCartList(false);
      setSignin(false);
      setManageUser(false);
      setSearchProduct(false);
    }
  };

  document.addEventListener("click", handleClickOutside);
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);

  const handleSearchProducts = (e) => {
    e.preventDefault();
    // if(e.target.value === '') return
    let search = e.target.value;
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/product/search-product?search=${search}`
      )
      .then((res) => {
        setSearchProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-[#1B6392] py-5">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              width={160}
              height={43.82}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
          <div className="w-[654px] relative">
            <Input
              onChange={handleSearchProducts}
              placeholder="Search for anything..."
              className=" py-[14px] rounded-none bg-white placeholder:text-sm leading-5 font-poppins outline-none"
            />
            <IoIosSearch className="absolute right-5 text-xl top-1/2 translate-y-[-50%]  text-[#191C1F]" />
            {searchProduct.length > 0 && (
              <div ref={searchRef} className="absolute z-50  top-[110%] p-3 w-full left-0 rounded-none bg-white shadow-[0px_2px_5px_0.01px_rgba(0,0,0,0.2)]">
                {searchProduct.map((item) => (
                  <Link key={item._id} href={`/shop/${item.slug}`} className="flex items-center gap-3 border-b-[1px] border-[#929FA5] py-2 cursor-pointer">
                    <img className="w-15 h-15" src={item.thumbnail}  alt={item.title} />
                    <p>{item.title}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <ul className="flex gap-6 items-center">
            <li
              ref={cartRef}
              className="bg-transparent cursor-pointer hover:bg-transparent relative"
              onClick={() => setCartList(true)}
            >
              <PiShoppingCartSimpleBold className="text-white w-[32px] h-[32px]" />

              {cartList && <Cart className="absolute top-0 right-0" />}
            </li>
            <li className="bg-transparent cursor-pointer hover:bg-transparent">
              <GrFavorite className="text-white w-[32px] h-[32px]" />
            </li>
            {user ? (
              <h3
                onClick={() => setManageUser(true)}
                ref={userRef}
                className="text-white bg-[#FA8232] cursor-pointer w-[32px] h-[32px] flex items-center justify-center rounded-full font-extrabold relative"
              >
                {user?.username?.charAt(0)} {manageUser && <UserPopup />}{" "}
              </h3>
            ) : (
              <li
                ref={signinRef}
                onClick={() => setSignin(true)}
                className="bg-transparent relative cursor-pointer hover:bg-transparent"
              >
                <PiUserBold className="text-white w-[32px] h-[32px]" />
                {signin && <SigninPopup className="absolute top-0 right-0" />}
              </li>
            )}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default HeaderCenter;
