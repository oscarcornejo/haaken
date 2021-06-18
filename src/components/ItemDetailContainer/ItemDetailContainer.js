import { useEffect, useState } from "react";
import { Loader, Message } from "rsuite";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";

import { getFirestore } from "../../firebase";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducto = () => {
      setLoading(true);

      const db = getFirestore();
      const itemCollection = db.collection("items");
      const data = itemCollection.doc(id);

      data.get().then((item) => {
        setProducto(item.data());
        setLoading(false);
      });
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
