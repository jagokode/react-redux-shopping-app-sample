import "./Cart.css";
import CartItem from "./CartItem";

const CartItems = () => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          <CartItem id={1} price={3000} name="Macbook" />
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
