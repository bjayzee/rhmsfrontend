"use client";
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {

  return (
    <div className="px-5 overflow-x-hidden mt-7 bg-[#FFFFFF]">
      <section className="flex justify-between gap-3 p-2">
        <Link href='swap-iphone-page' className='w-[33%]'>
          <div
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <Image src="/swapiphone.png" height={47} width={47} alt='phone icon' />
            <span className="text-rh-blue text-xs font-semibold text-center py-2">
              Swap iPhones
            </span>
          </div>
        </Link>


        <Link href='swap-apple-watch' className='w-[33%]'>
          <div
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <Image src="/swapiwatch.png" height={40} width={40} alt='iwatch' />
            <span className="text-rh-blue text-xs font-semibold text-center py-2">
              Swap iWatches
            </span>
          </div>
        </Link>


        <Link href='/buy' className='w-[33%]'>
          <div
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <Image src="/iphone.png" height={47} width={47} alt='iphone icon' />
            <span className="text-rh-blue text-xs font-semibold text-center py-2">
              Buy iPhones
            </span>
          </div>
        </Link>

      </section>

      <section className="flex justify-between gap-3 p-2">

        <Link href='buy-apple-watch ' className='w-[33%]'>
          <div
            className="cursor-pointer flex flex-col items-center "
          >
            <div className='flex h-47 w-47'>
              <Image src="/iwatch.png" height={30} width={30} alt='watch' />
              <Image src="/airpods.png" height={30} width={30} alt='airpod' />
            </div>

            <span className="text-rh-blue text-xs font-semibold text-center py-2">
              Buy iWatches/Airpods
            </span>
          </div>
        </Link>


        <Link href='buy-mac' className='w-[33%]'>
          <div
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <Image src="/mac.png" height={40} width={50} alt='mac image' />
            <span className="text-rh-blue text-xs font-semibold text-center py-2">
              Buy Mac
            </span>
          </div>
        </Link>

        <Link href='/buy-airpods' className='w-[33%]'>
          <div
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <Image src="/ipad.png" height={47} width={47} alt='ipad' />
            <span className="text-rh-blue text-xs font-semibold text-center py-2">
              Buy iPad
            </span>
          </div>
        </Link>

      </section>

      <section className="flex justify-between gap-3 p-2">

        <Link href='buy-accessories' className='w-[33%]'>
          <div
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <Image src="/accessories.png" height={47} width={47} alt='accessories image' />
            <span className="text-rh-blue text-xs font-semibold text-center py-2">
              Buy Accessories
            </span>
          </div>
        </Link>

        <Link href='buy-now-pay-later' className='w-[33%]'>
          <div
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <Image src="/basket.png" height={47} width={47} alt='basket image' />
            <span className="text-rh-blue text-xs font-semibold text-center py-2">
              Buy Now Pay Later
            </span>
          </div>
        </Link>

        <Link href='repair' className='w-[33%]'>
          <div
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <Image src="/repairicon.png" height={47} width={47} alt='repair icon' />
            <span className="text-rh-blue text-xs font-semibold text-center py-2">
              Repairs
            </span>
          </div>
        </Link>

      </section>
    </div>
  );
}

export default Hero