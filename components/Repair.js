"use client";

import React, { useState } from "react";

import Link from "next/link";
export default function Repair() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  // const [selectedRepairType, setSelectedRepairType] = useState('');
  const [selectedRepair, setSelectedRepair] = useState(null);
  const [selectedRepairOption, setSelectedRepairOption] = useState("");

  const repairOptions = [
    "Screen replacement",
    "Back glass replacement",
    "Battery replacement",
  ];
  // const repairOptions = ['Battery replacement'] ;

  const repairs = {
    "Screen replacement": {
      cost: 1500,
    },
    "Back glass replacement": {
      cost: 1000,
    },
    "Battery replacement": {
      cost: 2000,
    },
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setSelectedRepairOption("");
    setShowButton(selectedValue !== "option1");
    setShowBox(false);
  };

  const handleButtonClick = () => {
    setShowBox(true);
  };

  const handleTextClick = (model, repairOption) => {
    setSelectedModel(model);
    setShowBox(false);
    setShowButtons(true);
    setShowButton(false);
    setSelectedRepairOption(repairOption);
  };

  // const handleRepairOption = (repairType) => {
  //   if (selectedModel && repairs[repairType]) {
  //     const economyCost = repairs[repairType].cost;
  //     const premiumCost = economyCost * 1.1; // 10% more expensive

  //     setSelectedRepair({
  //       repairType,
  //       economyCost,
  //       premiumCost,
  //     });
  //   }
  // };

  // const handleRepairOption = (repairTypes) => {
  //   if (selectedModel && repairTypes.length > 0) {
  //     const repairInfo = {};

  //     repairTypes.forEach((type) => {
  //       if (repairs[type]) {
  //         const economyCost = repairs[type].cost;
  //         const premiumCost = economyCost * 1.1; // 10% more expensive

  //         repairInfo[type] = {
  //           economyCost,
  //           premiumCost,
  //         };
  //       }
  //     });

  //     setSelectedRepair(repairInfo);
  //   }
  // };

  const handleRepairOption = (selectedRepairTypes) => {
    if (selectedModel && selectedRepairTypes.length > 0) {
      const repairInfo = {};

      selectedRepairTypes.forEach((type) => {
        if (repairs[type]) {
          const economyCost = repairs[type].cost;
          const premiumCost = economyCost * 1.1; // 10% more expensive

          repairInfo[type] = {
            economyCost,
            premiumCost,
            // Add other information you want to display, e.g., repair centers, addresses, etc.
          };
        }
      });

      setSelectedRepair(repairInfo);
    }
  };

  return (
    <div className="px-5 py-10">
      <p className="text-2xl font-bold mt-10">
        We fix it right, the Apple way.
      </p>
      <p className="text-x font-bold mb-2">
        Make your iPhone new again.
      </p>
      <div className="flex justify-between">
        <p className="w-[65%] text-[14px]">
          Apple-certified repairs are performed by trusted experts who use
          genuine Apple parts. We are certified repairers, and you'll get your
          product back working exactly the way it should.
        </p>
        <div className="w-[30%]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcM--txB8ScFUfGtFXBQ6ojoKSp16F1Ciatw&usqp=CAU"
            alt="Image"
          />
        </div>
      </div>

      <div className="flex items-center justify-between my-10">
      
          <p className="font-bold">Perform a repair:</p>

          <select
            className="p-4 bg-white rounded-xl shadow-2xl border-[#D9D9D9] border-r-8 border-b-8"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option className="w-[50px]" value="option1">Select</option>
            <option className="w-[50px]" value="option2">Screen replacement</option>
            <option className="w-[50px]" value="option3">Back glass replacement</option>
            <option className="w-[50px]" value="option4">Battery replacement</option>
          </select>
      </div>


      {showButton && (
        <button
          className="w-full mt-2 border text-black px-4 py-2 bg-white rounded-xl shadow-2xl border-[#D9D9D9] border-r-8 border-b-8"
          onClick={handleButtonClick}
        >
          Select your phone
        </button>
      )}

      {selectedModel && (
        <button className="w-full my-3 font-bold text-black px-4 py-2 bg-white rounded-xl shadow-2xl border-[#D9D9D9] border-r-8 border-b-8">
          {selectedModel}
        </button>
      )}

      {showBox && (
        <div className="my-3 p-4 border divide-y divide-gray-300 bg-white rounded-2xl shadow-2xl border-[#D9D9D9] border-r-8 border-b-8">
          <div className="flex justify-between text-lg">
            <div className="w-full font-bold flex flex-col space-y-2">
              <p onClick={() => handleTextClick("iPhone 8")}
              >
                iPhone 8
              </p>
              <p
                onClick={() => handleTextClick("iPhone 8 plus")}
              >
                iPhone 8 plus
              </p>
              <p>iPhone x</p>
              <p>iPhone XR</p>
              <p>iPhone XS</p>
              <p>iPhone XS Max</p>
              <p>iPhone 11</p>
              <p>iPhone 11 Pro</p>
              <p>iPhone 11 Pro Max</p>
              <p>iPhone SE(2nd Gen)</p>
              <p>iPhone 12 mini</p>
              <p>iPhone 12 Pro</p>
              <p>iPhone 12 Pro Max</p>
            </div>
            <div className="w-full font-bold flex flex-col space-y-2">
              <p>iPhone 12 Pro Max</p>
              <p>iPhone 13 mini</p>
              <p>iPhone 13</p>
              <p>iPhone 13 Pro</p>
              <p>iPhone 13 Pro Max</p>
              <p>iPhone SE(3rd Gen)</p>
              <p>iPhone 14</p>
              <p>iPhone 14 Plus</p>
              <p>iPhone 14 Pro</p>
              <p>iPhone 15</p>
              <p>iPhone 15 plus</p>
              <p>iPhone 15 Pro Max</p>
            </div>
          </div>
        </div>
      )}

      {showButtons && (
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

      {/* {showButtons && (
  <div className="mt-2 flex justify-between">
    {selectedOption !== 'option1' &&
      repairOptions.map((option) => (
        <button
          key={option}
          className="w-full mt-2 border text-black px-4 py-2 shadow-lg rounded-lg my-custom-font text-bold"
          onClick={() => handleRepairOption(option)}
        >
          Premium {option}
        </button>
      ))}

      {console.log(repairOptions)}
  </div>
)} */}

      {/* {selectedRepair && (
  <div className="mt-4 p-4 border divide-y divide-gray-300 shadow-lg rounded-lg">
    <p className="my-custom-font">
      You have chosen {selectedRepair.repairType} for your {selectedModel}. Visit any of the addresses below to complete your repairs.
    </p>
    <p className="my-custom-font font-bold">Cost for the Economy option: {selectedRepair.economyCost}</p>
    <p className="my-custom-font font-bold">Cost for the Premium option: {selectedRepair.premiumCost}</p>
    <p className="my-custom-font font-bold">Available repair center:</p>
    <p className="my-custom-font font-bold">Contact address: {selectedRepair.address}</p>
    <p className="my-custom-font "> 267 Herbert Macauly way, Sabo,Yaba </p>
          <div className="flex justify-between ">
          <p className="my-custom-font font-bold">Email: {selectedRepair.email}</p>
          <p className="my-custom-font font-bold">Phone Numbers: {selectedRepair.phone}</p>
          </div>
          <div className="flex justify-between ">
          <p className="my-custom-font ">repair@gmail.com</p>
          <p className="my-custom-font ">09087654321</p>
          </div>
  </div>
)}  */}

      {selectedRepair && (
        <div className="mt-4 px-4">
          {Object.keys(selectedRepair).map((repairType) => {
            const repairInfo = selectedRepair[repairType];
            return (
              <div key={repairType}>
               <div className="py-4">
                 <p>
                  You have chosen {repairType} for your {selectedModel}. Visit
                  any of the addresses below to complete your repairs.
                </p>
                <p>
                  Cost for the Economy option: {repairInfo.economyCost}
                </p>
                <p>
                  Cost for the Premium option: {repairInfo.premiumCost}
                </p>
               </div>

                <b className="my-10 text-xl">
                  Available repair center:
                </b>
                
              <div className="flex flex-col space-y-2">
                  <b>
                  Contact address: 
                </b>
                <p>
                 {repairInfo.address || "267 Herbert Macaulay way, Sabo, Yaba"}
                </p>
              </div>
                <div className="flex justify-between py-3">
                  <b>
                    Email: 
                  </b>
                  <b>
                    Phone Numbers:
                  </b>
                </div>
                <div className="flex justify-between">
                  <p>{repairInfo.email || "repair@gmail.com"}</p>
                  <p> {repairInfo.phone || "09087654321"}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
