import Image from "next/image";

const DealODayCard = ({ onClick, param }) => {
  return (
    <section
      onClick={onClick}
      className="w-[165px] h-[275px] bg-white rounded-xl shadow-2xl border-[#D9D9D9] border-r-8 border-b-8 grid justify-items-center py-5"
    >
      <img
        src={param.thumbnail}
        width={100}
        height={100}
        className="shadow rounded-2xl"
        alt={param.name}
      />
      <div className="w-20 h-[25.85px] text-black text-l font-bold py-3">
        {param.name}
      </div>
      <div className="w-11 h-2 text-black text-l py-5">${param.price}</div>
      <button className="w-[120px] h-[26px] bg-rh-blue rounded-[10px] shadow text-white-100 mt-2">
        BUY/SWAP
      </button>
    </section>
  );
};

export default DealODayCard;
