import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularTags = () => {
  const tags = [
    {
      id: 1,
      title: "Game",
    },
    {
      id: 2,
      title: "iPhone",
    },
    {
      id: 3,
      title: "TV",
    },
    {
      id: 4,
      title: "Asus Laptops",
    },
    {
      id: 5,
      title: "Macbook",
    },
    {
      id: 6,
      title: "SSD",
    },
    {
      id: 7,
      title: "Graphoics Card",
    },
    {
      id: 8,
      title: "Power Bank",
    },
    {
      id: 9,
      title: "Smart TV",
    },
    {
      id: 10,
      title: "Speaker",
    },
    {
      id: 11,
      title: "Tablet",
    },
    {
      id: 12,
      title: "Microwave",
    },
    {
      id: 13,
      title: "Samsung",
    },
  ];
  return (
    <div>
      <ul className="w-[312px]">
        <li className="font-poppins uppercase font-medium mb-4">Popular Tag</li>
        <div className="mb-6">
          {tags.map((tag) => (
            <li className="inline-block">
              <Link
                href={"#"}
                className={`inline-block mb-2 mr-2 text-black text-sm leading-5 font-medium py-[6px] px-3 border border-[#E4E7E9] hover:border-[#FA8232] hover:bg-[#FFF3EB] rounded-[3px] transition-all duration-300 cursor-pointer`}
              >
                {tag.title}
              </Link>
            </li>
          ))}
        </div>
        <Link href={"#"}>
          <Image src="/ShopBanner.png" width={312} height={575} alt="arrow" className="mb-10" />
        </Link>
      </ul>
    </div>
  );
};

export default PopularTags;
