'use client'

import toast from "react-hot-toast";

const { useState, createContext, useEffect } = require("react");


export const CartContent = createContext({});

function AppContext({ children }) {

  
  const [cartItems, setCartItems] = useState([]);


  const ls = typeof window !== 'undefined' ? window.localStorage : null;

  useEffect(() => {
    if (ls) {
      try {
        const storedCartItems = JSON.parse(ls.getItem('cart'));
        if (storedCartItems) {
          setCartItems(storedCartItems);
        }
      } catch (error) {
        console.error('Error retrieving cart items from localStorage:', error);
      }
    }
  }, [ls, setCartItems]);

  const saveCartItemsToLocalStorage = (cartItems) => {
    if (ls) {
      try {
        ls.setItem('cart', JSON.stringify(cartItems));
      } catch (error) {
        console.error('Error saving cart items to localStorage:', error);
      }
    }
  };
  const clearCartAndLocalStorage = () =>{
    ls.clear();
    setCartItems([]);
  }

  const addToCart = async(phone) => {
    let quantity = 1
    const cartProduct = { 
      ...phone, 
      quantity, 
      price: phone.price 
    };
    setCartItems((prev) => {
      const newProducts = [...prev, cartProduct];
      saveCartItemsToLocalStorage(newProducts);
      toast.success('Item added to cart');
      return newProducts;
    });
        
  };


  // remove from cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };


  return (
    <div>

      <CartContent.Provider value={{ cartItems, setCartItems, removeFromCart, addToCart, clearCartAndLocalStorage }}>
        {children}
      </CartContent.Provider>

    </div>

  );
}

export default AppContext;
