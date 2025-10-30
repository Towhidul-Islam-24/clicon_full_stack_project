"use client";
import React, { use } from "react";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/common/Container";
import { BiPhoneCall } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { FiRefreshCcw } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import AllCategory from "../category/HeaderAllCategory";
import axios from "axios";

const HeaderBottom = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    function getAllCategoryList() {
      axios
        .get(`${process.env.NEXT_PUBLIC_URL}/api/v1/category/getcategories`)
        .then((res) => {
          setCategoryList(res.data.data);
        });
    }
    getAllCategoryList();
  });

  const [showAllCategory, setShowAllCategory] = useState(false);


  const categoryRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowAllCategory(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="border-b-[1px] border-b-[#5F6C72]/30 py-4 bg-white">
      <Container>
        <div className="flex items-center justify-between">
          <ul className="flex">
            <div  ref={categoryRef}>
              <li
                onClick={() => setShowAllCategory(true)}
                className="flex items-center gap-2 py-[14px] px-3 hover:bg-[#FA8232] transition-all duration-700 font-medium text-sm leading-5 font-poppins text-[#5F6C72] hover:text-white cursor-pointer relative w-[154px]"
              >
                All Category <IoIosArrowDown className="w-4 h-4" />
                <li className="relative">
                  {showAllCategory && (
                    <AllCategory
                      categoryList={categoryList}
                      setShowAllCategory={setShowAllCategory}
                    />
                  )}
                </li>
              </li>
            </div>

            <li className="flex items-center gap-2 py-[14px] px-6 hover:bg-[#FA8232] transition-all duration-700 font-medium text-sm leading-5 font-poppins text-[#5F6C72] hover:text-white cursor-pointer">
              <IoLocationOutline className="w-6 h-6" /> Track Order
            </li>
            <li className="flex items-center gap-2 py-[14px] px-6 hover:bg-[#FA8232] transition-all duration-700 font-medium text-sm leading-5 font-poppins text-[#5F6C72] hover:text-white cursor-pointer">
              <FiRefreshCcw className="w-6 h-6" /> Compare
            </li>
            <li className="flex items-center gap-2 py-[14px] px-6 hover:bg-[#FA8232] transition-all duration-700 font-medium text-sm leading-5 font-poppins text-[#5F6C72] hover:text-white cursor-pointer">
              <PiHeadphones className="w-6 h-6" /> Customer Support
            </li>
            <li className="flex items-center gap-2 py-[14px] px-6 hover:bg-[#FA8232] transition-all duration-700 font-medium text-sm leading-5 font-poppins text-[#5F6C72] hover:text-white cursor-pointer">
              <BsInfoCircle className="w-6 h-6" /> Need Help
            </li>
          </ul>
          <p className="text-[#191C1F] text-[18px] leading-6 font-poppins flex items-center gap-2">
            <BiPhoneCall className="w-7 h-7" />
            +1-202-555-0104
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HeaderBottom;
