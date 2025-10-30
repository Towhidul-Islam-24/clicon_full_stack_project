import React from 'react'
import Container from '@/components/common/Container'
import Link from 'next/link'
import { IoLogoInstagram } from 'react-icons/io5'
import { FaReddit } from 'react-icons/fa6'
import { IoLogoTwitter, IoLogoFacebook, IoLogoPinterest, IoLogoYoutube } from 'react-icons/io5'

const HeaderTop = () => {
  return (
    <div>
        <div className="bg-[#1B6392] py-4 border-b-[1px] border-[#77878F]">
          <Container>
            <div className="flex justify-between ">
              <p className="text-sm font-poppins text-white leading-5 font-normal">
                Welcome to Clicon online eCommerce store.
              </p>
              <ul className="flex gap-3 border-r-[1px] border-[#77878F]">
                <li className="text-sm font-poppins text-white leading-5 font-normal">
                  Follow us:{" "}
                </li>
                <li>
                  {" "}
                  <Link href="#">
                    <IoLogoTwitter className="text-white text-2xl" />
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="#">
                    <IoLogoFacebook className="text-white text-2xl" />
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="#">
                    <IoLogoPinterest className="text-white text-2xl" />
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="#">
                    <IoLogoYoutube className="text-white text-2xl" />
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="#">
                    <FaReddit className="text-white text-2xl" />
                  </Link>{" "}
                </li>
                <li className="mr-6">
                  {" "}
                  <Link href="#">
                    <IoLogoInstagram className="text-white text-2xl" />
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </Container>
        </div>
      </div>
  )
}

export default HeaderTop