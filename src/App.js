import { Routes, Route } from "react-router-dom";
import "./styles/common.css";
import Nav from "./components/Nav";
import RequiresAuth from "./RequiresAuth";
import Mockman from "mockman-js";
import {
  CartPage,
  HomePage,
  LoginPage,
  SignupPage,
  WishlistPage,
  ProductListings,
  ProductPage,
  ServerErrorPage,
  NotFoundPage,
} from "./pages/PageIndex";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />} />
        <Route path='listing' element={<ProductListings />} />
        <Route path='/product/:productId' element={<ProductPage />} />
        <Route path='mock' element={<Mockman />} />
        <Route
          path='cart'
          element={
            <RequiresAuth>
              <CartPage />
            </RequiresAuth>
          }
        />
        <Route
          path='wishlist'
          element={
            <RequiresAuth>
              <WishlistPage />
            </RequiresAuth>
          }
        />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='error' element={<ServerErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
