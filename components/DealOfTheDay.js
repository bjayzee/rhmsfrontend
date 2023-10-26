import Image from "next/image"
import DealODayCard from "./DealODayCard"

const DealOfTheDay = () => {
  return (
    <div className="grid justify-items-center">
      <h1 className="font-black ">DEALS OF THE DAY</h1>
      <div className="grid grid-cols-2 justify-between gap-10">
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