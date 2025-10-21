import CategoryCard from "../Cards/CategoryCard";

import { useCategory } from "../../context/category-context";

const CategoryGrid = () => {
  const { categories } = useCategory();

  return (
    <>
      <section className='category'>
        <div className='category-grid'>
          {categories.map((cat) => (
            <CategoryCard key={cat._id} category={cat} />
          ))}
        </div>
      </section>
    </>
  );
};
export default CategoryGrid;
