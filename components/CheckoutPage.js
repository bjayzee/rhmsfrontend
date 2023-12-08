import Link from "next/link";
import React from "react";

export default function CheckoutPage() {
  return (
    <div className="px-5">
      <h2 className="font-bold text-[#000000] text-2xl py-3">Checkout:</h2>

    <span className="font-bold text-[#000000] text-2xl">1 used iPhone 11 Pro Max 512GB unlocked pink</span>

     <div className="flex flex-col font-bold text-[#000000] my-5 text-lg"> 
      <span>Your Swap:</span>
      <span>iPhone 11 Pro Max - #2000</span>
      <span>Price After Swap:</span>
      <span>iPhone 11 Pro Max - #4000</span>
     </div>

      <p className="font-bold text-[#000000] text-2xl py-3">How would you like to get your order?</p>

     <div className="flex space-x-5 font-bold my-5">
        <Link className="border-2 w-1/2 border-[#D3D3D3] text-[#187EB4] py-5 rounded-2xl flex items-center justify-center" href="/deliveryInfoPage">I'w like it delivered</Link>
        <Link className="border-2 w-1/2 border-[#D3D3D3] text-[#187EB4] py-5 rounded-2xl flex items-center justify-center" href="/pickUpStorePage">I’w pick it up</Link>
      </div> 
       
     
      <p className="font-bold my-5 text-lg w-48">Please note: We charge #3000 upfront for delivery payment</p>
     
      <div className="flex justify-center items-center">
        <button className="my-10 bg-[#187EB4] text-[#FFFFFF] rounded-full px-16 py-5">
          ENTER ADDRESS
        </button>
      </div>
    </div>
  );
}










