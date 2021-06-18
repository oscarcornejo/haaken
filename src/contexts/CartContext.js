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
    if (isInCart(item.id)) {
      const updatedItem = cartProductos.map((producto) => {
        if (producto.item.id === item.id) {
          producto.quantity += quantity;
          return producto;
        } else {
          return producto;
        }
      });

      setCartProductos(updatedItem);
      localStorage.setItem("productos", JSON.stringify(updatedItem));
    } else {
      const newItem = [...cartProductos, { item, quantity }];
      setCartProductos(newItem);
      localStorage.setItem("productos", JSON.stringify(newItem));
    }
  };

  // Remover un item del cart por usando su id
  const removeItem = (itemId) => {
    const itemsFiltered = cartProductos.filter((el) => {
      return el.item.id !== itemId;
    });

    setCartProductos(itemsFiltered);
    localStorage.setItem("productos", JSON.stringify(itemsFiltered));
  };

  // Remover todos los items
  const clear = () => {
    setCartProductos([]);
    localStorage.setItem("productos", []);
  };

  // Retorna true | false;
  const isInCart = (id) => {
    const found = cartProductos.some((el) => el.item.id === id);

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
