"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import RadioSelection from "./RadioSelectionButton";

export default function Repair() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  //const [selectedRepairType, setSelectedRepairType] = useState(false);
  const [selectedRepair, setSelectedRepair] = useState(null);
  const [selectedRepairOption, setSelectedRepairOption] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showRepairTypes, setShowRepairTypes] = useState(false);
  const [allchecked, setAllChecked] = React.useState([]);

  function handleChange(e) {
    if (e.target.checked) {
      setAllChecked([...allchecked, e.target.value]);
    } else {
      setAllChecked(allchecked.filter((item) => item !== e.target.value));
    }
  }

  console.log(allchecked);

  const repairOptions = [
    { name: "Screen replacement", value: "" },
    { name: "Back Glass Replacement", value: "" },
    { name: "Battery Replacement", value: "" },
    { name: "Bluetooth/Pairing Issue", value: "" },
    { name: "Data Recovery & Backup", value: "" },
    { name: "Water Damage", value: "" },
    { name: "Data Transfer", value: "" },
    { name: "Wifi Issue", value: "" },
    { name: "Cleaning", value: "" },
  ];

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
    setShowBox(!showBox);
  };

  // const handleSelectClick = () => {
  //  setShowDropdown(!showDropdown);
  //};

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
      <p className="text-x font-bold mb-2">Make your iPhone new again.</p>
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

        <button
          className="px-3 py-4 rounded-xl shadow-lg flex items-center border-[#D9D9D9] border-r-8 border-b-8"
          onClick={handleButtonClick}
        >
          {selectedModel ? selectedModel : "Select your phone"}
          <FaPlay
            className={`text-[20px] text-[#187EB4] mx-2  ${
              showBox ? "rotate-90" : ""
            }`}
          />
        </button>

        {/*<select
          className="p-4 bg-white rounded-xl shadow-2xl border-[#D9D9D9] border-r-8 border-b-8 outline-none"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option className="w-[50px]" value="option1">
            Select
          </option>
          <option className="w-[50px]" value="option2">
            Screen replacement
          </option>
          <option className="w-[50px]" value="option3">
            Back glass replacement
          </option>
          <option className="w-[50px]" value="option4">
            Battery replacement
          </option>
        </select>*/}
      </div>

      {showButton && (
        <button
          className="w-full mt-2 border text-black px-4 py-2 bg-white rounded-xl shadow-2xl border-[#D9D9D9] border-r-8 border-b-8"
          onClick={handleButtonClick}
        >
          Select your phone
        </button>
      )}

      {showBox && (
        <div className="my-3 p-4 border divide-y divide-gray-300 bg-white rounded-2xl shadow-2xl border-[#D9D9D9] border-r-8 border-b-8">
          <div className="flex justify-between text-lg">
            <div className="w-full font-bold flex flex-col space-y-2">
              <p onClick={() => handleTextClick("iPhone 8")}>iPhone 8</p>
              <p onClick={() => handleTextClick("iPhone 8 plus")}>
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

      {selectedModel && (
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

      {showRepairTypes && (
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
          })}
        </div>
      )}
    </div>
  );
}
