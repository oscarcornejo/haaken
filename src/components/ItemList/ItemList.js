import { Loader } from "rsuite";
import { useEffect, useState } from "react";

import data from "../../utils/dataProductos.json";
import Item from "../Item/Item";

import "./ItemList.css";

const ItemList = () => {
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
    <div className="item-list">
      {productos.length === 0 ? (
        <div className="item-list__loading">
          <Loader size="lg" content="Cargando..." />
        </div>
      ) : (
        productos?.map((item) => {
          return <Item data={item} key={item._id} />;
        })
      )}
    </div>
  );
};

export default ItemList;
