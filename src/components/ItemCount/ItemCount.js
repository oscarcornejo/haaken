import { Icon, IconButton, Alert } from "rsuite";

import "./ItemCount.css";

const ItemCount = ({ stock, count, setCount }) => {
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

  return (
    <div className="item-count">
      <div className="item-count__quantity">
        <IconButton icon={<Icon icon="minus" />} size="lg" onClick={handleMinus} />
        <span>{count}</span>
        <IconButton icon={<Icon icon="plus" />} size="lg" onClick={handlePlus} />
      </div>
    </div>
  );
};

export default ItemCount;
