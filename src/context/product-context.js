import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import productReducer from "../reducer/product/product-reducer";

const ProductContext = createContext();

const products = []; // list of all products
const filteredProducts = []; // list of products that will be displayed
const noProducts = 0; // number of products currently displayed
const categories = [
  // categories with filter status
  { name: "perennial", isChecked: true },
  { name: "palm", isChecked: true },
  { name: "indoor", isChecked: true },
  { name: "fruit", isChecked: true },
  { name: "bamboo", isChecked: true },
  { name: "herb", isChecked: true },
];
const rating = [
  // ratings with filter status
  { stars: 4, isChecked: false },
  { stars: 3, isChecked: false },
  { stars: 2, isChecked: false },
  { stars: 1, isChecked: true },
];
const range = 500; // max price of products
const sortOrder = true; // true for low to high and false for high to low

const ProductProvider = ({ children }) => {
  const navigate = useNavigate();
  const [productState, productDispatch] = useReducer(productReducer, {
    products,
    filteredProducts,
    noProducts,
    categories,
    rating,
    range,
    sortOrder,
  });

  // API call to GET products
  async function getProducts() {
    let response = [];
    try {
      response = await axios.get("/api/products");
    } catch (error) {
      navigate("/error");
    } finally {
      productDispatch({
        type: "ADD_PRODUCTS",
        payload: response.data.products,
      });
    }
  }

  // called once in the beginning
  /* eslint-disable */
  useEffect(() => {
    getProducts();
  }, []);

  // updates the filteredProducts whenever a filter state changes
  useEffect(() => {
    productDispatch({ type: "APPLY_FILTERS" });
  }, [
    productState.categories,
    productState.rating,
    productState.sortOrder,
    productState.range,
  ]);

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProduct };
