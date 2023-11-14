
"use client"; 
import React, { useState } from 'react';

const SwapiPhone = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [phoneSelection, setPhoneSelection] = useState(false)
  const [newlySelectediPhone, setNewlySelectediPhone] = useState(null);

  const handleSelectClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  const handleNewlySelectediPhone = (option) => {
    // setShowAdditionalOptions(false)
    setNewlySelectediPhone(option);
    setShowDropdown(false);
  };

  

  const handleShowAdditionalOptions = () => {
    setShowAdditionalOptions(true);
  };

  const handleConditionSelect = (condition) => {
    setSelectedCondition(condition);
  };

  const handleStorageSelect = (storage) => {
    setSelectedStorage(storage);
    setPhoneSelection(true)
  };

  const dropdownOptions = [
    { label: 'iPhone 8', value: 'iPhone8' },
    { label: 'iPhone Pro Max', value: 'iPhoneProMax' },
    { label: 'iPhone x', value: 'iPhone x' },
    { label: 'iPhone x plus', value: 'iPhone x plus' },
    // Add more options as needed
  ];

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
          onClick={() =>  handleNewlySelectediPhone(option)}
        >
          <span>{option.label}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="m-5 font-bold">
      <h1>Give and get:</h1>
      <h1>The swap-way is the best way</h1>
      <p>Browse through the phones below and make your selection</p>

      <div className="flex justify-between m-5 font-bold">
        <div>Let's value your phone</div>

        <div className=" w-full p-4">
          <button
            className="w-full border p-3 rounded-lg shadow-lg"
            onClick={handleSelectClick}
          >
            {selectedOption ? selectedOption.label : 'Select your phone'}
          </button>
          <p>Learn how it works</p>

          {showDropdown && (
            <div className="absolute left-0 m-15 w-full border  rounded-lg bg-white shadow-lg">
              <div className="grid grid-cols-2 gap-1 ">
                {dropdownOptions.map((option) => (
                  <div key={option.value}>
                    {renderOption(option)}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="m-5">
        {selectedOption && (
          <div>
            <h2>Selected Option: {selectedOption.label}</h2>
            <h2>What is the condition of the phone?</h2>
            <div className="border p-4 mt-4">
              <div className="grid grid-cols-1 ">
                <div onClick={handleShowAdditionalOptions}>
                  <input type="radio" name="radio1" />
                 
                  <span className='p-2'>Brand New</span>
                </div>
                <div className='p-4'>
                 
                  <p>Some text on the right</p>
                </div>
                <hr/>
                <div onClick={handleShowAdditionalOptions}>
                  <input type="radio" name="radio1" />
                  <span className='p-2'>Flawless </span>
                </div>
                <div className='p-4'>
                  <p>Some more text on the right</p>
                </div>
                <hr/>
                <div onClick={handleShowAdditionalOptions}>
                  <input type="radio" name="radio1" />
                  <span className='p-2'>Good </span>
                </div>
                <div className='p-4'>
                  <p>Some more text on the right</p>
                </div>
                <hr/>
                <div onClick={handleShowAdditionalOptions}>
                  <input type="radio" name="radio1" />
                  <span className='p-2'>Fair </span>
                </div>
                <div className='p-4'>
                  <p>Some more text on the right</p>
                </div>
                <hr/>
                <div onClick={handleShowAdditionalOptions}>
                  <input type="radio" name="radio1" />
                  <span className='p-2'>Broken </span>
                </div>
                <div className='p-4'>
                  <p>Some more text on the right</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="m-5">
        {showAdditionalOptions && (
          <div>
            <h2>Please select as applied:</h2>
            <h2>Please select if the phone is locked or unlocked</h2>
            <div className="my-5">
              <div className="my-5 ">
                <input
                  type="radio"
                  name="condition"
                  checked={selectedCondition === 'locked'}
                  onChange={() => handleConditionSelect('locked')}
                  style={{paddingRight:'5px'}}
                />
                <span className='pl-2 mx-1'>Locked</span>
                <input
                  type="radio"
                  name="condition"
                  checked={selectedCondition === 'unlocked'}
                  onChange={() => handleConditionSelect('unlocked')}
                />
                <span className='pl-2'>Unlocked</span>
              </div>
              <div className='my-5'>
                <input
                  type="radio"
                  name="storage"
                  checked={selectedStorage === '64GB'}
                  onChange={() => handleStorageSelect('64GB')}
                />
                <span className='pl-2 mx-1'>64GB</span>
                <input
                  type="radio"
                  name="storage"
                  checked={selectedStorage === '256GB'}
                  onChange={() => handleStorageSelect('256GB')}
                />
                <span className='pl-2  mx-1' >256GB</span>
                <input
                  type="radio"
                  name="storage"
                  checked={selectedStorage === '512GB'}
                  onChange={() => handleStorageSelect('512GB')}
               
                  
                />
                <span className='pl-2'>512GB</span>
              </div>
              {phoneSelection && (
                <div >
                  <div className='my-5'>
                    <p>Swap item:{selectedOption.label}</p>
                    <p>Swap value:#33000</p>
                  </div>
                  <div>Now let's select your new phone</div>
                  
                {/* Starts here */}
                <div className="flex justify-between m-5 font-bold">
          <div>I want this iPhone</div>

        <div className=" w-full p-4">
          <button
            className="w-full border p-3 rounded-lg shadow-lg"
            onClick={handleSelectClick}
          >
            {newlySelectediPhone ? newlySelectediPhone.label : 'Select your phone'}
          </button>
          

          {showDropdown && (
            <div className="absolute left-0 m-15 w-full border  rounded-lg bg-white shadow-lg">
              <div className="grid grid-cols-2 gap-1 ">
                {dropdownOptions.map((option) => (
                  <div key={option.value}>
                    {renderNewlySelectediPhoneOption(option)}
                  </div>
                ))}
              </div>
            </div>
          )}
          
        </div>
        
      </div>
                {/* Ends here */}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SwapiPhone;

















