"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-black bg-white">
      <h2>Something went wrong!</h2>
      <button
        className="bg-blue-500 text-sm font-bold leading-12 tracking-[1.2%] h-12 rounded-[3px] w-[160px] hover:bg-[#FA8232]/90 cursor-pointer text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
