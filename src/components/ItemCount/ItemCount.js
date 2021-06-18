import { useState } from "react";
import { Icon, IconButton, Alert, Button } from "rsuite";

import "./ItemCount.css";

const ItemCount = ({ stock, initial = 0, onAdd }) => {
  const [countItem, setCountItem] = useState(initial);

  const handleMinus = () => {
    if (countItem === 0) {
      return false;
    }
    setCountItem(countItem - 1);
  };

  const handlePlus = () => {
    if (countItem >= Number(stock)) {
      Alert.warning(`No hay stock suficiente para sumar a tu pedido.`, 4200);
      return false;
    }
    setCountItem(countItem + 1);
  };

  const handleAction = () => {
    onAdd(countItem);
  };

  return (
    <div className="item-count">
      <div className="item-count__quantity">
        <IconButton icon={<Icon icon="minus" />} size="lg" onClick={handleMinus} />
        <span>{countItem}</span>
        <IconButton icon={<Icon icon="plus" />} size="lg" onClick={handlePlus} />
      </div>

      <Button appearance="ghost" disabled={stock === 0 ? true : false} onClick={handleAction}>
        {stock === 0 ? "Sin Stock" : "Agregar al Carrito"}
      </Button>
    </div>
  );
};

export default ItemCount;
