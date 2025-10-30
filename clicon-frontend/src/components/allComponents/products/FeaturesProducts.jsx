"use client";
import { useEffect, useState } from "react";
import Container from "@/components/common/Container";
import React from "react";
import Discount from "./Discount";
import Flex from "@/components/common/Flex";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import Product from "../../common/Product";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

const FeaturesProducts = () => {
  const [featureProduct, setFeatureProduct] = useState([]);
  const [allCategoryList, setAllCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  function categoryList() {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/v1/category/getcategories`)
      .then((res) => {
        setAllCategoryList(res.data.data);
      });
  }

  function getFeaturesProducts() {
    axios
      .get(`http://localhost:4000/api/v1/product/get-features-products`)
      .then((res) => {
        setFeatureProduct(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getFeaturesProducts();
    categoryList();
  }, []);

  const [activeTab, setActiveTab] = useState("All Product");
  const handleTabActive = (name) => {
    setActiveTab(name);
  };

  const filterProduct =
    activeTab == "All Product"
      ? featureProduct
      : featureProduct.filter((item) => item.category?.name == activeTab);

      
  if (loading) {
    return (
      <Container>
        <div className="flex justify-center items-center">
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <section className="mt-18">
      <Container>
        <Flex className={`gap-6 w-full`}>
          <div>
            <Discount />
          </div>
          <div className="w-full">
            <Flex className={`justify-between mb-6`}>
              <h3 className="font-semibold text-2xl leading-8 text-[#191C1F]">
                Featured Products
              </h3>
              <ul className="flex">
                {allCategoryList.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleTabActive(item.name)}
                    className={`text-sm font-normal leading-5 cursor-pointer text-[#5f6c72] p-2 hover:font-semibold hover:text-[#191c1f]${
                      activeTab === item.name &&
                      "font-semibold text-[#191c1f] border-b-2 border-[#fa8232]"
                    }  transition-all duration-300`}
                  >
                    {item.name}
                  </li>
                ))}
                <li className="flex items-center justify-between gap-2 ml-4 font-semibold text-sm leading-5 text-[#FA8232]">
                  <Link href={"/shop"}>Browse All Product</Link>
                  <HiOutlineArrowRight className="w-5 h-5" />
                </li>
              </ul>
            </Flex>
            <div className="mt-6">
              <div className={`grid grid-cols-4 gap-4`}>
                {filterProduct.length == 0 ? (
                  <div className="text-center col-span-4">No Product Found</div>
                ) : (
                  filterProduct?.map((item, index) => (
                    <Product key={index} id={index} product={item} />
                  ))
                )} 
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default FeaturesProducts;
