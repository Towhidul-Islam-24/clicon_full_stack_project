import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const PopularBrands = () => {
  const tags = [
    {
      id: 1,
      title: "Apple",
    },
    {
      id: 2,
      title: "Google",
    },
    {
      id: 3,
      title: "Microsoft",
    },
    {
      id: 4,
      title: "Samsung",
    },
    {
      id: 5,
      title: "Dell",
    },
    {
      id: 6,
      title: "HP",
    },
    {
      id: 7,
      title: "Symphony",
    },
    {
      id: 8,
      title: "Xiaomi",
    },
    {
      id: 9,
      title: "Sony",
    },
    {
      id: 10,
      title: "Panasonic",
    },
    {
      id: 11,
      title: "LG",
    },
    {
      id: 12,
      title: "Intel",
    },
    {
      id: 13,
      title: "OnePlus",
    },
  ];

  return (
    <div>
      <h1 className="font-poppins uppercase font-medium mb-4">
        popular Brands
      </h1>
      <div className="grid grid-cols-2 gap-x-2 gap-y-3">
        {tags.map((tag, index) => (
          <div key={index} className="flex items-center gap-3">
            <Checkbox id={tag.title} />
            <Label
              htmlFor={tag.title}
              className={`text-[#475156] text-sm leading-5 font-normal cursor-pointer hover:text-[#191C1F] hover:font-medium`}
            >
              {tag.title}
            </Label>
          </div>
        ))}
      </div>
      <div className="border-b-2 border-[#E4E7E9] my-6 "></div>
    </div>
  );
};

export default PopularBrands;
