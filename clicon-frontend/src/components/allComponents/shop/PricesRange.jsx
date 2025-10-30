"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useDispatch } from "react-redux";
import { pricerange } from "@/lib/slices/productSlice";



const PricesRange = () => {
  const priceRange = [
    {
      id: 1,
      price: "All Price",
    },
    {
      id: 2,
      price: "Under $20",
    },
    {
      id: 3,
      price: "$25 to $100",
    },
    {
      id: 4,
      price: "$100 to $300",
    },
    {
      id: 5,
      price: "$300 to $500",
    },
    {
      id: 6,
      price: "$500 to $1,000",
    },
  ];

  const dispatch = useDispatch();

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(200000);
  const handleRangeChange = (value, type) => {
    if (type === "min") {
      const newValue = Math.min(value, maxValue);
      setMinValue(newValue);
       dispatch(pricerange([newValue, maxValue]));
    }else{
      const newValue = Math.max(value, minValue);
      setMaxValue(newValue);
      dispatch(pricerange([minValue, newValue]));
    }
  };
  return (
    <div>
      <div className="mt-6">
        <h1 className="font-poppins uppercase font-medium mb-4">Price Range</h1>
        <div className=" relative mb-15">
          <p>Min Price {minValue}</p>
          <input
            onChange={(e) => handleRangeChange(e.target.value, "min")}
            value={minValue}
            type="range"
            min={0}
            max={200000}
            step={100}
            className={` accent-[#FA8232] w-full `}
          />
          <p>Max Price {maxValue} </p>
          <input
            value={maxValue}
            onChange={(e) => handleRangeChange(e.target.value, "max")}
            type="range"
            min={0}
            max={200000}
            step={100}
            className={` accent-[#FA8232] w-full`}
          />
        </div>

        <div className="flex flex-col gap-y-2">
          {priceRange.map((tag, index) => (
            <div key={index} className="flex items-center gap-x-2 gap-y-3">
              <Checkbox id={tag.price} />
              <Label
                htmlFor={tag.price}
                className={`text-[#475156] text-sm leading-5 font-normal cursor-pointer hover:text-[#191C1F] hover:font-medium`}
              >
                {tag.price}
              </Label>
            </div>
          ))}
        </div>
        <div className="border-b-2 border-[#E4E7E9] my-6 "></div>
      </div>
    </div>
  );
};

export default PricesRange;
