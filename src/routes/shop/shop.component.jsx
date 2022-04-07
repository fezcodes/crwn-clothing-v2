import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";

import { ProductContext } from "../../contexts/product.context";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((p) => (
        <ProductCard product={p} key={p.id} />
      ))}
    </div>
  );
};
export default Shop;
