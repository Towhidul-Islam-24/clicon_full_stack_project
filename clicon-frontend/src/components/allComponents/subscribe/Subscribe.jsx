import React from "react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaArrowRight } from "react-icons/fa6";

const Subscribe = () => {
  return (
    <div className="bg-[#1B6392] font-poppins py-18 flex flex-col items-center justify-center">
      <Container>
        <h2 className="font-semibold text-[32px] leading-10 text-white mb-3 text-center">
          Subscribe to our newsletter
        </h2>
        <p className="text-base leading-6 text-white text-center">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
          libero et <br /> cursus. Donec non quam urna. Quisque vitae porta
          ipsum.
        </p>
        <div className="w-[624px] mt-8 bg-white rounded-[2px] relative p-3">
          <Input
            placeholder="Enter your email address"
            className="p-6 text-[#77878F] rounded-none outline-none bg-transparent border-none shadow-none"
          />
          <Button
            className={`bg-[#FA8232] text-sm font-bold leading-12 tracking-[1.2%] h-12 rounded-[3px] w-[160px] hover:bg-[#FA8232]/90 cursor-pointer uppercase absolute right-3 top-1/2 -translate-y-1/2`}
          >
            Subscribe <FaArrowRight className="font-bold w-6 h-6" />
          </Button>
        </div>
        <div className="w-[420px] border border-t-[0px] border-t-gray-500 my-8 mx-auto"></div>
        <div className="flex items-center gap-12 w-[552px] mx-auto">
          <Image src="/Subscribe_images/google.png" className="opacity-60" width={72} height={72} />
          <Image src="/Subscribe_images/amazon.png"  className="opacity-60"width={72} height={72} />
          <Image src="/Subscribe_images/philips.png" className="opacity-60" width={72} height={72} />
          <Image src="/Subscribe_images/toshiba.png" className="opacity-60" width={72} height={72} />
          <Image src="/Subscribe_images/samsung.png" className="opacity-60" width={72} height={72} />
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
