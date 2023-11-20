import Image from "next/image"

const DealODayCard = () => {
  return (
    <div className="w-[165px] h-[300px] bg-white rounded-xl shadow-2xl border-[#D9D9D9] border-r-8 border-b-8 flex flex-col justify-center items-center space-y-1 py-10">
      <Image src='/iphoneS.png' width={118} height={156} className="shadow rounded-2xl" />
      <div className="text-black text-xl font-bold">iPhone 15</div>
      <div className="text-black text-xl font-normal">$699</div>
      <button className="px-5 py-2 bg-rh-blue rounded-2xl shadow-xl text-[#FFFFFF]">BUY/SWAP</button>
    </div>
  )
}

export default DealODayCard