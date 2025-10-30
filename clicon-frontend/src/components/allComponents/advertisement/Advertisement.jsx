"use client";
import React from "react";
import { useState } from "react";
import Container from "@/components/common/Container";
import { Button } from "../../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Advertisement = () => {
  const pathname = usePathname();
  const [close, setClose] = useState(true);

  return (
    close &&
    pathname == "/" && (
      <div>
        <div className="header_add bg-[#191C1F]  relative py-4">
          <Container>
            <div className="flex items-center justify-between">
              <Image src="/black_friday.png" width={160} height={43.82} />
              <h4 className="text-white font-medium text-sm leading-5 flex items-center gap-2">
                Up to
                <span className="text-[#EBC80C] text-[40px] leading-12 font-semibold">
                  50%
                </span>
                <span className="font-semibold text-[20px] leading-7 uppercase">
                  {" "}
                  off
                </span>
              </h4>
              <Button className="bg-[#EBC80C] rounded-none text-[#191C1F] hover:bg-[#EBC80C]/90 text-sm font-bold leading-12 tracking-[1.2%]">
                SHOP NOW <ArrowRight />{" "}
              </Button>
            </div>
          </Container>
          <Button
            onClick={() => setClose(!close)}
            className="bg-[#303639] w-8 h-8 flex items-center justify-center rounded-none hover:bg-[#303639] cursor-pointer absolute top-2/4 right-6 translate-y-[-50%]"
          >
            <IoCloseSharp className="text-white text-2xl" />
          </Button>
        </div>
      </div>
    )
  );
};

export default Advertisement;
