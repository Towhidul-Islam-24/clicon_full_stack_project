import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Sort = () => {
  const sortby = [
    {
      id: 1,
      name: "Most Popular",
    },
    {
      id: 2,
      name: "Newest",
    },
    {
      id: 3,
      name: "Oldest",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="w-[424px] relative mb-4">
          <Input
            placeholder="Search for anything..."
            className=" py-[14px] rounded-[2px] bg-white placeholder:text-sm leading-5 font-poppins outline-none"
          />
          <Search className="w-5 h-5 absolute right-5 text-xl top-1/2 translate-y-[-50%] text-[#191C1F]" />
        </div>
        <div className="flex items-center justify-between mb-4 gap-[22px]">
          <h3 className="font-poppins text-sm leading-5 text-[#191C1F]">
            Sort by:
          </h3>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Most Popular" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Most Popular</SelectItem>
                  <SelectItem value="banana">Newest</SelectItem>
                  <SelectItem value="blueberry">Oldest</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F4F5] flex items-center justify-between rounded-[4px] mb-6">
        <h3 className="font-poppins text-sm leading-5 text-[#5F6C72] p-4">Active Filters:</h3>
        <h4 className="font-poppins text-sm leading-5 text-[#5F6C72] p-4"><span className="text-[#191C1F] font-semibold">65,867</span> Results found.</h4>
      </div>
    </div>
  );
};

export default Sort;
