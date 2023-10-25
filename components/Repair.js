"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';
export default function Repair() {

  const [selectedOption, setSelectedOption] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [selectedModel, setSelectedModel] = useState('');
  // const [selectedRepairType, setSelectedRepairType] = useState('');
  const [selectedRepair, setSelectedRepair] = useState(null);
  const [selectedRepairOption, setSelectedRepairOption] = useState('');

  const repairOptions = ['Screen replacement', 'Back glass replacement', 'Battery replacement'];

  const repairs = {
    'Screen replacement': {
      cost: 1500,
    },
    'Back glass replacement': {
      cost: 1000,
    },
    'Battery replacement': {
      cost: 2000,
    },
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setSelectedRepairOption('');
    setShowButton(selectedValue !== 'option1');
    setShowBox(false);
  };

  const handleButtonClick = () => {
    setShowBox(true);
  };

  // const handleTextClick = (model,repairType) => {
  //   setSelectedModel(model);
  //   setSelectedRepairType(repairType);
  //   setShowBox(false);
  //   setShowButtons(true)
  //   setShowButton(false)
  // };

  const handleTextClick = (model, repairOption) => {
    setSelectedModel(model);
    setShowBox(false);
    setShowButtons(true);
    // setShowButton(false)
    setSelectedRepairOption(repairOption);
  };

  // function displayRepairInfo() {
  //   const repairInfo = {
  //     'Screen replacement': {
  //       cost: 2000,
  //       repairCenter: {
  //         address: '29, Herbert Macaulay Way',
  //         email: 'repair@gmail.com',
  //         phone: '0908765432',
  //       },
  //     },
  //     // Add information for other repair types
  //   };

  //   const info = repairInfo[selectedRepairType];


  //   return (
  //     <div className="mt-2 border p-4 divide-y divide-gray-300 shadow-lg rounded-lg">
  //       <p>
  //         You have chosen {selectedRepairType} for your {selectedModel}. Visit any of the addresses
  //         below to complete your repairs.
  //       </p>
  //       <p>
  //         {/* Cost for the {selectedRepairType}: {info.cost} */}
  //         Cost for the {selectedRepairType}: {info.cost}
  //       </p>
  //       <div className="mt-2">
  //         <div>
  //           <p>Available repair center:</p>
  //           <p>Address: {info.repairCenter.address}</p>
  //           <p>Email: {info.repairCenter.email}</p>
  //           <p>Phone: {info.repairCenter.phone}</p>
  //         </div>
  //         <div>
  //           <p>Client address:</p>
  //           <p>Address: {info.repairCenter.address}</p>
  //           <p>Email: {info.repairCenter.email}</p>
  //           <p>Phone: {info.repairCenter.phone}</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // const handleRepairOption = (repairOption) => {
  //   if (selectedOption && selectedModel && repairs[repairOption]) {
  //     const economyCost = repairs[repairOption].cost;
  //     const premiumCost = economyCost * 1.1; // 10% more expensive
  
  //     setSelectedRepair({
  //       repairOption,
  //       economyCost,
  //       premiumCost,
  //     });
  //   }
  // };


  // const handleRepairOption = () => {
  //   if (selectedOption !== 'option1' && selectedModel) {
  //     const economyCost = repairs[selectedOption].cost;
  //     const premiumCost = economyCost * 1.1; // 10% more expensive
  
  //     setSelectedRepair({
  //       economyCost,
  //       premiumCost,
  //     });
  //   }
  // };


//  const handleRepairOption = (repairType) => {
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


const handleRepairOption = (repairType) => {
  if (selectedModel && repairs[repairType]) {
    const economyCost = repairs[repairType].cost;
    const premiumCost = economyCost * 1.1; // 10% more expensive

    setSelectedRepair({
      repairType,
      economyCost,
      premiumCost,
    });
  }
};








    
  return (
    <div className=" p-3 " >

<div className="absolute top-3 left-3 cursor-pointer" style={{ color: 'black' }}>
    ← {/* Text-based back arrow icon */}
  </div>
        
  <div className="text-2xl font-bold mt-10 my-custom-font">We fix it right, the Apple way.</div>
  <div className="text-x font-bold mb-2 my-custom-font">Make your iPhone new again.</div>
  <div className="flex flex-wrap">
    <div className="w-2/3 sm:w-2/3  p-2 bg-white "   >
      <p className="text-sm  my-custom-font">
        Apple-certified repairs are performed by trusted experts who use genuine Apple parts.
        We are certified repairers, and you'll get your product back working exactly the way it should.
      </p>
    </div>
    <div className="w-1/3 sm:w-1/3  ">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcM--txB8ScFUfGtFXBQ6ojoKSp16F1Ciatw&usqp=CAU" alt="Image" />
    </div>

    
  </div>

 
 <div className="flex  mb-50" >
<div className="w-1/2 pt-6 font-bold" >
    <p  className="font-bold">Perform a repair:</p>
  </div>
<div className="w-1/2 p-4">
      <select
        className="w-full border p-3 rounded-lg shadow-lg"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="option1">Select</option>
        <option value="option2">Screen replacement</option>
        <option value="option3">Back glass replacement</option>
        <option value="option4">Battery replacement</option>
      </select>

     
    </div>


    
</div> 
 {showButton && (
        <button className=" w-full mt-2  border text-black px-4 py-2 shadow-lg rounded-lg" onClick={handleButtonClick}>
          Select your phone
        </button>
      )} 


{selectedModel && (
  <button className="w-full mt-2  font-bold border text-black px-4 py-2 shadow-lg rounded-lg my-custom-font ">
    {selectedModel}
  </button>
)}

{showBox && (
        <div className="mt-2 p-4 border divide-y divide-gray-300 shadow-lg rounded-lg">
          <div className="flex justify-between ">
            <div className="w-full font-bold">

              <p  onClick={() => handleTextClick('iPhone 8')} className="text-sm  my-custom-font  font-bold">iPhone 8</p>
              <p onClick={handleTextClick} className="text-sm  my-custom-font">iPhone 8 plus</p>
              <p className="text-sm  my-custom-font">iPhone x</p>
              <p className="text-sm  my-custom-font">iPhone XR</p>
              <p className="text-sm  my-custom-font">iPhone XS</p>
              <p className="text-sm  my-custom-font">iPhone XS Max</p>
              <p className="text-sm  my-custom-font">iPhone 11</p>
              <p className="text-sm  my-custom-font">iPhone 11 Pro</p>
              <p className="text-sm  my-custom-font">iPhone 11 Pro Max</p>
              <p className="text-sm  my-custom-font">iPhone SE(2nd Gen)</p>
              <p className="text-sm  my-custom-font">iPhone 12 mini</p>
              <p className="text-sm  my-custom-font">iPhone 12 Pro</p>
              <p className="text-sm  my-custom-font">iPhone 12 Pro Max</p>
            </div>
            <div className="w-full font-bold ">
            <p className="text-sm  my-custom-font">iPhone 12 Pro Max</p>
            <p className="text-sm  my-custom-font">iPhone 13 mini</p>
            <p className="text-sm  my-custom-font">iPhone 13</p>
              <p className="text-sm  my-custom-font">iPhone 13 Pro</p>
              <p className="text-sm  my-custom-font">iPhone 13 Pro Max</p>
              <p className="text-sm  my-custom-font">iPhone SE(3rd Gen)</p>
              <p className="text-sm  my-custom-font">iPhone 14</p>
              <p className="text-sm  my-custom-font">iPhone 14 Plus</p>
              <p className="text-sm  my-custom-font">iPhone 14 Pro</p>
              <p className="text-sm  my-custom-font">iPhone 15</p>
              <p className="text-sm  my-custom-font">iPhone 15 plus</p>
              <p className="text-sm  my-custom-font">iPhone 15 Pro Max</p>
            </div>
          </div>
        </div>
      )} 


{/* {showButtons && (
        <div className="mt-2 flex justify-between">
          {selectedOption !== 'option1' && (
            <button
              className="w-full mt-2 border text-black px-4 py-2 shadow-lg rounded-lg my-custom-font text-bold"
              // onClick={() => handleRepairOption(selectedOption)}
              onClick={() => handleRepairOption('Screen replacement')}
            >
              Premium
            </button>
          )}
          {selectedOption !== 'option1' && (
            <button
              className="w-full mt-2 border text-black px-4 py-2 shadow-lg rounded-lg my-custom-font text-bold"
              // onClick={() => handleRepairOption(selectedOption)}
              onClick={() => handleRepairOption('Screen replacement')}
            >
              Economy
            </button>
          )}
        </div>
      )} */}


{showButtons && (
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
  </div>
)}






  {selectedRepair && (
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
)} 
 

{/* {selectedModel && selectedRepairOption && (
  <div className="mt-2 flex justify-between">
    <button
      className="w-full mt-2 border text-black px-4 py-2 shadow-lg rounded-lg my-custom-font text-bold"
      onClick={() => handleRepairOption(selectedRepairOption)}
    >
      Premium
    </button>
    <button
      className="w-full mt-2 border text-black px-4 py-2 shadow-lg rounded-lg my-custom-font text-bold"
      onClick={() => handleRepairOption(selectedRepairOption)}
    >
      Economy
    </button>
  </div>
)} */}








      

  
</div>

  )
}

