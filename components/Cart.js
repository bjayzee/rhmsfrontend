'use client'
import { useContext } from 'react';
import { CartContent } from '@/app/context/AppContext';
import CartCard from './CartCard';
import Link from 'next/link';
import { TbCurrencyNaira } from 'react-icons/tb';


const Cart = () => {

    const { cartItems, setCartItems, removeFromCart } = useContext(CartContent);

    const onCheckout = () =>{
        
    }
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
                            onRemove={() => removeFromCart(index)}
                        />
                    ))}
                </div>
            )}

            <p className='flex justify-end pt-3 px-5'><span className='font-bold font pr-3'>Subtotal:</span> <TbCurrencyNaira className='w-5 h-6'/> {cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)?.toLocaleString()}</p>

            <div className="flex justify-center my-4 ">

                <Link href='/' passHref>
                    <button
                        className="text-rh-blue text-sm px-4 py-2 mr-2 rounded-md"
                        disabled={cartItems.length === 0}
                    >
                        Add More Items
                    </button>
                </Link>


                <Link href='/signin-page' disabled={cartItems.length === 0} passHref>
                    <button
                        className={`bg-rh-blue text-[white] px-4 py-2 rounded-md ${cartItems.length === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
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