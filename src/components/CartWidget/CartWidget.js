// React Suite
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Icon, Badge } from "rsuite";
import { useCart } from "../../contexts/CartContext";

const CartWidget = () => {
  const { cartProductos } = useCart();
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    if (cartProductos) {
      if (cartProductos.length > 0) {
        const sumQuantity = cartProductos.reduce((previousValue, currentValue) => {
          return previousValue + currentValue.quantity;
        }, 0);

        setItemsInCart(sumQuantity);
      } else {
        setItemsInCart(0);
      }
    }
  }, [cartProductos, itemsInCart]);

  return (
    <Nav.Item componentClass={Link} to="/cart" icon={<Icon icon="shopping-cart" />}>
      {itemsInCart > 0 ? <Badge content={itemsInCart}>Carrito</Badge> : "Carrito"}
    </Nav.Item>
  );
};

export default CartWidget;
