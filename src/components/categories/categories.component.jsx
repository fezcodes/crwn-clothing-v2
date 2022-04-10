import { CategoriesContainer } from "./categories.styles";
import CategoryItem from "../category-item/category-item.component";

const Categories = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};
export default Categories;
