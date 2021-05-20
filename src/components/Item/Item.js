import { Button, Alert } from "rsuite";

import "./Item.css";

const Item = ({ data }) => {
  const { title, description, _id } = data;

  const handleVerMas = (id) => {
    Alert.info(`Ir al producto con id: ${id}`);
  };

  return (
    <div className="item">
      <h2>{title}</h2>
      <p className="truncate">{description}</p>

      <Button appearance="primary" onClick={() => handleVerMas(_id)} block size="sm">
        Ver Más
      </Button>
    </div>
  );
};

export default Item;
