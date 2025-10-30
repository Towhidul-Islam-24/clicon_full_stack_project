"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ShoppinCard from "@/components/allComponents/cart/ShoppincCard";
import { useSelector } from "react-redux";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const CheckoutPage = () => {
  const user = useSelector((state) => state.auth.userInfo);
  // console.log(user?._id)
  const [cartList, setCartlist] = useState([]);
  const [cardTotal, setCardTotal] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
  });

  useEffect(() => {
    if (!user?._id) return;
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/cart/get-cartbyuserid/${user._id}`
      )
      .then((res) => {
        setCartlist(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?._id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSelectChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.postcode
    ) {
      setErrorMsg("Please fill all the fields");
      return;
    }

    const order = {
      user: user?._id,
      cartItems: cartList.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
        // variant: item.variant?._id || null,
      })),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      postcode: formData.postcode,
      paymentMethod: paymentMethod.toUpperCase(),
      paymentStatus: paymentMethod === "online" ? "paid" : "notpaid",
    };

    try {
      const res = await axios
        .post(`${process.env.NEXT_PUBLIC_URL}/api/v1/order/place-order`, order)
        .then((res) => {
          if (res.data.success) {
            toast.success("Order Placed Successfull!");
            if (res.data.paymenturl) {
              window.location.href = res.data.paymenturl;
            }
          }
          // console.log(res.data.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Breadcrumb />
      <Container>
        <ShoppinCard />
        <div className="flex justify-between gap-6 mt-10">
          <div className="font-public-sans mb-10 w-[60%]">
            <h2 className="font-medium text-[18px] leading-6 text-[#191C1F]">
              Billing Information
            </h2>
            {cartList && (
              <p className="mt-2 text-sm leading-5">
                You have {cartList.length} items in your cart
              </p>
            )}

            {/* Show error/success messages */}
            {errorMsg && (
              <div className="text-red-600 mt-2 mb-4 font-semibold">
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="text-green-600 mt-2 mb-4 font-semibold">
                {successMsg}
              </div>
            )}

            {/* User Name */}
            <div className="flex gap-4 items-center mt-6">
              <div>
                <label htmlFor="firstName" className="text-sm leading-5">
                  User Name
                </label>
                <div className="mt-2 flex gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-[390px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none"
                    required
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="text-sm leading-5">
                  Address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-[390px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Country, Region, City, Postcode */}
            <div className="flex gap-4 items-center mt-4">
              <div className="w-[206px]">
                <label htmlFor="country">Country</label>
                <div className="relative mt-2">
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleSelectChange}
                    className="w-full p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm outline-none appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="Bangladesh">Bangladesh</option>
                  </select>
                  <div className="flex items-center absolute right-5 text-xl text-[#ADB7BC] top-1/2 -translate-y-1/2 pointer-events-none">
                    <IoIosArrowDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="w-[206px]">
                <label htmlFor="region">Region/State</label>
                <div className="relative mt-2">
                  <select
                    id="region"
                    name="state"
                    value={formData.state}
                    onChange={handleSelectChange}
                    className="w-full p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm outline-none appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chattogram">Chattogram</option>
                    <option value="Sylhet">Sylhet</option>
                  </select>
                  <div className="flex items-center absolute right-5 text-xl text-[#ADB7BC] top-1/2 -translate-y-1/2 pointer-events-none">
                    <IoIosArrowDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="w-[206px]">
                <label htmlFor="city">City</label>
                <div className="relative mt-2">
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleSelectChange}
                    className="w-full p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm outline-none appearance-none"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Narayonganj">Narayonganj</option>
                    <option value="Gazipur">Gazipur</option>
                  </select>
                  <div className="flex items-center absolute right-5 text-xl text-[#ADB7BC] top-1/2 -translate-y-1/2 pointer-events-none">
                    <IoIosArrowDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="w-[206px]">
                <label htmlFor="postcode">ZIP/Post Code</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postcode"
                    placeholder="ZIP Code"
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Email and Phone */}
            <div className="flex items-center gap-4 mt-6">
              <div className="w-[50%]">
                <label htmlFor="email" className="text-sm leading-5">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm outline-none"
                  />
                </div>
              </div>

              <div className="w-[50%]">
                <label htmlFor="phone" className="text-sm leading-5">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm outline-none"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Summary & Payment Method */}
          <div className="border-1 border-[#E4E7E9] rounded-[4px] h-fit font-public-sans p-6 w-[35%]">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Payment Method</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={() => setPaymentMethod("COD")}
                    className="form-radio h-5 w-5 accent-[#FA8232]"
                  />
                  <span className="text-gray-800 font-medium">
                    Cash on Delivery
                  </span>
                </label>

                <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="ONLINE"
                    checked={paymentMethod === "ONLINE"}
                    onChange={() => setPaymentMethod("ONLINE")}
                    className="form-radio h-5 w-5 accent-[#FA8232]"
                  />
                  <span className="text-gray-800 font-medium">
                    Online Payment
                  </span>
                </label>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-6 flex w-full">
              <div className="bg-white rounded-lg space-y-4 w-full p-6 shadow-md">
                <div className="flex justify-between">
                  <span className="text-[#5F6C72] text-sm">Sub‑total</span>
                  <span>$500</span>
                  {/* <span>${totalPrice.toFixed(2)}</span> */}
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5F6C72] text-sm">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5F6C72] text-sm">Discount</span>
                  <span>$24.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5F6C72] text-sm">Tax</span>
                  <span>$61.99</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>$500 USD</span>
                </div>
                <button
                  disabled={loading}
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#FA8232] text-white py-5 rounded uppercase font-bold cursor-pointer disabled:opacity-50 mt-6"
                >
                  {loading ? "Placing order..." : "Place order →"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
