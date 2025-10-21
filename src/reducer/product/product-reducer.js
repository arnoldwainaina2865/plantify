export default function productReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
        noProducts: state.noProducts + action.payload.length,
      };
    case "UPDATE_SORT":
      return {
        ...state,
        sortOrder: action.payload,
      };
    case "UPDATE_CATEGORY":
      return {
        ...state,
        categories: state.categories.map((cat) =>
          cat.name === action.payload.name ? action.payload : cat
        ),
      };
    case "UPDATE_RATING":
      return {
        ...state,
        rating: state.rating.map((rate) =>
          rate.stars === action.payload
            ? { ...rate, isChecked: true }
            : { ...rate, isChecked: false }
        ),
      };
    case "UPDATE_RANGE":
      return { ...state, range: action.payload };
    case "APPLY_FILTERS":
      const filteredCategories = state.categories.reduce(
        (acc, cat) => (cat.isChecked === true ? [...acc, cat.name] : acc),
        []
      );
      const filteredRating = state.rating.reduce((acc, ele) => {
        return ele.isChecked === true ? ele.stars : acc;
      }, 0);
      const FilteredProducts = state.products
        .filter((item) => filteredCategories.includes(item.categoryName))
        .filter((item) => item.rating >= filteredRating)
        .filter((item) => item.price <= state.range)
        .sort((a, b) =>
          state.sortOrder ? a.price - b.price : b.price - a.price
        );
      return { ...state, filteredProducts: FilteredProducts };
    case "RESET_FILTERS":
      return {
        ...state,
        categories: [
          { name: "perennial", isChecked: true },
          { name: "palm", isChecked: true },
          { name: "indoor", isChecked: true },
          { name: "fruit", isChecked: true },
          { name: "bamboo", isChecked: true },
          { name: "herb", isChecked: true },
        ],
        rating: [
          { stars: 4, isChecked: false },
          { stars: 3, isChecked: false },
          { stars: 2, isChecked: false },
          { stars: 1, isChecked: true },
        ],
        range: 500,
      };
    case "CATEGORY_INIT":
      return {
        ...state,
        categories: state.categories.map((cat) =>
          cat.name === action.payload
            ? { ...cat, isChecked: true }
            : { ...cat, isChecked: false }
        ),
      };
    default:
      return state;
  }
}
