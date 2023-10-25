"use client"

import Image from 'next/image';
import HeroCard from './HeroCard';

const Hero = () => {
  return (
    <div>
      <section className='flex justify-between gap-3 py-4 px-2'>
        <div className=''>
          <div className='flex justify-evenly align-middle w-30 h-10 bg-white shadow-md rounded py-1'>
            <Image
              src='/phoneicon.png'
              height={20}
              width={30}
            />
            <Image
              src='/swapicon.png'
              height={10}
              width={30}
            />
            <Image
              src='/iphoneicon.png'
              height={20}
              width={30}
            />
          </div>
          <div>
            <h2 className='text-rh-blue text-sm font-semibold'>Swap iPhones</h2>
          </div>
        </div>
        <div>
          <div className='flex justify-evenly align-middle w-30 h-10 bg-white shadow-md rounded py-1'>
            <Image
              src='/watch.png'
              height={20}
              width={30}
            />
            <Image
              src='/swapicon.png'
              height={10}
              width={20}
            />
            <Image
              src='/iwatchx.png'
              height={20}
              width={30}
            />
          </div>
          <div>
            <h2 className='text-rh-blue text-sm font-semibold'>Swap iWatches</h2>
          </div>
        </div>
        <div>
          <div className='flex justify-evenly align-center w-30 h-10 bg-white shadow-md rounded py-1'>
            <Image
              src='/iphoneicon.png'
              height={30}
              width={30}
            />
          </div>
          <div>
            <h2 className='text-rh-blue text-sm font-semibold'>Buy iPhones</h2>
          </div>
        </div>
      </section>
      <section className='flex justify-between gap-3 py-4 px-2'>
        <div className=''>
          <div className='flex justify-evenly align-middle w-30 h-10 bg-white shadow-md rounded py-1'>
            <Image
              src='/iwatchy.png'
              height={20}
              width={30}
            />

          </div>
          <div>
            <h2 className='text-rh-blue text-sm font-semibold'>Buy iWatches</h2>
          </div>
        </div>
        <div>
          <div className='flex justify-evenly align-middle w-30 h-10 bg-white shadow-md rounded py-1'>

            <Image
              src='/mac.png'
              height={20}
              width={90}
            />
          </div>
          <div>
            <h2 className='text-rh-blue text-sm font-semibold'>Buy a MacBook</h2>
          </div>
        </div>
        <div>
          <div className='flex justify-evenly align-center w-30 h-10 bg-white shadow-md rounded py-1'>
            <Image
              src='/pod.png'
              height={30}
              width={30}
            />
          </div>
          <div>
            <h2 className='text-rh-blue text-sm font-semibold'>Buy Airpods</h2>
          </div>
        </div>
      </section>
      <section className='flex justify-between gap-3 py-4 px-2 cursor-pointer' onClick={() => console.log("clicked")}>
        <div className=''>
          <div className='flex justify-evenly align-middle w-30 h-10 bg-white shadow-md rounded py-1'>
            <Image
              src='/phoneicon.png'
              height={20}
              width={30}
            />
            <Image
              src='/swapicon.png'
              height={10}
              width={30}
            />
            <Image
              src='/iphoneicon.png'
              height={20}
              width={30}
            />
          </div>
          <div>
            <h2 className='text-rh-blue text-sm font-semibold'>Buy Accessories</h2>
          </div>
        </div>
        <div>
          <div className='flex justify-evenly align-middle w-30 h-10 bg-white shadow-md rounded py-1'>
            <Image
              src='/basket.png'
              height={20}
              width={30}
            />
          </div>
          <div>
            <h2 className='text-rh-blue text-sm font-semibold font-["EB Garamond"]'>Buy and Pay Later</h2>
          </div>
        </div>
        <div>
          <div className='flex justify-evenly align-center w-30 h-10 bg-white shadow-md rounded py-1'>
            <Image
              src='/repairicon.png'
              height={30}
              width={30}
            />
          </div>
          <div>
            <h2 className='text-rh-blue text-sm font-semibold'>Repairs</h2>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Hero