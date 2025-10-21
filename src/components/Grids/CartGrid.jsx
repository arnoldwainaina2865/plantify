import CartCard from "../Cards/CartCard";
const CartGrid = ({ cart }) => {
  return (
    <div className='products'>
      {cart?.map((cartProduct) => (
        <CartCard key={cartProduct._id} cartProduct={cartProduct} />
      ))}
    </div>
  );
};
export default CartGrid;
