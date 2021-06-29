import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "rsuite";
import { useCart } from "../../contexts/CartContext";

import validateFormOrder from "../../utils/validateFormOrder";
import ModalOrder from "../../components/Modals/ModalOrder";

import firebase from "firebase/app";
import { getFirestore } from "../../firebase";

import "./Cart.css";

const db = getFirestore();

const initialState = { name: "", lastname: "", phone: "", email: "", confirEmail: "" };

const Cart = () => {
  const history = useHistory();
  const { cartProductos, removeItem, clear } = useCart();

  const [productos, setProductos] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [errors, setErrors] = useState({});
  const [infoUser, setInfoUser] = useState(initialState);
  const [openModal, setOpenModal] = useState(false);

  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cartProductos.length > 0) {
      setTotalCart(
        cartProductos.reduce((accumulator, current) => accumulator + current.totalItem, 0)
      );
    } else {
      setTotalCart(0);
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

  const handleValidate = () => {
    setErrors(validateFormOrder(infoUser));
  };

  const sendOrder = (e) => {
    e.preventDefault();

    const orders = db.collection("orders");
    setErrors(validateFormOrder(infoUser));
    const isValid = Object.keys(validateFormOrder(infoUser)).length === 0;

    if (isValid) {
      setOpenModal(true);
      setLoading(true);

      const newOrder = {
        buyer: infoUser,
        items: productos,
        total: totalCart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
      };

      orders
        .add(newOrder)
        .then((resp) => {
          setOrderId(resp.id);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
          clear();
        });

      setInfoUser(initialState);
    }
  };

  return (
    <div className="cart-view-box">
      <div className="cart-view-left">
        {productos.length === 0 ? (
          <div className="cart-view">
            <div className="cart-view-empty">
              <p>
                Sin items seleccionados, si buscas comprar vuelve al Home y elige el producto que
                más te guste
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
      </div>
      <div className="cart-view-right">
        <form>
          <div className="input-group">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Ej: Oscar"
              value={infoUser.name}
              onChange={handleInputChange}
              onBlur={handleValidate}
              className={errors.nameError ? "invalid" : ""}
            />
            {errors.nameError && <p>{errors.nameError}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="lastname">Apellido</label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Ej: Cornejo"
              value={infoUser.lastname}
              onChange={handleInputChange}
              onBlur={handleValidate}
              className={errors.lastnameError ? "invalid" : ""}
            />
            {errors.lastnameError && <p>{errors.lastnameError}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              id="phone"
              type="phone"
              name="phone"
              placeholder="Ej: 56987654321"
              value={infoUser.phone}
              onChange={handleInputChange}
              onBlur={handleValidate}
              className={errors.phoneError ? "invalid" : ""}
            />

            {errors.phoneError && <p>{errors.phoneError}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Ej: oscar@cornejo.cl"
              value={infoUser.email}
              onChange={handleInputChange}
              onBlur={handleValidate}
              className={errors.emailError ? "invalid" : ""}
            />

            {errors.emailError && <p>{errors.emailError}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="confirEmail">Confirmar Email</label>
            <input
              id="confirEmail"
              type="email"
              name="confirEmail"
              placeholder="Ej: oscar@cornejo.cl"
              value={infoUser.confirEmail}
              onChange={handleInputChange}
              onBlur={handleValidate}
              className={errors.confirEmailError ? "invalid" : ""}
            />

            {errors.confirEmailError && <p>{errors.confirEmailError}</p>}
          </div>

          <div className="cart-view-total">Total Pedido: ${totalCart}</div>

          <Button
            disabled={productos.length === 0 || Object.keys(errors).length > 0 ? true : false}
            onClick={sendOrder}
            appearance="primary"
            block
            className="cart-view-btn-order"
          >
            Realizar Pedido
          </Button>
        </form>
      </div>

      <ModalOrder
        openModal={openModal}
        setOpenModal={setOpenModal}
        loading={loading}
        orderId={orderId}
      />
    </div>
  );
};

export default Cart;
