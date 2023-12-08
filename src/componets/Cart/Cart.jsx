import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
  const { cart, clearCart, getTotalQuantity } = useContext(CartContext);

  const totalQuantity = getTotalQuantity();

  const { total, items } = cart.reduce(
    (acc, item) => {
      const subTotal = item.precio * item.quantity;
      acc.total += subTotal;
      acc.items.push(<CartItem key={item.id} {...item} />);
      return acc;
    },
    { total: 0, items: [] }
  );

  const handleClearCart = () => {
    if (window.confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
      clearCart();
    }
  };

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>El carrito está vacío</h1>
        <Link to="/">Productos</Link>
      </div>
    );
  }

  return (
    <div>
      {items}
      <h3>Total : ${total}</h3>
      <button className="btn btn-danger" onClick={handleClearCart}>Vaciar carrito</button>
      <button className="btn btn-primary"><Link to="/checkout" className="text-white">Checkout</Link></button>
    </div>
  );
};