import { memo } from "react";
import { Button, ButtonToolbar } from "rsuite";
import { useHistory } from "react-router-dom";

import "./Item.css";

const Item = memo(({ data }) => {
  const { name, detail, image, id } = data;
  let history = useHistory();

  const handleVerMas = (id) => {
    history.push(`/item/${id}`);
  };

  return (
    <div className="item">
      <img src={image} alt={name} />

      <h2>{name}</h2>
      <p className="truncate">{detail}</p>

      <ButtonToolbar>
        <Button color="orange" onClick={() => handleVerMas(id)} block size="sm">
          Ver Producto
        </Button>
      </ButtonToolbar>
    </div>
  );
});

export default Item;
