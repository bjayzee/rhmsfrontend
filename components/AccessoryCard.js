import { TbCurrencyNaira } from "react-icons/tb";

const AccessoryCard = ({ onClick, model }) => {
  return (
    <section
      onClick={onClick}
      className="w-full h-[350px] bg-white rounded-xl shadow-2xl border-[#D9D9D9] border-r-8 border-b-8 flex flex-col justify-items-center justify-between p-5"
    >
      <img
        src={model.image}
        width={118}
        height={160}
        className="shadow rounded-2xl"
      />
      <div className=" p-3 w-[130px] h-[126px] text-l font-bold">
        {model.name}
      </div>
      <div className="w-[120px] h-[26px] text-l font-bold flex">
        <TbCurrencyNaira className="h-5" />
        <span>{model.price.toLocaleString()}</span>
      </div>
      <button className="w-[120px] h-[26px] bg-rh-blue rounded-[10px] shadow text-white-100 mt-2">
        BUY
      </button>
    </section>
  );
};

export default AccessoryCard;
