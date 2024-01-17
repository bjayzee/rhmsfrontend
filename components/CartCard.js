// import { useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";


const CartCard = ({ phone, quantity, onRemove, handlePlus, handleMinus }) => {
    // const { quantity, setQuantity } = useState(quantity);
    return (
        <div className="border border-[gray] p-4 m-2 rounded-xl">
            <div className="flex flex-row items-center justify-between mb-2">
                <img
                    src={phone.thumbnail} 
                    alt={phone.name}
                    className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div className="flex flex-col">
                    <p className="text-lg font-bold">{phone.name}</p>
                    <p className="text-sm text-[gray]"><span>Condition: </span>{phone.specification.grade}</p>
                    <p className="text-sm text-[gray]"><span>Storage: </span>{phone.specification.capacity}</p>
                    <p className="text-sm text-[gray]"><span>Color: </span>{phone.specification.color}</p>
                </div>
                <div className="flex items-center mb-2">
                    <span className="ml-2 font-semibold"><TbCurrencyNaira className="h-6 " />{phone.price}</span>
                </div>
               
            </div>
            <div className='flex justify-between'>
                <div className="flex items-center">
                    <button className="text-xs text-[red] px-3 py-1 round-md" onClick={onRemove}>Remove</button>
                </div>
                <div className=" flex ">
                    <button className="bg-rh-blue text-white px-2  rounded-md h-6" onClick={handleMinus}>-</button>
                    <input value={quantity}
                        onChange={(e) => e.target.value = quantity} 
                        className='w-5 ml-2'>

                        </input>
                    <button className="bg-rh-blue text-white px-2 h-6 rounded-md" onClick={handlePlus}>+</button>
                </div> 
            </div>
            
        </div>
    );
};

export default CartCard;
