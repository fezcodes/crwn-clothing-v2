import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, isCartOpen, cartTotalUSD, cartCount } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div>
        <div className="checkout-headline">
          <div className="item-details">
            <span>Product</span>
          </div>
          <div className="item-details">
            <span>Description</span>
          </div>
          <div className="item-details">
            <span>Quantity</span>
          </div>
          <div className="item-details">
            <span>Price</span>
          </div>
          <div className="item-details">
            <span>Remove</span>
          </div>
        </div>
        <div className="separator">
          <hr></hr>
        </div>
      </div>
      <div className="checkout-items">
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
      </div>
      <div className="totalUSD">
        <span>Total: ${cartTotalUSD}</span>
      </div>
    </div>
  );
};
export default Checkout;
