import React from 'react';
import CartCard from './CartCard';
import Link from 'next/link';


const Cart = ({ cartItems, onRemove, onCheckout, quantity, handlePlus, handleMinus }) => {
    return (
        <div className="container mx-auto mt-5">
            <h2 className="text-xl  text-center font-bold mb-4">Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-500 ml-5">Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((phone, index) => (
                        <CartCard 
                            key={index} 
                            phone={phone} 
                            onRemove={() => onRemove(index)} 
                            handleMinus={handleMinus}
                            handlePlus={handlePlus}
                            quantity={quantity}                            
                        />
                    ))}
                </div>
            )}


            <div className="flex justify-center my-4 ">
               
               <Link href='/'>
                    <button
                        className="text-rh-blue text-sm px-4 py-2 mr-2 rounded-md"
                        // onClick={onAddMore}
                        disabled={cartItems.length === 0}
                    >
                        Add More Items
                    </button>               
               </Link>
                
                <Link href='/howToCheckOut' disabled={cartItems.length === 0}>
                    <button
                        className="bg-rh-blue text-[white] px-4 py-2 rounded-md"
                        onClick={onCheckout}
                        disabled={cartItems.length === 0}
                    >
                        CHECKOUT
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
