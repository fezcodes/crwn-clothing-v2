import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  TotalUSD,
  CheckoutHeadline,
  HeaderBlock,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, isCartOpen, cartTotalUSD } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <div>
        <CheckoutHeadline>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeadline>
        <div className="separator">
          <hr></hr>
        </div>
      </div>
      <div className="checkout-items">
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
      </div>
      <TotalUSD>
        <span>Total: ${cartTotalUSD}</span>
      </TotalUSD>
    </CheckoutContainer>
  );
};
export default Checkout;
