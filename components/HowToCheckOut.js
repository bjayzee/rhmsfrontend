import Link from "next/link";

const HowToCheckOut = () => {
  return (
    <div className="h-80 w-screen">
      <h2 className="font-bold py-3">How do you want to checkout?</h2>
      <div className="flex space-x-5 font-bold">
        <Link className="border-2 border-[#808080] text-[#187EB4] px-10 py-5 rounded-2xl" href="/signin-page">Sign in</Link>
        <Link className="border-2 border-[#808080] text-[#187EB4] px-10 py-5 rounded-2xl" href="/checkoutPage">As a guest</Link>
      </div> 
    </div>
  )
}

export default HowToCheckOut;