import { useEffect, useState } from "react";
import { Loader, Message } from "rsuite";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";

import data from "../../utils/dataProductos.json";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  // const location = useLocation();

  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // if (location.state !== "") {
    //   setProducto(location.state.data);
    // }

    const getProducto = () => {
      setLoading(true);
      const product = data.filter((item) => item._id === id);

      setTimeout(() => {
        setProducto(product[0]);
        setLoading(false);
      }, 2000);
    };

    getProducto();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="item-detail__loading">
          <Loader size="lg" content="Cargando..." />
        </div>
      ) : producto ? (
        <ItemDetail data={producto} />
      ) : (
        <Message type="warning" description="Producto no Encontrado :(" style={{ marginTop: 20 }} />
      )}
    </div>
  );
};

export default ItemDetailContainer;