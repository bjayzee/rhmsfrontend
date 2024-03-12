"use client";

import { CartContent } from "@/app/context/AppContext";
import { useContext } from "react";

const CheckoutCartCard = ({ phone }) => {
  const { setCartItems, cartItems } = useContext(CartContent);
  const updateItem = (type) => {
    const temp = [...cartItems];

    const tempItem = temp.find((item) => {
      return item._id === phone._id;
    });

    if (type === "minus" && tempItem.quantity > 1) {
      tempItem.quantity = tempItem.quantity - 1;
    } else {
      tempItem.quantity = tempItem.quantity + 1;
    }

    const indexToBeReplaced = temp.findIndex(
      (item) => item._id === tempItem._id
    );
    temp[indexToBeReplaced] = tempItem;
    setCartItems([...temp]);
  };

    return (
      <div className="my-5">
        <div className="flex flex-row items-center justify-between mb-2">
          <img
            src={phone.thumbnail}
            alt={phone.name}
            className="w-10 h-20 object-cover rounded-md mr-4"
          />
          <div className="flex flex-col mx-2">
            <p className="text-sm font-bold">{phone.name}</p>
            <p className="text-sm text-[gray]">
              <span>Condition: </span>
              {phone.specification.grade}
            </p>
            <p className="text-sm text-[gray]">
              <span>Storage: </span>
              {phone.specification.capacity}
            </p>
            <p className="text-sm text-[gray]">
              <span>Color: </span>
              {phone.specification.color}
            </p>
          </div>
          <input
            value={"qty: " + phone.quantity}
            readOnly
            className="w-10 mx-2"
          />
          <div className="flex items-center mb-2">
            <span className="ml-2 font-semibold w-fit flex flex-row">
              ₦{(phone.price * phone.quantity)?.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    );
};

export default CheckoutCartCard;