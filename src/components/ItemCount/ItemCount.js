import { useState } from "react";
import { Button, Icon, IconButton, Alert } from "rsuite";

import "./ItemCount.css";

const ItemCount = ({ stock = 0, initial = 0 }) => {
  const [count, setCount] = useState(initial);

  const handleMinus = () => {
    if (count === 0) {
      return false;
    }
    setCount(count - 1);
  };

  const handlePlus = () => {
    if (count >= stock) {
      Alert.warning(`No hay stock suficiente para sumar a tu pedido.`, 4200);
      return false;
    }
    setCount(count + 1);
  };

  const onAdd = () => {
    if (count === 0) {
      Alert.warning(`Debe seleccionar items para agregar al carrito`, 4200);
      return false;
    }
    Alert.success(`Se agregaron ${count} items al carrito`, 4000);
  };

  return (
    <div className="item-count">
      <div className="item-count__quantity">
        <IconButton icon={<Icon icon="minus" />} size="lg" onClick={handleMinus} />
        <span>{count}</span>
        <IconButton icon={<Icon icon="plus" />} size="lg" onClick={handlePlus} />
      </div>

      <Button appearance="ghost" disabled={stock === 0 ? true : false} onClick={onAdd}>
        {stock === 0 ? "Sin Stock" : "Agregar al Carrito"}
      </Button>
    </div>
  );
};

export default ItemCount;
