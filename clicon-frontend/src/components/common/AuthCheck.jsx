"use client";
import { UserInfoSet } from "@/lib/slices/authSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
const AuthCheck = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/v1/auth/authuser`, { withCredentials: true })
      .then((res) => {
        dispatch(UserInfoSet(res.data.data));
      }) 
      .catch((err) => {
        dispatch(UserInfoSet(null));
      });
  }, []);
  return <>{children}</>;
};

export default AuthCheck;
