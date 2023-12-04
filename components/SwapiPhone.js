"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { GoDot, GoDotFill } from "react-icons/go";

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
  const [modelIndex, setModelIndex] = useState(0);
  const [iphoneModel, setIphoneModel] = useState("");

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
      pictures: ["iphoneS.png", "basket.png"],
      price: "$599",
    },
    {
      name: "iPhone X ",
      pictures: ["iphoneS.png"],
      price: "$859",
    },
    {
      name: "iPhone 8",
      pictures: ["iphoneS.png"],
      price: "$1599",
    },
    {
      name: "iPhone X",
      pictures: ["iphoneS.png"],
      price: "$900",
    },
    {
      name: "iPhone 8",
      pictures: ["iphoneS.png"],
      price: "$750",
    },
    {
      name: "iPhone X",
      pictures: ["basket.png", "iphoneS.png"],
      price: "$770",
    },
    {
      name: "iPhone 8",
      pictures: ["iphoneS.png"],
      price: "$750",
    },
    {
      name: "iPhone X",
      pictures: ["basket.png", "iphoneS.png"],
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
          <span>{option.label}</span>
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

// ====>

  const handleColorChange = (iphoneColor) => {
    setSelectedColor(iphoneColor);
    setSelectedStorage(null);
    setShowAddToCart(false); // Hide "Add to Cart" when color changes
    setShowStorageOptions(true); // Show storage options
  };

  const handleLockedOrUnlockedChange = (iphoneState) => {
    setLockState(iphoneState);
    setSelectedColor(null);
    setSelectedStorage(null);
    setShowAddToCart(false); // Hide "Add to Cart" when status changes
  };

  const handleNewOrUsedChange = (iphoneState) => {
    setSelectedNewPhoneCondition(iphoneState);
    setLockState(null);
    setSelectedColor(null);
    setSelectedNewPhoneStorage(null);
    setShowAddToCart(false); // Hide "Add to Cart" when conditions change
    setShowStorageOptions(false);
  };


  function showNextImage() {
    setCurrentPictureIndex((index) => {
      if (index === iphoneModel?.pictures?.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setCurrentPictureIndex((index) => {
      if (index === 0) return iphoneModel?.pictures?.length - 1;
      return index - 1;
    });
  }


  return (
    <div className="overflow-x-hidden py-5 px-8">
      <div className="text-xl">
      <IoIosArrowRoundBack className="text-[50px] text-[#187EB4] mb-4 ml-[-11px]" />
      <div className="font-bold text-[20px]">
          {createSpace ? (
            <>
              <p>Give and get:</p>
              <p>The swap-way is the best way.</p>
            </>
          ) : (
            ""
          )}
        </div>
        <p className="py-2 font-bold">
          Browse through the phones below and make your selection.{" "}
        </p>
        {createSpace ? (
          <>
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

            {showDropdown ? (
              <div className="my-2 p-5 border-solid rounded-[20px] bg-white shadow right-4 left-4 border-[#D9D9D9] border-r-8 border-b-8 mt-10">
                <div className="grid grid-cols-2">
                  {dropdownOptions.map((option) => (
                    <div key={option.value}>{renderOption(option)}</div>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        ) : null}
       
       {selectedOption && createSpace ? (
          <div className="mt-10 text-xl">
            <p className="font-bold py-3">
              What is the condition of the phone?
            </p>

            <div className="border border-[#187EB4] px-8 rounded-xl">
              <div className="grid grid-cols-1">
                <div
                  className="flex items-center"
                  onClick={handleShowAdditionalOptions}
                >
                  <input type="radio" name="radio1" className="w-4 h-8 mt-1" />
                  <span className="p-2 ml-2 font-semibold">Brand New</span>
                </div>
                <div className="pl-4 ml-4">
                  <p className="pb-3 text-[16px]">
                    Phone still in factory original packaging, Must come with
                    box and all accessories sealed/untounched
                  </p>
                </div>

                <hr />

                <div
                  className="flex items-center"
                  onClick={handleShowAdditionalOptions}
                >
                  <input type="radio" name="radio1" className="w-4 h-8 mt-1" />
                  <span className="p-2  ml-2 font-semibold">Flawless</span>
                </div>
                <div className="pl-4 ml-4">
                  <p className="pb-3 text-[16px]">
                    Has absolutely no scratches, scuffs or other marks looks
                    brand new
                  </p>
                </div>

                <hr />

                <div
                  className="flex items-center"
                  onClick={handleShowAdditionalOptions}
                >
                  <input type="radio" name="radio1" className=" w-4 h-8 mt-1" />
                  <span className="p-2 ml-2 font-semibold">Good</span>
                </div>
                <div className="pl-4 ml-4">
                  <p className="pb-3 text-[16px]">
                    Shows light to moderate sign of wear. Contatains few light
                    scratches and/or dents.
                  </p>
                </div>

                <hr />

                <div
                  className="flex items-center"
                  onClick={handleShowAdditionalOptions}
                >
                  <input type="radio" name="radio1" className="w-4 h-8 mt-1" />
                  <span className="p-2 ml-2 font-semibold">Fair</span>
                </div>
                <div className="pl-4 ml-4">
                  <p className="pb-3 text-[16px]">
                    Shows moderate to excessive signs of wear. Contains
                    excessive scratching, major dents, and/or mild housing
                    damage such as a slightly bent frame.
                  </p>
                </div>

                <hr />

                <div
                  className="flex items-center"
                  onClick={handleShowAdditionalOptions}
                >
                  <input type="radio" name="radio1" className="w-4 h-8 mt-1" />
                  <span className="p-2 ml-2 font-semibold">Broken </span>
                </div>
                <div className="pl-4 ml-4">
                  <p className="pb-3 text-[16px]">
                    Cracks (regardless of size) or broken parts on either screen
                    or body the item.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {showAdditionalOptions ? (
        <>
          {createSpace !== false ? (
            <div className="my-5 text-xl">
              <div className="font-semibold flex flex-col space-y-5">
                <p>Please select as applied:</p>
                <p>Please select if the phone is locked or unlocked</p>
              </div>

              <div className="flex items-center space-x-5">
                <div className="flex items-center justify-center space-x-2">
                  <input
                    type="radio"
                    name="condition"
                    checked={selectedCondition === "locked"}
                    onChange={() => handleConditionSelect("locked")}
                    className="w-4 h-8 mt-[3px]"
                  />

                  <p className="mx-1 mt-2">Locked</p>
                </div>

                <div className="flex items-center justify-center space-x-2">
                  <input
                    type="radio"
                    name="condition"
                    checked={selectedCondition === "unlocked"}
                    onChange={() => handleConditionSelect("unlocked")}
                    className="w-4 h-8 mt-[3px]"
                  />
                  <p className="mx-1 mt-2">Unlocked</p>
                </div>
              </div>

              <div className="flex flex-col space-y-3 text-lg my-5">
                <span className="font-bold">Select Storage Capacity</span>

                <div className="flex space-x-3">
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="storage"
                      checked={selectedStorage === "128GB"}
                      onChange={() => handleStorageSelect("128GB")}
                    />
                    <span>128GB</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="storage"
                      checked={selectedStorage === "256GB"}
                      onChange={() => handleStorageSelect("256GB")}
                    />
                    <span>256GB</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="storage"
                      checked={selectedStorage === "512GB"}
                      onChange={() => handleStorageSelect("512GB")}
                    />
                    <span>512GB</span>
                  </label>
                </div>
              </div>
            </div>
          ) : null}

          {phoneSelection ? (
            <>
              {createSpace !== false ? (
                <>
                  <div className="my-5 text-[#187EB4] text-xl">
                    <div className="flex">
                      <span className="font-bold">Swap item:</span>
                      <span className="pl-2 ">{selectedOption.label}</span>
                    </div>
                    <div className="flex">
                      <span className="font-bold">Swap value:</span>
                      <span className="pl-2">#33000</span>
                    </div>
                  </div>
                  <p className="font-semibold py-5 text-xl">
                    Now let's select your new phone
                  </p>
                </>
              ) : (
                ""
              )}

              <div className="flex items-center justify-between font-bold right-4 left-4 text-[16px]">
                <p className="font-semibold py-5 w-full">I want this iPhone</p>

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

              {showDropdown && selectedModel !== modelIndex ? (
                <div
                  className={`mt-10 p-5 grid grid-cols-2 space-y-3 items-center text-xl border-solid rounded-[20px] bg-white shadow right-4 left-4 border-[#D9D9D9] border-r-8 border-b-8`}
                >
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
                          setModelIndex(index);
                          setIphoneModel(model);
                          setSelectedModel(index);
                          setCurrentPictureIndex(0);
                        }}
                      >
                        <span className="font-bold">{model.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}

              {selectedModel === modelIndex ? (
                <div>
                  <div className="">
                    <div className="relative w-full flex items-center justify-center bg-white rounded-[30px] shadow-xl px-16 py-10 my-5 border-[#D9D9D9] border-r-8 border-b-8">
                     
                      <img
                        src={iphoneModel?.pictures[currentPictureIndex]}
                        className="w-full h-64 object-cover"
                        alt="Perfect Image"
                      />
                      <BiLeftArrow className="absolute left-5 text-2xl" onClick={showPrevImage} />
                      <BiRightArrow className="absolute right-5 text-2xl" onClick={showNextImage} />
                       <div className="absolute bottom-3 flex space-x-1">
                          {iphoneModel?.pictures.map((_, index) => (
                            <span
                              className="text-lg text-center"
                              key={index}
                              aria-label={`View Image ${index + 1}`}
                              onClick={() => setCurrentPictureIndex(index)}
                            >
                              {index === currentPictureIndex ? (
                                <GoDotFill className="text-[#000000]" aria-hidden />
                              ) : (
                                <GoDot className="text-[#D9D9D9]" aria-hidden />
                              )}
                            </span>
                          ))}
                        </div>
                    </div>

                    {removeItem !== false ? (
                      <div className="flex justify-between py-4">
                        <b>{iphoneModel?.name}</b>
                        <b>Price: {iphoneModel?.price}</b>
                      </div>
                    ) : null}

                    {removeItem !== false ? (
                      <div className="flex flex-col space-y-3 text-lg my-5">
                        <span className="font-bold">Pick your preference</span>

                        <div className="flex space-x-3">
                          <label className="flex items-center space-x-1">
                            <input
                              type="radio"
                              name={`condition-${iphoneModel?.name}`}
                              value="brand-new"
                              onChange={() =>
                                handleNewOrUsedChange("brand-new")
                              }
                            />
                            <span>Brand New</span>
                          </label>

                          <label className="flex items-center space-x-1">
                            <input
                              type="radio"
                              name={`condition-${iphoneModel?.name}`}
                              value="used"
                              onChange={() => handleNewOrUsedChange("used")}
                            />
                            <span>Used</span>
                          </label>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <>
                    {selectedNewPhoneCondition === "brand-new" ? (
                      <>
                        {removeItem !== false ? (
                          <div className="flex flex-col space-y-3 my-5 text-lg">
                            <span className="font-bold">Phone Status</span>

                            <div className="flex space-x-3">
                              <label className="flex items-center space-x-1">
                                <input
                                  type="radio"
                                  name={`status-${iphoneModel?.name}`}
                                  value="locked"
                                  onChange={() =>
                                    handleLockedOrUnlockedChange("locked")
                                  }
                                />
                                <span>Locked</span>
                              </label>
                              <label className="flex items-center space-x-1">
                                <input
                                  type="radio"
                                  name={`status-${iphoneModel?.name}`}
                                  value="unlocked"
                                  onChange={() => {
                                    handleLockedOrUnlockedChange("locked");
                                    setShowStorageOptions(false); // Hide storage options
                                  }}
                                />
                                <span>Unlocked</span>
                              </label>
                            </div>
                          </div>
                        ) : null}

                        {lockState !== null ? (
                          <>
                            {removeItem !== false ? (
                              <div className="flex flex-col space-y-3 text-lg my-5">
                                <span className="font-bold">
                                  Select from available Colors
                                </span>

                                <div className="grid grid-cols-4 gap-2">
                                  <label className="flex items-center space-x-1">
                                    <input
                                      type="radio"
                                      name={`color-${iphoneModel?.name}`}
                                      value="red"
                                      onChange={() => handleColorChange("red")}
                                    />
                                    <span>Red</span>
                                  </label>

                                  <label className="flex items-center space-x-1">
                                    <input
                                      type="radio"
                                      name={`color-${iphoneModel?.name}`}
                                      value="blue"
                                      onChange={() => handleColorChange("blue")}
                                    />
                                    <span>Blue</span>
                                  </label>
                                  <label className="flex items-center space-x-1">
                                    <input
                                      type="radio"
                                      name={`color-${iphoneModel?.name}`}
                                      value="black"
                                      onChange={() =>
                                        handleColorChange("black")
                                      }
                                    />
                                    <span>Black</span>
                                  </label>
                                  <label className="flex items-center space-x-1">
                                    <input
                                      type="radio"
                                      name={`color-${iphoneModel?.name}`}
                                      value="green"
                                      onChange={() =>
                                        handleColorChange("green")
                                      }
                                    />
                                    <span>Green</span>
                                  </label>
                                  <label className="flex items-center space-x-1">
                                    <input
                                      type="radio"
                                      name={`color-${iphoneModel?.name}`}
                                      value="pink"
                                      onChange={() => handleColorChange("pink")}
                                    />
                                    <span>Pink</span>
                                  </label>
                                </div>
                              </div>
                            ) : null}

                            {showStorageOptions ? (
                              <div>
                                {removeItem !== false ? (
                                  <div className="flex flex-col space-y-3 text-lg my-5">
                                    <span className="font-bold">
                                      Select Storage Capacity
                                    </span>

                                    <div className="flex space-x-3">
                                      <label className="flex items-center space-x-1">
                                        <input
                                          type="radio"
                                          name={`storage-${iphoneModel?.name}`}
                                          value="128GB"
                                          onChange={() =>
                                            handleStorageSelection("128GB")
                                          }
                                        />
                                        <span>128GB</span>
                                      </label>
                                      <label className="flex items-center space-x-1">
                                        <input
                                          type="radio"
                                          name={`storage-${iphoneModel?.name}`}
                                          value="256GB"
                                          onChange={() =>
                                            handleStorageSelection("256GB")
                                          }
                                        />
                                        <span>256GB</span>
                                      </label>
                                      <label className="flex items-center space-x-1">
                                        <input
                                          type="radio"
                                          name={`storage-${iphoneModel?.name}`}
                                          value="512GB"
                                          onChange={() =>
                                            handleStorageSelection("512GB")
                                          }
                                        />
                                        <span>512GB</span>
                                      </label>
                                    </div>
                                  </div>
                                ) : null}

                                {showAddToCart && selectedModel !== null ? (
                                  <div className="selected-model-details flex flex-col space-y-5 mt-10 text-lg">
                                    <div className="flex justify-between items-center">
                                      <div className="flex space-x-2 font-bold capitalize my-5">
                                        <span>1 {selectedCondition}</span>
                                        <span>
                                          {models[selectedModel].name}
                                        </span>
                                      </div>
                                      <div className="flex space-x-2 capitalize">
                                        <span>{selectedStorage}</span>
                                        <span>{lockState}</span>
                                        <span>{selectedColor}</span>
                                      </div>
                                    </div>

                                    <div className="flex space-x-3 font-bold">
                                      <span>Your swap:</span>
                                      <span>{models[selectedModel].name}</span>
                                      <span>{models[selectedModel].price}</span>
                                    </div>

                                    <div className="flex justify-between items-center font-bold">
                                      <span>Price after swap:</span>
                                      <span>{models[selectedModel].price}</span>
                                    </div>

                                    <div className="flex justify-end">
                                      <span
                                        className="py-10 text-[#187EB4] font-bold"
                                        onClick={() => setShowAddToCart(false)}
                                      >
                                        Remove
                                      </span>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                )}

                                {addToCartButton ? (
                                  <div className="flex justify-center items-center">
                                    <button
                                      onClick={showCartDetails}
                                      className="my-10 bg-[#187EB4] text-[#FFFFFF] rounded-full px-16 py-5"
                                    >
                                      ADD TO CART
                                    </button>
                                  </div>
                                ) : (
                                  ""
                                )}

                                {checkoutButton ? (
                                  <>
                                    <div className="flex justify-center items-center">
                                      <Link
                                        className="bg-[#187EB4] text-[#FFFFFF] rounded-full px-16 py-5"
                                        href="/howToCheckOut"
                                      >
                                        CHECKOUT
                                      </Link>
                                    </div>
                                    <p className="text-[#187EB4] text-center font-semibold py-2">
                                      Add more items
                                    </p>
                                  </>
                                ) : (
                                  ""
                                )}
                              </div>
                            ) : null}
                          </>
                        ) : (
                          ""
                        )}
                      </>
                    ) : null}
                  </>
                </div>
              ) : null}
            </>
          ) : null}
        </>
      ) : null}
    </div>
  );
};
export default SwapiPhone;
