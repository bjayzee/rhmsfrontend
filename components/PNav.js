"use client";

import { CartContent } from "@/app/context/AppContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CiSearch } from "react-icons/ci";

const PNav = () => {
  const { cartItems } = useContext(CartContent);

  const badgeClasses = "bg-red-500 text-white rounded-full px-2";
  return (
    <div className="text-center flex flex-row items-center justify-between p-3 px-5 mb-3">
      <Link href="/">
        <Image src="/rhmstechlogo.png" alt="logo" width={41} height={40} />
      </Link>

      <div className="lg:flex hidden gap-10">
        <Link href={"/swap-iphone-page"}>
          <span className="font-semibold">Swap iPhone</span>
        </Link>

        <Link href={"/swap-apple-watch"}>
          <span className="font-semibold">Swap iWatch</span>
        </Link>

        <Link href={""}>
          <span className="font-semibold">Repairs</span>
        </Link>

        <Link href={""}>
          <span className="font-semibold">Buy & Pay Later</span>
        </Link>
      </div>
      <div className="flex items-center gap-8 flex-row">
        <Link href="/register">
          <p className="p-0 font-bold">Login/Register</p>
        </Link>

        <div className="hidden lg:flex cursor-pointer">
          <CiSearch size={20} />
        </div>

        <div>
          <div className="relative mr-3">
            <Link href="/checkoutPage">
              <Image src="/cart.png" alt="cart image" width={20} height={21} />
            </Link>

            {!!cartItems.length > 0 && (
              <span className=" bg-rh-blue text-[white] rounded-full px-1 absolute bottom-2 left-3">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PNav;
