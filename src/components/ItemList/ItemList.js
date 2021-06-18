import { memo } from "react";
import { Loader } from "rsuite";
import Item from "../Item/Item";

import "./ItemList.css";

const ItemList = memo(({ productos, loading }) => {
  return (
    <div className="item-list">
      {loading ? (
        <div className="item-list__loading">
          <Loader size="lg" content="Cargando..." />
        </div>
      ) : (
        productos?.map((item) => {
          return <Item data={item} key={item.id} />;
        })
      )}
    </div>
  );
});

export default ItemList;
