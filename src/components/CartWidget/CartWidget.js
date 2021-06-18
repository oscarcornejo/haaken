// React Suite
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Icon, Badge } from "rsuite";
import { useCart } from "../../contexts/CartContext";

const CartWidget = () => {
  const { cartProductos } = useCart();
  const [itemsInCart, setItemsInCart] = useState(null);

  useEffect(() => {
    if (cartProductos) {
      if (cartProductos.length > 0) {
        const sumQuantity = cartProductos?.reduce((previousValue, currentValue) => {
          return {
            items: previousValue.quantity + currentValue.quantity,
          };
        });
        setItemsInCart(sumQuantity);
      }
    }
  }, [cartProductos]);

  return (
    <Nav.Item componentClass={Link} to="/cart" icon={<Icon icon="shopping-cart" />}>
      {itemsInCart.items > 0 ? <Badge content={itemsInCart.items}>Carrito</Badge> : "Carrito"}
    </Nav.Item>
  );
};

export default CartWidget;
