import ProductCard from "../Cards/ProductCard";
import { useProduct } from "../../context/product-context";

const ProductGrid = () => {
  const { productState } = useProduct();

  return (
    <main>
      <div className='product-grid'>
        {productState.filteredProducts.map((pd) => (
          <ProductCard key={pd._id} product={pd} />
        ))}
      </div>
    </main>
  );
};
export default ProductGrid;
