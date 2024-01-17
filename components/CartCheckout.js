'use client';
import { cartDetails } from '@/server/utils/CartData';
import Cart from './Cart';
import { useState, useContext } from 'react';
import { CartContent } from '@/app/context/AppContext';

export default function CartCheckout() {

    const { cartItems, setCartItems } = useContext(CartContent);
    const [ quantity, setQuantity ] = useState(1);

    
    const handleRemoveFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

    const handleAddMoreToCart = () => {

        // Implement your logic to add more items to the cart
        // Update the cart state accordingly
        // For example, you might navigate to the product page to select more items
        // or you might display a modal to choose additional items
        // Ensure to handle the state accordingly
    };

    const handlePlus = () => {
        setQuantity(prev => prev + 1);
    }

    const handleMinus = () => {
        if(quantity > 1){
            setQuantity(prev => prev - 1);
        }
    }

    // Function to initiate the checkout process
    const handleCheckout = () => {
        // Implement your logic to initiate the checkout process
        // This might involve redirecting to a checkout page, integrating with payment gateways, etc.
        // Update the state accordingly
        // For example, you might clear the cart or mark items as purchased
        // Ensure to handle the state accordingly
    };

    return (
        <Cart
            cartItems={cartItems}
            onRemove={handleRemoveFromCart}
            onAddMore={handleAddMoreToCart}
            onCheckout={handleCheckout}
            quantity={quantity}
            handleMinus={handleMinus}
            handlePlus={handlePlus}
        />
    )
}
