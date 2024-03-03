import Image from "next/image";

const DealODayCard = ({ onClick, param }) => {
  return (
    <section
      onClick={onClick}
      className="w-[165px] lg:w-[90%] min-h-[275px] bg-white rounded-xl shadow-xl border-[#D9D9D9] border-r-5 border-b-5 flex flex-col items-center justify-items-center py-5"
    >
      <img
        src={param.thumbnail}
        width={100}
        height={100}
        className="shadow rounded-2xl"
        alt={param.name}
      />
      <h3 className="text-black text-l font-bold mt-2">{param.name}</h3>
      <p className="w-11 h-2 text-black text-l my-2">
        ${param.price?.toLocaleString()}
      </p>
      <button className="w-[120px] bg-rh-blue rounded-[10px] shadow text-[white] mt-8 p-2">
        BUY/SWAP
      </button>
    </section>
  );
};

export default DealODayCard;
