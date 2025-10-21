import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";
import notification from "../Notification/notification";

const WishlistCard = ({ wishProduct }) => {
  const { wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();
  return (
    <div className='card card-horizontal'>
      <div className='card-img'>
        <img src={require(`../../assets${wishProduct.image}`)} alt='card' />
      </div>
      <div className='card-content'>
        <div className='card-head'>
          <div className='card-title h5'>{wishProduct.name}</div>
          <div className='badge'>
            <i className='fa-solid fa-star checked'></i> {wishProduct.rating}
          </div>
          <div className='card-subtitle h4'>
            <ins>Rs. {wishProduct.price - wishProduct.discount_amt}</ins>{" "}
            <del>Rs. {wishProduct.price}</del>
          </div>
          <div className='offer'>{wishProduct.discount}% off</div>
        </div>
        <div className='card-option'>
          <button
            className='btn'
            onClick={() => {
              notification({ action: "ADD_TO_CART", item: wishProduct });
              cartDispatch({ type: "ADD_TO_CART", payload: wishProduct });
              wishlistDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: wishProduct,
              });
            }}>
            Move to Cart
          </button>
          <button
            className='btn'
            onClick={() => {
              notification({
                action: "REMOVE_FROM_WISHLIST",
                item: wishProduct,
              });
              wishlistDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: wishProduct,
              });
            }}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default WishlistCard;
