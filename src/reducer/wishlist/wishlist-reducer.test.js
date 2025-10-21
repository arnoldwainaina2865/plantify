import wishlistReducer from "./wishlist-reducer";

describe("tests for wishlist reducer", () => {
  test("request to add already existing items should be ignored", () => {
    const initialWishlist = {
      wishlist: [
        {
          _id: 1,
          name: "tulsi",
          categoryName: "herb",
          image: "/herb/tulsi.jpg",
          price: 400,
          discount: 10,
          discount_amt: 40,
          rating: 3,
        },
      ],
      noItemsWishlist: 1,
    };
    const action = {
      type: "ADD_TO_WISHLIST",
      payload: {
        _id: 1,
        name: "tulsi",
        categoryName: "herb",
        image: "/herb/tulsi.jpg",
        price: 400,
        discount: 10,
        discount_amt: 40,
        rating: 3,
      },
    };
    const expectedWishlist = {
      wishlist: [
        {
          _id: 1,
          name: "tulsi",
          categoryName: "herb",
          image: "/herb/tulsi.jpg",
          price: 400,
          discount: 10,
          discount_amt: 40,
          rating: 3,
        },
      ],
      noItemsWishlist: 1,
    };
    const result = wishlistReducer(initialWishlist, action);
    expect(result).toEqual(expectedWishlist);
  });
  test("should add item to wishlist", () => {
    const initialWishlist = {
      wishlist: [],
      noItemsWishlist: 0,
    };
    const action = {
      type: "ADD_TO_WISHLIST",
      payload: {
        _id: 1,
        name: "tulsi",
        categoryName: "herb",
        image: "/herb/tulsi.jpg",
        price: 400,
        discount: 10,
        discount_amt: 40,
        rating: 3,
      },
    };
    const expectedWishlist = {
      wishlist: [
        {
          _id: 1,
          name: "tulsi",
          categoryName: "herb",
          image: "/herb/tulsi.jpg",
          price: 400,
          discount: 10,
          discount_amt: 40,
          rating: 3,
        },
      ],
      noItemsWishlist: 1,
    };
    const result = wishlistReducer(initialWishlist, action);
    expect(result).toEqual(expectedWishlist);
  });
  test("should remove item from wishlist", () => {
    const initialWishlist = {
      wishlist: [
        {
          _id: 1,
          name: "tulsi",
          categoryName: "herb",
          image: "/herb/tulsi.jpg",
          price: 400,
          discount: 10,
          discount_amt: 40,
          rating: 3,
        },
      ],
      noItemsWishlist: 1,
    };
    const action = {
      type: "REMOVE_FROM_WISHLIST",
      payload: {
        _id: 1,
        name: "tulsi",
        categoryName: "herb",
        image: "/herb/tulsi.jpg",
        price: 400,
        discount: 10,
        discount_amt: 40,
        rating: 3,
      },
    };
    const expectedWishlist = {
      wishlist: [],
      noItemsWishlist: 0,
    };
    const result = wishlistReducer(initialWishlist, action);
    expect(result).toEqual(expectedWishlist);
  });
  test("should clear all items from wishlist", () => {
    const initialWishlist = {
      wishlist: [
        {
          _id: 1,
          name: "tulsi",
          categoryName: "herb",
          image: "/herb/tulsi.jpg",
          price: 400,
          discount: 10,
          discount_amt: 40,
          rating: 3,
        },
        {
          _id: 2,
          name: "mascarena",
          categoryName: "palm",
          image: "/palm/mascarena.webp",
          price: 500,
          discount: 10,
          discount_amt: 50,
          rating: 3,
        },
      ],
      noItemsWishlist: 1,
    };
    const action = { type: "EMPTY_WISHLIST" };
    const expectedWishlist = {
      wishlist: [],
      noItemsWishlist: 0,
    };
    const result = wishlistReducer(initialWishlist, action);
    expect(result).toEqual(expectedWishlist);
  });
});
