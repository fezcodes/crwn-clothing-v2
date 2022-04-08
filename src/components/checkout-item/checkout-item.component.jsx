import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";
const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const { increment, decrement, remove } = useContext(CartContext);
  const incrementCartItem = () => {
    increment(cartItem);
  };
  const decrementCartItem = () => {
    decrement(cartItem);
  };
  const removeCartItem = () => {
    remove(cartItem);
  };
  if (cartItem)
    return (
      <div>
        <div className="checkout-item-container">
          <img src={imageUrl} alt={name} />
          <div className="item-details">
            <span className="name">{name}</span>
          </div>
          <div className="item-details">
            <button className="arrow" onClick={decrementCartItem}>{`<`}</button>
            <span className="quantity">{quantity}</span>
            <button className="arrow" onClick={incrementCartItem}>{`>`}</button>
          </div>
          <div className="item-details">
            <span className="price">${price}</span>
          </div>
          <div className="item-details">
            <button className="remove" onClick={removeCartItem}>
              X
            </button>
          </div>
        </div>
        <div className="separator">
          <hr></hr>
        </div>
      </div>
    );
};

export default CheckoutItem;
