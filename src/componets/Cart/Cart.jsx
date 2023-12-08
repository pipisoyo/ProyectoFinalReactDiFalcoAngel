import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import { CartItem } from "../CartItem/CartItem"

export const Cart = () => {
    const { cart, clearCart, getTotalQuantity } = useContext(CartContext);
  
    const subTotal = (producto) => {
      return producto.precio * producto.quantity;
    };
  
    const Total = cart.reduce((tot, producto) => {
      return tot + subTotal(producto);
    }, 0);
  
    if (getTotalQuantity() === 0) {
      return (
        <div>
          <h1>El carrito está vacío</h1>
          <Link to="/">Productos</Link>
        </div>
      );
    }
  
    return (
      <div>
        {cart.map((producto) => (
          <CartItem key={producto.id} {...producto} />
        ))}
        <h3>Total : ${Total}</h3>
        <button onClick={() => clearCart()}>Vaciar carrito</button>
        <Link to="/checkout">Checkout</Link>
      </div>
    );
  };