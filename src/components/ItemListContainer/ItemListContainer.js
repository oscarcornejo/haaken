import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Message } from "rsuite";

import ItemList from "../ItemList/ItemList";

import { getFirestore } from "../../firebase";

import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { idCategory } = useParams();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCategory, setIsCategory] = useState(true);

  useEffect(() => {
    const getProductos = async () => {
      setLoading(true);
      const db = getFirestore();
      const itemCollection = db.collection("items");

      const data = await itemCollection
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            // console.log("Sin Resultados");
            return [];
          }

          return querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });

      if (idCategory && idCategory !== "todos") {
        setLoading(true);
        const dataFilter = data.filter((item) => item.category === idCategory);
        setProductos(dataFilter);

        if (dataFilter.length > 0) {
          setIsCategory(true);
          setLoading(false);
        } else {
          setIsCategory(false);
          setLoading(false);
        }
      } else {
        setProductos(data);
        setIsCategory(true);
      }
    };

    getProductos();
  }, [idCategory, isCategory]);

  return (
    <div className="item-list-container">
      <h2 className="item-list-container__title">
        {idCategory && idCategory !== "todos" ? (
          <>
            Encuentra los mejores productos de <span>{idCategory} </span>
          </>
        ) : (
          "Encuentra los Mejores Productos"
        )}
      </h2>
      {isCategory ? (
        <ItemList productos={productos} loading={loading} />
      ) : (
        <Message
          type="warning"
          title="¡Oops!"
          description={
            <p>
              La categoría que buscas no existe aquí, te recomendamos ver todos nuestros productos:
              <br />
              <Link to={`/`}>Ver Todos los Productos</Link>
            </p>
          }
        />
      )}
    </div>
  );
};

export default ItemListContainer;
