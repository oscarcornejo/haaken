import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "rsuite";
import { useCart } from "../../contexts/CartContext";

import firebase from "firebase/app";
import { getFirestore } from "../../firebase";

import "./Cart.css";

const db = getFirestore();

const Cart = () => {
  const { cartProductos, removeItem } = useCart();
  const [productos, setProductos] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [infoUser, setInfoUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const history = useHistory();

  useEffect(() => {
    if (cartProductos.length > 0) {
      setTotalCart(
        cartProductos.reduce((accumulator, current) => accumulator + current.totalItem, 0)
      );
    }

    setProductos(cartProductos);
  }, [cartProductos]);

  const deleteItem = (id) => {
    removeItem(id);
  };

  const goHome = () => {
    history.push("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfoUser({ ...infoUser, [name]: value });
  };

  const sendOrder = () => {
    const orders = db.collection("orders");

    if (!infoUser.name && !infoUser.phone && !infoUser.email) {
      console.log("Campos obligatorios");
      return;
    } else if (!infoUser.name) {
      console.log("Campos Nombre Obligatorio");
      return;
    } else if (!infoUser.phone) {
      console.log("Campos Teléfono Obligatorio");
      return;
    } else if (!infoUser.email) {
      console.log("Campos Email Obligatorio");
      return;
    }

    const newOrder = {
      buyer: infoUser,
      items: productos,
      total: totalCart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };
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
                <img src={product.image} alt={product.name} />
              </div>

              <div className="cart-view-detail">
                <h2>{product.name}</h2>
                <p>{product.detail}</p>
                <p>Cantidad: {product.itemsSelected}</p>
              </div>

              <div className="cart-view-price">
                <h2>$ {product.totalItem}</h2>

                <span onClick={() => deleteItem(product.id)}>X</span>
              </div>
            </div>
          );
        })
      )}

      <div>
        <form>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Ej: Oscar Cornejo"
              value={infoUser.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Teléfono</label>
            <input
              type="phone"
              name="phone"
              placeholder="Ej: +56987654321"
              value={infoUser.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ej: oscar@cornejo.cl"
              value={infoUser.email}
              onChange={handleInputChange}
            />
          </div>

          <div>Total Pedido: ${totalCart}</div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
