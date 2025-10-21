import { createContext, useContext, useEffect, useReducer } from "react";
import { CartReducer } from "../reducer/cart/cart-reducer";

const CartContext = createContext();

const cart = [];
const noItemsCart = cart.length;

const bill = { total: 0, discount: 0, deliveryCharge: 75 };

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, {
    cart,
    noItemsCart,
    bill,
  });

  const billReducer = (acc, ele) => {
    return {
      ...acc,
      total: acc.total + ele.price * ele.quantity,
      discount: acc.discount + ele.discount_amt * ele.quantity,
    };
  };

  useEffect(() => {
    const updatedBill = cartState.cart.reduce(billReducer, {
      total: 0,
      discount: 0,
    });
    cartDispatch({ type: "UPDATE_BILL", payload: updatedBill });
  }, [cartState.cart]);

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
