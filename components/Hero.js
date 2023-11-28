"use client";
import Image from 'next/image';
import HeroCard from './HeroCard';
import Link from 'next/link';
import { useRouter } from "next/navigation"

const Hero = () => {
  const router = useRouter()
  const handleClick = name => {
    router.push(`/${name}`)
  }
  return (
    <div className="px-5 overflow-x-hidden mt-7 bg-[#FFFFFF]">
      <section className="flex justify-between gap-3 p-2">
        <div
          onClick={() => handleClick("swap-iphone-page")}
          className="cursor-pointer flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center w-24 h-16 bg-white shadow-2xl rounded-2xl p-3 border-[#D9D9D9] border-r-8 border-b-8">
            <Image src="/phoneicon.png" height={20} width={30} />
            <Image src="/swapicon.png" height={10} width={30} />
            <Image src="/iphoneicon.png" height={20} width={30} />
          </div>

          <span className="text-rh-blue text-sm font-semibold text-center py-2">
            Swap iPhones
          </span>
        </div>

        <div
          className="cursor-pointer flex flex-col items-center justify-center"
          onClick={() => handleClick("swap-apple-watch")}
        >
          <div className="flex items-center justify-center w-24 h-16 bg-white shadow-2xl p-3 rounded-2xl p-3 border-[#D9D9D9] border-r-8 border-b-8">
            <Image src="/watch.png" height={100} width={100} />
            <Image src="/swapicon.png" height={100} width={100} />
            <Image src="/iwatchx.png" height={100} width={100} />
          </div>
          <span className="text-rh-blue text-sm font-semibold text-center py-2">
            Swap iWatches
          </span>
        </div>

        <div
          className="cursor-pointer flex flex-col items-center justify-center"
          onClick={() => handleClick("buy")}
        >
          <div className="flex items-center justify-center w-24 h-16 bg-white shadow-2xl p-3 rounded-2xl p-3 border-[#D9D9D9] border-r-8 border-b-8">
            <Image src="/iphoneicon.png" height={30} width={30} />
          </div>

          <span className="text-rh-blue text-sm font-semibold text-center py-2">
            Buy iPhones
          </span>
        </div>
      </section>

      <section className="flex justify-between gap-3 p-2">
        <div
          className="cursor-pointer flex flex-col items-center justify-center"
          onClick={() => handleClick("buy-apple-watch")}
        >
          <div className="flex items-center justify-center w-24 h-16 bg-white shadow-2xl rounded-2xl p-3 p-3 border-[#D9D9D9] border-r-8 border-b-8">
            <Image src="/iwatchy.png" height={20} width={30} />
          </div>
          <span className="text-rh-blue text-sm font-semibold text-center py-2">
            Buy iWatches
          </span>
        </div>

        <div
          className="cursor-pointer flex flex-col items-center justify-center"
          onClick={() => handleClick("buy-mac")}
        >
          <div className="flex items-center justify-center w-24 h-16 bg-white shadow-2xl rounded-2xl p-3 border-[#D9D9D9] border-r-8 border-b-8">
            <Image src="/mac.png" height={40} width={50} />
          </div>
          <span className="text-rh-blue text-sm font-semibold text-center py-2">
            Buy MacBook
          </span>
        </div>

        <div
          className="cursor-pointer flex flex-col items-center justify-center"
          onClick={() => handleClick("buy-airpods")}
        >
          <div className="flex items-center justify-center w-24 h-16 bg-white shadow-2xl rounded-2xl p-3 border-[#D9D9D9] border-r-8 border-b-8">
            <Image src="/pod.png" height={20} width={30} />
          </div>
          <span className="text-rh-blue text-sm font-semibold text-center py-2">
            Buy Airpods
          </span>
        </div>
      </section>

      <section className="flex justify-between gap-3 p-2">
        <div
          className="cursor-pointer flex flex-col items-center justify-center"
          onClick={() => handleClick("buy-accessories")}
        >
          <div className="flex items-center justify-center w-24 h-16 bg-white shadow-2xl rounded-2xl p-3 border-[#D9D9D9] border-r-8 border-b-8">
            <Image src="/phoneicon.png" height={20} width={30} />
            <Image src="/swapicon.png" height={10} width={30} />
            <Image src="/iphoneicon.png" height={20} width={30} />
          </div>
          <span className="text-rh-blue text-sm font-semibold text-center py-2">
            Buy Accessories
          </span>
        </div>

        <div
          className="cursor-pointer flex flex-col items-center justify-center"
          onClick={() => handleClick("buy-now-pay-later")}
        >
          <div className="flex items-center justify-center w-24 h-16 bg-white shadow-2xl rounded-2xl p-3 border-[#D9D9D9] border-r-8 border-b-8">
            <Image src="/basket.png" height={20} width={30} />
          </div>
          <span className="text-rh-blue text-sm font-semibold text-center py-2">
            Buy and Pay Later
          </span>
        </div>

        <div
          className="cursor-pointer flex flex-col items-center justify-center"
          onClick={() => handleClick("repair")}
        >
          <div className="flex items-center justify-center w-24 h-16 bg-white shadow-2xl rounded-2xl p-3 border-[#D9D9D9] border-r-8 border-b-8">
            <Image src="/repairicon.png" height={30} width={30} />
          </div>
          <span className="text-rh-blue text-sm font-semibold text-center py-2">
            Repairs
          </span>
        </div>
      </section>
    </div>
  );
}

export default Hero