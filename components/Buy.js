"use client"; 

import Link from 'next/link';


// import React, { useState } from 'react';

// export default function Buy() {
//   const models = [
//     {
//       name: 'iPhone 8',
//       pictures: ['iphoneS.png', 'basket.png'],
//       price: '$599',
//     },
//     {
//       name: 'iPhone X',
//       pictures: ['iphoneS.png'],
//       price: '$859',
//     },
//     {
//       name: 'iPhone 8',
//       pictures: ['iphoneS.png'],
//       price: '$1599',
//     },
//     {
//       name: 'iPhone X',
//       pictures: ['iphoneS.png'],
//       price: '$900',
//     },
//     {
//       name: 'iPhone 8',
//       pictures: ['iphoneS.png'],
//       price: '$750',
//     },
//     {
//       name: 'iPhone X',
//       pictures: ['basket.png', 'iphoneS.png'],
//       price: '$770',
//     },
//     // Add more iPhone models here
//   ];

//   const [selectedModel, setSelectedModel] = useState(null);
//   const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
//   const [selectedCondition, setSelectedCondition] = useState(null);
//   const [lockState, setLockState] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [selectedStorage, setSelectedStorage] = useState(null);
//   const [showAddToCart, setShowAddToCart] = useState(false); // State for showing "Add to Cart" button
//   const [showStorageOptions, setShowStorageOptions] = useState(false); // State for showing storage options
//   const [addToCartButton, setAddToCartButton] = useState(false);
//   const [removeItem, setRemoveItem] = useState(true);
//   const [checkoutButton, setCheckoutButton] = useState(false);
//   const showNextPicture = () => {
//     setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % models[selectedModel].pictures.length);
//   };

//   // Function to handle storage selection
//   const handleStorageSelection = (storage) => {
//     setSelectedStorage(storage);
//     setShowAddToCart(false); // Show the "Add to Cart" button when storage is selected
//     setAddToCartButton(true)
   
//   };

  

//   const showCartDetails = () =>{
//     setShowAddToCart(true); 
//     setRemoveItem(false);
//     setCheckoutButton(true);
//     setAddToCartButton(false)
    
    
//   }
  

//   return (
//     <div>
//       <div className="text-2xl font-bold mt-10 my-custom-font m-5">
//         The iPhone connection - connecting you to the world
//       </div>

//       <div className="flex flex-wrap justify-center shadow-lg border-color-gray">
//         {models.map((model, index) => (
//           <div
//             key={index}
//             className={`w-1/2 p-4 rounded-lg ${
//               selectedModel !== null && selectedModel !== index ? 'hidden' : ''
//             }`}
//             onClick={() => {
//               setSelectedModel(index);
//               setCurrentPictureIndex(0);
//             }}
//           >
//             <div className="flex justify-between">
//               <div>
//                 <p className="text-sm my-custom-font font-bold">{model.name}</p>
//               </div>
//             </div>
//             {selectedModel === index && (
//               <div>
//                 <div className="flex justify-between">
//                   <div>
//                     <img
//                       src={model.pictures[currentPictureIndex]}
//                       alt={model.name}
//                       width={800}
//                       height={800}
//                     />
//                     <button onClick={showNextPicture}>Next</button>
//                   </div>
//                 </div>

//                 <div >
                 
//                     <div>
//                     {removeItem !== false &&(
//                       <div className="flex justify-between p-1">
//                       <p>{model.name}</p>
//                       <p>Price: {model.price}</p>
//                     </div>
//                     )}
                  
//                   </div>
//                   <div>
                  
                     
//                     {removeItem !== false &&(
//                        <div><div className="font-bold">
//                             <p>Pick your preference</p>
//                           </div><label>
//                               Brand New
//                               <input
//                                 type="radio"
//                                 name={`condition-${model.name}`}
//                                 value="brand-new"
//                                 onChange={() => {
//                                   setSelectedCondition('brand-new');
//                                   setLockState(null);
//                                   setSelectedColor(null);
//                                   setSelectedStorage(null);
//                                   setShowAddToCart(false); // Hide "Add to Cart" when conditions change
//                                   setShowStorageOptions(false);
//                                 } } />
//                             </label><label>
//                               Used
//                               <input
//                                 type="radio"
//                                 name={`condition-${model.name}`}
//                                 value="used"
//                                 onChange={() => {
//                                   setSelectedCondition('used');
//                                   setLockState(null);
//                                   setSelectedColor(null);
//                                   setSelectedStorage(null);
//                                   setShowAddToCart(false); // Hide "Add to Cart" when conditions change
//                                   setShowStorageOptions(false); // Hide storage options
//                                 } } />
//                             </label></div>
//                      )} 
                  
                    
                   
