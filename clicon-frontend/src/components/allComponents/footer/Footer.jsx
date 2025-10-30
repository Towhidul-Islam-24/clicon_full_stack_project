import React from "react";
import Container from "@/components/common/Container";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-[#191C1F] font-poppins p-18 border-b-[1px] border-[#ADB7BC]/20">
        <Container>
          <div className="flex justify-between gap-6">
            <ul className="w-[312px]">
              <li className="mb-6">
                {" "}
                <Link href={"#"}>
                  <Image
                    src="/Footer_images/logo.png"
                    width={177}
                    height={48}
                  />
                </Link>{" "}
              </li>
              <li className={`text-[#929FA5] text-sm leading-5 font-medium`}>
                <li className="mb-1">Customer Supports:</li>
                <span className="font-medium text-[18px] leading-6 text-white">
                  (629) 555-0129
                </span>
              </li>
              <li className="text-[#ADB7BC] leading-6 my-3">
                4517 Washington Ave. <br /> Manchester, Kentucky 39495
              </li>
              <li className="text-white leading-6">info@kinbo.com</li>
            </ul>
            <ul className="w-[200px]">
              <li className="font-medium leading-6 uppercase text-white mb-3">
                Top Category
              </li>
              <li
                className={`text-[#929FA5] hover:text-white text-sm leading-5 font-medium mb-3`}
              >
                <Link href={"#"}>Computer & Laptop</Link>
              </li>
              <li
                className={`text-[#929FA5] hover:text-white text-sm leading-5 font-medium mb-3`}
              >
                <Link href={"#"}>SmartPhone</Link>
              </li>
              <li
                className={`text-[#929FA5] hover:text-white text-sm leading-5 font-medium mb-3`}
              >
                <Link href={"#"}>Headphone</Link>
              </li>
              <li
                className={`text-[#929FA5] hover:text-white text-sm leading-5 font-medium mb-3`}
              >
                <Link href={"#"}>Accessories</Link>
              </li>
              <li
                className={`text-[#929FA5] hover:text-white text-sm leading-5 font-medium mb-3`}
              >
                <Link href={"#"}>Camera & Photo</Link>
              </li>
              <li
                className={`text-[#929FA5] hover:text-white text-sm leading-5 font-medium mb-3`}
              >
                <Link href={"#"}>TV & Homes</Link>
              </li>
              <li className={`text-[#EBC80C] text-sm leading-5 font-medium`}>
                <Link href={"#"} className="flex items-center gap-2">
                  Computer & Laptop <HiOutlineArrowRight className="w-5 h-5" />
                </Link>
              </li>
            </ul>
            <ul className="w-[200px]">
              <li className="font-medium leading-6 uppercase text-white mb-3">
                Quick links
              </li>
              <li
                className={`text-[#929FA5] hover:text-white text-sm leading-5 font-medium mb-3`}
              >
                <Link href={"#"}>Shop Product</Link>
              </li>
              <li
                className={`text-[#929FA5] hover:text-white text-sm leading-5 font-medium mb-3`}
              >
                <Link href={"#"}>Shoping Cart</Link>
              </li>
              <li
                className={`text-[#929FA5] hover:text-white text-sm leading-5 font-medium mb-3`}
              >
                <Link href={"#"}>Wishlist</Link>
              </li>
              <li
                className={`text-[#929FA5] hover:text-white text-sm leading-5 font-medium mb-3`}
              >
                <Link href={"#"}>Compare</Link>
              </li>
              <li
                className={`text-[#929FA5] hover:text-white text-sm leading-5 font-medium mb-3`}
              >
                <Link href={"#"}>Track Order</Link>
              </li>
              <li
                className={`text-[#929FA5] hover:text-white text-sm leading-5 font-medium mb-3`}
              >
                <Link href={"#"}>Customer Help</Link>
              </li>
              <li
                className={`text-[#929FA5] hover:text-white text-sm leading-5 font-medium mb-3`}
              >
                <Link href={"#"}>About Us</Link>
              </li>
            </ul>
            <ul className="w-[200px]">
              <li className="font-medium leading-6 uppercase text-white mb-3">
                Download App
              </li>
              <li className="mb-3">
                <Link href={"#"}>
                  {" "}
                  <Image
                    src="/Footer_images/apple.png"
                    width={176}
                    height={69}
                  />{" "}
                </Link>
              </li>
              <li className="mb-3">
                <Link href={"#"}>
                  {" "}
                  <Image
                    src="/Footer_images/apple.png"
                    width={176}
                    height={69}
                  />{" "}
                </Link>
              </li>
            </ul>
            <ul className="w-[312px]">
              <li className="font-medium leading-6 uppercase text-white mb-3">
                Popular Tag
              </li>
              <div className="">
                <li
                  className={`inline-block mb-2 mr-2  text-white text-sm leading-5 font-medium py-[6px] px-3 border border-[#303639] hover:border-white hover:bg-[#303639] rounded-[2px] transition-all duration-300 cursor-pointer`}
                >
                  <Link href={"#"}>Game</Link>
                </li>
                <li
                  className={`inline-block mb-2 mr-2 text-white text-sm leading-5 font-medium py-[6px] px-3 border border-[#303639] hover:border-white hover:bg-[#303639] rounded-[2px] transition-all duration-300 cursor-pointer`}
                >
                  <Link href={"#"}>iPhone</Link>
                </li>
                <li
                  className={`inline-block mb-2 mr-2 text-white text-sm leading-5 font-medium py-[6px] px-3 border border-[#303639] hover:border-white hover:bg-[#303639] rounded-[2px] transition-all duration-300 cursor-pointer`}
                >
                  <Link href={"#"}>TV</Link>
                </li>
                <li
                  className={`inline-block mb-2 mr-2 text-white text-sm leading-5 font-medium py-[6px] px-3 border border-[#303639] hover:border-white hover:bg-[#303639] rounded-[2px] transition-all duration-300 cursor-pointer`}
                >
                  <Link href={"#"}>Asus Laptops</Link>
                </li>
                <li
                  className={`inline-block mb-2 mr-2 text-white text-sm leading-5 font-medium py-[6px] px-3 border border-[#303639] hover:border-white hover:bg-[#303639] rounded-[2px] transition-all duration-300 cursor-pointer`}
                >
                  <Link href={"#"}>Macbook</Link>
                </li>
                <li
                  className={`inline-block mb-2 mr-2 text-white text-sm leading-5 font-medium py-[6px] px-3 border border-[#303639] hover:border-white hover:bg-[#303639] rounded-[2px] transition-all duration-300 cursor-pointer`}
                >
                  <Link href={"#"}>SSD</Link>
                </li>
                <li
                  className={`inline-block mb-2 mr-2 text-white text-sm leading-5 font-medium py-[6px] px-3 border border-[#303639] hover:border-white hover:bg-[#303639] rounded-[2px] transition-all duration-300 cursor-pointer`}
                >
                  <Link href={"#"}>Graphics Card </Link>
                </li>
                <li
                  className={`inline-block mb-2 mr-2 text-white text-sm leading-5 font-medium py-[6px] px-3 border border-[#303639] hover:border-white hover:bg-[#303639] rounded-[2px] transition-all duration-300 cursor-pointer`}
                >
                  <Link href={"#"}>Power Bank </Link>
                </li>
                <li
                  className={`inline-block mb-2 mr-2 text-white text-sm leading-5 font-medium py-[6px] px-3 border border-[#303639] hover:border-white hover:bg-[#303639] rounded-[2px] transition-all duration-300 cursor-pointer`}
                >
                  <Link href={"#"}>Speaker </Link>
                </li>
                <li
                  className={`inline-block mb-2 mr-2 text-white text-sm leading-5 font-medium py-[6px] px-3 border border-[#303639] hover:border-white hover:bg-[#303639] rounded-[2px] transition-all duration-300 cursor-pointer`}
                >
                  <Link href={"#"}>Tablet</Link>
                </li>
                <li
                  className={`inline-block mb-2 mr-2 text-white text-sm leading-5 font-medium py-[6px] px-3 border border-[#303639] hover:border-white hover:bg-[#303639] rounded-[2px] transition-all duration-300 cursor-pointer`}
                >
                  <Link href={"#"}>Smart TV </Link>
                </li>
                <li
                  className={`inline-block mb-2 mr-2 text-white text-sm leading-5 font-medium py-[6px] px-3 border border-[#303639] hover:border-white hover:bg-[#303639] rounded-[2px] transition-all duration-300 cursor-pointer`}
                >
                  <Link href={"#"}>Microwave </Link>
                </li>
                <li
                  className={`inline-block mb-2 mr-2 text-white text-sm leading-5 font-medium py-[6px] px-3 border border-[#303639] hover:border-white hover:bg-[#303639] rounded-[2px] transition-all duration-300 cursor-pointer`}
                >
                  <Link href={"#"}>Samsung </Link>
                </li>
              </div>
            </ul>
          </div>
        </Container>
      </div>
      <p className="bg-[#191C1F] text-[#ADB7BC] text-center py-6 font-poppins text-sm leading-5">
        Kinbo - eCommerce Template © 2025. Design by Templatecookie modify by
        wasim
      </p>
    </>
  );
};

export default Footer;
