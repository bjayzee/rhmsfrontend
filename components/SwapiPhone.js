"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const SwapiPhone = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [phoneSelection, setPhoneSelection] = useState(false);
  const [newlySelectediPhone, setNewlySelectediPhone] = useState(null);
  const [removeItem, setRemoveItem] = useState(true);
  const [createSpace, setCreateSpace] = useState(true);
  const [selectedModel, setSelectedModel] = useState(null);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [selectedNewPhoneCondition, setSelectedNewPhoneCondition] =
    useState(null);
  const [lockState, setLockState] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedNewPhoneStorage, setSelectedNewPhoneStorage] = useState(null);
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [checkoutButton, setCheckoutButton] = useState(false);

  const [showStorageOptions, setShowStorageOptions] = useState(false);
  const [addToCartButton, setAddToCartButton] = useState(false);

  const handleStorageSelection = (storage) => {
    setSelectedStorage(storage);
    setShowAddToCart(false);
    setAddToCartButton(true);
  };

  const showCartDetails = () => {
    setShowAddToCart(true);
    setRemoveItem(false);
    setCheckoutButton(true);
    setAddToCartButton(false);
  };

  const handleSelectClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNewPhoneSelectClick = () => {
    setShowDropdown(!showDropdown);
    // setRemoveItem(false)
    setCreateSpace(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  const handleNewlySelectediPhone = (option) => {
    setNewlySelectediPhone(option);
    setShowDropdown(false);
    setRemoveItem(false);
    setCreateSpace(false);
  };

  const handleShowAdditionalOptions = () => {
    setShowAdditionalOptions(true);
  };

  const handleConditionSelect = (condition) => {
    setSelectedCondition(condition);
  };

  const handleStorageSelect = (storage) => {
    setSelectedStorage(storage);
    setPhoneSelection(true);
  };

  const dropdownOptions = [
    { label: "iPhone 8", value: "iPhone8" },
    { label: "iPhone Pro Max", value: "iPhoneProMax" },
    { label: "iPhone x", value: "iPhone x" },
    { label: "iPhone x plus", value: "iPhone x plus" },
    // Add more options as needed
  ];

  const models = [
    {
      name: "iPhone 8",
      pictures: ["Rectangle 49.svg", "basket.png"],
      price: "$599",
    },
    {
      name: "iPhone X ",
      pictures: ["Rectangle 49.svg"],
      price: "$859",
    },
    {
      name: "iPhone 8",
      pictures: ["Rectangle 49.svg"],
      price: "$1599",
    },
    {
      name: "iPhone X",
      pictures: ["Rectangle 49.svg"],
      price: "$900",
    },
    {
      name: "iPhone 8",
      pictures: ["Rectangle 49.svg"],
      price: "$750",
    },
    {
      name: "iPhone X",
      pictures: ["basket.png", "Rectangle 49.svg"],
      price: "$770",
    },
    {
      name: "iPhone 8",
      pictures: ["Rectangle 49.svg"],
      price: "$750",
    },
    {
      name: "iPhone X",
      pictures: ["basket.png", "Rectangle 49.svg"],
      price: "$770",
    },
    // Add more iPhone models here
  ];

  const showNextPicture = () => {
    setCurrentPictureIndex(
      (prevIndex) => (prevIndex + 1) % models[selectedModel].pictures.length
    );
  };

  const renderOption = (option) => {
    return (
      <div key={option.value}>
        <div
          className="cursor-pointer flex items-center p-2 hover-bg-gray-100"
          onClick={() => handleOptionSelect(option)}
        >
          <span className="font-semibold">{option.label}</span>
        </div>
      </div>
    );
  };

  const renderNewlySelectediPhoneOption = (option) => {
    return (
      <div key={option.value}>
        <div
          className="cursor-pointer flex items-center p-2 hover-bg-gray-100"
          onClick={() => handleNewlySelectediPhone(option)}
        >
          {/* <span>{option.label}</span> */}
          <span>{option.models}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="overflow-x-hidden py-5 px-8 mt-36">
      <div className="text-xl">
        <IoIosArrowRoundBack className="text-[50px] text-[#187EB4] mb-4 ml-[-11px]" />
        <div className="font-bold text-[20px]">
          {createSpace && (
            <>
              <p>Give and get:</p>
              <p>The swap-way is the best way.</p>
            </>
          )}
        </div>

        <p className="py-2 font-bold">
          Browse through the phones below and make your selection.{" "}
        </p>
        {createSpace && (
          <>
            <div className="">
              <div className="flex items-center py-5 justify-between text-[16px]">
                <span className="font-bold">Let's value your iPhone</span>
                <button
                  className="px-3 py-4 rounded-xl shadow-lg flex items-center border-[#D9D9D9] border-r-8 border-b-8"
                  onClick={handleSelectClick}
                >
                  {selectedOption ? selectedOption.label : "Select your phone"}
                  <FaPlay className="text-[30px] text-[#187EB4] ml-1" />
                </button>
              </div>
              <div className="flex justify-end mt-[-20px]">
                <p className="text-[#187EB4]">Learn how it works</p>
              </div>

              {showDropdown && (
                <div className="my-2 p-5 border-solid rounded-[20px] bg-white shadow right-4 left-4 border-[#D9D9D9] border-r-8 border-b-8 mt-10">
                  <div className="grid grid-cols-2">
                    {dropdownOptions.map((option) => (
                      <div key={option.value}>{renderOption(option)}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {selectedOption && createSpace && (
          <div className="mt-10 text-xl">
            <span className="font-bold my-2">
              What is the condition of the phone?
            </span>

            <div className="border border-[#187EB4] px-8 rounded-xl">
              <div className="grid grid-cols-1">
                <div
                  className="flex mt-4"
                  onClick={handleShowAdditionalOptions}
                >
                  <input type="radio" name="radio1" className="w-4 h-8 mt-1" />

                  <span className="p-2 ml-2 font-semibold">Brand New</span>
                </div>
                <div className="pl-4 ml-4">
                  <p className="pb-3 w-full">
                    Phone still in factory original packaging, Must come with
                    box and all accessories sealed/untounched
                  </p>
                </div>
                <hr />
                <div className="flex" onClick={handleShowAdditionalOptions}>
                  <div>
                    <input
                      type="radio"
                      name="radio1"
                      className="w-4 h-8 mt-1"
                    />
                  </div>

                  <div>
                    <p className="p-2  ml-2 font-semibold">Flawless </p>
                  </div>
                </div>
                <div className="pl-4 ml-4">
                  <p className="pb-3">
                    Has absolutely no scratches, scuffs or other marks looks
                    brand new
                  </p>
                </div>
                <hr />

                <div className="flex" onClick={handleShowAdditionalOptions}>
                  <div>
                    <input
                      type="radio"
                      name="radio1"
                      className=" w-4 h-8 mt-1"
                    />
                  </div>
                  <div>
                    <p className="p-2 ml-2 font-semibold">Good</p>
                  </div>
                </div>
                <div className="pl-4 ml-4">
                  <p className="pb-3">
                    Shows light to moderate sign of wear. Contatains few light
                    scratches and/or dents.
                  </p>
                </div>
                <hr />
                <div className="flex" onClick={handleShowAdditionalOptions}>
                  <div>
                    <input
                      type="radio"
                      name="radio1"
                      className="w-4 h-8 mt-1"
                    />
                  </div>
                  <div>
                    <p className="p-2 ml-2 font-semibold">Fair</p>
                  </div>
                </div>
                <div className="pl-4 ml-4">
                  <p className="pb-3">
                    Shows moderate to excessive signs of wear. Contains
                    excessive scratching, major dents, and/or mild housing
                    damage such as a slightly bent frame.
                  </p>
                </div>
                <hr />
                <div className="flex" onClick={handleShowAdditionalOptions}>
                  <div>
                    <input
                      type="radio"
                      name="radio1"
                      className="w-4 h-8 mt-1"
                    />
                  </div>
                  <div>
                    <p className="p-2 ml-2 font-semibold">Broken </p>
                  </div>
                </div>
                <div className="pl-4 ml-4">
                  <p className="pb-3">
                    Cracks (regardless of size) or broken parts on either screen
                    or body the item.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="">
        {showAdditionalOptions && (
          <div>
            {createSpace !== false && (
              <div className="my-5 text-xl">
                <div className="font-semibold flex flex-col space-y-5">
                  <p>Please select as applied:</p>
                  <p className="">
                    Please select if the phone is locked or unlocked
                  </p>
                </div>

                <div className=" ">
                  <div className="flex">
                    <input
                      type="radio"
                      name="condition"
                      checked={selectedCondition === "locked"}
                      onChange={() => handleConditionSelect("locked")}
                      className="w-4 h-8 pr-[5px] mt-[3px]"
                    />

                    <p className="pl-2 mx-3 mt-2">Locked</p>

                    <input
                      type="radio"
                      name="condition"
                      checked={selectedCondition === "unlocked"}
                      onChange={() => handleConditionSelect("unlocked")}
                      className="w-4 h-8 pr-[5px] mt-[3px]"
                    />
                    <p className="pl-2 mx-1 mt-2">Unlocked</p>
                  </div>
                </div>

                <div className="my-5">
                  <div className="flex">
                    <input
                      type="radio"
                      name="storage"
                      checked={selectedStorage === "64GB"}
                      onChange={() => handleStorageSelect("64GB")}
                      className="w-4 h-8 pr-[5px] mt-[3px]"
                    />
                    <p className="pl-2 mx-1 mt-2 mr-7">64GB</p>
                    <input
                      type="radio"
                      name="storage"
                      checked={selectedStorage === "256GB"}
                      onChange={() => handleStorageSelect("256GB")}
                      className="w-4 h-8 pr-[5px] mt-[3px]"
                    />
                    <p className="pl-2  mx-1 mt-2 mr-7">256GB</p>
                    <input
                      type="radio"
                      name="storage"
                      checked={selectedStorage === "512GB"}
                      onChange={() => handleStorageSelect("512GB")}
                      className="w-4 h-8 pr-[5px] mt-[3px]"
                    />
                    <p className="pl-2 mx-1 mt-2">512GB</p>
                  </div>
                </div>
              </div>
            )}

            {phoneSelection && (
              <div>
                {createSpace !== false && (
                  <div>
                    <div className="my-5 text-[#187EB4] text-xl">
                      <div className="flex">
                        <p className="font-bold">Swap item:</p>
                        <p className="pl-2 ">{selectedOption.label}</p>
                      </div>
                      <div className="flex">
                        <p className="font-bold">Swap value:</p>
                        <p className="pl-2">#33000</p>
                      </div>
                    </div>
                    <p className="font-semibold py-5 text-xl">
                      Now let's select your new phone
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between font-bold right-4 left-4 text-[16px]">
                  <p className="font-semibold py-5 w-full">
                    I want this iPhone
                  </p>

                  <div className="w-full flex items-end justify-end">
                    <button
                      className="px-3 py-4 rounded-xl shadow-lg flex items-center border-[#D9D9D9] border-r-8 border-b-8"
                      onClick={handleNewPhoneSelectClick}
                    >
                      {selectedOption ? selectedOption.label : "Select a phone"}
                      <FaPlay className="text-[30px] text-[#187EB4] ml-1" />
                    </button>
                  </div>
                </div>

                {showDropdown && (
                  <div className="mt-10 text-xl">
                    {models.map((model, index) => (
                      <div className="flex justify-start">
                        <div
                          key={index}
                          className={`rounded-xl ${
                            selectedModel !== null && selectedModel !== index
                              ? "hidden"
                              : ""
                          }`}
                          onClick={() => {
                            setSelectedModel(index);
                            setCurrentPictureIndex(0);
                          }}
                        >
                          <div className="grid grid-cols-1 p-5 space-y-4 flex-wrap">
                            <p className="text-sm font-bold">{model.name}</p>
                          </div>

                          {selectedModel === index && (
                            <div>
                              <div className="">
                                <div className="w-full bg-white rounded-[20px] shadow-xl px-16 py-10 border-[#D9D9D9] border-r-8 border-b-8">
                                  <img
                                    src={model.pictures[currentPictureIndex]}
                                    className="w-full h-64 object-cover"
                                    alt="Perfect Image"
                                  />
                                </div>

                                {removeItem !== false && (
                                  <div className="flex justify-between px-0 py-5 font-bold">
                                    <span className="font-bold">
                                      {model.name}
                                    </span>
                                    <span className="font-semibold">
                                      {model.price}
                                    </span>
                                  </div>
                                )}

                                {removeItem !== false && (
                                  <div>
                                    <p className="font-semibold py-5">
                                      Pick your preference
                                    </p>

                                    <div className="flex">
                                      <label>
                                        <div className="flex">
                                          <input
                                            type="radio"
                                            name={`condition-${model.name}`}
                                            value="brand-new"
                                            onChange={() => {
                                              setSelectedNewPhoneCondition(
                                                "brand-new"
                                              );
                                              setLockState(null);
                                              setSelectedColor(null);
                                              setSelectedNewPhoneStorage(null);
                                              setShowAddToCart(false); // Hide "Add to Cart" when conditions change
                                              setShowStorageOptions(false);
                                            }}
                                            className="w-5 h-8"
                                          />
                                          <p className="pl-2 mt-1">
                                            {" "}
                                            Brand New
                                          </p>
                                        </div>
                                      </label>
                                      <label>
                                        <div className="flex">
                                          <input
                                            type="radio"
                                            name={`condition-${model.name}`}
                                            value="used"
                                            class=" w-5 h-8  mx-2"
                                            onChange={() => {
                                              setSelectedNewPhoneCondition(
                                                "used"
                                              );
                                              setLockState(null);
                                              setSelectedColor(null);
                                              setSelectedNewPhoneStorage(null);
                                              setShowAddToCart(false); // Hide "Add to Cart" when conditions change
                                              setShowStorageOptions(false); // Hide storage options
                                            }}
                                          />
                                          <p className="pl-2 mt-1">Used</p>
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div>
                                {selectedNewPhoneCondition === "brand-new" && (
                                  <div>
                                    {removeItem !== false && (
                                      <div>
                                        <div className="font-bold my-4"></div>
                                        <div className="flex">
                                          <label className="">
                                            <div className="flex">
                                              <input
                                                type="radio"
                                                name={`status-${model.name}`}
                                                value="locked"
                                                class=" w-5 h-8  "
                                                onChange={() => {
                                                  setLockState("unlocked");
                                                  setSelectedColor(null);
                                                  setSelectedStorage(null);
                                                  setShowAddToCart(false); // Hide "Add to Cart" when status changes
                                                }}
                                              />
                                              <p className="pl-2 mt-1">
                                                Unlocked
                                              </p>
                                            </div>
                                          </label>
                                          <label>
                                            <div className="flex">
                                              <input
                                                type="radio"
                                                name={`status-${model.name}`}
                                                value="locked"
                                                class=" w-5 h-8  mx-2"
                                                onChange={() => {
                                                  setLockState("locked");
                                                  setSelectedColor(null);
                                                  setSelectedStorage(null);
                                                  setShowAddToCart(false); // Hide "Add to Cart" when status changes
                                                  setShowStorageOptions(false); // Hide storage options
                                                }}
                                              />
                                              <p className="pl-2 mt-1">
                                                Locked
                                              </p>
                                            </div>
                                          </label>
                                        </div>
                                      </div>
                                    )}
                                    {lockState !== null && (
                                      <div>
                                        {removeItem !== false && (
                                          <div>
                                            <p className="font-semibold py-5">
                                              Select from available Colors
                                            </p>

                                            <div className="flex">
                                              <label>
                                                <div className="flex">
                                                  <p className=" mt-1">Red</p>
                                                  <input
                                                    type="radio"
                                                    class=" w-5 h-8  mx-2"
                                                    style={{
                                                      backgroundColor: "red",
                                                    }}
                                                    name={`color-${model.name}`}
                                                    value="red"
                                                    onChange={() => {
                                                      setSelectedColor("red");
                                                      setSelectedStorage(null);
                                                      setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                                      setShowStorageOptions(
                                                        true
                                                      ); // Show storage options
                                                    }}
                                                  />
                                                </div>
                                              </label>

                                              <label className="">
                                                <div className="flex">
                                                  <p className="pl-2 mt-1">
                                                    Blue
                                                  </p>
                                                  <input
                                                    type="radio"
                                                    class=" w-5 h-8  mx-2"
                                                    name={`color-${model.name}`}
                                                    value="blue"
                                                    onChange={() => {
                                                      setSelectedColor("blue");
                                                      setSelectedStorage(null);
                                                      setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                                      setShowStorageOptions(
                                                        true
                                                      ); // Show storage options
                                                    }}
                                                  />
                                                </div>
                                              </label>
                                              <label>
                                                <div className="flex">
                                                  <p className="pl-2 mt-1">
                                                    Black
                                                  </p>
                                                  <input
                                                    type="radio"
                                                    class=" w-5 h-8  mx-2"
                                                    name={`color-${model.name}`}
                                                    value="black"
                                                    onChange={() => {
                                                      setSelectedColor("black");
                                                      setSelectedStorage(null);
                                                      setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                                      setShowStorageOptions(
                                                        true
                                                      ); // Show storage options
                                                    }}
                                                  />
                                                </div>
                                              </label>
                                              <label className="">
                                                <div className="flex">
                                                  <p className=" mt-1">Green</p>
                                                  <input
                                                    type="radio"
                                                    class=" w-5 h-8  mx-2"
                                                    name={`color-${model.name}`}
                                                    value="green"
                                                    onChange={() => {
                                                      setSelectedColor("green");
                                                      setSelectedStorage(null);
                                                      setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                                      setShowStorageOptions(
                                                        true
                                                      ); // Show storage options
                                                    }}
                                                  />
                                                </div>
                                              </label>
                                              <label>
                                                <div className="flex">
                                                  <p className="pl-2 mt-1">
                                                    Pink
                                                  </p>
                                                  <input
                                                    type="radio"
                                                    class=" w-5 h-8  mx-2"
                                                    name={`color-${model.name}`}
                                                    value="pink"
                                                    onChange={() => {
                                                      setSelectedColor("pink");
                                                      setSelectedStorage(null);
                                                      setShowAddToCart(false);
                                                      setShowStorageOptions(
                                                        true
                                                      );
                                                    }}
                                                  />
                                                </div>
                                              </label>
                                            </div>
                                          </div>
                                        )}

                                        {showStorageOptions && (
                                          <div>
                                            {removeItem !== false && (
                                              <div>
                                                <div className="font-bold mt-4">
                                                  <p>Select Storage Capacity</p>
                                                </div>
                                                <div className="flex">
                                                  <label className=" ">
                                                    <div className="flex">
                                                      <input
                                                        type="radio"
                                                        class=" w-5 h-8  "
                                                        name={`storage-${model.name}`}
                                                        value="128GB"
                                                        onChange={() => {
                                                          handleStorageSelection(
                                                            "128GB"
                                                          );
                                                        }}
                                                      />
                                                      <p className="pl-2 mt-1">
                                                        {" "}
                                                        128GB
                                                      </p>
                                                    </div>
                                                  </label>
                                                  <label>
                                                    <div className="flex">
                                                      <input
                                                        type="radio"
                                                        class=" w-5 h-8  mx-2"
                                                        name={`storage-${model.name}`}
                                                        value="256GB"
                                                        onChange={() =>
                                                          handleStorageSelection(
                                                            "256GB"
                                                          )
                                                        }
                                                      />
                                                      <p className="pl-2 mt-1">
                                                        256GB
                                                      </p>
                                                    </div>
                                                  </label>
                                                  <label>
                                                    <div className="flex">
                                                      <input
                                                        type="radio"
                                                        class=" w-5 h-8  mx-2"
                                                        name={`storage-${model.name}`}
                                                        value="512GB"
                                                        onChange={() =>
                                                          handleStorageSelection(
                                                            "512GB"
                                                          )
                                                        }
                                                      />
                                                      <p className="pl-2 mt-1">
                                                        512GB
                                                      </p>
                                                    </div>
                                                  </label>
                                                </div>
                                              </div>
                                            )}

                                            {showAddToCart &&
                                              selectedModel !== null && (
                                                <div className="selected-model-details flex flex-col space-y-5 mt-10">

                                                  <div className="flex space-x-3 mt-2 font-bold text-xl">
                                                    <span>1 {selectedCondition}</span>
                                                    <span>{models[selectedModel].name}</span>
                                                    <span>{selectedStorage}</span>
                                                  </div>

                                                  <div className="flex space-x-3 font-bold text-xl capitalize">
                                                    <span>{selectedColor}</span>
                                                    <span>{lockState}</span>
                                                  </div>

                                                  <div className="flex space-x-3 font-bold text-xl">
                                                    <span>Your swap:</span>
                                                    <span>{models[selectedModel].name}</span>
                                                    <span>{models[selectedModel].price}</span>
                                                  </div>

                                                  <div className="flex justify-between font-bold text-xl">
                                                    <p>Price after swap:</p>
                                                    <p>{models[selectedModel].price}</p>
                                                  </div>

                                                  <div className="flex justify-end">
                                                     <span onClick={() =>
                                                        setShowAddToCart(false)
                                                      } className="py-10 text-[#187EB4] font-bold text-[20px]">Remove</span>
                                                  </div>
                                                </div>
                                              )}

                                            {addToCartButton && (
                                              <div className="flex justify-center items-center">
                                                <button
                                                  onClick={showCartDetails}
                                                  className="my-10 bg-[#187EB4] text-[#FFFFFF] rounded-full px-16 py-5"
                                                >
                                                  ADD TO CART
                                                </button>
                                              </div>
                                            )}

                                            {checkoutButton && (
                                              <>
                                                <div className="flex justify-center items-center">
                                                    <Link className="bg-[#187EB4] text-[#FFFFFF] rounded-full px-16 py-5" href="/howToCheckOut">
                                                      CHECKOUT
                                                    </Link>
                                                 
                                                </div>
                                                  <p className="text-[#187EB4] text-center font-semibold">
                                                    Add more items
                                                  </p>
                                              </>
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default SwapiPhone;
