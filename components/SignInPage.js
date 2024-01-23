import Link from "next/link";
import React from "react";
import { ImAppleinc } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";


const SignInPage = () => {
  return (
    <div className="px-5">
      <h1 className="font-bold text-[20px] py-5 text-[#187EB4]">Sign in</h1>

      <div className="flex flex-col space-y-8 text-lg">
        <input
          className="focus:ring-0 outline-none border-2 border-[#187EB4] text-[#187EB4] rounded-2xl h-16 px-3"
          placeholder="Email or Phone Number"
        />
        <input
          className="focus:ring-0 outline-none border-2 border-[#187EB4] text-[#187EB4] rounded-2xl h-16 px-3"
          placeholder="Password"
        />
      </div>

      <div className="flex justify-end">
        <span className="text-[#187EB4] font-bold text-lg">Forgot Password?</span>
      </div>

      <div className="flex flex-col justify-center space-y-5 items-center my-10">
        <Link
          className="w-1/2 py-3 rounded-full bg-[#187EB4] text-[#FFFFFF] flex items-center justify-center text-lg"
          href="/checkoutPage"
        >
          Sign In
        </Link>
        <span className="text-lg">Or login with</span>
        <span className="flex items-center justify-center space-x-5 text-[20px]"><ImAppleinc /> <FcGoogle /> <BsFacebook className="text-rh-blue" /></span>
        <p className="text-[#000000] font-bold text-lg">I dont have an account ? <Link className="text-[#187EB4]" href='/register' passHref><button>Sign Up</button></Link> </p>
      </div>
    </div>
  );
};

export default SignInPage;




