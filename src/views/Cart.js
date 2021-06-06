import React from "react";
import { useCartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cartProductos } = useCartContext();

  console.log(cartProductos);

  return (
    <div>
      <h2>Cart</h2>
    </div>
  );
};

export default Cart;