//                   </div>
//                   {selectedCondition === 'brand-new' && (
//                     <div>
//                        {removeItem !== false &&(
//                       <div>
//                       <div className="font-bold">
//                         <p>Phone Status</p>
//                       </div>
//                       <label>
//                         Locked
//                         <input
//                           type="radio"
//                           name={`status-${model.name}`}
//                           value="locked"
//                           onChange={() => {
//                             setLockState('locked');
//                             setSelectedColor(null);
//                             setSelectedStorage(null);
//                             setShowAddToCart(false); // Hide "Add to Cart" when status changes
//                           }}
//                         />
//                       </label>
//                       <label>
//                         Unlocked
//                         <input
//                           type="radio"
//                           name={`status-${model.name}`}
//                           value="unlocked"
//                           onChange={() => {
//                             setLockState('unlocked');
//                             setSelectedColor(null);
//                             setSelectedStorage(null);
//                             setShowAddToCart(false); // Hide "Add to Cart" when status changes
//                             setShowStorageOptions(false); // Hide storage options
//                           }}
//                         />
//                       </label>
//                       </div>
//                         )} 
//                       {lockState !== null && (
//                         <div>
//                            {removeItem !== false &&(
//                             <div>
//                               <div className="font-bold">
//                             <p>Select from available Colors</p>
//                           </div>
//                           <label>
//                             Red
//                             <input
//                               type="radio"
//                               name={`color-${model.name}`}
//                               value="red"
//                               onChange={() => {
//                                 setSelectedColor('red');
//                                 setSelectedStorage(null);
//                                 setShowAddToCart(false); // Hide "Add to Cart" when color changes
//                                 setShowStorageOptions(true); // Show storage options
//                               }}
//                             />
//                           </label>
//                           <label>
//                             Blue
//                             <input
//                               type="radio"
//                               name={`color-${model.name}`}
//                               value="blue"
//                               onChange={() => {
//                                 setSelectedColor('blue');
//                                 setSelectedStorage(null);
//                                 setShowAddToCart(false); // Hide "Add to Cart" when color changes
//                                 setShowStorageOptions(true); // Show storage options
//                               }}
//                             />
//                           </label>
//                           <label>
//                             Black
//                             <input
//                               type="radio"
//                               name={`color-${model.name}`}
//                               value="black"
//                               onChange={() => {
//                                 setSelectedColor('black');
//                                 setSelectedStorage(null);
//                                 setShowAddToCart(false); // Hide "Add to Cart" when color changes
//                                 setShowStorageOptions(true); // Show storage options
//                               }}
//                             />
//                           </label>
//                           <label>
//                             Green
//                             <input
//                               type="radio"
//                               name={`color-${model.name}`}
//                               value="green"
//                               onChange={() => {
//                                 setSelectedColor('green');
//                                 setSelectedStorage(null);
//                                 setShowAddToCart(false); // Hide "Add to Cart" when color changes
//                                 setShowStorageOptions(true); // Show storage options
//                               }}
//                             />
//                           </label>
//                           <label>
//                             Pink
//                             <input
                        
//                               type="radio"
//                               name={`color-${model.name}`}
//                               value="pink"
//                               onChange={() => {
//                                 setSelectedColor('pink');
//                                 setSelectedStorage(null);
//                                 setShowAddToCart(false); // Hide "Add to Cart" when color changes
//                                 setShowStorageOptions(true); // Show storage options
//                               }}
//                             />
//                           </label>
//                             </div>
//                            )}
                          
//                           {showStorageOptions && (
//                             <div>
//                                {removeItem !== false &&(
//                                 <div>
//                                   <div className="font-bold">
//                                 <p>Select Storage Capacity</p>
//                               </div>
//                               <label>
//                                 128GB
//                                 <input
//                                   type="radio"
//                                   name={`storage-${model.name}`}
//                                   value="128GB"
                                  
//                                   onChange={() => {handleStorageSelection('128GB') }}
                                  
//                                 />
//                               </label>
//                               <label>
//                                 256GB
//                                 <input
//                                   type="radio"
//                                   name={`storage-${model.name}`}
//                                   value="256GB"
//                                   onChange={() => handleStorageSelection('256GB')}
                                  
