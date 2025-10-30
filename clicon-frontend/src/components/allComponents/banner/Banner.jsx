import Container from "@/components/common/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Banner() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/banner/getBannerOne`
  );
  const data = await res.json();
  return (
    <div className="mt-8">
      <Container>
        <div className="flex justify-between">
          {data.data.map((item, index) => (
            <Link href={`/${item.href}`}>
              <Image src={item.image} width={872} height={520} alt="banner" />
            </Link>
          ))}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image src="/banner2.png" width={424} height={248} alt="banner" />
            </Link>
            <Link href="/">
              <Image src="/banner3.png" width={424} height={248} alt="banner" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
