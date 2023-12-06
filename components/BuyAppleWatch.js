"use client"; 

import Link from 'next/link';

import React, { useState } from 'react';
import { GoDot, GoDotFill } from "react-icons/go";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

const BuyAppleWatch = () => {

    const models = [
        {
          name: 'Series 1',
          pictures: ['iwatches.png', 'basket.png'],
          price: '$599',
        },
        {
          name: 'Series 2',
          pictures: ['iwatches.png'],
          price: '$859',
        },
        {
          name: 'Series 3',
          pictures: ['iwatches.png'],
          price: '$1599',
        },
        {
          name: 'Series 4',
          pictures: ['iwatches.png'],
          price: '$900',
        },
        {
          name: 'iPhone 8',
          pictures: ['iwatches.png'],
          price: '$750',
        },
        {
          name: 'iPhone X',
          pictures: ['iwatches.png', 'iphoneS.png'],
          price: '$770',
        },
        // Add more iPhone models here
      ];

     
        const [selectedModel, setSelectedModel] = useState(null);
        const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
        const [selectedCondition, setSelectedCondition] = useState(null);


        const [showAddToCart, setShowAddToCart] = useState(false); 
        const [addToCartButton, setAddToCartButton] = useState(false);
        const [removeItem, setRemoveItem] = useState(true);
        const [checkoutButton, setCheckoutButton] = useState(false);

        const [gpsState, setGpsState] = useState(null);
        const [watchSize, setWatchSize] = useState(null);
        const [materialState, setMaterialState] = useState(null);
        const [bandType, setBandType] = useState(null);

        const [modelIndex, setModelIndex] = useState(0);
        const [iwatchModel, setIwatchModel] = useState("");
        const [selectedStorage, setSelectedStorage] = useState(null)


        const showNextImage = () => {
          setCurrentPictureIndex((index) => {
            if (index === iwatchModel?.pictures?.length - 1) return 0;
            return index + 1;
          });
        }
      
        const showPrevImage = () => {
          setCurrentPictureIndex((index) => {
            if (index === 0) return iwatchModel?.pictures?.length - 1;
            return index - 1;
          });
        }


                   

                    // Function to handle storage selection
                    const handleStorageSelection = (storage) => {
                        setSelectedStorage(storage);
                        setShowAddToCart(false); // Show the "Add to Cart" button when storage is selected
                        setAddToCartButton(true)
                    };

                    const handleCaseMaterial = (material) => {
                        
                        setMaterialState(material)
                        setShowAddToCart(false); 
                    
                    };

                    const handleBandType = (band) => {
                        
                        setBandType(band)
                        setShowAddToCart(false); 
                        setAddToCartButton(true)
                    };



                    

                    const showCartDetails = () =>{
                        setShowAddToCart(true); 
                        setRemoveItem(false);
                        setCheckoutButton(true);
                        setAddToCartButton(false)
                        
                        
                    }

                  
  
  return (


   <div className="overflow-x-hidden py-5 px-5">
     
    <p className="text-2xl py-3 font-bold">
      Where something smart and stylish
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
                setIwatchModel(model);
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
                        src={iwatchModel?.pictures[currentPictureIndex]}
                        className="w-full h-64 object-cover"
                        alt="Perfect Image"
                      />
                      <BiLeftArrow className="absolute left-5 text-2xl" onClick={showPrevImage} />
                      <BiRightArrow className="absolute right-5 text-2xl" onClick={showNextImage} />
                       <div className="absolute bottom-2 flex space-x-1">
                          {iwatchModel?.pictures.map((_, index) => (
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
                        <b>{iwatchModel?.name}</b>
                        <b>Price: {iwatchModel?.price}</b>
                      </div>
                    ) : null}

                    {removeItem !== false ? (
                      <div className="flex flex-col space-y-3 text-lg my-5">
                        <span className="font-bold">Pick your preference</span>

                        <div className="flex space-x-3">
                          <label className="flex items-center space-x-1">
                            <input
                              type="radio"
                              name={`condition-${iwatchModel?.name}`}
                              value="brand-new"
                              onChange={() => {
                                setSelectedCondition("brand-new");
                                setShowAddToCart(false); 
                              } } 
                            />
                            <span>Brand New</span>
                          </label>

                          <label className="flex items-center space-x-1">
                            <input
                              type="radio"
                              name={`condition-${iwatchModel?.name}`}
                              value="used"
                              
                              onChange={() => {
                                setSelectedCondition('used');
                                setShowAddToCart(false); 
                              } } 
                            />
                            <span>Used</span>
                          </label>
                        </div>
                      </div>
                    ) : null}
                    {selectedCondition === "brand-new"  &&(
                      <>
                       {removeItem !== false ? (
                  <div className="flex flex-col space-y-3 my-5 text-lg">
                    <span className="font-bold">What type of connection do you want?</span>

                    <div className="flex space-x-3">
                         <label className="flex items-center space-x-1">
                        <input
                          type="radio"
                          name={`gps-${iwatchModel.name}`}
                          
                        value='gps'
                          onChange={() => {
                            setGpsState('gps');
                            setShowAddToCart(false); 
                          }}
                        />
                        <span>GPS</span>
                        </label>
                        <label className="flex items-center space-x-1">
                        <input
                          type="radio"
                          name={`gps-${iwatchModel.name}`}
                        
                        value='gps plus'
                          onChange={() => {
                            
                            setGpsState('gps plus')
                            
                            setShowAddToCart(false);
                           
                          }}
                        />
                         GPS+Cellular
                        </label>
                    </div>
                    </div> 
                      ) : null}


                  

                      </>
                    )}
                     {gpsState !== null ? (
                      <div>
                         {removeItem !== false ?(
                          <div className="flex flex-col space-y-3 my-5 text-lg">
                         
                      <span className="font-bold">What is the size of your watch?</span>
                      <div className="flex space-x-3">
                      <label>
                        
                        <input
                          type="radio"
                          name={`watch-size-${iwatchModel.name}`}
                          value="41MM"
                          onChange={() => {
                            setWatchSize('41MM')
                            setShowAddToCart(false); // Hide "Add to Cart" when color changes
                           
                          }}
                        />
 
                        41MM
                      </label>
                     
                      <label className="flex items-center space-x-1">
                        
                        <input
                          type="radio"
                          name={`watch-size-${iwatchModel.name}`}
                          value="45MM"
                          onChange={() => {
                            setWatchSize('45MM')
                            setShowAddToCart(false); // Hide "Add to Cart" when color changes
                            
                          }}
                        />
                        45MM
                      </label>
                      
                      </div>
                      <div className="flex space-x-3">
                      <label className="flex items-center space-x-1">
                        
                        <input
                          type="radio"
                          name={`watch-size-${iwatchModel.name}`}
                        value='40MM'
                          onChange={() => {
                            setWatchSize('40MM')
                            setShowAddToCart(false); // Hide "Add to Cart" when color changes
                           
                          }}
                        />
                        40MM
                      </label>
                      <label className="flex items-center space-x-1">
                        
                        <input
                          type="radio"
                          name={`watch-size-${iwatchModel.name}`}
                        value='44MM'
                          onChange={() => {
                           
                            setWatchSize('44MM')
                          
                            setShowAddToCart(false); // Hide "Add to Cart" when color changes
                           
                          }}
                        />
                        44MM
                      </label>
                      </div>
                        </div>
 
                         ):null}
                      </div>
                     ): null}

                     {watchSize != null ?(
                      <div>
                        {removeItem !== false ?(
                        <div className="flex flex-col space-y-3 my-5 text-lg">
                         
                        <span className="font-bold">Select your watch's case material</span>
                        <div className="flex space-x-3">
                         
                                    <label className="flex items-center space-x-1">
                                    
                                    <input
                                    type="radio"
                                    name={`case-material-${iwatchModel.name}`}
                                    value="Aluminium"
                                    
                                    onChange={() => {handleCaseMaterial('Aluminium') }}
                                    
                                    />
                                    Aluminium
                                    </label>

                                    <label className="flex items-center space-x-1">
                                    
                                    <input
                                    type="radio"
                                    name={`case-material-${iwatchModel.name}`}
                                    value="Titanium"
                                    onChange={() => handleCaseMaterial('Titanium')}
                                    />
                                    Titanium
                                    </label>
                                    </div>
                                    <div className="flex space-x-3">
                                    <label className="flex items-center space-x-1">
                                    
                                    <input
                                    type="radio"
                                    name={`case-material-${iwatchModel.name}`}
                                    value="Stainless-steel"
                                    onChange={() => handleStorageSelection('Stainless-steel')}

                                    />
                                    Stainless steel
                                    </label>

                                    <label className="flex items-center space-x-1">
                                    
                                    <input
                                    type="radio"
                                    name={`case-material-${iwatchModel.name}`}
                                    value="Ceramics"
                                    onChange={() => handleStorageSelection('Ceramics')}

                                    />
                                    Ceramics
                                    </label>
                                    </div>


                                    
                            
                        </div>
                        ): null}
                      </div>
                     ):null}

                    { materialState !== null ?(
                       <div className="flex flex-col space-y-3 text-lg my-5">
                        
                       <span className="font-bold">
                       Select your band type
                       </span>
                       <div className="grid grid-cols-3 gap-2">
                       <label className="">
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${iwatchModel.name}`}
                                    value="Leather-Link"
                                    
                                    onChange={() => {handleBandType('Leather Link') }}
                                    
                                    />
                                    Leather Link
                                    </label>

                                    <label className="">
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${iwatchModel.name}`}
                                    value="Braided-Solo-Loop"
                                    
                                    onChange={() => {handleBandType('Braided Solo Loop') }}
                                    
                                    />
                                    Braided Solo Loop
                                    </label>

                                    <label className=' '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${iwatchModel.name}`}
                                    value="Solo-Loop"
                                    
                                    onChange={() => {handleBandType(' Solo Loop') }}
                                    
                                    />
                                     Solo Loop
                                    </label>

                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${iwatchModel.name}`}
                                    value="Link Bracelet"
                                    
                                    onChange={() => {handleBandType(' Link Bracelet') }}
                                    
                                    />
                                     Link Bracelet
                                    </label>

                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${iwatchModel.name}`}
                                    value="Space Black Link Bracelet"
                                    
                                    onChange={() => {handleBandType(' Space Black Link Bracelet') }}
                                    
                                    />
                                     Space Black Link Bracelet
                                    </label>

                                    <label className='m-3 '>
                                    <input
                                    type="radio"
                                    name={`band-type-${iwatchModel.name}`}
                                    value="Sport Loop"
                                    
                                    onChange={() => {handleBandType(' Sport Loop') }}
                                    
                                    />
                                     Sport Loop
                                    </label>


                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${iwatchModel.name}`}
                                    value="Leather Loop"
                                    
                                    onChange={() => {handleBandType(' Leather Loop') }}
                                    
                                    />
                                     Leather Loop
                                    </label>


                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${iwatchModel.name}`}
                                    value="Silver Link Bracelet"
                                    
                                    onChange={() => {handleBandType(' Silver Link Bracelet') }}
                                    
                                    />
                                     Silver Link Bracelet
                                    </label>

                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${iwatchModel.name}`}
                                    value="Sport Band"
                                    
                                    onChange={() => {handleBandType('Sport Band') }}
                                    
                                    />
                                    Sport Band
                                    </label>

                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${iwatchModel.name}`}
                                    value="Milanese Loop"
                                    
                                    onChange={() => {handleBandType('Milanese Loop') }}
                                    
                                    />
                                    Milanese Loop
                                    </label>

                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${iwatchModel.name}`}
                                    value="Modern Buckle"
                                    
                                    onChange={() => {handleBandType('Modern Buckle') }}
                                    
                                    />
                                    Modern Buckle
                                    </label>


                       </div>
                        
                      </div>
                          ): null}

                      {showAddToCart && selectedModel !== null ? (
                       <div className="selected-model-details">
                       <div className='flex m-2'>
                       <p className=' pr-1'>1 {selectedCondition}</p>
                       <p > {models[selectedModel].name}</p>

                       </div>
                       <div className='flex '>
                       <p className=' mr-2'> {watchSize}</p>
                       <p className='mr-2'> {gpsState}</p>
                       <p className=' mr-2'> {materialState}</p>
                       </div>

                       <div className='flex justify-between'>
                       <p>Price:</p>
                       <p> {models[selectedModel].price}</p>
                       </div>
                       <button style={{  paddingLeft: '110px ',  marginTop:'30px',color: '#187EB4' }}onClick={() => setShowAddToCart(false)}>Remove</button>

                       </div>
                      ): null}

                            {addToCartButton ? (
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
                                    ):null}


                                  {checkoutButton ?(
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
                                    ):null}



                    </div>
                    </>
      ): ""} 


  
   </div>

  )
}

export default BuyAppleWatch