import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  return (
    <div>
      <h2>Encuentra las mejores Ofertas de la Semana</h2>

      <ItemCount stock={10} initial={1} />

      <ItemList />
    </div>
  );
};

export default ItemListContainer;
