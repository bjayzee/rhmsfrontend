"use client"; 

import Link from 'next/link';

import React, { useState } from 'react';


const BuyAirPods = () => {

    const [selectedModel, setSelectedModel] = useState(null);
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
    const [selectedCondition, setSelectedCondition] = useState(null);
    const [showAddToCart, setShowAddToCart] = useState(false); 
    const [addToCartButton, setAddToCartButton] = useState(false);
    const [removeItem, setRemoveItem] = useState(true);
    const [checkoutButton, setCheckoutButton] = useState(false);
    const [modelIndex, setModelIndex] = useState(0);


    const showNextPicture = () => {
        setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % models[selectedModel].pictures.length);
    };

    const showCartDetails = () =>{
        setShowAddToCart(true); 
        setRemoveItem(false);
        setCheckoutButton(true);
        setAddToCartButton(false)
       
        
    }


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
    

    const models = [
        {
          name: 'MacBook Air',
          pictures: ['pod.png', 'basket.png'],
          price: '$599',
        },
        {
          name: 'Mac Mini',
          pictures: ['pod.png'],
          price: '$859',
        },
        {
          name: 'MacBook Pro',
          pictures: ['pod.png'],
          price: '$1599',
        },
        {
          name: 'IMac',
          pictures: ['pod.png'],
          price: '$900',
        },
       
        
      ];
  return (
    <div className="overflow-x-hidden py-5 px-5">
        <p className="text-2xl py-3 font-bold">
        AirPods: Making your earbuds jealous.
    </p>
       

        <div className="flex flex-wrap justify-center shadow  border-color-gray">
        {models.map((model, index) => (
          <div
            key={index}
            className={`w-1/2 p-4 rounded-lg  
            ${
              selectedModel !== null && selectedModel !== index ? 'hidden' : ''
            }`
        }
            onClick={() => {
              setSelectedModel(index);
              setCurrentPictureIndex(0);
            }}
          >
            <div className="flex justify-between ">
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
                <div
               
                >
                    {removeItem !== false &&(
                        <div>
                      <div className="flex justify-between p-1">
                      <p>{model.name}</p>
                      <p>Price: {model.price}</p>
                    </div>

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
                    </div>
                    
                    )}
                  
                  </div>
                  <div>
                  
                     
                   
                  
                    
                   
                  </div>

                  {/* Starts here */}

                  {selectedCondition === 'brand-new' && (
                    <div>
                       
                   
                        <div>
                          
                       

                            <div>
                           
                                    {showAddToCart && selectedModel !== null && (
                                    <div className="selected-model-details">
                                    <div className='flex m-2'>
                                    <p className=' pr-1'>1 {selectedCondition}</p>
                                    <p > {models[selectedModel].name}</p>

                                    </div>
                                    <div className='flex '>
                                   
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
                                                                
                          



                        </div>
                      
                    </div>
                  )}

                                {checkoutButton &&(
                                    <div>
                                        <div className="selected-model-details">
                                    <div className='flex m-2 font-bold'>
                                    <p className=' pr-1'>1 {selectedCondition}</p>
                                    <p > {models[selectedModel].name}</p>

                                    </div>
                                    <div className='flex '>
                                   
                                    </div>

                                    <div className='flex justify-between'>
                                    <p>Price:</p>
                                    <p> {models[selectedModel].price}</p>
                                    </div>
                                    <button style={{  paddingLeft: '110px ',  marginTop:'30px',color: '#187EB4' }}onClick={() => setShowAddToCart(false)}>Remove</button>

                                    </div>
                                    
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

                  {/* Ends here */}
                </div>
                </div>
            )}
            </div>




            ))}

            

            </div>

    </div>
  )
}

export default BuyAirPods