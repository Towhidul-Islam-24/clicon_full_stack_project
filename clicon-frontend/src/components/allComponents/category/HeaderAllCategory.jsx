"use client";
import React, { useEffect } from "react";
import Container from "@/components/common/Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

const HeaderAllCategory = ({ categoryList }) => {
  const [openSubcategory, setOpenSubcategory] = useState(false);
  return (
    <div>
      <Container>
        <div className="absolute top-18 left-[-130px] z-50">
          <ul className="w-[240px] bg-white shadow-xl ">
            {categoryList?.map((item, index) => (
              <Link href="/" key={index}>
                <li
                  onClick={() => setOpenSubcategory(item._id)}
                  className="flex items-center capitalize gap-2 justify-between py-2 px-4 font-poppins font-normal text-sm leading-5 text-[#5F6C72] hover:font-medium hover:text-[#191C1F] group hover:bg-[#F2F4F5] transition-all duration-300"
                >
                  <Link href="/">{item.name}</Link>
                  {item?.subcategory &&
                    item.subcategory.length > 0 &&
                    openSubcategory === item._id && (
                      <MdKeyboardArrowRight
                        className={`w-5 h-5 group-hover:block group-hover:transition-all group-hover:duration-300`}
                      />
                    )}

                  {item?.subcategory && openSubcategory === item._id && (
                    <ul
                      className={` absolute top-0 w-[240px] left-[101%] bg-white py-3 border border-[#e2e5e7] rounded-[3px] `}
                    >
                      {item.subcategory.map((item, index) => (
                        <li
                          className={` cursor-pointer py-2 px-4 font-public_sans font-normal text-sm leading-5 text-[#77878F] hover:bg-[#f2f4f5] hover:text-[#191C1F]    capitalize `}
                          key={index}
                        >
                          <Link
                            href={"/shop"}
                            className="py-2 px-4 font-public_sans font-normal text-sm leading-5 text-[#77878F] hover:bg-[#f2f4f5] hover:text-[#191C1F]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default HeaderAllCategory;
