import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
  return (
    <div>
      <h2>Encuentra las mejores Ofertas de la Semana</h2>

      <ItemCount stock={10} initial={1} />
    </div>
  );
};

export default ItemListContainer;
