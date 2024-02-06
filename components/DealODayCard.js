import Image from "next/image";

const DealODayCard = ({ onClick, param}) => {
  return (
      <section
        onClick={onClick}
        className="align-center border-radius-2xl shadow-2xl w-full p-5 ml-3"
      >
        <img
          src={param.thumbnail}
          width={100}
          height={100}
          className="shadow rounded-2xl"
          alt={param.name}
        />
        <div className="w-fit text-black font-bold p-3">
          {param.name}
        </div>
        <div className="text-black text-l font-normal p-1">${param.price}</div>
        <button className="w-[120px] h-[26px] bg-rh-blue rounded-[10px] shadow text-white-100">
          BUY/SWAP
        </button>
      </section>
  );
};

export default DealODayCard;
