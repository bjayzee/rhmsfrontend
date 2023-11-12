
"use client"; 
import Link from 'next/link';
import React, { useState } from 'react';


const SwapiPhone = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [phoneSelection, setPhoneSelection] = useState(false)
  const [newlySelectediPhone, setNewlySelectediPhone] = useState(null);
  const [removeItem, setRemoveItem] = useState(true);
  const [createSpace, setCreateSpace] = useState(true)
  const [selectedModel, setSelectedModel] = useState(null);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [selectedNewPhoneCondition, setSelectedNewPhoneCondition] = useState(null);
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
    setAddToCartButton(true)
   
  };

  const showCartDetails = () =>{
    setShowAddToCart(true); 
    setRemoveItem(false);
    setCheckoutButton(true);
    setAddToCartButton(false)
  }

  const handleSelectClick = () => {
    setShowDropdown(!showDropdown);
    
  };

  const handleNewPhoneSelectClick = () =>{
    setShowDropdown(!showDropdown);
    // setRemoveItem(false)
    setCreateSpace(false)
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  const handleNewlySelectediPhone = (option) => {
    
    setNewlySelectediPhone(option);
    setShowDropdown(false);
    setRemoveItem(false)
    setCreateSpace(false)
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

  const models = [
    {
      name: 'iPhone 8',
      pictures: ['iphoneS.png', 'basket.png'],
      price: '$599',
    },
    {
      name: 'iPhone X',
      pictures: ['iphoneS.png'],
      price: '$859',
    },
    {
      name: 'iPhone 8',
      pictures: ['iphoneS.png'],
      price: '$1599',
    },
    {
      name: 'iPhone X',
      pictures: ['iphoneS.png'],
      price: '$900',
    },
    {
      name: 'iPhone 8',
      pictures: ['iphoneS.png'],
      price: '$750',
    },
    {
      name: 'iPhone X',
      pictures: ['basket.png', 'iphoneS.png'],
      price: '$770',
    },
    // Add more iPhone models here
  ];

  const showNextPicture = () => {
    setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % models[selectedModel].pictures.length);
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
          onClick={() =>  handleNewlySelectediPhone(option)}
        >
          {/* <span>{option.label}</span> */}
          <span>{option.models}</span>
        </div>
      </div>
    );
  };

  return (
    <div >
      <div className='mb-20'>
      <div  >
      {createSpace !== false && (
        <div>

      <div className="m-5 text-lg font-bold">
      <h1>Give and get:</h1>
      <h1>The swap-way is the best way</h1>
        </div>
      <div className='mx-5'>
      <p>Browse through the phones below and make your </p>
      <p>selection.</p>
      </div>
      <div className="flex text-sm   ">
        <div className=' w-full mt-7 pl-5 font-bold'>
          <p>Let's value your iPhone</p>
        </div>

        <div className=" w-full pr-5 py-4  ">
          <button
            className="w-full border-solid mr-20 px-3 py-4 rounded-lg shadow-lg  "
            onClick={handleSelectClick}
          
          >
           <div className='flex space-between '>
            <div className=''>
              {selectedOption ? selectedOption.label : 'Select your phone'}
            </div>
             
            <span>
              <div>
              <img
          src="/phoneicon.png" // Replace with the actual image source
          alt="Phone Image"
          className="mr-2" // Adjust margin as needed
          style={{ width: '20px', height: '20px' }} // Adjust size as needed
        />
              </div>
            </span>
           </div>
          </button>
          <p 
          style={{
            color:'#187EB4',
            marginLeft:'20px'
            }}>Learn how it works</p>

          {showDropdown && (
            <div className="absolute left-0 right-10 p-2 mx-5  my-2  border-solid  rounded-lg bg-white shadow-lg">
              <div className="grid grid-cols-2 gap-1  ">
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

        </div>
      )}

      </div>
      <div>
        {selectedOption && (
          <div>
            {createSpace !== false && (
          <div>
           
            <div className='font-bold m-5'>
            <h2>What is the condition of the phone?</h2>
            </div>
           {/* {removeItem !== false && ( */}
             <div className="border  p-4 mt-4 rounded-lg  m-5">
             <div className="grid grid-cols-1 ">
               <div className="flex" onClick={handleShowAdditionalOptions}>
               <div>
               <input type="radio" name="radio1" class=' w-4 h-8 mt-1' />
               </div>
                <div>
                <p className='p-2 '>Brand New</p>
                </div>
               </div>
               <div className='p-4'>
                
                 <p>Some text on the right</p>
               </div>
               <hr/>
               <div className='flex' onClick={handleShowAdditionalOptions} >
                 <div>
                 <input type="radio" name="radio1" class=' w-4 h-8 mt-1 ' />
                 </div>
              
                 <div>
                 <p className='p-2'>Flawless </p>
                 </div>
               </div>
               <div className='p-4'>
                 <p>Some more text on the right</p>
               </div>
               <hr/>
               <div className=" flex" onClick={handleShowAdditionalOptions}>
               <div>
                <input type="radio" name="radio1" class=' w-4 h-8 mt-1' />
                </div>
                 <div>
                 <p className='p-2 '>Good </p>
                 </div>
               </div>
               <div className='p-4'>
                 <p>Some more text on the right</p>
               </div>
               <hr/>
               <div className='flex' onClick={handleShowAdditionalOptions}>
               <div>
               <input type="radio" name="radio1" class=' w-4 h-8 mt-1' />
               </div>
                <div>
                <p className='p-2'>Fair </p>
                </div>
               </div>
               <div className='p-4'>
                 <p>Some more text on the right</p>
               </div>
               <hr/>
               <div className='flex' onClick={handleShowAdditionalOptions}>
               <div>
                <input type="radio" name="radio1" class=' w-4 h-8 mt-1' />
                </div>
                 <div>
                 <p className='p-2'>Broken </p>
                 </div>
               </div>
               <div className='p-4'>
                 <p>Some more text on the right</p>
               </div>
             </div>
           </div>
           {/* )} */}
          </div>
          )}
          </div>
          
        )}
      </div>
      </div>

      <div className="m-5">
        {showAdditionalOptions && (
          <div>
            

            { createSpace !== false &&( 
            <div className="my-5">
           <div className='font-bold'>
           <h2>Please select as applied:</h2>
            <h2 className='text-sm'>Please select if the phone is locked or unlocked</h2>
           </div>
           
           
           
              <div className=" ">
                <div className='flex'>
                <input
                  type="radio"
                  name="condition"
                  checked={selectedCondition === 'locked'}
                  onChange={() => handleConditionSelect('locked')}
                  style={{paddingRight:'5px', marginTop:'3px' }}
                  class=' w-4 h-8 '
                />
                
                <p className='pl-2 mx-3 mt-2'>Locked</p>


                <input
                  type="radio"
                  name="condition"
                  checked={selectedCondition === 'unlocked'}
                  onChange={() => handleConditionSelect('unlocked')}
                  style={{paddingRight:'5px', marginTop:'3px' }}
                  class=' w-4 h-8 '
                />
                <p className='pl-2 mx-1 mt-2'>Unlocked</p>
                </div>
                
              </div>
           
                <div className='my-5'>
                <div className='flex'>
                <input
                  type="radio"
                  name="storage"
                  checked={selectedStorage === '64GB'}
                  onChange={() => handleStorageSelect('64GB')}
                  class=' w-4 h-8 '
                  style={{ marginTop:'3px' }}
                />
                <p className='pl-2 mx-1 mt-2 mr-7'>64GB</p>
                <input
                  type="radio"
                  name="storage"
                  checked={selectedStorage === '256GB'}
                  onChange={() => handleStorageSelect('256GB')}
                  class=' w-4 h-8 '
                  style={{ marginTop:'3px' }}
                />
                <p className='pl-2  mx-1 mt-2 mr-7' >256GB</p>
                <input
                  type="radio"
                  name="storage"
                  checked={selectedStorage === '512GB'}
                  onChange={() => handleStorageSelect('512GB')}
                  class=' w-4 h-8 '
                  style={{ marginTop:'3px' }}
                  
                />
                <p className='pl-2 mx-1 mt-2'>512GB</p>
                </div>
              </div>
              
             
            </div>
            )}
           
            
            {phoneSelection && (
                <div >
                 {createSpace !== false && (
                  <div>
                  <div className='my-5'>
                     <p>Swap item:{selectedOption.label}</p>
                     <p>Swap value:#33000</p>
                   </div>
                   <div>
                     <p>Now let's select your new phone</p>
                   </div>
                  </div>
                  )} 
                  
                {/* Starts here */}
                <div className="flex justify-between m-5 font-bold">
          <div>I want this iPhone</div>

        <div className=" w-full p-4"> 
        

          {/* Here */}

          <button
            className="w-full border p-3 rounded-lg shadow-lg"
            onClick={handleNewPhoneSelectClick}
          >
            {selectedModel ? selectedModel.price: 'Select your phone'}
            {/* {selectedOption ? selectedOption.label : 'Select your phone'} */}
          </button> 

        
            
        </div>
        
      </div>
      { showDropdown && (
           <div className="flex flex-wrap justify-center shadow-lg border-color-gray">
           {models.map((model, index) => (
             <div
               key={index}
               className={`w-1/2 p-4 rounded-lg ${
                 selectedModel !== null && selectedModel !== index ? 'hidden' : ''
               }`}
               onClick={() => {
                 setSelectedModel(index);
                 setCurrentPictureIndex(0);
               }}
           
             >
               <div className="flex justify-between">
                 <div>
                   <p className="text-sm my-custom-font font-bold">{model.name}</p>
                 </div>
               </div>
               {selectedModel === index && (
                 <div>
                  <div>
                   <div className="flex justify-between">
                     <div>
                       <img
                         src={model.pictures[currentPictureIndex]}
                         alt={model.name}
                         width={800}
                         height={800} />
                       <button onClick={showNextPicture}>Next</button>
                     </div>
                   </div>
                   {removeItem !== false &&(
                   <div>
                     <div className="flex justify-between p-1">
                       <p>{model.name}</p>
                       <p>Price: {model.price}</p>
                     </div>
                   </div>
                   )}

                  {removeItem !== false &&(
                   <div>
                     <div className="font-bold">
                       <p>Pick your preference</p>
                     </div>
                     <label className='m-3'>

                       <input
                         type="radio"
                         name={`condition-${model.name}`}
                         value="brand-new"
                         onChange={() => {
                          // setSelectedCondition('brand-new');
                           setSelectedNewPhoneCondition('brand-new');
                           setLockState(null);
                           setSelectedColor(null);
                           setSelectedNewPhoneStorage(null);
                           setShowAddToCart(false); // Hide "Add to Cart" when conditions change
                           setShowStorageOptions(false);
                         } } />
                       Brand New
                     </label>
                     <label>

                       <input
                         type="radio"
                         name={`condition-${model.name}`}
                         value="used"
                         onChange={() => {
                           setSelectedNewPhoneCondition('used');
                           setLockState(null);
                           setSelectedColor(null);
                           setSelectedNewPhoneStorage(null);
                           setShowAddToCart(false); // Hide "Add to Cart" when conditions change
                           setShowStorageOptions(false); // Hide storage options
                         } } />
                       Used
                     </label></div>
                    )}
                 </div>
                 <div>
                
                 {selectedNewPhoneCondition === 'brand-new' && (
                  
                    <div>
                       {removeItem !== false &&(
                      <div>
                      <div className="font-bold">
                        <p>Phone Status</p>
                      </div>
                      <label className='m-3' >
                       
                        <input
                          type="radio"
                          name={`status-${model.name}`}
                          value="locked"
                          onChange={() => {
                            setLockState('locked');
                            setSelectedColor(null);
                            setSelectedStorage(null);
                            setShowAddToCart(false); // Hide "Add to Cart" when status changes
                          }}
                        />
                         Locked
                      </label>
                      <label>
                       
                        <input
                          type="radio"
                          name={`status-${model.name}`}
                          value="unlocked"
                          onChange={() => {
                            setLockState('unlocked');
                            setSelectedColor(null);
                            setSelectedStorage(null);
                            setShowAddToCart(false); // Hide "Add to Cart" when status changes
                            setShowStorageOptions(false); // Hide storage options
                          }}
                        />
                         Unlocked
                      </label>
                      </div>
                        )} 
                      {lockState !== null && (
                        <div>
                           {removeItem !== false &&(
                            <div>
                              <div className="font-bold">
                            <p>Select from available Colors</p>
                          </div>
                          <label>
                            Red
                            <input
                              type="radio"
                              // class="p-2 bg-yellow-300 checked:bg-blue-500 rounded-full"
                              style={{ 
                                backgroundColor:'red'
                                
                                }}
                              name={`color-${model.name}`}
                             
                              value="red"
                              
                              onChange={() => {
                                setSelectedColor('red');
                                setSelectedStorage(null);
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                setShowStorageOptions(true); // Show storage options
                              }}
                            />
                          </label>
                         
                          <label className='m-3'>
                            Blue
                            <input
                              type="radio"
                              name={`color-${model.name}`}
                              value="blue"
                              onChange={() => {
                                setSelectedColor('blue');
                                setSelectedStorage(null);
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                setShowStorageOptions(true); // Show storage options
                              }}
                            />
                          </label>
                          <label>
                            Black
                            <input
                              type="radio"
                              name={`color-${model.name}`}
                              value="black"
                              onChange={() => {
                                setSelectedColor('black');
                                setSelectedStorage(null);
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                setShowStorageOptions(true); // Show storage options
                              }}
                            />
                          </label>
                          <label className='m-3'>
                            Green
                            <input
                              type="radio"
                              name={`color-${model.name}`}
                              value="green"
                              onChange={() => {
                                setSelectedColor('green');
                                setSelectedStorage(null);
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                setShowStorageOptions(true); // Show storage options
                              }}
                            />
                          </label>
                          <label>
                            Pink
                            <input
                        
                              type="radio"
                              name={`color-${model.name}`}
                              value="pink"
                              onChange={() => {
                                setSelectedColor('pink');
                                setSelectedStorage(null);
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                setShowStorageOptions(true); // Show storage options
                              }}
                            />
                          </label>
                            </div>
                           )}
                          
                          {showStorageOptions && (
                            <div>
                               {removeItem !== false &&(
                                <div>
                                  <div className="font-bold">
                                <p>Select Storage Capacity</p>
                              </div>
                              <label className='m-3 '>
                                
                                <input
                                  type="radio"
                                  name={`storage-${model.name}`}
                                  value="128GB"
                                  
                                  onChange={() => {handleStorageSelection('128GB') }}
                                  
                                />
                                128GB
                              </label>
                              <label>
                                
                                <input
                                  type="radio"
                                  name={`storage-${model.name}`}
                                  value="256GB"
                                  onChange={() => handleStorageSelection('256GB')}
                                  
                                />
                                256GB
                              </label>
                              <label>
                                
                                <input
                                  type="radio"
                                  name={`storage-${model.name}`}
                                  value="512GB"
                                  onChange={() => handleStorageSelection('512GB')}
                            
                                />
                                512GB
                              </label>
                                </div>
                                )} 
                              
                              
                             

                              {showAddToCart && selectedModel !== null && (
                            <div className="selected-model-details">
                               <div className='flex m-2'>
                               <p className=' pr-1'>1 {selectedCondition}</p>
                                <p > {models[selectedModel].name}</p>
                               
                               </div>
                               <div className='flex '>
                               <p className=' mr-2'> {selectedStorage}</p>
                                <p className='mr-2'> {lockState}</p>
                                <p className=' mr-2'> {selectedColor}</p>
                               </div>
                               
                                <div className='flex justify-between'>
                                <p>Price:</p>
                                <p> {models[selectedModel].price}</p>
                                </div>
                                 <button style={{  paddingLeft: '110px ',  marginTop:'30px',color: '#187EB4' }}onClick={() => setShowAddToCart(false)}>Remove</button>
          
                            </div>
                             )}
      

                             {addToCartButton && (
                                <div  className="flex justify-center items-center">
                                  <button onClick={showCartDetails} style={{  backgroundColor: '#187EB4', padding: '10px 35px',borderRadius:'20px',  marginTop:'30px',color: 'white' }}>Add to Cart</button>
                                </div>
                              )}

                              {checkoutButton &&(
                               <div>
                                 
                                 <div  className=" flex justify-center items-center">
                                  <button  
                                  style={{ 
                                    backgroundColor: '#187EB4',
                                     padding: '10px 35px',
                                     borderRadius:'20px',
                                     color: 'white', 
                                     marginTop:'30px' }}>
                                      <Link href = "/howToCheckOut">Checkout</Link>
                                      
                                      </button>

                                      
                                </div>
                                 
                                 <div  className=" flex justify-center items-center">
                                 
                                 <p style={{ color: '#187EB4' }}>Add more items</p>
                               </div>
                               </div>
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
               ))}
               </div>
         )}
                {/* Ends here */}
                </div>
              )}
            
          </div>
        )}
      </div>
    </div>
  );
};
export default SwapiPhone;

















