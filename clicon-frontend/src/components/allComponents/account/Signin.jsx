"use client";
import React, { useState } from "react";
import Container from "@/components/common/Container";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { UserInfoSet } from "@/lib/slices/authSlice";
import Registration from "./Registration";
import toast, { Toaster } from "react-hot-toast";

const Signin = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = axios
        .post(
          `${process.env.NEXT_PUBLIC_URL}/api/v1/auth/login`,
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.success === true) {
            dispatch(UserInfoSet(res.data.data));
            toast.success("Login Successfull!");
          }
        });
      } catch (err) {
        toast.error(err.response.data.message || "Something went wrong");
      } finally {
        setLoading(false);
    }
  };

  return (
    <div className="font-poppins absolute top-14.5 right-0 z-50 shadow-2xl">
      <Toaster position="top-center" reverseOrder={false} />
      <Container>
        <form
          onSubmit={handleLogin}
          className="w-[424px] bg-white rounded-[4px] p-8"
        >
          <h3 className="font-semibold text-xl leading-7 text-[#191c1f] mb-5 text-center">
            Sign in to your account
          </h3>

          <div className="w-[360px]">
            <Label
              htmlFor="email"
              className="text-sm leading-5 text-[#191C1F] mb-2"
            >
              Email Address
            </Label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded focus:outline-none"
              required
            />
          </div>

          <div className="w-[360px] mt-4">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-sm leading-5 text-[#191C1F] mb-2"
              >
                Password
              </Label>
              <p className="font-medium text-sm leading-5 text-[#2DA5F3] cursor-pointer">
                Forgot Password?
              </p>
            </div>

            <div className="relative w-full max-w-md">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="mt-5">
              <Button
                type="submit"
                disabled={loading}
                className={`w-full text-sm font-bold text-white bg-[#FA8232] rounded-[2px] uppercase hover:bg-[#fa6f0d] py-6`}
              >
                {loading ? "Logging in..." : "Login"}
                {!loading && <FaArrowRight className="ml-2 w-5 h-5" />}
              </Button>

              <div className="flex items-center justify-center gap-2 mt-6 mb-3">
                <div className="w-[100px] h-[1px] bg-[#E4E7E9]"></div>
                <p className="font-medium text-sm leading-5 text-[#77878F]">
                  Don’t have an account?
                </p>
                <div className="w-[100px] h-[1px] bg-[#E4E7E9]"></div>
              </div>

              <Button
                onClick={() => setSignup(true)}
                type="button"
                className="w-full text-sm font-bold bg-white text-[#FA8232] border-2 border-[#FFE7D6] rounded-[2px] uppercase hover:bg-[#FFF4EC] py-6 mt-3"
              >
                Create account
                {signup && <Registration className="absolute top-0 right-0" />}
              </Button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signin;
