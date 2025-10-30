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

const Responsive = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [variant, setVariant] = useState();
  const user = useSelector((state) => state.auth.userInfo);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (variant && count < variant.stock) {
      setCount((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    async function getSingleProduct() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/api/v1/product/single-product/${id}`
        );
        setProduct(res.data.data);
        if (res.data.data.variant.length > 0) {
          setVariant(res.data.data.variant[0]);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getSingleProduct();
  }, []);

  const handleVariant = (item) => {
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
      .then(() => toast.success("Add to cart successful!"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Breadcrumb />
      <div className="mt-6">
        <Container className="px-4 md:px-0">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Images */}
            <div className="w-full md:w-1/2">
              <Image
                src={product?.thumbnail || product.image}
                width={616}
                height={464}
                className="w-full h-auto rounded"
                alt="product"
              />
              <div className="flex gap-2 mt-4">
                <Image
                  src={product?.thumbnail || product.image}
                  width={96}
                  height={96}
                  className="border rounded w-24 h-24 object-cover"
                  alt="thumbnail"
                />
              </div>
            </div>

            {/* Details */}
            <div className="w-full md:w-1/2">
              {/* Rating */}
              <ul className="flex gap-2 mb-3 items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-[#FA8232]" />
                ))}
                <span className="text-sm font-semibold">4.7 Star Rating</span>
                <span className="text-sm text-gray-500">
                  (21,671 User feedback)
                </span>
              </ul>

              {/* Product title */}
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {product?.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-4">
                {product?.description}
              </p>

              {/* SKU + Brand + Category */}
              <div className="flex flex-col gap-2 md:flex-row md:justify-between mb-4">
                <div className="text-sm space-y-1">
                  <p>
                    <span className="text-gray-500">Sku:</span>{" "}
                    {variant?.sku || product?.sku || "N/A"}
                  </p>
                  <p>
                    <span className="text-gray-500">Brand:</span> Apple
                  </p>
                </div>
                <div className="text-sm space-y-1">
                  <p>
                    Availability:{" "}
                    {variant?.stock > 0 ? (
                      <span className="text-green-600 font-semibold">
                        In Stock
                      </span>
                    ) : (
                      <span className="text-red-600 font-semibold">
                        Out of Stock
                      </span>
                    )}
                  </p>
                  <p>
                    <span className="text-gray-500">Category:</span>{" "}
                    {product?.category?.name}
                  </p>
                </div>
              </div>

              {/* Price */}
              <h3 className="text-xl font-bold text-blue-500 mb-4">
                ${product?.price}
              </h3>

              {/* Variant Selector */}
              {product?.variant?.length > 0 && (
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="w-full">
                    <label className="block mb-1 text-sm font-medium">
                      Color
                    </label>
                    <select className="w-full border p-2 rounded text-sm">
                      {product.variant.map((item, index) => (
                        <option key={index}>{item.color}</option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full">
                    <label className="block mb-1 text-sm font-medium">
                      Size
                    </label>
                    <select
                      onChange={(e) => {
                        const selectedIndex = e.target.selectedIndex;
                        handleVariant(product.variant[selectedIndex]);
                      }}
                      className="w-full border p-2 rounded text-sm"
                    >
                      {product.variant.map((item, index) => (
                        <option key={index}>{item.size}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Cart Buttons */}
              {(!variant || variant.stock > 0) ? (
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex justify-between items-center border w-full sm:w-[160px] h-14 px-4 rounded">
                    <button onClick={handleDecrement} className="text-2xl">
                      −
                    </button>
                    <span className="text-lg">{count}</span>
                    <button onClick={handleIncrement} className="text-2xl">
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="w-full sm:w-[240px] h-14 bg-[#FA8232] text-white rounded font-bold flex items-center justify-center gap-2"
                  >
                    Add to Cart <PiShoppingCartSimple className="w-5 h-5" />
                  </button>
                  <button className="w-full sm:w-[140px] h-14 border border-[#FA8232] text-[#FA8232] rounded font-bold">
                    Buy Now
                  </button>
                </div>
              ) : (
                <p className="text-red-600 font-bold text-lg">Out Of Stock</p>
              )}

              {/* Wishlist & Share */}
              <div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
                <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <BsHeart className="w-5 h-5" />
                    Wishlist
                  </span>
                  <span className="flex items-center gap-2">
                    <FiRefreshCcw className="w-5 h-5" />
                    Compare
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  Share:
                  <BsCopy className="w-5 h-5 hover:text-[#FA8232]" />
                  <FaFacebook className="w-5 h-5 hover:text-[#FA8232]" />
                  <FaTwitter className="w-5 h-5 hover:text-[#FA8232]" />
                  <FaPinterest className="w-5 h-5 hover:text-[#FA8232]" />
                </div>
              </div>

              {/* Checkout Info */}
              <div className="border mt-6 p-4 rounded">
                <h4 className="text-sm text-gray-800 mb-2">
                  100% Guarantee Safe Checkout
                </h4>
                <Image
                  src="/payment.png"
                  width={312}
                  height={18}
                  alt="payment"
                  className="w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Responsive;
