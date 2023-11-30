"use client";
import React from "react";
import Link from "next/link";

const HowDoYouWantToCheckoutPage = () => {
  return (
     <div className="h-80 px-5">
      <h2 className="font-bold py-10 text-[#000000] text-[20px]">How do you want to checkout?</h2>
      <div className="flex space-x-5 font-bold">
        <Link className="border-2 w-1/2 border-[#D3D3D3] text-[#187EB4] px-10 py-5 rounded-2xl flex items-center justify-center" href="/signin-page">Sign in</Link>
        <Link className="border-2 w-1/2 border-[#D3D3D3] text-[#187EB4] px-10 py-5 rounded-2xl flex items-center justify-center" href="/checkoutPage">As a guest</Link>
      </div> 
    </div>
  );
};

export default HowDoYouWantToCheckoutPage;
