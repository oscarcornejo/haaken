import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "rsuite";
import { useCart } from "../../contexts/CartContext";

import "./Cart.css";

const Cart = () => {
  const { cartProductos, removeItem } = useCart();
  const [productos, setProductos] = useState([]);

  const history = useHistory();

  useEffect(() => {
    if (cartProductos) {
      setProductos(cartProductos);
    }
  }, [cartProductos]);

  const deleteItem = (id) => {
    removeItem(id);
  };

  const goHome = () => {
    history.push("/");
  };

  return (
    <div>
      {productos.length === 0 ? (
        <div className="cart-view">
          <div className="cart-view-empty">
            <p>
              Sin items seleccionados, si buscas comprar vuelve al Home y elige el producto que más
              te guste
            </p>

            <Button color="red" appearance="ghost" onClick={goHome}>
              Volver al Home
            </Button>
          </div>
        </div>
      ) : (
        productos.map((product, index) => {
          return (
            <div className="cart-view" key={index}>
              <div className="cart-view-img">
                <img src={product.item.image} alt={product.item.name} />
              </div>

              <div className="cart-view-detail">
                <h2>{product.item.name}</h2>
                <p>{product.item.detail}</p>
                <p>Cantidad: {product.quantity}</p>
              </div>

              <div className="cart-view-price">
                <h2>$ {product.item.price * product.quantity}</h2>

                <span onClick={() => deleteItem(product.item.id)}>X</span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;
