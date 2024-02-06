import Image from "next/image";
import { TbCurrencyNaira } from "react-icons/tb";

const ProductCard = ({ onClick, model }) => {
  return (
    <section
      onClick={onClick}
      className="w-full h-[275px] bg-white rounded-xl shadow-2xl border-[#D9D9D9] border-r-8 border-b-8 grid justify-items-center py-5"
    >
      <img
        src={model.thumbnail}
        width={118}
        height={156}
        className="shadow rounded-2xl"
      />
      <div className="w-fit h-[25.85px] text-black text-l font-bold">
        {model.name}
      </div>
      <div className="w-fit h-2 text-black text-l font-normal pb-5 flex">
        <TbCurrencyNaira className="h-7"/>
        <span>{model.price}</span>
      </div>
      <button className="w-[120px] h-[26px] bg-rh-blue rounded-[10px] shadow text-white-100 mt-2">
        BUY
      </button>
    </section>
  );
};

export default ProductCard;
