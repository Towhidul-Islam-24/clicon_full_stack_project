import React from "react";
import Container from "@/components/common/Container";
import { PiCreditCardLight, PiHeadphonesThin, PiPackageLight, PiTrophyLight } from "react-icons/pi";

const Service = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center justify-between border-2 border-[#E4E7E9] rounded-[6px] mt-6">
      <div className="p-4 ">
        <div className="flex items-center gap-4">
          <PiPackageLight className="w-10 h-10 " />
          <div className="">
            <h4 className="font-poppins font-medium text-sm leading-5 text-[#191c1f] mb-1 uppercase">
              Fasted Delivery
            </h4>
            <p className="font-poppins font-normal text-sm leading-5 text-[#5F6C72]">
              Delivery in 24/H
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 border-l-2 border-[#E4E7E9] ">
        <div className="flex items-center gap-4 ml-11">
          <PiTrophyLight className="w-10 h-10 " />
          <div className="">
            <h4 className="font-poppins font-medium text-sm leading-5 text-[#191c1f] mb-1 uppercase">
              24 Hours Return
            </h4>
            <p className="font-poppins font-normal text-sm leading-5 text-[#5F6C72]">
              100% money-back guarantee
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 border-l-2 border-[#E4E7E9] ">
        <div className="flex items-center gap-4 ml-11">
          <PiCreditCardLight className="w-10 h-10 " />
          <div className="">
            <h4 className="font-poppins font-medium text-sm leading-5 text-[#191c1f] mb-1 uppercase">
              Secure Payment
            </h4>
            <p className="font-poppins font-normal text-sm leading-5 text-[#5F6C72]">
              Your money is safe
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 border-l-2 border-[#E4E7E9] ">
        <div className="flex items-center gap-4 ml-11">
          <PiHeadphonesThin className="w-10 h-10 " />
          <div className="">
            <h4 className="font-poppins font-medium text-sm leading-5 text-[#191c1f] mb-1 uppercase">
              Support 24/7
            </h4>
            <p className="font-poppins font-normal text-sm leading-5 text-[#5F6C72]">
              Live contact/message
            </p>
          </div>
        </div>
      </div>
    </div>
      </Container>
    </div>
  );
};

export default Service;
