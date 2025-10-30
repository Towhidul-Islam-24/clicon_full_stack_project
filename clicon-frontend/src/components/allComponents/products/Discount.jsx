import Container from "@/components/common/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Discount = () => {
  return (
    <div>
      <Container>
        <Link href="/">
          <Image
            src="/Feature_image/discount.png"
            width={312}
            height={716}
            alt="discount"
          />
        </Link>
      </Container>
    </div>
  );
};

export default Discount;
