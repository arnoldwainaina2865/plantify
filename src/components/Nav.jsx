import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";
import { useAuth } from "../context/auth-context";

const Nav = () => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { authState, authDispatch } = useAuth();

  return (
    <>
      <nav>
        <div className='nav-wrapper'>
          <Link to='/'>
            <div className='nav-logo h6'>
              <i className='fa-solid fa-seedling'></i> PlantShop
            </div>
          </Link>
          <div></div>
          <div className='nav-list'>
            <div className='nav-item input search'>
              {/* <label htmlFor='search'>
                <i className='fa-solid fa-magnifying-glass'></i>{" "}
              </label>
              <input
                className='input-data'
                type='text'
                id='search'
                placeholder='Search Products'></input> */}
            </div>
            {authState.isLoggedIn ? (
              <Link
                to='/'
                onClick={() => {
                  authDispatch({ type: "LOGOUT_USER" });
                  cartDispatch({ type: "EMPTY_CART" });
                  wishlistDispatch({ type: "EMPTY_WISHLIST" });
                }}>
                <button className='nav-item btn btn-ghost login-btn'>
                  <i className='fa-solid fa-arrow-right-to-bracket'></i>
                  Logout
                </button>
              </Link>
            ) : (
              <Link to='./login'>
                <button className='nav-item btn btn-ghost login-btn'>
                  <i className='fa-solid fa-arrow-right-to-bracket'></i>
                  Login
                </button>
              </Link>
            )}

            <Link to='./wishlist'>
              <div className='nav-item icon-badge btn btn-ghost'>
                <i className='fa-regular fa-heart icon'>
                  <div className='badge-num'>
                    {wishlistState.noItemsWishlist}
                  </div>
                </i>
              </div>
            </Link>
            <Link to='./cart'>
              <div className='nav-item icon-badge btn btn-ghost'>
                <i className='fa-solid fa-cart-shopping icon'>
                  <div className='badge-num'>{cartState.noItemsCart}</div>
                </i>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
