import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { useAuth } from "../../context/auth-context";
import { useNavigate, Link } from "react-router-dom";
import notification from "../Notification/notification";

const ProductCard = ({ product }) => {
  const { authState } = useAuth();
  const navigate = useNavigate();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  return (
    <div className='card card-horizontal'>
      <Link to={`/product/${product._id}`} className='card-img'>
        <img src={require(`../../assets${product.image}`)} alt='card' />
      </Link>
      <div className='card-content'>
        <Link to={`/product/${product._id}`}>
          <div className='card-head'>
            <div className='card-title h5'>{product.name}</div>
            <div className='card-badge'>
              <div className='badge'>
                <i className='fa-solid fa-star checked'></i> {product.rating}
              </div>
            </div>
            <div className='card-subtitle h4'>
              <ins>Rs. {product.price - product.discount_amt}</ins>{" "}
              <del>Rs. {product.price}</del>
            </div>
            <div className='offer'>{product.discount}% off</div>
          </div>
        </Link>
        <div className='card-option'>
          <button
            className='btn'
            onClick={() => {
              if (authState.isLoggedIn) {
                cartDispatch({ type: "ADD_TO_CART", payload: product });
                notification({ action: "ADD_TO_CART", item: product });
              } else navigate("/login");
            }}>
            Add to Cart
          </button>
          <button
            className='btn'
            onClick={() => {
              if (authState.isLoggedIn) {
                wishlistDispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: product,
                });
                notification({
                  action: "MOVE_TO_WISHLIST",
                  item: product,
                });
              } else navigate("/login");
            }}>
            Move to WishList
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
