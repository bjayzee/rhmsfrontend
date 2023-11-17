import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import Logo from "/public/rhmstech-logo.svg"

const Footer = () => {
  return (
    <footer className="text-[white] bg-rh-blue flex flex-col space-y-1">
      <div className="md:px-20 px-5 py-10 md:py-16">
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={40}
          className="ml-[-10px]"
        />
        <div className="flex flex-row space-x-7 py-4 font-semibold">
          <div className="flex flex-col space-y-3">
            <span className="font-thin">Contact</span>
            <span>+2349067339338</span>
            <span>contact@rhms.com</span>
            <span className="flex flex-row space-x-2 items-center">Follow us{" "} <CiFacebook className="ml-2" size={20} /> <IoLogoInstagram size={20} /> <RiTwitterXLine size={20} /></span>
          </div>

          <div className="flex flex-col space-y-3">
            <span className="font-thin">Quick Links</span>
            <span>About</span>
            <span>Learn swapping</span>
            <span>Repairs</span>
          </div>

          <div className="flex flex-col space-y-3">
            <span className="font-thin">Account</span>
            <span>Login</span>
            <span>Register</span>
          </div>
        </div>

        <div className="flex flex-col space-y-3 font-semibold mt-5">
          <span className="font-thin">Address</span>
          <p>The Bunker, 279 Herbert Macaulay, Yaba, Lagos</p>
          <p className="w-[300px] font-bold">
            Monday – Friday (9:00 a.m – 5:00 p.m) Saturday (10:00 a.m – 4:00
            p.m)
          </p>
        </div>
      </div>

      <hr className="px-0" />

      <div className="md:px-20 px-5 py-5 md:py-16 text-md flex flex-col space-y-2">
        <div className="flex flex-row space-x-3 pt-2">
          <span>2023&copy; Copyright RHMS</span>
          <span className="font-semibold">Privacy Policy</span>
          <span className="font-semibold">Terms and Condtions</span>
        </div>
        <span className="">All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer