"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <div className="fixed z-20 top-16 right-0 left-0">
      <div className="w-full bg-rh-blue flex flex-row items-center h-55 py-5 px-3 relative">
        <Image
          className={`${showMenu && "invisible"}`}
          onClick={() => setShowMenu(!showMenu)}
          src="/hamburger.png"
          alt="hamburger"
          width={50}
          height={50}
        />

        <div className="flex pl-3 z-10">
          <div className="relative">
            <input
              className="bg-[white] h-10 w-80 mr-4 text-black flex px-3 rounded-full"
              placeholder="search"
              defaultValue="search"
            />
            <Image
              src="/search-icon.png"
              width={20}
              height={5}
              className="absolute right-8 top-3"
            />
          </div>
        </div>

        <div
          className={`z-30 top-20 right-0 left-0 fixed rounded-b-xl text-[#FFFFFF] bg-opacity-95 px-5 pb-10 md:hidden bg-[#187EB4] ${
            !showMenu && "hidden"
          }`}
        >
          {/* Mobile toggle Menu   */}
          <CgClose
            onClick={() => setShowMenu(false)}
            className="text-[40px] ml-[-5px] mb-5 mt-1 font-bold"
          />
          <div className="flex flex-col space-y-8 font-bold text-xl">
            <Link href="">Swap iPhone</Link>
            <Link href="">iWatch</Link>
            <Link href="/buy">Buy iPhone</Link>
            <Link href="">Buy iWatch</Link>
            <Link href="">Buy a MacBook</Link>
            <Link href="">Buy Airpods</Link>
            <Link href="">Buy Accessories</Link>
            <Link href="">Buy and Pay Later</Link>
            <Link href="">Start a Repairs</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = NavBar;
