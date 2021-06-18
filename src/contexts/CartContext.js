import { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const initialState = [];

export const CartProvider = ({ children }) => {
  const [cartProductos, setCartProductos] = useState(initialState);

  useEffect(() => {
    const getProductos = JSON.parse(localStorage.getItem("productos"));
    if (getProductos && getProductos.length > 0) {
      setCartProductos(getProductos);
    } else {
      clear();
    }
  }, []);

  // agregar cierta cantidad de un ítem al carrito
  const addItem = (item) => {
    if (isInCart(item.id)) {
      const items = cartProductos.map((producto) => {
        if (producto.id === item.id) {
          producto.itemsSelected += item.itemsSelected;
          producto.totalItem += item.totalItem;
          return producto;
        } else {
          return producto;
        }
      });

      setCartProductos([...cartProductos, items]);
      localStorage.setItem("productos", JSON.stringify([...cartProductos, items]));
    } else {
      setCartProductos([...cartProductos, item]);
      localStorage.setItem("productos", JSON.stringify([...cartProductos, item]));
    }
  };

  // Remover un item del cart por usando su id
  const removeItem = (itemId) => {
    const itemsFiltered = cartProductos.filter((el) => {
      return el.id !== itemId;
    });

    if (itemsFiltered.length > 0) {
      setCartProductos([...cartProductos, itemsFiltered]);
      localStorage.setItem("productos", JSON.stringify([...cartProductos, itemsFiltered]));
    } else {
      clear();
    }
  };

  // Remover todos los items
  const clear = () => {
    setCartProductos([]);
    localStorage.setItem("productos", JSON.stringify([]));
  };

  // Retorna true | false;
  const isInCart = (id) => {
    if (cartProductos.length > 0) {
      const found = cartProductos.some((el) => el.id === id);
      if (found) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <CartContext.Provider value={{ cartProductos, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
