import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  ItemDetails,
  Arrow,
  Name,
  Quantity,
  Remove,
} from "./checkout-item.styles";

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
        <CheckoutItemContainer>
          <img src={imageUrl} alt={name} />
          <ItemDetails>
            <Name>{name}</Name>
          </ItemDetails>
          <ItemDetails>
            <Arrow onClick={decrementCartItem}>{`<`}</Arrow>
            <Quantity>{quantity}</Quantity>
            <Arrow className="arrow" onClick={incrementCartItem}>{`>`}</Arrow>
          </ItemDetails>
          <ItemDetails>
            <span className="price">${price}</span>
          </ItemDetails>
          <ItemDetails>
            <Remove onClick={removeCartItem}>X</Remove>
          </ItemDetails>
        </CheckoutItemContainer>
        <div className="separator">
          <hr></hr>
        </div>
      </div>
    );
};

export default CheckoutItem;