//                                 />
//                               </label>
//                               <label>
//                                 512GB
//                                 <input
//                                   type="radio"
//                                   name={`storage-${model.name}`}
//                                   value="512GB"
//                                   onChange={() => handleStorageSelection('512GB')}
                            
//                                 />
//                               </label>
//                                 </div>
//                                )}
                              
                              
                             

//                               {showAddToCart && selectedModel !== null && (
//                             <div className="selected-model-details">
//                                 <p>Selected Model: {models[selectedModel].name}</p>
//                                 <p>Price: {models[selectedModel].price}</p>
//                                 <p>Condition: {selectedCondition}</p>
//                                 <p>Lock State: {lockState}</p>
//                                 <p>Color: {selectedColor}</p>
//                                 <p>Storage Capacity: {selectedStorage}</p>
//                                  <button onClick={() => setShowAddToCart(false)}>Cancel</button>
          
//                             </div>
//                              )}
      

//                              {addToCartButton && (
//                                 <div>
//                                   <button onClick={showCartDetails} style={{ backgroundColor: 'blue', color: 'white' }}>Add to Cart</button>
//                                 </div>
//                               )}

//                               {checkoutButton &&(
//                                 <div>
//                                   <button  style={{ backgroundColor: 'blue', color: 'white' }}>Checkout</button>
//                                   <p>Add more items</p>
//                                 </div>
//                               )}

//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   )}
                  
                  
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import React, { useState } from 'react';

