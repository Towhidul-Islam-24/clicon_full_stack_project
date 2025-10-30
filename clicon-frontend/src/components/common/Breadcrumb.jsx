"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoHome } from "react-icons/go";
import Container from "@/components/common/Container";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegment = pathname.split("/").filter((segment) => segment !== "");

  const breadcrub = pathSegment.map((item, index) => {
    const href = `/${pathSegment.slice(0, index + 1)}`;
    return {
      name: item,
      href,
    };
  });
  return (
    <div className="bg-[#F2F4F5] py-[26px]">
      <Container>
        <ul className="flex">
          <li className="flex items-center text-[#5F6C72] font-poppins text-sm leading-5 ">
            <Link href="/" className="flex">
              <GoHome className="mr-1 text-xl" /> Home
            </Link>
            {/* <MdOutlineKeyboardArrowRight className="text-xl" /> */}
          </li>
          {breadcrub.map((item, index) => (
            <li
              className={`flex items-center text-[#5F6C72] font-poppins text-sm leading-5 mx- flex-row-reverse `}
            >
              <Link
                href={item.href}
                className={`capitalize ${
                  index === breadcrub.length - 1
                    ? "text-[#2DA5F3]"
                    : "text-[#5F6C72]"
                }`}
              >
                {item.name}
              </Link>
              <MdOutlineKeyboardArrowRight className="text-xl" />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Breadcrumb;
