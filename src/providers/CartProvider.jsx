import React, { useState } from "react";
import { CartContext } from "./Contexts";

const CartProvider = ({ childern }) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {childern}
    </CartContext.Provider>
  );
};

export default CartProvider;
