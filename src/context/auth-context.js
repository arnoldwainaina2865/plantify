import { createContext, useContext, useReducer } from "react";
import authReducer from "../reducer/auth/auth-reducer";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const token = window.localStorage.getItem("authToken");

  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: token === null ? false : true,
    authToken: token !== null ? token : "",
  });
  return (
    <authContext.Provider value={{ authState, authDispatch }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
