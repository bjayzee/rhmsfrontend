"use client";
import { useState } from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import RadioSelection from "./RadioSelectionButton";
import { models } from "@/server/utils/iPhonedata";

export default function Repair() {

  const [selectedOption, setSelectedOption] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false)
 
  const handleOptionSelect = (option) =>{
      setSelectedOption(option)
      setShowDropdown(false);
  }
  const handleSelectClick = () => {
     setShowDropdown(true);
  };

  const handleChange = () =>{

  }
  const repairOptions = [{name:"Screen Replacement", value: " "}, {name: "Back Glass Replacement", value: ""}, {name: "Battery Replacement", value: ""}];
  return (
    <div className="m-5 px-3">
      <p className="text-xl font-bold">We fix it right, the Apple way.</p>
      <p className="text-l font-bold my-2">Make your iPhone new again.</p>
      <div className="flex justify-between">
        <blockquote className="w-[65%] text-xs font-semibold">
          Apple-certified repairs are performed by trusted experts who use
          genuine Apple parts. We are certified repairers. You'll get your
          product back working exactly the way it should.
        </blockquote>
        <div className="w-[30%]">
          <img src="/repairImg.png" alt="Image" />
        </div>
      </div>

      <div className="flex items-center py-5 justify-between text-[16px]">
        <span className="text-sm font-semibold">Perform a Repair:</span>
        <button
          className="p-3 rounded-xl flex items-center justify-around border-[#D9D9D9] border-2 w-[60%]"
          onClick={handleSelectClick}
        >
          <div className="leading-5">
            {selectedOption ? selectedOption.name : "Select your phone"}
          </div>

          <FaPlay className="text-[18px] text-rh-blue ml-1" />
        </button>
      </div>

      {showDropdown ? (
        <div className="p-2 font-semibold text-sm flex flex-wrap shadow-lg border-[#D9D9D9] border-t-4 border-l-4 rounded-[20px]">
          {models.map((option, key) => (
            <div
              key={key}
              className="w-1/2 cursor-pointer p-2 hover-bg-gray-100"
              onClick={() => handleOptionSelect(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

     
      {selectedOption && (
        <button
          onClick={() => setShowRepairTypes(!showRepairTypes)}
          className="w-full my-3 font-bold text-black px-4 py-2 bg-white rounded-xl shadow-2xl outline-none border-[#D9D9D9] border-r-8 border-b-8 flex justify-center"
        >
          Select the repair type{" "}
          <FaPlay
            className={`text-[20px] text-[#187EB4] mx-2 ${
              showRepairTypes ? "rotate-90" : ""
            }`}
          />
        </button>
      )}

      {true && (
        <div className="px-3 py-10">
          <div className="flex flex-col items-center justify-center py-3">
            <h4 className="font-semibold text-xl">
              What's wrong with your iPhone?
            </h4>
            <span>You can select multiple if applicable</span>
          </div>

          <div className="py-4 flex flex-col space-y-5">
            {repairOptions.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-semibold text-lg">{item.name}</span>
                <input
                  value={item.name}
                  className="w-6 h-6 border border-gray-300 checked:bg-indigo-600 checked:border-indigo-600 transition duration-150 ease-in-out text-green-700"
                  type="checkbox"
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setShowRepairTypes(!showRepairTypes)}
              className="bg-[#187EB4] px-16 py-4 mt-5 rounded-full text-[#FFFFFF]"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <RadioSelection
        title={"Has your phone been opened before?"}
        name={"lock"}
        options={["Yes", "No"]}
        //onChange={(selectedOption) => handleLockedOrUnlockedChange(selectedOption)}
      />

      <RadioSelection
        title={"Face ID"}
        name={"lock"}
        options={["Yes", "No"]}
        //onChange={(selectedOption) => handleLockedOrUnlockedChange(selectedOption)}
      />

      <RadioSelection
        title={"True Tone"}
        name={"lock"}
        options={["Yes", "No"]}
        //onChange={(selectedOption) => handleLockedOrUnlockedChange(selectedOption)}
      />

      <div>
        <div className="flex flex-col items-center justify-center py-3">
          <h4 className="font-semibold text-xl">
            Any other issues with the phone?
          </h4>
          <span>Write in the box below or put ‘Nil’ if there is non.</span>
        </div>
        <input className="outline-none border-2 border-[#187EB4] w-full h-[50px] px-3" />
      </div>

      {true && (
        <div className="mt-2 flex justify-between">
          {selectedOption !== "option1" && (
            <button
              className="mt-2 text-black px-14 py-2 bg-white rounded-xl shadow-2xl border-[#D9D9D9] border-r-8 border-b-8 text-bold"
              onClick={() => handleRepairOption(repairOptions)}
              // onClick={() => handleRepairOption('Screen replacement')}
            >
              Premium
            </button>
          )}
          {selectedOption !== "option1" && (
            <button
              className="mt-2 border text-black px-14 py-2 bg-white rounded-xl shadow-2xl border-[#D9D9D9] border-r-8 border-b-8 text-bold"
              onClick={() => handleRepairOption(repairOptions)}
              // onClick={() => handleRepairOption('Screen replacement')}
            >
              Economy
            </button>
          )}
        </div>
      )}

      {/* {true && (
        <div className="mt-4 px-4">
          {Object.keys(selectedRepair).map((repairType) => {
            const repairInfo = selectedRepair[repairType];
            return (
              <div key={repairType}>
                <div className="py-4">
                  <p>
                    You have chosen {repairType} for your {selectedOption}. Visit
                    any of the addresses below to complete your repairs.
                  </p>
                  <p>Cost for the Economy option: {repairInfo.economyCost}</p>
                  <p>Cost for the Premium option: {repairInfo.premiumCost}</p>
                </div>

                <b className="my-10 text-xl">Available repair center:</b>

                <div className="flex flex-col space-y-2">
                  <b>Contact address:</b>
                  <p>
                    {repairInfo.address ||
                      "267 Herbert Macaulay way, Sabo, Yaba"}
                  </p>
                </div>
                <div className="flex justify-between py-3">
                  <b>Email:</b>
                  <b>Phone Numbers:</b>
                </div>
                <div className="flex justify-between">
                  <p>{repairInfo.email || "repair@gmail.com"}</p>
                  <p> {repairInfo.phone || "09087654321"}</p>
                </div>
              </div>
            );
          })} */}
        {/* </div> */}
  {/* // )} */}

  </div>
  )
}