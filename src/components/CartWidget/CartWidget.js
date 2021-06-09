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
      setItemsInCart(cartProductos.length);
    }
  }, [cartProductos]);

  return (
    <Nav.Item componentClass={Link} to="/cart" icon={<Icon icon="shopping-cart" />}>
      {itemsInCart > 0 ? <Badge content={itemsInCart}>Carrito</Badge> : "Carrito"}
    </Nav.Item>
  );
};

export default CartWidget;
