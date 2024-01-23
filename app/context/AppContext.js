'use client'
import toast from "react-hot-toast";

const { useState, createContext } = require("react");


export const CartContent = createContext({});

async function AppContext({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const ls = typeof window !== 'undefined' ? window.localStorage : null;

  const saveCartItemsToLocalStorage = (cartItems) => {
    if (ls) {
      try {
        ls.setItem('cart', JSON.stringify(cartItems));
      } catch (error) {
        console.error('Error saving cart items to localStorage:', error);
      }
    }
  };

  // remove from cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // add to cart function
  const addToCart = (product, quantity = 1, price) => {
    const cartProduct = { ...product, quantity, price };
    setCartItems((prev) => {
      const newProducts = [...prev, cartProduct];
      saveCartItemsToLocalStorage(newProducts);
      return newProducts;
    });
    toast.success('Item added to cart');
  };

  return (
    <div>
        
        <CartContent.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
          {children}
        </CartContent.Provider>

    </div>
  
  );
}

export default AppContext;
