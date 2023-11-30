import Link from "next/link";
import React from "react";

export default function CheckoutPage() {
  return (
    <div className="m-5">
      <h2 className="font-bold">Checkout:</h2>

      <p className="font-bold">1 used iPhone 11 Pro Max 512GB unlocked pink</p>

      <div className="flex justify-between">
        <span>Price</span>
        <span>#2000</span>
      </div>

      <p className="font-bold">How would you like to get your order?</p>

     <div className="flex space-x-5 font-bold">
        <Link className="border-2 w-1/2 border-[#D3D3D3] text-[#187EB4] px-10 py-5 rounded-2xl flex items-center justify-center" href="/signin-page">I'w like it delivered</Link>
        <Link className="border-2 w-1/2 border-[#D3D3D3] text-[#187EB4] px-10 py-5 rounded-2xl flex items-center justify-center" href="/checkoutPage">I’w pick it up</Link>
      </div> 
      <div className="flex justify-between">
        <div className="font-bold">
          <p>Please note: We charge #3000 </p>
          <p>upfront for delivery payment</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-[#187EB4] rounded-xl text-[#FFFFFF]">
          ENTER ADDRESS
        </button>
      </div>
    </div>
  );
}
