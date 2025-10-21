import { createContext, useContext, useReducer } from "react";
import wishlistReducer from "../reducer/wishlist/wishlist-reducer";

const WishlistContext = createContext();

const wishlist = [];

const noItemsWishlist = wishlist.length;

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist,
    noItemsWishlist,
  });
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
