"use client";
import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Container from "@/components/common/Container";
import { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";

const Category = () => {
  const [allCategoryList, setAllCategoryList] = useState([]);

  useEffect(() => {
    function categoryList() {
      axios
        .get(`${process.env.NEXT_PUBLIC_URL}/api/v1/category/getcategories`)
        .then((res) => {
          setAllCategoryList(res.data.data);
        });
    }
    categoryList();
  }, []);

  return (
    <Container>
      <div>
        <h3 className="font-poppins font-semibold text-[32px] leading-10 text-[#191C1F] my-8 text-center">
          Shop with Categorys
        </h3>
      </div>
      <Carousel className="w-full">
        {allCategoryList.length > 5 && <CarouselPrevious />}
        <CarouselContent className="-ml-1">
          {allCategoryList.map((item, index) => (
            // <Link href="/category" className="p-1">
              
            // </Link>
            <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/6"
              >
                <Link href="/category" className="p-1">
                  <Card className={`rounded-[6px] w-[205px] h-[236px]`}>
                    <CardContent className="flex aspect-square items-center justify-center p-2">
                      <div className="flex flex-col items-center justify-between">
                        <Link href={`/category/${item.slug}`}>
                          <img
                            src={item.image}
                            alt={item.name}
                            width={148}
                            height={148}
                            className="w-[148px] h-[148px]"
                          />
                        </Link>
                        <CardTitle
                          className={`text-center font-poppins font-medium text-base leading-6 text-[#191c1f]`}
                        >
                          <Link href={`/shop/${item.slug}`}>
                            {item.name}
                          </Link>
                        </CardTitle>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
          ))}
        </CarouselContent>
        {allCategoryList.length > 5 && <CarouselNext />}
      </Carousel>
    </Container>
  );
};

export default Category;
