import Image from "next/image"
import DealODayCard from "./DealODayCard"

const DealOfTheDay = () => {
  return (
    <div className="grid justify-items-center mt-3">
      <h1 className="text-black text-[20px] font-extrabold py-5">DEALS OF THE DAY</h1>
      <div className="grid grid-cols-2 justify-between gap-6">
        <DealODayCard />
        <DealODayCard />
        <DealODayCard />
        <DealODayCard />
        <DealODayCard />
        <DealODayCard />
        <DealODayCard />
        <DealODayCard />
        <DealODayCard />
        <DealODayCard />
      <div>

        </div>
      </div>
    </div>
  )
}

export default DealOfTheDay