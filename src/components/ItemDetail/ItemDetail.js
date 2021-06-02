import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Button, Alert } from "rsuite";

import "./ItemDetail.css";
import { useHistory } from "react-router";

const ItemDetail = ({ data }) => {
  const history = useHistory();

  const [count, setCount] = useState(0);
  const [stock] = useState(10);

  const onAdd = () => {
    if (count === 0) {
      Alert.warning(`Debe seleccionar items para agregar al carrito`, 4200);
      return false;
    }

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
        {/* <p className="item-detail__price">$ {count === 0 ? data.price : data.price * count}</p> */}
        <p className="item-detail__price">$ {data.price}</p>
        <ItemCount stock={stock} onAdd={onAdd} count={count} setCount={setCount} />

        {count > 0 && (
          <Button appearance="ghost" disabled={stock === 0 ? true : false} onClick={onAdd}>
            {stock === 0 ? "Sin Stock" : "Termina tu compra"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
