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

      <div className="flex">
        <button
          style={{
            border: "2px solid #187EB4",
            padding: "5px 30px",
            borderRadius: "10px",
            color: "#",
            margin: "10px",
          }}
        >
          I'w like it delivered
          <Link
            className="border-2 rounded-lg text-[#187EB4]"
            href="/deliveryInfoPage"
          >
            {" "}
            I'w pick it up
          </Link>
        </button>

        <button
          style={{
            border: "2px solid #187EB4",
            padding: "5px 30px",
            borderRadius: "10px",
            color: "#187EB4",
            margin: "10px",
          }}
        >
          <Link href="/pickUpStorePage"> I'w pick it up</Link>
        </button>
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
