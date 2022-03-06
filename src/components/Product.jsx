import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../features/cartSlice";
import "./Product.css";

const Product = ({ name, id, imgUrl, price }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };

  return (
    <div className="card">
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
