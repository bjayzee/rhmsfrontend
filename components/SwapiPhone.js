"use client";
import Link from "next/link";
import { useState, useEffect, useRef, useContext } from "react";
import { IoIosArrowDropdownCircle, IoIosArrowRoundBack } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import axios from "axios";
import RadioSelection from "./RadioSelectionButton";
import { CartContent } from "@/app/context/AppContext";
import SwapImg from "../assets/svgs/swap.svg";
import Image from "next/image";

const SwapiPhone = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showValue, setShowValue] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCondtion, setShowCondition] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [createSpace, setCreateSpace] = useState(true);

  const [showStorageOptions, setShowStorageOptions] = useState(false);
  const [availableModels, setAvailableModels] = useState([]);
  const [dropdownOptions, setShowDropdownOptions] = useState([]);
  const [showLearnHowItWorks, setShowLearnHowItWorks] = useState(true);
  const [storageList, setStorageList] = useState([]);
  const [itemSelected, setItemSelected] = useState(null);
  const valueRef = useRef(null);

  const { swapValue, setSwapValue } = useContext(CartContent);

  useEffect(() => {
    getModelsAvailable();
  }, []);

  const getModelsAvailable = async () => {
    try {
      const response = await axios
        .get("/api/old-phones/", {
          validateStatus: (status) => status < 400,
        })
        .then((res) => res.data);

      const iphoneModels = response.data;

      console.log({ iphoneModels });

      setAvailableModels(iphoneModels);
      const modelData = Array.from(
        new Set(response.data.map((item) => item.name))
      );
      setShowDropdownOptions(modelData);
    } catch (error) {
      console.error("Error fetching available models:", error);
    }
  };

  const handleSelectClick = () => {
    setShowDropdown(!showDropdown);
    setShowLearnHowItWorks(false);
    setSelectedOption(null);
    setShowStorageOptions(false);
    setShowCondition(false);
    setShowValue(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  const handleShowAdditionalOptions = (grade) => {
    if (valueRef.current) {
      valueRef.current.focus();
      window.scroll({
        top: valueRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
    const { storageVariance, pricePerGrade, storagePrice } = itemSelected;
    let index = storageVariance.indexOf(selectedStorage);
    let gradePrice = pricePerGrade.find(
      (gradePrice) => Object.keys(gradePrice)[0] === grade
    );
    if (!gradePrice) {
      return "Grade not found";
    }
    let gradePriceValue = gradePrice[grade];
    if (gradePriceValue === 0) {
      setSwapValue(gradePriceValue);
      setShowValue(true);
    } else {
      let price = gradePriceValue + storagePrice * index;

      setSwapValue(price);
      setShowValue(true);
    }
  };

  const handleConditionSelect = (condition) => {
    const filteredItemsBySelection = availableModels?.filter((item) => {
      return (
        item.name.trim().toLowerCase() === selectedOption.trim().toLowerCase()
      );
    });

    console.log({ filteredItemsBySelection });

    const itemByLockStatus = filteredItemsBySelection.filter(
      (item) =>
        item.lockStatus.trim().toLowerCase() === condition.trim().toLowerCase()
    );
    console.log({ itemByLockStatus });

    const availableStorage = itemByLockStatus[0].storageVariance;

    setItemSelected(itemByLockStatus[0]);
    setStorageList(availableStorage);
    setSelectedCondition(condition);
    setShowStorageOptions(true);
  };

  const handleStorageSelect = (storage) => {
    setSelectedStorage(storage);
    setShowCondition(true);
  };

  const renderOption = (option) => {
    return (
      <div key={option}>
        <div
          className="cursor-pointer flex items-center p-2 hover-bg-gray-100"
          onClick={() => handleOptionSelect(option)}
        >
          <span>{option}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="overflow-x-hidden py-5 px-8 lg:w-[80%] lg:mt-10 mx-auto w-full">
      <div className="text-xl">
        <IoIosArrowRoundBack className="text-2xl text-rh-blue mb-4 ml-[-11px] flex lg:hidden" />

        <div className="font-semibold text-xl mt-0 lg:mt-5">
          {createSpace ? (
            <>
              <p className="lg:text-[40px] text-md mb-5">Give and get:</p>
              <p className="lg:text-[40px] text-md mb-5">
                The swap-way is the best way.
              </p>
            </>
          ) : (
            " "
          )}
        </div>
        <p className="py-2 font-semibold text-sm flex lg:hidden">
          Browse through the phones below and make your selection.
        </p>
        {createSpace ? (
          <div className="flex justify-between lg:mt-[5rem] ">
            <div className="w-1/2 lg:flex hidden">
              <Image src={SwapImg} alt="swap-img" className="h-fit" />
            </div>
            <div className="flex flex-col lg:w-1/2">
              <p className="py-2 font-semibold text-sm lg:text-lg hidden lg:flex">
                Browse through the phones below and make your selection.
              </p>
              <div className="flex items-center py-5 justify-between text-[16px]">
                <span className="font-bold lg:w-1/2">
                  Let's value your iPhone
                </span>
                <button
                  className="p-3 rounded-xl flex items-center justify-around border-[#D9D9D9] border-2 w-full"
                  onClick={handleSelectClick}
                >
                  <div className="leading-5">
                    {selectedOption ? selectedOption : "Select your phone"}
                  </div>

                  <FaPlay className="text-[30px] text-rh-blue ml-1" />
                </button>
              </div>
              {showLearnHowItWorks ? (
                <div className="flex justify-end lg:justify-center mt-1">
                  <p className="text-rh-blue text-sm">Learn how it works</p>
                </div>
              ) : (
                ""
              )}

              {showDropdown ? (
                <div className="flex flex-wrap shadow-lg border-[#D9D9D9] border-t-4 border-l-4 rounded-[20px]">
                  <div className="w-1/2 p-2 font-semibold text-sm">
                    {dropdownOptions.map((option, key) => (
                      <div key={key}>{renderOption(option)}</div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="">
                {selectedOption ? (
                  <>
                    <RadioSelection
                      title={"Select Carrier"}
                      name={"lock"}
                      options={["Locked", "Unlocked"]}
                      onChange={(selectedOption) =>
                        handleConditionSelect(selectedOption)
                      }
                    />
                  </>
                ) : (
                  ""
                )}

                {showStorageOptions ? (
                  <RadioSelection
                    title={"Select Storage Capacity"}
                    name={"storage"}
                    options={storageList}
                    onChange={(selectedOption) =>
                      handleStorageSelect(selectedOption)
                    }
                  />
                ) : (
                  ""
                )}
                {showCondtion ? (
                  <div className="mt-1 text-xl">
                    <p className="font-bold py-3">
                      What is the condition of the phone?
                    </p>

                    <div className="border border-[#187EB4] px-8 rounded-xl w-full">
                      <div className="grid grid-cols-1">
                        <div
                          className="flex items-center"
                          onClick={() => handleShowAdditionalOptions("New")}
                        >
                          <input
                            type="radio"
                            name="radio1"
                            className="w-4 h-8 mt-1"
                          />
                          <span className="p-2 ml-2 font-semibold">
                            Brand New
                          </span>
                        </div>
                        <div className="pl-4 ml-4">
                          <p className="pb-3 text-[16px]">
                            Phone still in factory original packaging, Must come
                            with box and all accessories sealed/untounched
                          </p>
                        </div>

                        <hr />

                        <div
                          className="flex items-center"
                          onClick={() => handleShowAdditionalOptions("Grade A")}
                        >
                          <input
                            type="radio"
                            name="radio1"
                            className="w-4 h-8 mt-1"
                          />
                          <span className="p-2  ml-2 font-semibold">
                            Flawless
                          </span>
                        </div>
                        <div className="pl-4 ml-4">
                          <p className="pb-3 text-[16px]">
                            Has absolutely no scratches, scuffs or other marks
                            looks brand new
                          </p>
                        </div>

                        <hr />

                        <div
                          className="flex items-center"
                          onClick={() => handleShowAdditionalOptions("Grade B")}
                        >
                          <input
                            type="radio"
                            name="radio1"
                            className=" w-4 h-8 mt-1"
                          />
                          <span className="p-2 ml-2 font-semibold">Good</span>
                        </div>
                        <div className="pl-4 ml-4">
                          <p className="pb-3 text-[16px]">
                            Shows light to moderate sign of wear. Contatains few
                            light scratches and/or dents.
                          </p>
                        </div>

                        <hr />

                        <div
                          className="flex items-center"
                          onClick={() => handleShowAdditionalOptions("Grade C")}
                        >
                          <input
                            type="radio"
                            name="radio1"
                            className="w-4 h-8 mt-1"
                          />
                          <span className="p-2 ml-2 font-semibold">Fair</span>
                        </div>
                        <div className="pl-4 ml-4">
                          <p className="pb-3 text-[16px]">
                            Shows moderate to excessive signs of wear. Contains
                            excessive scratching, major dents, and/or mild
                            housing damage such as a slightly bent frame.
                          </p>
                        </div>

                        <hr />

                        <div
                          className="flex items-center"
                          onClick={() => handleShowAdditionalOptions("Grade D")}
                        >
                          <input
                            type="radio"
                            name="radio1"
                            className="w-4 h-8 mt-1"
                          />
                          <span className="p-2 ml-2 font-semibold">
                            Broken{" "}
                          </span>
                        </div>
                        <div className="pl-4 ml-4">
                          <p className="pb-3 text-[16px]">
                            Cracks (regardless of size) or broken parts on
                            either screen or body the item.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {showValue ? (
                  <>
                    <div className="my-5 text-[#187EB4] text-xl" ref={valueRef}>
                      <div className="flex">
                        <span className="font-bold">Swap item: </span>
                        <span className="pl-2 ">{selectedOption}</span>
                      </div>
                      <div className="flex">
                        <span className="font-bold">Swap value:</span>
                        <span className="pl-2 flex justify-center">
                          {swapValue < 1 ? (
                            "Grade not available"
                          ) : (
                            <>₦{swapValue?.toLocaleString()}</>
                          )}
                        </span>
                      </div>
                    </div>

                    <Link href="/buy-iphone" passHref>
                      <button className="flex items-center">
                        <p className="text-lg">
                          Now let's select your new phone
                        </p>
                        <IoIosArrowDropdownCircle className="text-[20px] text-rh-blue " />
                      </button>
                    </Link>
                    <p></p>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ) : null}

        {/* // other options */}

        <div className="flex">
          <div className="hidden lg:flex w-1/2" />
        </div>
      </div>
    </div>
  );
};
export default SwapiPhone;