import { GoDot, GoDotFill } from "react-icons/go";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
export default function Buy() {

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

  const [selectedModel, setSelectedModel] = useState(null);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [lockState, setLockState] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [showAddToCart, setShowAddToCart] = useState(false); 
  const [showStorageOptions, setShowStorageOptions] = useState(false); 
  const [addToCartButton, setAddToCartButton] = useState(false);
  const [removeItem, setRemoveItem] = useState(true);
  const [checkoutButton, setCheckoutButton] = useState(false);
  const [modelIndex, setModelIndex] = useState(0);
  const [iphoneModel, setIphoneModel] = useState("");

 


  // Function to handle storage selection
  const handleStorageSelection = (storage) => {
    setSelectedStorage(storage);
    setShowAddToCart(false); // Show the "Add to Cart" button when storage is selected
    setAddToCartButton(true)
  };

  

  const showCartDetails = () =>{
    setShowAddToCart(true); 
    setRemoveItem(false);
    setCheckoutButton(true);
    setAddToCartButton(false)
  }


  const handleColorChange = (iphoneColor) => {
    setSelectedColor(iphoneColor);
    setSelectedStorage(null);
    setShowAddToCart(false); // Hide "Add to Cart" when color changes
    setShowStorageOptions(true); // Show storage options
  };

  const handleNewOrUsedChange = (iphoneState) => {
    setSelectedCondition(iphoneState);
    setLockState(null);
    setSelectedColor(null);
    setSelectedStorage(null);
    setShowAddToCart(false); // Hide "Add to Cart" when conditions change
    setShowStorageOptions(false);
  };

  const handleLockedOrUnlockedChange = (iphoneState) => {
    setLockState(iphoneState);
    setSelectedColor(null);
    setSelectedStorage(null);
    setShowAddToCart(false); // Hide "Add to Cart" when status changes
  };

  const showNextImage = () => {
    setCurrentPictureIndex((index) => {
      if (index === iphoneModel?.pictures?.length - 1) return 0;
      return index + 1;
    });
  }

  const showPrevImage = () => {
    setCurrentPictureIndex((index) => {
      if (index === 0) return iphoneModel?.pictures?.length - 1;
      return index - 1;
    });
  }

  

  return (
    <div className="overflow-x-hidden py-5 px-5">
      <p className="text-2xl py-3 font-bold">
        The iPhone connection - connecting you to the world
      </p>

      {selectedModel !== modelIndex ? (
        <div className="flex flex-wrap shadow-lg items-center border-[#D9D9D9] border-l-8 border-t-8 rounded-[20px]">
          {models.map((model, index) => (
            <div
              key={index}
              className={`w-1/2 p-4 rounded-lg ${
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
              <div className="flex justify-between">
                <span className="text-xl font-bold">{model.name}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}


{selectedModel === modelIndex ? (
        <>
            <div className="relative flex items-center justify-center bg-white rounded-[30px] shadow-xl px-16 py-10 my-5 border-[#D9D9D9] border-r-8 border-b-8">
                     
                      <img
                        src={iphoneModel?.pictures[currentPictureIndex]}
                        className="w-full h-64 object-cover"
                        alt="Perfect Image"
                      />
                      <BiLeftArrow className="absolute left-5 text-2xl" onClick={showPrevImage} />
                      <BiRightArrow className="absolute right-5 text-2xl" onClick={showNextImage} />
                       <div className="absolute bottom-2 flex space-x-1">
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

          <div className="px-5">
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
                      onChange={() => handleNewOrUsedChange("brand-new")}
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

            {selectedCondition === "brand-new" ? (
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
                              onChange={() => handleColorChange("black")}
                            />
                            <span>Black</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <input
                              type="radio"
                              name={`color-${iphoneModel?.name}`}
                              value="green"
                              onChange={() => handleColorChange("green")}
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
                      <>
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
                          <div className="text-lg">
                           <div className="flex justify-between items-center">
                             <div className="flex font-bold capitalize my-5">
                              <span>1 {selectedCondition}</span>
                              <span>{models[selectedModel].name}</span>
                            </div>
                            <div className="flex space-x-2 capitalize">
                              <span>{selectedStorage}</span>
                              <span>{lockState}</span>
                              <span>{selectedColor}</span>
                            </div>
                           </div>

                            <div className="flex justify-between font-semibold">
                              <span>Price</span>
                              <span className="capitalize">{models[selectedModel].price}</span>
                            </div>

                            <div className="flex justify-end my-2">
                              <span
                              className="text-[#187EB4] mt-10 text-right my-10 font-extrabold"
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
                              className="bg-[#187EB4] px-16 py-4 mt-5 rounded-full text-[#FFFFFF]"
                              onClick={showCartDetails}
                            >
                              Add to Cart
                            </button>
                          </div>
                        ) : null}

                        {checkoutButton ? (
                          <div className="flex justify-center">
                            <div className="flex items-center flex-col space-y-2">
                                <Link
                                  className="bg-[#187EB4] px-16 py-4 mt-3 rounded-full text-[#FFFFFF]"
                                  href="/howToCheckOut"
                              
                                >
                                  Checkout
                                </Link>
                                 <span className="text-[#187EB4] text-center">
                              Add more items
                            </span>
                            </div>                           
                          </div>
                        ) : null}
                      </>
                    ) : null}
                  </>
                ) : null}
              </>
            ) : null}
          </div>
        </>
      ) : ""}


      {/* <div className="flex flex-wrap justify-center shadow-lg border-color-gray">
        {models.map((model, index) => (
          <div
            key={index}
            className={`w-1/2 p-4 rounded-lg  ${
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
                <div className="flex justify-between">
                  <div>
                    <img
                      src={model.pictures[currentPictureIndex]}
                      alt={model.name}
                      width={800}
                      height={800}
                    />
                   
                  </div>
                  <div>
                  <button onClick={showNextPicture}>Next</button>
                  </div>
                </div>

                <div>
                 
                    <div>
                    {removeItem !== false &&(
                      <div className="flex justify-between p-1">
                      <p>{model.name}</p>
                      <p>Price: {model.price}</p>
                    </div>
                    )}
                  
                  </div>
                  <div>
                  
                     
                    {removeItem !== false &&(
                       <div>
                         <div className="font-bold">
                            <p>Pick your preference</p>
                          </div>
                          <label  className='m-3'>
                              
                              <input
                                type="radio"
                                name={`condition-${model.name}`}
                                value="brand-new"
                                onChange={() => {
                                  setSelectedCondition('brand-new');
                                  setLockState(null);
                                  setSelectedColor(null);
                                  setSelectedStorage(null);
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
                                  setSelectedCondition('used');
                                  setLockState(null);
                                  setSelectedColor(null);
                                  setSelectedStorage(null);
                                  setShowAddToCart(false); // Hide "Add to Cart" when conditions change
                                  setShowStorageOptions(false); // Hide storage options
                                } } />
                                Used
                            </label></div>
                     )} 
                  
                    
                   
                  </div>
                  {selectedCondition === 'brand-new' && (
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
                                  <button onClick={showCartDetails} style={{  
                                    backgroundColor: '#187EB4', 
                                    padding: '10px 35px',
                                    borderRadius:'20px',  
                                    marginTop:'30px',
                                    color: 'white' }}>
                                      Add to Cart 
                                  </button>
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
      </div> */}
    </div>
  );
}





