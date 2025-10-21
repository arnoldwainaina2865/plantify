import WishlistCard from "../Cards/WishlistCard";

const WishlistGrid = ({ wishlist }) => {
  return (
    <div className='wishlist'>
      {wishlist.map((wish) => (
        <WishlistCard key={wish._id} wishProduct={wish} />
      ))}
    </div>
  );
};
export default WishlistGrid;
