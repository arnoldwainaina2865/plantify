import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useWishlist } from "../context/wishlist-context";
import { useCart } from "../context/cart-context";
import { useAuth } from "../context/auth-context";
import notification from "../components/Notification/notification";

const ProductPage = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ image: "/loading.gif" });
  const { wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();
  const getProductInfo = () => {
    try {
      axios
        .get(`/api/products/${params.productId}`)
        .then((r) => setProduct(r.data.product));
    } catch (e) {
      navigate("/error");
    }
  };
  /* eslint-disable */
  useEffect(() => {
    getProductInfo();
  }, []);

  let params = useParams();
  return (
    <div className='card card-horizontal product-page'>
      <div className='card-img'>
        <img src={require(`../assets${product?.image}`)} alt='card' />
      </div>
      <div className='card-content'>
        <div className='card-head'>
          <div className='card-title h5'>{product?.name}</div>
          <div className='badge'>
            <i className='fa-solid fa-star checked'></i> {product?.rating}
          </div>
          <div className='card-subtitle h4'>
            <ins>Rs. {product?.price - product?.discount_amt}</ins>{" "}
            <del>Rs. {product?.price}</del>
          </div>
          <div className='offer'>{product?.discount}% off</div>
        </div>
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
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
