"use client";
import React, { useState, useEffect, use } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { shopCategory } from "@/lib/slices/productSlice";

const CategoryList = () => {
  // const categories = [
  //   {
  //     id: 1,
  //     title: "Electronics Devices",
  //   },
  //   {
  //     id: 2,
  //     title: "Computer & Laptop",
  //   },
  //   {
  //     id: 3,
  //     title: "Computer Accessories",
  //   },
  //   {
  //     id: 4,
  //     title: "SmartPhone",
  //   },
  //   {
  //     id: 5,
  //     title: "Headphone",
  //   },
  //   {
  //     id: 6,
  //     title: "Mobile Accessories",
  //   },
  //   {
  //     id: 7,
  //     title: "Gaming Console",
  //   },
  //   {
  //     id: 8,
  //     title: "Camera & Photo",
  //   },
  //   {
  //     id: 9,
  //     title: "TV & Homes Appliances",
  //   },
  //   {
  //     id: 10,
  //     title: "Watchs & Accessories",
  //   },
  //   {
  //     id: 11,
  //     title: "GPS & Navigation",
  //   },
  //   {
  //     id: 12,
  //     title: "Warable Technology",
  //   },
  // ];
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.value);
  const [allCategory, setAllCategory] = useState([]);
  const [activeRadio, setActiveRadio] = useState("");


  useEffect(() => {
    function getCategories() {
      axios
        .get(`${process.env.NEXT_PUBLIC_URL}/api/v1/category/getcategories`)
        .then((res) => {
          setAllCategory(res.data.data);
        });
    }
    getCategories();
  }, []);

  // console.log("activeRadio", activeRadio);

  useEffect(() => {
    dispatch(shopCategory(activeRadio));
  }, [activeRadio]);
  return (
    <div>
      <div className="h-[500px] overflow-y-auto">
        <h1 className="font-poppins uppercase font-medium mb-4">Category</h1>

        {allCategory.map((item) => (
          <label
            className="flex items-center gap-3 mt-3"
            key={item._id}
            htmlFor={item._id}
          >
            <input
              onChange={() => setActiveRadio(item._id)}
              value={item._id}
              id={item._id}
              key={item._id}
              checked={activeRadio === item._id}
              type="radio"
              className={` relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0  after:w-5 after:h-5  after:rounded-full after:border-2    before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1.5 before:w-2 before:h-2 before:bg-[#ffffff] before:rounded-full before:z-10 ${
                activeRadio === item._id
                  ? "after:border-[#FA8232] after:bg-[#FA8232] "
                  : "after:border-[#C9CFD2] after:bg-[white]   "
              }   `}
            />
            <span
              className={`text-[#475156] text-sm leading-5 font-normal cursor-pointer hover:text-[#191C1F] hover:font-medium`}
            >
              {item.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
