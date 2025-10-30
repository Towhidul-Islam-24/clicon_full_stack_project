"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import Image from "next/image";
import { FaFacebook, FaPinterest, FaStar, FaTwitter } from "react-icons/fa6";
import Flex from "@/components/common/Flex";
import { PiShoppingCartSimple } from "react-icons/pi";
import { BsCopy, BsHeart } from "react-icons/bs";
import { FiRefreshCcw } from "react-icons/fi";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [variant, setVariant] = useState();
  const user = useSelector((state) => state.auth.userInfo);

  const [count, setCount] = useState(1);
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);

  useEffect(() => {
    async function getSingleProduct() {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_URL}/api/v1/product/single-product/${id}`
        )
        .then((res) => {
          setProduct(res.data.data);
          if (res.data.data.variant.length > 0) {
            setVariant(res.data.data.variant[0]);
          }
          // console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getSingleProduct();
  }, []);

  let handleVariant = (item) => {
    setVariant(item);
  };

  const handleAddToCart = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}/api/v1/cart/add-to-cart`, {
        product: product._id,
        quantity: count,
        variant: variant ? variant._id : null,
        price: product.price,
        user: user._id,
      })
      .then((res) => {
     toast.success("Add to cart Successfull!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
        <Toaster position="top-center" reverseOrder={false} />
      <Breadcrumb />
      <div className="mt-8">
        <Container>
          <Flex className="gap-4">
            {/* images */}
            <div className="w-[50%]">
              <Image
                src={product?.thumbnail || product.image}
                width={616}
                height={464}
                alt="banner"
              />
              <div className="flex gap-2 mt-6">
                <Image
                  src={product?.thumbnail || product.image}
                  width={96}
                  height={96}
                  className="border rounded-[2px] w-24 h-24"
                  alt="banner"
                />
              </div>
            </div>
            <div className="w-[50%]">
              {/* rating */}
              <ul className="flex gap-[6px] mb-3">
                <li className="flex gap-[2px]">
                  <FaStar className="w-5 h-5 text-[#FA8232]" />
                  <FaStar className="w-5 h-5 text-[#FA8232]" />
                  <FaStar className="w-5 h-5 text-[#FA8232]" />
                  <FaStar className="w-5 h-5 text-[#FA8232]" />
                  <FaStar className="w-5 h-5 text-[#FA8232]" />
                </li>
                <li className="font-bold font-poppins text-sm leading-5 text-[#191C1F]">
                  4.7 Star Rating
                </li>
                <li className="font-poppins text-sm leading-5 text-[#5F6C72]">
                  (21,671 User feedback)
                </li>
              </ul>
              {/* product name */}
              <h3 className="text-xl leading-7 text-[#191C1F] mb-4 font-bold">
                {product?.title}
              </h3>
              <h3 className="text-xl leading-7 text-[#191C1F] mb-4">
                {product?.description}
              </h3>
              {/* availability */}
              <div className="flex justify-between mb-6">
                <div className="flex flex-col gap-3 text-sm">
                  {product?.variant && (
                    <p className="leading-5 font-semibold text-xl">
                      <span className="text-[#5F6C72] font-normal">Sku:</span>{" "}
                      {variant?.sku || product?.sku || "N/A"}
                    </p>
                  )}
                  <p className="leading-5 font-semibold text-xl">
                    <span className="text-[#5F6C72] font-normal">Brand:</span>{" "}
                    Apple
                  </p>
                </div>
                <div className="flex flex-col gap-3 text-sm">
                  <p className="leading-5  text-xl text-[#5F6C72]">
                    Availability:
                    {!variant ? (
                      <span className="text-[#2DB224] font-semibold">
                        {" "}
                        Available
                      </span>
                    ) : variant.stock > 0 ? (
                      <span className="text-[#2DB224] font-semibold">
                        {" "}
                        In Stock
                      </span>
                    ) : (
                      <span className="text-[#FF0000] font-semibold">
                        {" "}
                        Out of Stock
                      </span>
                    )}
                  </p>
                  <p className="leading-5 font-semibold text-xl">
                    <span className="text-[#5F6C72] font-normal">
                      Category:
                    </span>{" "}
                    {product?.category?.name}
                  </p>
                </div>
              </div>
              {/* price */}
              <div className="flex items-center gap-3 border-b-2 border-[#E4E7E9] pb-6">
                <h3 className="text-2xl leading-8 font-semibold text-[#2DA5F3]">
                  ${product?.price}
                </h3>
              </div>

              {/* =============== */}
              <div className="flex justify-between items-center my-6">
                <div className="flex flex-col gap-4 w-[312px]">
                  {/* color */}
                  {product?.variant?.length > 0 && (
                    <>
                      <label
                        for="color"
                        className=" text-[#191C1F] text-sm leading-5 font-medium"
                      >
                        Color
                      </label>
                      <select
                        id="color"
                        className="border border-gray-300 p-1.5 mb-2 text-[#191C1F] text-sm leading-5"
                      >
                        {product.variant.map((item, index) => (
                          <option value={item} key={index}>
                            {item.color}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  {/* size */}
                  {product?.variant?.length > 0 && (
                    <>
                      <label for="size">Size</label>
                      <select
                        onChange={(e) => {
                          const selectedIndex = e.target.selectedIndex;
                          const selectedVariant =
                            product.variant[selectedIndex];
                          handleVariant(selectedVariant);
                        }}
                        id="size"
                        className="border border-gray-300 p-1.5 mb-2 text-[#191C1F] text-sm leading-5"
                      >
                        {product.variant.map((item, index) => (
                          <option
                            onChange={() => setVariant(item)}
                            value={item}
                            key={index}
                          >
                            {item.size}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                </div>
              </div>

              {/* add to cart, buy now buttons */}
              {!variant ? (
                <div className="flex gap-4">
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
                  <div className="">
                    <button
                      onClick={handleAddToCart}
                      className="w-[310px] h-[56px] bg-[#FA8232] flex items-center justify-center rounded-[3px] uppercase font-bold gap-2  text-white cursor-pointer"
                    >
                      Add to card <PiShoppingCartSimple className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="">
                    <button className="w-[142px] h-[56px] flex items-center justify-center border-2 border-[#FA8232] rounded-[3px] uppercase font-bold gap-2  text-[#FA8232] cursor-pointer">
                      Buy now
                    </button>
                  </div>
                </div>
              ) : variant && variant.stock > 0 ? (
                <div className="flex gap-4">
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
                  <div className="">
                    <button
                      onClick={handleAddToCart}
                      className="w-[310px] h-[56px] bg-[#FA8232] flex items-center justify-center rounded-[3px] uppercase font-bold gap-2  text-white cursor-pointer"
                    >
                      Add to card <PiShoppingCartSimple className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="">
                    <button className="w-[142px] h-[56px] flex items-center justify-center border-2 border-[#FA8232] rounded-[3px] uppercase font-bold gap-2  text-[#FA8232] cursor-pointer">
                      Buy now
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-red-500 font-extrabold text-3xl leading-5 font-poppins">
                  Out Of Stock
                </div>
              )}

              {/* =============== */}
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center gap-8">
                  <h4 className="text-[#475156] text-sm leading-5 font-poppins flex items-center gap-2">
                    <BsHeart className="w-6 h-6" /> Add to Wishlist
                  </h4>
                  <h4 className="text-[#475156] text-sm leading-5 font-poppins flex items-center gap-2">
                    <FiRefreshCcw className="w-6 h-6" /> Add to Wishlist
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#475156] text-sm leading-5 font-poppins flex items-center gap-4 ">
                    Share product:
                    <BsCopy className="w-6 h-6 hover:text-[#FA8232]" />
                    <FaFacebook className="w-6 h-6 hover:text-[#FA8232]" />
                    <FaTwitter className="w-6 h-6 hover:text-[#FA8232]" />
                    <FaPinterest className="w-6 h-6 hover:text-[#FA8232]" />
                  </h4>
                </div>
              </div>

              {/* checkout */}
              <div className="border-2 border-[#E4E7E9] mt-6 p-5 rounded-[3px]">
                <h3 className="text-[#191C1F] text-sm leading-5 mb-3">
                  100% Guarantee Safe Checkout
                </h3>
                <Image src="/payment.png" width={312} height={18} />
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default page;
