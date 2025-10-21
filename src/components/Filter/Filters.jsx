import {
  CategoryFilter,
  RatingFilter,
  SortFilter,
  PriceFilter,
} from "./FilterIndex";

import { useProduct } from "../../context/product-context";

const Filters = () => {
  const { productState, productDispatch } = useProduct();
  return (
    <aside>
      <div className='filter'>
        <div className='filter-and-clear'>
          <div>Filters</div>
          <div className='clear'>
            <u
              onClick={() => {
                productDispatch({ type: "RESET_FILTERS" });
              }}>
              Clear
            </u>
          </div>
        </div>
        <form action=''>
          <div className='input price'>
            <label className='input-label' htmlFor='price'>
              Price
            </label>
            <PriceFilter
              productDispatch={productDispatch}
              productState={productState}
            />
          </div>
          <p className='filter-heading'>Category</p>
          {productState.categories.map((cat) => (
            <CategoryFilter
              key={cat.name}
              category={cat}
              productDispatch={productDispatch}
            />
          ))}

          <p className='filter-heading'>Rating</p>
          {productState.rating.map((rate) => (
            <RatingFilter
              key={rate.stars}
              rating={rate}
              productDispatch={productDispatch}
            />
          ))}
          <p className='filter-heading'>Sort by</p>
          <SortFilter productDispatch={productDispatch} />
        </form>
      </div>
    </aside>
  );
};
export default Filters;
