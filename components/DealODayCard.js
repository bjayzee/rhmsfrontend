import Image from "next/image"

const DealODayCard = () => {
  return (
    <section className="w-[165px] h-[275px] bg-white rounded-[10px] shadow grid justify-items-center pt-4 pb-5">
          <Image src='/iphoneS.png' width={118} height={156} className="shadow rounded"/>
          <div className="w-[87.45px] h-[25.85px] text-black text-xl font-bold">iPhone 15</div>
          <div className="w-11 h-3.5 text-black text-xl font-normal pb-5">$699</div>
          <button className="w-[120px] h-[26px] bg-rh-blue rounded-[10px] shadow text-white-100 mt-2">BUY/SWAP</button>
    </section>
  )
}

export default DealODayCard