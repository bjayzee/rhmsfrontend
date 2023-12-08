"use client"; 

import Link from 'next/link';

import React, { useState } from 'react';

import { GoDot, GoDotFill } from "react-icons/go";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";


const BuyAirPods = () => {

    const [selectedModel, setSelectedModel] = useState(null);
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
    const [selectedCondition, setSelectedCondition] = useState(null);
    const [showAddToCart, setShowAddToCart] = useState(false); 
    const [addToCartButton, setAddToCartButton] = useState(false);
    const [removeItem, setRemoveItem] = useState(true);
    const [checkoutButton, setCheckoutButton] = useState(false);
    const [modelIndex, setModelIndex] = useState(0);
    const [airPodsModel, setAirPodsModel] = useState(null)


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
        if (index === airPodsModel?.pictures?.length - 1) return 0;
        return index + 1;
      });
    }
  
    const showPrevImage = () => {
      setCurrentPictureIndex((index) => {
        if (index === 0) return airPodsModel?.pictures?.length - 1;
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
                setAirPodsModel(model);
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
                       src={airPodsModel?.pictures[currentPictureIndex]}
                       className="w-full h-64 object-cover"
                       alt="Perfect Image"
                     />
                     <BiLeftArrow className="absolute left-5 text-2xl" onClick={showPrevImage} />
                     <BiRightArrow className="absolute right-5 text-2xl" onClick={showNextImage} />
                      <div className="absolute bottom-2 flex space-x-1">
                         {airPodsModel?.pictures.map((_, index) => (
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
                    <>
              <div className="flex justify-between py-4">
                <b>{airPodsModel?.name}</b>
                <b>Price: {airPodsModel?.price}</b>
              </div>

              <div className="flex justify-center items-center">
                            <button
                              className="bg-[#187EB4] px-16 py-4 mt-5 rounded-full text-[#FFFFFF]"
                              onClick={showCartDetails}
                            >
                              Add to Cart
                            </button>
                          </div>
              </>
            ) : null}


                   </div>

                   {showAddToCart && selectedModel !== null ? (
                          <div className="text-lg">
                           <div className="flex justify-between items-center">
                             <div className="flex font-bold capitalize my-5">
                              <span>1 {selectedCondition}</span>
                              <span>{models[selectedModel].name}</span>
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

      ) : ""}


    </div>
  )
}

export default BuyAirPods