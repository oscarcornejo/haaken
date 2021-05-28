import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";

import data from "../../utils/dataProductos.json";

import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = () => {
      setTimeout(() => {
        setProductos(data);
      }, 1000);
    };

    getProductos();
  }, []);

  return (
    <div className="item-list-container">
      <h2 className="item-list-container__title">Encuentra las mejores Ofertas de la Semana</h2>

      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
