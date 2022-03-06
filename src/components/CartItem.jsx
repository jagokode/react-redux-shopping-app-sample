import "./Cart.css";
import { useDispatch } from "react-redux";
import { cartActions } from "./../store/cartSlice";

const CartItem = ({ name, quntity, total, price, id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const handleAdd = () => {
    dispatch(cartActions.addToCart({ id, name, price }));
  };

  return (
    <div className="cartItem">
      <h2>{name}</h2>
      <p>${price}</p>
      <p>x {quntity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={handleRemove}>
        -
      </button>
      <button className="cart-actions" onClick={handleAdd}>
        +
      </button>
    </div>
  );
};

export default CartItem;
