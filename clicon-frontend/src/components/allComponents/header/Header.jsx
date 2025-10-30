"use client";
import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderCenter from './HeaderCenter'
import HeaderBottom from './HeaderBottom'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setIsSticky(true) : setIsSticky(false);
    })
  },[])
  return (
    <div className={`${isSticky && 'fixed top-0 left-0 w-full z-50'}`}>
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />
    </div>
  )
}

export default Header