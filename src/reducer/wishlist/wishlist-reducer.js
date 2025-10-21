export default function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return state.wishlist.some((item) => item._id === action.payload._id) ===
        true
        ? { ...state }
        : {
            ...state,
            wishlist: [...state.wishlist, action.payload],
            noItemsWishlist: state.noItemsWishlist + 1,
          };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item._id !== action.payload._id
        ),
        noItemsWishlist: state.noItemsWishlist - 1,
      };
    case "EMPTY_WISHLIST":
      return {
        ...state,
        wishlist: [],
        noItemsWishlist: 0,
      };
    default:
      return state;
  }
}
