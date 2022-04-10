import { useContext } from "react";
import {
  ProductCardContainer,
  Img,
  ButtonProduct,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

import { Button, BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { price, name, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <ProductCardContainer>
      <Img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <ButtonProduct
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </ButtonProduct>
    </ProductCardContainer>
  );
};

export default ProductCard;
