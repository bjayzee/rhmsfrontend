
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
      name: 'iPhone X ',
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

      <div className="m-8 text-lg font-bold">
      <h1>Give and get:</h1>
      <h1>The swap-way is the best way</h1>
        </div>
      <div className='mx-8 font-bold text-sm'>
      <p>Browse through the phones below and make your </p>
      <p>selection.</p>
      </div>
      <div className="flex text-md ">
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
            <div className="absolute left-0 right-10 p-2 mx-10  my-2  border-solid  rounded-lg bg-white shadow">
              <div className="grid grid-cols-2   ">
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
             <div style={{borderColor:'#187EB4'}} className="border  px-8 m-8 rounded-lg  ">
             <div className="grid grid-cols-1 ">
               <div className="flex  mt-4 " onClick={handleShowAdditionalOptions}>
               <div>
               <input type="radio" name="radio1" class=' w-4 h-8 mt-1' />
               </div>
                <div>
                <p className='p-2 ml-2'>Brand New</p>
                </div>
               </div>
               <div className='p-4   mt-2 ml-4'>
                
               <p>Phone still in factory original  packaging, Must
                  come with box and all accessories sealed/untounched
                 </p>
               </div>
               <hr/>
               <div className='flex' onClick={handleShowAdditionalOptions} >
                 <div>
                 <input type="radio" name="radio1" class=' w-4 h-8 mt-1 ' />
                 </div>
              
                 <div>
                 <p className='p-2  ml-2'>Flawless </p>
                 </div>
               </div>
               <div className='p-4  ml-4'>
                 <p> 
                  Has absolutely no scratches, scuffs or other marks looks 
                  brand new
                 </p>
               </div>
               <hr/>
               <div className=" flex" onClick={handleShowAdditionalOptions}>
               <div>
                <input type="radio" name="radio1" class=' w-4 h-8 mt-1' />
                </div>
                 <div>
                 <p className='p-2  ml-2'>Good </p>
                 </div>
               </div>
               <div className='p-4  ml-4'>
                 <p>Shows light to moderate sign of wear.
                  Contatains few light scratches and/or dents.
                 </p>
               </div>
               <hr/>
               <div className='flex' onClick={handleShowAdditionalOptions}>
               <div>
               <input type="radio" name="radio1" class=' w-4 h-8 mt-1' />
               </div>
                <div>
                <p className='p-2  ml-2'>Fair </p>
                </div>
               </div>
               <div className='p-4  ml-4'>
                 <p>Shows moderate to excessive signs of wear.
                  Contains excessive scratching, major dents, and/or mild housing
                  damage such as a slightly bent frame.
                 </p>
               </div>
               <hr/>
               <div className='flex' onClick={handleShowAdditionalOptions}>
               <div>
                <input type="radio" name="radio1" class=' w-4 h-8 mt-1' />
                </div>
                 <div>
                 <p className='p-2  ml-2'>Broken </p>
                 </div>
               </div>
               <div className='p-4  ml-4'>
                 <p>Cracks (regardless of size) or broken parts on either 
                  screen or body  the item.</p>
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

      <div className="mr-5">
     
        {showAdditionalOptions && (
          <div>
            
            { createSpace !== false &&( 
            <div className="my-5 m-8">
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
                  <div className='m-8'>
                  <div className='my-5 '>
                     <div className='flex '>
                     <p className='font-bold' style={{color:'#187EB4'}}>Swap item:</p>
                     <p className='pl-2' style={{color:'#187EB4'}}>{selectedOption.label}</p>
                     </div>
                     <div className='flex '>
                     <p className='font-bold' style={{color:'#187EB4'}}>Swap value:</p>
                     <p className='pl-2' style={{color:'#187EB4'}}>#33000</p>
                     </div>
                   </div>
                   <div className='font-bold'>
                     <p>Now let's select your new phone</p>
                   </div>
                  </div>
                  )} 
                  
                
                <div className="flex justify-between  font-bold m-8">
          <div className=" w-full mt-9 ">
          
            <p>
            I want this iPhone
              </p>
          </div>

        {/* <div className=" w-full p-4">  */}
        <div className=" w-full  py-5"> 
        

         

          <button
            className="w-full border m-1 px-4 py-3 rounded-lg shadow-lg"
            onClick={handleNewPhoneSelectClick}
          >
           
            <div className='flex space-between  '>
            <div className='text-sm'>
            {selectedModel ? selectedModel.price: 'Select a phone'}
            </div>
             
            <span>
              <div className='m-1'>
              <img
          src="/phoneicon.png" 
          alt="Phone Image"
          className="mr-2" 
          style={{ width: '20px', height: '20px' }} 
        />
              </div>
            </span>
           </div>

          </button> 

        
            
        </div>
        
      </div>


     

      { showDropdown && (
        <div>
        <div className="flex flex-wrap border-color-gray rounded-lg   m-5 mr-10 ">
         
           {models.map((model, index) => (
            <div > 
             <div
               key={index}
              
                className={`   p-4 rounded-lg    ${

                
                 selectedModel !== null && selectedModel !== index ? 'hidden' : ''
               }`}
               onClick={() => {
                 setSelectedModel(index);
                 setCurrentPictureIndex(0);
               }}
           
             >
              
              
               <div className="  grid grid-cols-2    ">
                   <p className="text-sm font-bold  ">{model.name}</p>
                 </div>
              
               
               <div>
                <div className=''>
               {selectedModel === index && (
                 <div>
                  <div className=''>
                   <div className="flex justify-between ">
                     <div className='rounded-lg border-gray shadow  '>
                       <img
                         src={model.pictures[currentPictureIndex]}
                         alt={model.name}
                         style={{
                          width:'1200px',
                          height:'250px'
                         
                         }}
                         />
                       <button onClick={showNextPicture}>Next</button>
                     </div>
                   </div>
                   {removeItem !== false &&(
                   <div>
                     <div className="flex justify-between p-1 font-bold">
                       <p>{model.name}</p>
                       <p> {model.price}</p>
                     </div>
                   </div>
                   )}

                  {removeItem !== false &&(
                   <div>
                     <div className="font-bold">
                       <p>Pick your preference</p>
                     </div>
                    <div className='flex '>
                    <label >

<div className='flex '>
<input
  type="radio"
  name={`condition-${model.name}`}
  value="brand-new"
  onChange={() => {
   
    setSelectedNewPhoneCondition('brand-new');
    setLockState(null);
    setSelectedColor(null);
    setSelectedNewPhoneStorage(null);
    setShowAddToCart(false); // Hide "Add to Cart" when conditions change
    setShowStorageOptions(false);
  } } 
  class=' w-5 h-8 '
 //  style={{ marginTop:'3px' }}
  />
<p className='pl-2 mt-1'> Brand New</p> 
</div>
</label>
<label>

<div className='flex'>
<input
  type="radio"
  name={`condition-${model.name}`}
  value="used"
  class=' w-5 h-8  mx-2'
  onChange={() => {
    setSelectedNewPhoneCondition('used');
    setLockState(null);
    setSelectedColor(null);
    setSelectedNewPhoneStorage(null);
    setShowAddToCart(false); // Hide "Add to Cart" when conditions change
    setShowStorageOptions(false); // Hide storage options
  } } />
<p className='pl-2 mt-1'> Used</p>
</div>
</label>
                    </div>
                     </div>
                    )}
                 </div>
                 <div>
                
                 {selectedNewPhoneCondition === 'brand-new' && (
                  
                    <div>
                       {removeItem !== false &&(
                      <div>
                      <div className="font-bold my-4">
                        
                      </div>
                      <div className='flex'>
                      <label className='' >
                       
                       <div className='flex'>
                       <input
                          type="radio"
                          name={`status-${model.name}`}
                          value="locked"
                          class=' w-5 h-8  '
                          onChange={() => {
                            setLockState('unlocked');
                            setSelectedColor(null);
                            setSelectedStorage(null);
                            setShowAddToCart(false); // Hide "Add to Cart" when status changes
                          }}
                        />
                         <p className='pl-2 mt-1'>Unlocked</p>
                       </div>
                      </label>
                      <label>
                       
                       <div className='flex'>
                       <input
                          type="radio"
                          name={`status-${model.name}`}
                          value="locked"

                          class=' w-5 h-8  mx-2'
                          onChange={() => {
                            setLockState('locked');
                            setSelectedColor(null);
                            setSelectedStorage(null);
                            setShowAddToCart(false); // Hide "Add to Cart" when status changes
                            setShowStorageOptions(false); // Hide storage options
                          }}
                        />
                         <p className='pl-2 mt-1'>Locked</p>
                       </div>
                      </label>
                      </div>
                      </div>
                        )} 
                      {lockState !== null && (
                        <div>
                           {removeItem !== false &&(
                            <div>
                              <div className="font-bold mt-4">
                            <p>Select from available Colors</p>
                          </div>
                         <div className='flex'>
                         <label>
                            <div className='flex'>
                            <p className=' mt-1'>Red</p>
                            <input
                              type="radio"
                              class=' w-5 h-8  mx-2'
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
                            </div>
                          </label>
                         
                          <label className=''>
                            <div className='flex'>
                            <p className='pl-2 mt-1'>Blue</p>
                            <input
                              type="radio"
                              class=' w-5 h-8  mx-2'
                              name={`color-${model.name}`}
                              value="blue"
                              onChange={() => {
                                setSelectedColor('blue');
                                setSelectedStorage(null);
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                setShowStorageOptions(true); // Show storage options
                              }}
                            />
                            </div>
                          </label>
                          <label>
                            <div className='flex'>
                            <p className='pl-2 mt-1'>Black</p>
                            <input
                              type="radio"
                              class=' w-5 h-8  mx-2'
                              name={`color-${model.name}`}
                              value="black"
                              onChange={() => {
                                setSelectedColor('black');
                                setSelectedStorage(null);
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                setShowStorageOptions(true); // Show storage options
                              }}
                            />
                            </div>
                          </label>
                          
                         </div>
                         <div className='flex'>
                         <label className=''>
                            <div className='flex'>
                            <p className=' mt-1'>Green</p>
                            <input
                              type="radio"
                              class=' w-5 h-8  mx-2'
                              name={`color-${model.name}`}
                              value="green"
                              onChange={() => {
                                setSelectedColor('green');
                                setSelectedStorage(null);
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                setShowStorageOptions(true); // Show storage options
                              }}
                            />
                            </div>
                          </label>
                          <label>
                            <div className='flex'>
                            <p className='pl-2 mt-1'>Pink</p>
                            <input
                        
                              type="radio"
                              class=' w-5 h-8  mx-2'
                              name={`color-${model.name}`}
                              value="pink"
                              onChange={() => {
                                setSelectedColor('pink');
                                setSelectedStorage(null);
                                setShowAddToCart(false); 
                                setShowStorageOptions(true); 
                              }}
                            />
                            </div>
                          </label>
                         </div>
                            </div>
                           )}
                          
                          {showStorageOptions && (
                            <div>
                               {removeItem !== false &&(
                                <div>
                                  <div className="font-bold mt-4">
                                <p>Select Storage Capacity</p>
                              </div>
                             <div className='flex'>
                             <label className=' '>
                              <div className='flex'>
                                  
                              <input
                                  type="radio"
                                  class=' w-5 h-8  '
                                  name={`storage-${model.name}`}
                                  value="128GB"
                                  
                                  onChange={() => {handleStorageSelection('128GB') }}
                                  
                                />
                               <p className='pl-2 mt-1'> 128GB</p>
                              </div>
                              </label>
                              <label>
                                
                               <div className='flex'>
                               <input
                                  type="radio"
                                  class=' w-5 h-8  mx-2'
                                  name={`storage-${model.name}`}
                                  value="256GB"
                                  onChange={() => handleStorageSelection('256GB')}
                                  
                                />
                                <p className='pl-2 mt-1'>256GB</p>
                               </div>
                              </label>
                              <label>
                                
                               <div className='flex'>
                               <input
                                  type="radio"

                                  class=' w-5 h-8  mx-2'
                                  name={`storage-${model.name}`}
                                  value="512GB"
                                  onChange={() => handleStorageSelection('512GB')}
                            
                                />
                                <p className='pl-2 mt-1'>512GB</p>
                               </div>
                              </label>
                             </div>
                                </div>
                                )} 
                              
                              
                             

                              {showAddToCart && selectedModel !== null && (
                            <div className="selected-model-details">
                               <div className='flex mt-2 font-bold text-lg'>
                               <p className=' p'>1 {selectedCondition}</p>
                                <p className=' pr-2' > {models[selectedModel].name}</p>
                                <p className=' mr-2'> {selectedStorage}</p>
                               </div>
                               <div className='flex font-bold text-md my-4'>
                               <p className=' mr-2'> {selectedColor}</p>
                              
                                <p className='mr-2'> {lockState}</p>
                                
                               </div>

                               <div className='flex font-bold'>
                                <p>Your swap:</p>
                                <p className=' pr-2' > {models[selectedModel].name}</p>
                                <p> {models[selectedModel].price}</p>
                                </div>
                               
                                <div className=' justify-between font-bold'>
                                <p>Price after swap:</p>
                                <p> {models[selectedModel].price}</p>
                                </div>
                                <div className=' font-bold'>
                                <button style={{  
                                  paddingLeft: '210px ', 
                                 
                                  marginTop:'30px',
                                  color: '#187EB4' }}
                                  onClick={() => setShowAddToCart(false)}>Remove</button>
                                </div>
          
                            </div>
                             )}
      

                             {addToCartButton && (
                                <div  className="flex justify-center items-center">
                                  <button onClick={showCartDetails} style={{  backgroundColor: '#187EB4', padding: '10px 35px',borderRadius:'20px',  marginTop:'30px',color: 'white' }}>ADD TO CART</button>
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
                                 
                                 <div  className=" flex justify-center items-center mt-3">
                                 
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
                </div>
               
                   
 
               </div>
              
               </div>
               
               ))}
               </div>
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

















