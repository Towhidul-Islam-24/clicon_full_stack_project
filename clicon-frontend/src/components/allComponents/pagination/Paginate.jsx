"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Product from "../../common/Product";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { currProduct } from "@/lib/slices/productSlice";

const Paginate = ({ itemsPerPage }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const currentCategory = useSelector((state) => state.product.currentCategory);
  const pricerange = useSelector((state) => state.product.pricerange);
  const [allProtucts, setAllProducts] = useState([]);

  const filterparams = new URLSearchParams({
    category: currentCategory,
    minprice: pricerange[0],
    maxprice: pricerange[1],
  });

  useEffect(() => {
    function protuctList() {
      axios
        .get(
          `${
            process.env.NEXT_PUBLIC_URL
          }/api/v1/product/get-products?${filterparams.toString()}`
        )
        .then((res) => {
          setAllProducts(res.data.data);
        });
    }
    protuctList();
  }, [currentCategory, pricerange]);

  const handleSingleProduct = (product) => {
    router.push(`/shop/${product.slug}`);
    dispatch(currProduct(product));
  };

  function Items({ currentItems }) {
    return (
      <div className="grid grid-cols-3 gap-3">
        {currentItems &&
          currentItems.map((allProtucts, index) => (
            <Product
              key={allProtucts._id}
              product={allProtucts}
              id={allProtucts._id}
              onClick={() => handleSingleProduct(allProtucts)}
            />
          ))}
      </div>
    );
  }
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = allProtucts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allProtucts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allProtucts.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        className="flex gap-6 items-center justify-center py-5"
        pageLinkClassName="text-black border border-gray-400 rounded-full w-[40px] h-[40px] flex items-center justify-center rounded ful cursor-pointer hover:text-white hover:bg-[#FA8232] hover:border-none transition-all duration-300"
        previousLinkClassName="text-red-500 border border-[#FA8232] rounded-full w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer hover:text-white hover:bg-[#FA8232] hover:border-none transition-all duration-300"
        nextLinkClassName="text-red-500 border border-[#FA8232] rounded-full w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer hover:text-white hover:bg-[#FA8232] transition-all duration-300"
        activeClassName="text-white bg-[#fa8232] border border-[#FA8232] rounded-full w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer"
      />
    </>
  );
};

export default Paginate;
