import BillingDetail from "../components/BillingDetail";
import CartGrid from "../components/Grids/CartGrid";
import "../styles/cart.css";
import { useCart } from "../context/cart-context";

const CartPage = () => {
  const { cartState } = useCart();
  return (
    <>
      <h4 className='h4 center-text cart-head'>My Cart</h4>
      {cartState.cart.length === 0 ? (
        <div className='not-found-page'>
          <img
            src={require("../assets/error.gif")}
            alt='404-page-not-found'></img>
          <h1 className='h4 center-text' style={{ color: "var(--primary)" }}>
            No Items in your Cart🍃
          </h1>
        </div>
      ) : (
        <div className='cart'>
          <CartGrid cart={cartState.cart} />
          <BillingDetail />
        </div>
      )}
    </>
  );
};
export default CartPage;
