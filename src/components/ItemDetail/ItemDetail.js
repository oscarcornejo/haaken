import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
  return (
    <div>
      {/* <div>{JSON.stringify(data)}</div> */}
      <h2>{data.title}</h2>
      <ItemCount stock={10} initial={1} />
    </div>
  );
};

export default ItemDetail;
