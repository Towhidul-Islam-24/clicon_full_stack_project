"use client";
import React from "react";
import Container from "@/components/common/Container";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Signin from "./Signin";
import axios from "axios";
import { UserInfoSet } from "@/lib/slices/authSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Registration = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [login, setLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleUserName = (e) => {
    setUserInfo({
      ...userInfo,
      username: e.target.value,
    });
  };
  const handleEmail = (e) => {
    setUserInfo({
      ...userInfo,
      email: e.target.value,
    });
  };
  const handlePassword = (e) => {
    setUserInfo({
      ...userInfo,
      password: e.target.value,
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}/api/v1/auth/signup`, userInfo)
      .then((res) => {
        if (res.data.success) {
          dispatch(UserInfoSet(res.data));
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          toast.success("Registration Successfull!");
          router.push("/otp-verify");
          setUserInfo({
            username: "",
            email: "",
            password: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message || "Something went wrong");
      });
  };

  return (
    <div className="font-poppins absolute top-0 right-0 z-50 shadow-2xl normal-case">
      <Toaster position="top-center" reverseOrder={false} />
      <Container>
        <div className="w-[424x] bg-white rounded-[4px] p-8">
          <h3 className="font-semibold text-xl leading-7 text-[#191c1f] mb-5 text-center">
            Sign in to your account
          </h3>
          <div>
            <div className="w-[360px] mt-4">
              <Label
                htmlFor="name"
                className={`text-sm leading-5 text-[#191C1F] mb-2`}
              >
                Name
              </Label>
              <input
                onChange={handleUserName}
                type="text"
                id="name"
                className="w-full px-4 py-3 border rounded focus:outline-none"
                required
              />
            </div>
            <div className="w-[360px] mt-4">
              <Label
                htmlFor="email"
                className={`text-sm leading-5 text-[#191C1F] mb-2`}
              >
                Email
              </Label>
              <input
                onChange={handleEmail}
                type="email"
                id="email"
                className="w-full px-4 py-3 border rounded focus:outline-none"
                required
              />
            </div>
            <div className="w-[360px] mt-4">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className={`text-sm leading-5 text-[#191C1F] mb-2`}
                >
                  Password
                </Label>
                <p className="font-medium text-sm leading-5 text-[#2DA5F3]">
                  Forget Password
                </p>
              </div>

              <div className="relative w-full max-w-md">
                <input
                  onChange={handlePassword}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  // onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800"
                >
                  {/* {showPassword ? "Hide" : "Show"} */}
                  {showPassword ? (
                    <IoEye className="h-5 w-5 text-gray-600" />
                  ) : (
                    <IoEyeOff className="h-5 w-5 text-gray-600" />
                  )}
                </button>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-center gap-2 mt-6 mb-3">
                  <div className="w-[100px] h-[1px] bg-[#E4E7E9]"></div>
                  <p
                    onClick={() => setLogin(true)}
                    className="font-medium text-sm leading-5 text-[#77878F]"
                  >
                    I have an account
                    {login && <Signin />}
                  </p>
                  <div className="w-[100px] h-[1px] bg-[#E4E7E9]"></div>
                </div>
                <Button
                  // type="submit"
                  onClick={handleSignUp}
                  className={`w-full font-poppins text-sm leading-12 tracking-[1.2%] font-bold bg-white text-[#FA8232] rounded-[2px] uppercase hover:bg-white z-50 border-2 border-[#FFE7D6] py-6 mt-3 cursor-pointer`}
                >
                  Create account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Registration;
