import React from "react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Overview = () => {
  return (
    <div>
      <Container>
        <div className="flex gap-4 my-18">
          <div className="font-poppins">
            <h3 className="font-semibold leading-6 text-[#191C1F]">
              FLASH SALE TODAY
            </h3>
            {Array(3)
              .fill(0)
              .map((item, index) => (
                <Link href="/">
                  <Card className="rounded-[3px] mt-4 p-2 shadow-none">
                    <div className="flex items-center gap-3 ">
                      <Image
                        src="/camera.png"
                        width={80}
                        height={80}
                        alt="flashsale"
                      />
                      <div>
                        <p className="text-sm leading-5 text-[#191C1F]">
                          Bose Sport Earbuds - Wireless <br /> Earphones -
                          Bluetooth In Ear...
                        </p>
                        <h3 className="text-sm leading-5 text-[#2DA5F3] mt-2 font-semibold">
                          $1,500
                        </h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
          <div className="font-poppins">
            <h3 className="font-semibold leading-6 text-[#191C1F]">
              BEST SELLERS
            </h3>
            {Array(3)
              .fill(0)
              .map((item, index) => (
                <Link href="/">
                  <Card className="rounded-[3px] mt-4 p-2 shadow-none">
                    <div className="flex items-center gap-3 ">
                      <Image
                        src="/camera.png"
                        width={80}
                        height={80}
                        alt="flashsale"
                      />
                      <div>
                        <p className="text-sm leading-5 text-[#191C1F]">
                          Bose Sport Earbuds - Wireless <br /> Earphones -
                          Bluetooth In Ear...
                        </p>
                        <h3 className="text-sm leading-5 text-[#2DA5F3] mt-2 font-semibold">
                          $1,500
                        </h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
          <div className="font-poppins">
            <h3 className="font-semibold leading-6 text-[#191C1F]">
              TOP RATED
            </h3>
            {Array(3)
              .fill(0)
              .map((item, index) => (
                <Link href="/">
                  <Card className="rounded-[3px] mt-4 p-2 shadow-none">
                    <div className="flex items-center gap-3 ">
                      <Image
                        src="/camera.png"
                        width={80}
                        height={80}
                        alt="flashsale"
                      />
                      <div>
                        <p className="text-sm leading-5 text-[#191C1F]">
                          Bose Sport Earbuds - Wireless <br /> Earphones -
                          Bluetooth In Ear...
                        </p>
                        <h3 className="text-sm leading-5 text-[#2DA5F3] mt-2 font-semibold">
                          $1,500
                        </h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
          <div className="font-poppins">
            <h3 className="font-semibold leading-6 text-[#191C1F]">
              NEW ARRIVAL
            </h3>
            {Array(3)
              .fill(0)
              .map((item, index) => (
                <Link href="/">
                  <Card className="rounded-[3px] mt-4 p-2 shadow-none">
                    <div className="flex items-center gap-3 ">
                      <Image
                        src="/camera.png"
                        width={80}
                        height={80}
                        alt="flashsale"
                      />
                      <div>
                        <p className="text-sm leading-5 text-[#191C1F]">
                          Bose Sport Earbuds - Wireless <br /> Earphones -
                          Bluetooth In Ear...
                        </p>
                        <h3 className="text-sm leading-5 text-[#2DA5F3] mt-2 font-semibold">
                          $1,500
                        </h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Overview;
