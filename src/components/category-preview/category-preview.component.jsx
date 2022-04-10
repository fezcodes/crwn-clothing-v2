import { Link } from "react-router-dom";
import {
  CategoryPreviewContainer,
  Title,
  PreviewRow,
} from "./category-preview.styles";

import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>
          <Title>{title.toUpperCase()}</Title>
        </Link>
      </h2>
      <PreviewRow>
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewRow>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
