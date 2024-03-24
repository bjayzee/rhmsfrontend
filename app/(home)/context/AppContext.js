"use client";

import { ToastContainer, toast } from "react-toastify";

const { useState, createContext, useEffect } = require("react");

export const CartContent = createContext({});

function AppContext({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [swapItem, setSwapItem] = useState([]);

  const ls = typeof window !== "undefined" ? window.localStorage : null;

  useEffect(() => {
    if (ls) {
      try {
        const storedCartItems = JSON.parse(ls.getItem("cart"));
        const storedSwapItems = JSON.parse(ls.getItem("swap"));
        if (storedCartItems) {
          setCartItems(storedCartItems);
        }
        if (storedSwapItems) {
          setSwapItem(storedSwapItems);
        }
      } catch (error) {
        console.error("Error retrieving cart items from localStorage:", error);
      }
    }
  }, [ls, setCartItems, setSwapItem]);

  const saveCartItemsToLocalStorage = (cartItems) => {
    if (ls) {
      try {
        ls.setItem("cart", JSON.stringify(cartItems));
      } catch (error) {
        console.error("Error saving cart items to localStorage:", error);
      }
    }
  };

  const saveSwapItemsToLocalStorage = (swapItems) => {
    if (ls) {
      try {
        ls.setItem("swap", JSON.stringify(swapItems));
      } catch (error) {
        console.error("Error saving swap items to localStorage:", error);
      }
    }
  };
  const clearCartAndLocalStorage = () => {
    ls.clear();
    setCartItems([]);
  };

  const clearSwapAndLocalStorage = () => {
    ls.clear();
    setSwapItem([]);
  };

  const addToCart = async (phone) => {
    let quantity = 1;
    const cartProduct = {
      ...phone,
      quantity,
      price: phone.price,
    };

    setCartItems((prev) => {
      const newProducts = [...prev, cartProduct];
      saveCartItemsToLocalStorage(newProducts);
      toast.success("Item added to cart");
      return newProducts;
    });
  };

  // remove from cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    ls.setItem("cart", JSON.stringify(updatedCart));

  };


  const addToSwapItem = async (item) => {
  
     setSwapItem((prev) => {
      const newProducts = [...prev, item];
      saveSwapItemsToLocalStorage(newProducts);
      toast.success("New swap item added");
      return newProducts;
    });
  }

  const removeFromSwapItem = (index) => {
    const updatedCart = [...swapItem];
    updatedCart.splice(index, 1);
    setSwapItem(updatedCart);
    ls.setItem("swap", JSON.stringify(updatedCart));

  };

  return (
    <div>
      <CartContent.Provider
        value={{
          cartItems,
          setCartItems,
          removeFromCart,
          addToCart,
          clearCartAndLocalStorage,
          setSwapItem,
          swapItem,
          removeFromSwapItem,
          addToSwapItem,
          clearSwapAndLocalStorage
        }}
      >
        {children}
        <ToastContainer />
      </CartContent.Provider>
    </div>
  );
}

export default AppContext;
