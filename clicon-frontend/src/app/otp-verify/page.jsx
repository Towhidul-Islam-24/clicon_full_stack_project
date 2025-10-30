"use client";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.userInfo.user);
  console.log(user);
  const [otp, setOtp] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  const handleOtpVerify = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}/api/v1/auth/checkotp`, {
        otp: `${otp.otp1}${otp.otp2}${otp.otp3}${otp.otp4}${otp.otp5}${otp.otp6}`,
        email: user?.email,
      })
      .then((res) => {
        toast.success("Otp Verification Successfull!");
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 my-10 rounded-xl shadow font-poppins">
      <Toaster position="top-center" reverseOrder={false} />
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Mobile Phone Verification</h1>
        <p className="text-[15px] text-slate-500">
          Enter the 6-digit verification code that was sent to your phone
          number.
        </p>
      </header>
      <form onSubmit={handleOtpVerify} id="otp-form">
        <div className="flex items-center justify-center gap-3">
          <input
            onChange={(e) => setOtp({ ...otp, otp1: e.target.value })}
            type="text"
            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            pattern="\d*"
            maxLength={1}
          />
          <input
            onChange={(e) => setOtp({ ...otp, otp2: e.target.value })}
            type="text"
            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            maxLength={1}
          />
          <input
            onChange={(e) => setOtp({ ...otp, otp3: e.target.value })}
            type="text"
            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            maxLength={1}
          />
          <input
            onChange={(e) => setOtp({ ...otp, otp4: e.target.value })}
            type="text"
            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            maxLength={1}
          />
          <input
            onChange={(e) => setOtp({ ...otp, otp5: e.target.value })}
            type="text"
            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            maxLength={1}
          />
          <input
            onChange={(e) => setOtp({ ...otp, otp6: e.target.value })}
            type="text"
            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            maxLength={1}
          />
        </div>
        <div className="max-w-[260px] mx-auto mt-4">
          <button
            type="submit"
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
          >
            Verify Account
          </button>
        </div>
      </form>
      <div className="text-sm text-slate-500 mt-4">
        Didn't receive code?{" "}
        <a
          className="font-medium text-indigo-500 hover:text-indigo-600"
          href="#0"
        >
          Resend
        </a>
      </div>
    </div>
  );
};

export default page;
