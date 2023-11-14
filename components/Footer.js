import Image from "next/image"

const Footer = () => {
  return (
    <div className='w-full text-[white] h-[312px] bg-rh-blue py-4 px-2'>
      <Image 
          src='/rhmstechlogo2.png'
          alt="logo"
          width={41} 
          height={40} 
      />
      <div className="flex flex-row justify-between pt-3 ">
        <div>
          <h2>Contact</h2>
          <div>+2349067339338</div>
          <div>contact@rhms.com</div>
          <div>Follow us</div>
        </div>
        <div>
          <h2>Quick Links</h2>
          <div>About</div>
          <div>Learn about swapping</div>
          <div>Repairs</div>
        </div>
        <div>
          <h2>Account</h2>
          <div>Login</div>
          <div>Register</div>
        </div>
      </div>
      <div>
          <h1>Address</h1>
        <blockquote>
          The Bunker, 279 Herbert Macaulay,
          Yaba, Lagos
        </blockquote>
        <div className="w-[233px] text-xs font-bold">Monday – Friday (9:00 a.m – 5:00 p.m) Saturday (10:00 a.m – 4:00 p.m)</div>
      </div>
      <div className="flex flex-row justify-between pt-3 border-t-white">
        <div>
          <h2>copyright</h2>   
        </div>
        <div>
          <h2>Privacy Policy</h2>
        </div>
        <div>
          <h2>Terms and Condtions</h2>
        </div>
      </div>
      <div>All Rights Reserved.</div>
    </div>
  )
}

export default Footer