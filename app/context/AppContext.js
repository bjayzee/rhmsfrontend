'use client'

import { cartDetails } from "@/server/utils/CartData";

const { useState, createContext } = require("react");


export const CartContent = createContext({ cartItems: [], setCartItems: () => {} })

function AppContext({children}) {
    const [cartItems, setCartItems] = useState([]);
  return (
    <CartContent.Provider value={{cartItems, setCartItems}} >
        {children}
    </CartContent.Provider>
  )
}

export default AppContext;