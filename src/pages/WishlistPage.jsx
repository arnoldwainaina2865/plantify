import WishlistGrid from "../components/Grids/WishlistGrid";
import { useWishlist } from "../context/wishlist-context";
import "../styles/wishlist.css";

const WishlistPage = () => {
  const { wishlistState } = useWishlist();
  return (
    <>
      <h4 className='h4 center-text wishlist-head'>Wishlist</h4>
      {wishlistState.wishlist.length === 0 ? (
        <div className='not-found-page'>
          <img
            src={require("../assets/error.gif")}
            alt='404-page-not-found'></img>
          <h1 className='h4 center-text' style={{ color: "var(--primary)" }}>
            No Items in your Wishlist🍃
          </h1>
        </div>
      ) : (
        <WishlistGrid wishlist={wishlistState.wishlist} />
      )}
    </>
  );
};

export default WishlistPage;
