import React from 'react'
import Link from 'next/link'
const CardInfoPage = () => {
  return (
    <div className="px-5">
        <div className='font-bold m-5'>
            <h1>Enter  your card information:</h1>
        </div>
        <div className="flex flex-col space-y-8 text-xl">
        

       

        <input
          className="focus:ring-0 outline-none border-2 border-[#187EB4] text-[#187EB4] rounded-2xl h-16 px-3"
          placeholder="Debit Card Number"
        />
           
            <div  className="flex space-x-5 font-bold my-5">
               
                
               <input
                 className="focus:ring-0 w-1/2 outline-none border-2 border-[#187EB4] text-[#187EB4] rounded-2xl h-16 px-3"
                 placeholder="Expiration MM/YY"
               />  
                <input
                 className="focus:ring-0  w-1/2 outline-none border-2 border-[#187EB4] text-[#187EB4] rounded-2xl h-16 px-3"
                 placeholder="CVV"
               />  
               </div>
        </div>

        <div className=' font-bold m-5'>
            <h1>Pay with cash transfer:</h1>
            <div className=' flex my-3 '>
             <p>Account Number: </p>
              <p> 0094765247 </p>
            </div>
            <div className=' flex '>
             <p>Account Name: </p>
              <p> RHMS Limited </p>
             </div>
        </div>
        <div className='font-bold m-5'>
            <h1>Screenshot and upload receipt</h1>
        </div>
        <div>

        </div>

        <div  className=" flex m-5   pl-10 font-bold">

        




<div className="flex justify-center items-center">
        <button className="my-10 bg-[#187EB4] text-[#FFFFFF] rounded-full px-16 py-5">
        <Link href="/delivery-order-successfully-completed">PLACE ORDER</Link> 
        </button>
      </div>
</div>
      
    </div>
  )
}

export default CardInfoPage
