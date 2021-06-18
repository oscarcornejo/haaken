import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Button, Alert } from "rsuite";

import { useHistory } from "react-router";
import { useCart } from "../../contexts/CartContext";

import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  const history = useHistory();
  const { addItem } = useCart();

  const [count, setCount] = useState(0);
  const [stock] = useState(10);

  const onAdd = (value) => {
    if (value === 0) {
      Alert.warning(`Debe seleccionar items para agregar al carrito`, 4200);
      return false;
    }

    // if (isInCart(data._id)) {
    //   Alert.warning(`El producto ya existe, favor seleccione otro para continuar.`, 5000);
    //   return false;
    // }

    setCount(value);
    addItem(data, value);
  };

  const handleGoCart = () => {
    history.push("/cart");
  };

  return (
    <div className="item-detail">
      <div className="item-detail__colum-left">
        <img src={data.image} alt={data.name} />
      </div>

      <div className="item-detail__colum-right">
        <h2 className="item-detail__name">{data.name}</h2>
        <p className="item-detail__detail">{data.detail}</p>
        <p className="item-detail__price">$ {data.price}</p>

        {count === 0 ? (
          <ItemCount stock={stock} initial={0} onAdd={onAdd} />
        ) : (
          <Button color="red" appearance="ghost" onClick={handleGoCart}>
            Termina tu compra
          </Button>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
