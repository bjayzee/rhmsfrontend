import React from 'react';
import CartCard from './CartCard';


const Cart = ({ cartItems, onRemove, onAddMore, onCheckout }) => {
    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((phone, index) => (
                        <CartCard key={index} phone={phone} onRemove={() => onRemove(index)} />
                    ))}
                </div>
            )}

            <div className="flex justify-end mt-4">
                <button
                    className="bg-red-500 text-white px-4 py-2 mr-2 rounded-md"
                    onClick={onRemove}
                    disabled={cartItems.length === 0}
                >
                    Remove
                </button>
                <button
                    className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md"
                    onClick={onAddMore}
                    disabled={cartItems.length === 0}
                >
                    Add More Items
                </button>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={onCheckout}
                    disabled={cartItems.length === 0}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
