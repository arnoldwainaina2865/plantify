import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import notification from "../Notification/notification";

const CartCard = ({ cartProduct }) => {
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  return (
    <div className='card card-horizontal'>
      <div className='card-img'>
        <img src={require(`../../assets${cartProduct.image}`)} alt='card' />
      </div>
      <div className='card-content'>
        <div className='card-head'>
          <div className='card-title h5'>{cartProduct.name}</div>
          <div className='card-subtitle h4'>
            <ins>Rs. {cartProduct.price - cartProduct.discount_amt}</ins>{" "}
            <del>Rs. {cartProduct.price}</del>
          </div>
          <div className='offer'>{cartProduct.discount}% off</div>
        </div>
        <div className='input quantity-input'>
          <label htmlFor='quantity' className='input-label'>
            Quantity:{" "}
          </label>
          <input
            className='input-data'
            type='number'
            name='quantity'
            id='quantity'
            min='1'
            max='5'
            value={cartProduct.quantity}
            onChange={(e) =>
              cartDispatch({
                type: "UPDATE_QUANTITY",
                payload: cartProduct,
                quantity: e.target.value,
              })
            }
          />
        </div>
        <div className='card-option'>
          <button
            className='btn'
            onClick={() => {
              notification({ action: "REMOVE_FROM_CART", item: cartProduct });
              cartDispatch({
                type: "REMOVE_FROM_CART",
                payload: cartProduct,
              });
            }}>
            Remove From Cart
          </button>
          <button
            className='btn'
            onClick={() => {
              notification({ action: "MOVE_TO_WISHLIST", item: cartProduct });
              cartDispatch({
                type: "REMOVE_FROM_CART",
                payload: cartProduct,
              });
              wishlistDispatch({
                type: "ADD_TO_WISHLIST",
                payload: cartProduct,
              });
            }}>
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartCard;
