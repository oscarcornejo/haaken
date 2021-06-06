import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartProductos, setCartProductos] = useState([{ price: "", name: "" }]);

  return (
    <CartContext.Provider value={{ cartProductos, setCartProductos }}>
      {children}
    </CartContext.Provider>
  );
};
