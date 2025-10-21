import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    let response = [];
    try {
      response = await axios.get("/api/categories");
    } catch (error) {
      navigate("/error");
    } finally {
      setCategories(response.data.categories);
    }
  }
  /* eslint-disable */
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
        getCategories,
      }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => {
  return useContext(CategoryContext);
};

export { CategoryProvider, useCategory };
