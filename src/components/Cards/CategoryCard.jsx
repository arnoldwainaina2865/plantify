import { Link } from "react-router-dom";
import { useProduct } from "../../context/product-context";

const CategoryCard = ({ category }) => {
  const { productDispatch } = useProduct();
  return (
    <Link to='listing'>
      <div
        className='category-card card'
        onClick={() => {
          return productDispatch({
            type: "CATEGORY_INIT",
            payload: category.categoryName,
          });
        }}>
        <div className='card-head'>
          <div className='card-title h4'>{category.categoryName}</div>
        </div>
        <div className='card-img resp-img'>
          <img
            src={require(`../../assets/${category.image}`)}
            alt='product-category'></img>
        </div>
      </div>
    </Link>
  );
};
export default CategoryCard;
