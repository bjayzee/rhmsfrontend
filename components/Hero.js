"use client"

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
    <div>
      <div>
        <section className='flex justify-between gap-3 py-4 px-2'>
          <div className=''>
          <Link href='/swap-iphone-page'>
           <div className='flex justify-evenly align-middle w-30 h-10 bg-white shadow-md rounded py-1'>
          
              <Image
                src='/phoneicon.png'
                height={20}
                width={30} />
                 
              <Image
                src='/swapicon.png'
                height={10}
                width={30} />
              <Image
                src='/iphoneicon.png'
                height={20}
                width={30} />
               
            </div>
            </Link>
            
            <div>
              <h2 className='text-rh-blue text-sm font-semibold'>Swap iPhones</h2>
            </div>
          </div>
          <div onClick={() => handleClick("swap-apple-watch")}>
            <div className='flex justify-evenly align-middle w-30 h-10 bg-white shadow-md rounded py-1'>
              <Image
                src='/watch.png'
                height={20}
                width={30} />
              <Image
                src='/swapicon.png'
                height={10}
                width={20} />
              <Image
                src='/iwatchx.png'
                height={20}
                width={30} />
            </div>
            <div>
              <h2 className='text-rh-blue text-sm font-semibold'>Swap iWatches</h2>
            </div>
          </div>
          <div className='cursor-pointer' onClick={() => handleClick("buy")}>
            <div className='flex justify-evenly align-center w-30 h-10 bg-white shadow-md rounded py-1'>
              <Image
                src='/iphoneicon.png'
                height={30}
                width={30} />
            </div>
            <div>
              <h2 className='text-rh-blue text-sm font-semibold'>Buy iPhones</h2>
            </div>
          </div>
        </section>
        <section className='flex justify-between gap-3 py-4 px-2'>
          <div className='' onClick={() => handleClick("buy-apple-watch")} >
            <div className='flex justify-evenly align-middle w-30 h-10 bg-white shadow-md rounded py-1'>
              <Image
                src='/iwatchy.png'
                height={20}
                width={30} />

            </div>
            <div>
              <h2 className='text-rh-blue text-sm font-semibold'>Buy iWatches</h2>
            </div>
          </div>
          <div   onClick={() => handleClick("buy-mac")} >
            <div className='flex justify-evenly align-middle w-30 h-10 bg-white shadow-md rounded py-1'>

              <Image
                src='/mac.png'
                height={20}
                width={90} />
            </div>
            <div>
              <h2 className='text-rh-blue text-sm font-semibold'>Buy a MacBook</h2>
            </div>
          </div>
          <div  onClick={() => handleClick("buy-airpods")}>
            <div className='flex justify-evenly align-center w-30 h-10 bg-white shadow-md rounded py-1'>
              <Image
                src='/pod.png'
                height={30}
                width={30} />
            </div>
            <div>
              <h2 className='text-rh-blue text-sm font-semibold'>Buy Airpods</h2>
            </div>
          </div>
        </section>
        <section className='flex justify-between gap-3 py-4 px-2'>
          <div className=''>
            <div className='flex justify-evenly align-middle w-30 h-10 bg-white shadow-md rounded py-1'>
              <Image
                src='/phoneicon.png'
                height={20}
                width={30} />
              <Image
                src='/swapicon.png'
                height={10}
                width={30} />
              <Image
                src='/iphoneicon.png'
                height={20}
                width={30} />
            </div>
            <div>
              <h2 className='text-rh-blue text-sm font-semibold'>Buy Accessories</h2>
            </div>
          </div>
          <div>
            <div className='flex justify-evenly align-middle w-30 h-10 bg-[white] shadow-md rounded py-1'>
              <Image
                src='/basket.png'
                height={20}
                width={30} />
            </div>
            <div>
              <h2 className='text-rh-blue text-sm font-semibold'>Buy and Pay Later</h2>
            </div>
          </div>
          <div className='cursor-pointer' onClick={() => handleClick("repair")}>
            <div className='flex justify-evenly align-center w-30 h-10 bg-white shadow-md rounded py-1'>
              <Image
                src='/repairicon.png'
                height={30}
                width={30} />
            </div>
            {/* </Link> */}
            <div>
              <h2 className='text-rh-blue text-sm font-semibold'>Repairs</h2>
            </div>
          </div>
        </section>

      </div>
      {/* <div>
            <h3>My Hero</h3><Link href="/Repair"><h3>Go to Repair</h3></Link>
          </div> */}
    </div>
  )
}

export default Hero