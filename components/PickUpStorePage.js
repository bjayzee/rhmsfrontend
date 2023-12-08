import React from 'react'
import Link from 'next/link';

const PickUpStorePage = () => {
  return (
    <div className="px-5">
       <div className='font-bold   text-xl my-5'>
            <h1>Pick up store:</h1>
        </div>
        <div className='font-bold  my-5'>
            <h2>We need your need your details to find you the nearest store</h2>
        </div>
        

        <div className="flex flex-col space-y-8 text-xl">
        <input
          className="focus:ring-0 outline-none border-2 border-[#187EB4] text-[#187EB4] rounded-2xl h-16 px-3"
          placeholder="First Name"
        />
        <input
          className="focus:ring-0 outline-none border-2 border-[#187EB4] text-[#187EB4] rounded-2xl h-16 px-3"
          placeholder="Last Name"
        />
        <input
          className="focus:ring-0 outline-none border-2 border-[#187EB4] text-[#187EB4] rounded-2xl h-16 px-3"
          placeholder="Put your address"
        />
        <input
          className="focus:ring-0 outline-none border-2 border-[#187EB4] text-[#187EB4] rounded-2xl h-16 px-3"
          placeholder="Email"
        />
        <input
          className="focus:ring-0 outline-none border-2 border-[#187EB4] text-[#187EB4] rounded-2xl h-16 px-3"
          placeholder="Phone Number"
        />  
      </div>

        <div  className=" flex m-5   pl-10 font-bold">
         

          <button
            className="bg-[#187EB4] px-16 py-4 mt-5 rounded-full text-[#FFFFFF]"
                              
                            >
              <Link href="/guestOrderSuccessfulPage">CHECK STORE</Link> 
              </button>
          </div>
    </div>
  )
}

export default PickUpStorePage
