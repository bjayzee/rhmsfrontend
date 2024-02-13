"use client";

import { useState } from "react";
import { CartContent } from "@/app/context/AppContext";
import { useContext } from "react";
import { TbCurrencyNaira } from "react-icons/tb";

const CartCard = ({ phone, onRemove }) => {
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
    <div className="border border-[gray] p-4 m-2 rounded-xl">
      <div className="flex flex-row items-center justify-between mb-2">
        <img
          src={phone.thumbnail}
          alt={phone.name}
          className="w-20 h-20 object-cover rounded-md mr-4"
        />
        <div className="flex flex-col">
          <p className="text-lg font-bold">{phone.name}</p>
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
        <div className="flex items-center mb-2">
          <span className="ml-2 font-semibold w-fit flex flex-row">
            <TbCurrencyNaira className="h-6  " />
            {(phone.price * phone.quantity)?.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <button
            className="text-xs text-[red] px-3 py-1 round-md"
            onClick={onRemove}
          >
            Remove
          </button>
        </div>
        <div className=" flex ">
          <button
            className="bg-rh-blue text-white px-2  rounded-md h-6"
            onClick={() => updateItem("minus")}
          >
            -
          </button>
          <input value={phone.quantity} readOnly className="w-5 ml-2" />
          <button
            className="bg-rh-blue text-white px-2 h-6 rounded-md"
            onClick={() => updateItem("plus")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
