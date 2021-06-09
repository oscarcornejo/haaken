import React, { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cartProductos } = useCart();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (cartProductos) {
      setProductos(cartProductos);
    }
  }, [cartProductos]);

  return (
    <div>
      {productos.map((product) => {
        return (
          <div key={product.item._id}>
            <h2>{product.item.name}</h2>
            <p>{product.item.detail}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
