import ItemCount from "../ItemCount/ItemCount";

import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  return (
    <div className="item-detail">
      <div className="item-detail__colum-left">
        <img src={data.image} alt={data.name} />
      </div>

      <div className="item-detail__colum-right">
        <h2 className="item-detail__name">{data.name}</h2>
        <p className="item-detail__detail">{data.detail}</p>
        <p className="item-detail__price">$ {data.price}</p>
        <ItemCount stock={10} initial={1} />
      </div>
    </div>
  );
};

export default ItemDetail;
