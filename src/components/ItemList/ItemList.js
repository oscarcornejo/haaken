import { Loader } from "rsuite";

import Item from "../Item/Item";

import "./ItemList.css";

const ItemList = ({ productos }) => {
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
