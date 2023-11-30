import Link from 'next/link'
import React from 'react'


const SignInPage = () => {
  return (
    <>
        <div className='m-5 font-bold'>
            <h1>Sign in</h1>
        </div>
        <div className='pl-5'>
            <input className="focus:ring-0 outline-none border-2 border-[#187EB4] text-[#187EB4] rounded-xl"
                  placeholder='Email or Phone Number'/>

            <input className="focus:ring-0 outline-none border-2 border-[#187EB4] text-[#187EB4] rounded-xl"
                  placeholder='Password'/>
            <div className='font-bold '>
            <span className="text-[#187EB4]">Forgot Password?</span>
            </div>


        </div>

        <div  className=" flex m-5 pl-10 font-bold">
           
            <Link className="border-2 border-[#187EB4] px-8 py-3 rounded-xl bg-[#187EB4] text-[#FFFFFF]" href="/checkoutPage">Sign In</Link> 
        
          </div>
      
    </>
  )
}

export default SignInPage
