import { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartProductos, setCartProductos] = useState([]);

  useEffect(() => {
    const getProductos = localStorage.getItem("productos");
    if (getProductos?.length > 0) {
      setCartProductos(getProductos);
    } else {
      localStorage.setItem("productos", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const items = localStorage.getItem("productos");
    if (items) {
      setCartProductos(JSON.parse(localStorage.getItem("productos")));
    } else {
      clear();
    }
  }, []);

  // agregar cierta cantidad de un ítem al carrito
  const addItem = (item, quantity) => {
    console.log("addItem");

    if (isInCart(item._id)) {
      return;
    }

    setCartProductos([...cartProductos, { item, quantity }]);
    localStorage.setItem("productos", JSON.stringify([...cartProductos, { item, quantity }]));
  };

  // Remover un item del cart por usando su id
  const removeItem = (itemId) => {
    const filtered = cartProductos.filter((el) => {
      return el.item._id !== itemId;
    });
    console.log("removeItem", filtered);
  };

  // Remover todos los items
  const clear = () => {
    setCartProductos([]);
  };

  // Retorna true | false;
  const isInCart = (id) => {
    const found = cartProductos.some((el) => el.item._id === id);

    if (found) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <CartContext.Provider value={{ cartProductos, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
