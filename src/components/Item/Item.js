import { Button } from "rsuite";
import { useHistory } from "react-router-dom";

import "./Item.css";

const Item = ({ data }) => {
  const { title, description, _id } = data;
  let history = useHistory();

  const handleVerMas = (id) => {
    // const data = {
    //   id: 1,
    //   nombre: "Pizza 2x1",
    //   precio: 5000,
    // };
    // history.push(`/detalle-producto/${id}`, { data });

    history.push(`/detalle-producto/${id}`);
  };

  return (
    <div className="item">
      <h2>{title}</h2>
      <p className="truncate">{description}</p>

      <Button appearance="primary" onClick={() => handleVerMas(_id)} block size="sm">
        Ver Producto
      </Button>
    </div>
  );
};

export default Item;
