export const feedbackMessage = (item, action) => {
  switch (action) {
    case "ADD_TO_CART":
      return `${item.name.toUpperCase()} was added to CART`;
    case "MOVE_TO_WISHLIST":
      return `${item.name.toUpperCase()} was added to WISHLIST`;
    case "REMOVE_FROM_CART":
      return `${item.name.toUpperCase()} was removed from CART`;
    case "REMOVE_FROM_WISHLIST":
      return `${item.name.toUpperCase()} was removed from WISHLIST`;
    default:
      return "All set!";
  }
};
