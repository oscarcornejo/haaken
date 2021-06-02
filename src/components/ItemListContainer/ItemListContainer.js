import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Message } from "rsuite";

import ItemList from "../ItemList/ItemList";
import DATA from "../../utils/dataProductos.json";

import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { idCategory } = useParams();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCategory, setIsCategory] = useState(true);

  useEffect(() => {
    const getProductos = () => {
      setLoading(true);
      if (idCategory && idCategory !== "todos") {
        const dataFilter = DATA.filter((item) => item.category === idCategory);

        if (dataFilter.length > 0) {
          setTimeout(() => {
            setProductos(dataFilter);
            setLoading(false);
            setIsCategory(true);
          }, 1000);
        } else {
          setLoading(false);
          setIsCategory(false);
        }
      } else {
        setTimeout(() => {
          setProductos(DATA);
          setLoading(false);
          setIsCategory(true);
        }, 1000);
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
