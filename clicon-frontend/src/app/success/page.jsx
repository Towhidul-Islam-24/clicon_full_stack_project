"use client";
import React from "react";
import { GoCheckCircleFill } from "react-icons/go";
import Link from "next/link";

const page = () => {
  return (
    <div className="py-20 bg-gray-50 flex flex-col justify-center items-center px-4">
      {/* Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        {/* Icon */}
        <GoCheckCircleFill className="w-20 h-20 text-green-500 mx-auto" />

        {/* Heading */}
        <h1 className="mt-4 text-2xl font-bold text-gray-800">
          Payment Successful
        </h1>

        {/* Message */}
        <p className="mt-2 text-gray-600">
          Thank you for your payment! Your order has been confirmed and is now
          being processed.
        </p>

        {/* Order details */}
        <div className="mt-6 border-t border-gray-200 pt-4 text-sm text-gray-700 space-y-1">
          <p>
            <span className="font-medium">Order ID:</span> #123456789
          </p>
          <p>
            <span className="font-medium">Amount Paid:</span> BDT 2,500
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="/"
            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Go Home
          </Link>
          <Link
            href="/orders"
            className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            View Orders
          </Link>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-500 text-sm">
        If you have any questions, please contact our{" "}
        <Link href="/support" className="text-green-500 hover:underline">
          support team
        </Link>
        .
      </p>
    </div>
  );
};

export default page;
