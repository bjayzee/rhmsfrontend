"use client"; 

import Link from 'next/link';

import React, { useState } from 'react';

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


                    const showNextPicture = () => {
                        setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % models[selectedModel].pictures.length);
                    };

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


   <div>
     <div className=" font-bold mt-10 my-custom-font m-5">
    <p>Where something smart and stylish</p>
   </div>

   <div className="flex flex-wrap justify-center shadow-lg border-color-gray">
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
                                  
                                  setShowAddToCart(false); 
                                
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
                                  setShowAddToCart(false); 
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
                        <p>What type of connection do you want?</p>
                      </div>
                      <label className='m-3' >
                       
                        <input
                          type="radio"
                          name={`gps-${model.name}`}
                        
                        value='gps'
                          onChange={() => {
                            setGpsState('gps');
                            
                            
                            setShowAddToCart(false); 
                          }}
                        />
                         GPS
                      </label>
                      <label>
                       
                        <input
                          type="radio"
                          name={`gps-${model.name}`}
                        
                        value='gps plus'
                          onChange={() => {
                            
                            setGpsState('gps plus')
                            
                            setShowAddToCart(false);
                           
                          }}
                        />
                         GPS+Cellular
                      </label>
                      </div>
                        )} 
                      {gpsState !== null && (
                        <div>
                           {removeItem !== false &&(
                            <div>
                              <div className="font-bold">
                            <p>What is the size of your watch</p>
                          </div>
                          <label>
                            
                            <input
                              type="radio"
                              name={`watch-size-${model.name}`}
                              value="41MM"
                              onChange={() => {
                                setWatchSize('41MM')
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                               
                              }}
                            />

                            41MM
                          </label>
                         
                          <label className='m-3'>
                            
                            <input
                              type="radio"
                              name={`watch-size-${model.name}`}
                              value="45MM"
                              onChange={() => {
                                setWatchSize('45MM')
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                
                              }}
                            />
                            45MM
                          </label>
                          <label>
                            
                            <input
                              type="radio"
                              name={`watch-size-${model.name}`}
                            value='40MM'
                              onChange={() => {
                                setWatchSize('40MM')
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                               
                              }}
                            />
                            40MM
                          </label>
                          <label className='m-3'>
                            44MM
                            <input
                              type="radio"
                              name={`watch-size-${model.name}`}
                            value='44MM'
                              onChange={() => {
                               
                                setWatchSize('44MM')
                              
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                               
                              }}
                            />
                            44MM
                          </label>
                          
                            </div>
                           )}
                          { watchSize != null &&(

                            <div>
                            {removeItem !== false &&(
                            <div>
                                <div className="font-bold">
                                    <p>Select your watch's case material</p>
                                    </div>
                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`case-material-${model.name}`}
                                    value="Aluminium"
                                    
                                    onChange={() => {handleCaseMaterial('Aluminium') }}
                                    
                                    />
                                    Aluminium
                                    </label>
                                    <label>
                                    
                                    <input
                                    type="radio"
                                    name={`case-material-${model.name}`}
                                    value="Titanium"
                                    onChange={() => handleCaseMaterial('Titanium')}
                                    />
                                    Titanium
                                    </label>
                                    <label>
                                    
                                    <input
                                    type="radio"
                                    name={`case-material-${model.name}`}
                                    value="Stainless-steel"
                                    onChange={() => handleStorageSelection('Stainless-steel')}

                                    />
                                    Stainless steel
                                    </label>

                                    <label>
                                    
                                    <input
                                    type="radio"
                                    name={`case-material-${model.name}`}
                                    value="Ceramics"
                                    onChange={() => handleStorageSelection('Ceramics')}

                                    />
                                    Ceramics
                                    </label>


                                    { materialState !== null &&(
                                    <div>
                                    <div className="font-bold">
                                    <p>Select your band type</p>
                                    </div>
                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${model.name}`}
                                    value="Leather-Link"
                                    
                                    onChange={() => {handleBandType('Leather Link') }}
                                    
                                    />
                                    Leather Link
                                    </label>

                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${model.name}`}
                                    value="Braided-Solo-Loop"
                                    
                                    onChange={() => {handleBandType('Braided Solo Loop') }}
                                    
                                    />
                                    Braided Solo Loop
                                    </label>

                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${model.name}`}
                                    value="Solo-Loop"
                                    
                                    onChange={() => {handleBandType(' Solo Loop') }}
                                    
                                    />
                                     Solo Loop
                                    </label>

                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${model.name}`}
                                    value="Link Bracelet"
                                    
                                    onChange={() => {handleBandType(' Link Bracelet') }}
                                    
                                    />
                                     Link Bracelet
                                    </label>

                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${model.name}`}
                                    value="Space Black Link Bracelet"
                                    
                                    onChange={() => {handleBandType(' Space Black Link Bracelet') }}
                                    
                                    />
                                     Space Black Link Bracelet
                                    </label>

                                    <label className='m-3 '>
                                    <input
                                    type="radio"
                                    name={`band-type-${model.name}`}
                                    value="Sport Loop"
                                    
                                    onChange={() => {handleBandType(' Sport Loop') }}
                                    
                                    />
                                     Sport Loop
                                    </label>


                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${model.name}`}
                                    value="Leather Loop"
                                    
                                    onChange={() => {handleBandType(' Leather Loop') }}
                                    
                                    />
                                     Leather Loop
                                    </label>


                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${model.name}`}
                                    value="Silver Link Bracelet"
                                    
                                    onChange={() => {handleBandType(' Silver Link Bracelet') }}
                                    
                                    />
                                     Silver Link Bracelet
                                    </label>

                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${model.name}`}
                                    value="Sport Band"
                                    
                                    onChange={() => {handleBandType('Sport Band') }}
                                    
                                    />
                                    Sport Band
                                    </label>

                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${model.name}`}
                                    value="Milanese Loop"
                                    
                                    onChange={() => {handleBandType('Milanese Loop') }}
                                    
                                    />
                                    Milanese Loop
                                    </label>

                                    <label className='m-3 '>
                                    
                                    <input
                                    type="radio"
                                    name={`band-type-${model.name}`}
                                    value="Modern Buckle"
                                    
                                    onChange={() => {handleBandType('Modern Buckle') }}
                                    
                                    />
                                    Modern Buckle
                                    </label>

                                        </div>
                                    )}

                                    </div>

                                    
                                    )}
                                    {showAddToCart && selectedModel !== null && (
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
      </div>
   </div>

  )
}

export default BuyAppleWatch