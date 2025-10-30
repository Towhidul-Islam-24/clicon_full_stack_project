import Shop from "@/components/allComponents/shop/Shop";
import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb />
      <Container>
        <Shop />
      </Container>
    </div>
  );
};

export default page;
