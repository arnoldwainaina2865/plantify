import { CategoryProvider } from "./category-context";
import { ProductProvider } from "./product-context";
import { CartProvider } from "./cart-context";
import { WishlistProvider } from "./wishlist-context";
import { AuthProvider } from "./auth-context";

const Provider = ({ children }) => {
  return (
    <CategoryProvider>
      <ProductProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>{children}</WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </ProductProvider>
    </CategoryProvider>
  );
};

export default Provider;
