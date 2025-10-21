import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/auth-context";

const RequiresAuth = ({ children }) => {
  const { authState } = useAuth();
  const { isLoggedIn } = authState;

  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequiresAuth;
