import { CartReducer } from "./cart-reducer";

describe("test suite for cart reducer", () => {
  test("should add product to cart", () => {
    const action = {
      type: "ADD_TO_CART",
      payload: {
        _id: 1,
        name: "mango",
        categoryName: "fruit",
        image: "/fruit/mango.webp",
        price: 400,
        discount: 10,
        discount_amt: 40,
        rating: 5,
      },
    };
    const initialCart = {
      cart: [],
      noItemsCart: 0,
      bill: { total: 0, discount: 0, deliveryCharge: 75 },
    };
    const expectedCart = {
      ...initialCart,
      cart: [
        {
          _id: 1,
          name: "mango",
          categoryName: "fruit",
          image: "/fruit/mango.webp",
          price: 400,
          discount: 10,
          discount_amt: 40,
          quantity: 1,
          rating: 5,
        },
      ],
      noItemsCart: 1,
    };
    const result = CartReducer(initialCart, action);
    expect(result).toEqual(expectedCart);
  });
  test("increment product quantity, if product exists in cart", () => {
    const action = {
      type: "ADD_TO_CART",
      payload: {
        _id: 1,
        name: "mango",
        categoryName: "fruit",
        image: "/fruit/mango.webp",
        price: 400,
        discount: 10,
        discount_amt: 40,
        rating: 5,
      },
    };
    const initialCart = {
      cart: [
        {
          _id: 1,
          name: "mango",
          categoryName: "fruit",
          image: "/fruit/mango.webp",
          price: 400,
          discount: 10,
          discount_amt: 40,
          quantity: 1,
          rating: 5,
        },
      ],
      noItemsCart: 1,
      bill: { total: 0, discount: 0, deliveryCharge: 75 },
    };
    const expectedCart = {
      ...initialCart,
      cart: [
        {
          _id: 1,
          name: "mango",
          categoryName: "fruit",
          image: "/fruit/mango.webp",
          price: 400,
          discount: 10,
          discount_amt: 40,
          quantity: 2,
          rating: 5,
        },
      ],
    };
    const result = CartReducer(initialCart, action);
    expect(result).toEqual(expectedCart);
  });
  test("should remove product from cart", () => {
    const action = {
      type: "REMOVE_FROM_CART",
      payload: {
        _id: 1,
        name: "mango",
        categoryName: "fruit",
        image: "/fruit/mango.webp",
        price: 400,
        discount: 10,
        discount_amt: 40,
        quantity: 2,
        rating: 5,
      },
    };
    const initialCart = {
      cart: [
        {
          _id: 1,
          name: "mango",
          categoryName: "fruit",
          image: "/fruit/mango.webp",
          price: 400,
          discount: 10,
          discount_amt: 40,
          quantity: 2,
          rating: 5,
        },
      ],
      noItemsCart: 1,
      bill: { total: 0, discount: 0, deliveryCharge: 75 },
    };
    const expectedCart = {
      ...initialCart,
      noItemsCart: 0,
      cart: [],
    };
    const result = CartReducer(initialCart, action);
    expect(result).toEqual(expectedCart);
  });
  test("should update quantity of specific product", () => {
    const action = {
      type: "UPDATE_QUANTITY",
      payload: {
        _id: 1,
        name: "mango",
        categoryName: "fruit",
        image: "/fruit/mango.webp",
        price: 400,
        discount: 10,
        discount_amt: 40,
        rating: 5,
      },
      quantity: 3,
    };
    const initialCart = {
      cart: [
        {
          _id: 1,
          name: "mango",
          categoryName: "fruit",
          image: "/fruit/mango.webp",
          price: 400,
          discount: 10,
          discount_amt: 40,
          quantity: 2,
          rating: 5,
        },
      ],
      noItemsCart: 1,
      bill: { total: 0, discount: 0, deliveryCharge: 75 },
    };
    const expectedCart = {
      ...initialCart,
      cart: [
        {
          _id: 1,
          name: "mango",
          categoryName: "fruit",
          image: "/fruit/mango.webp",
          price: 400,
          discount: 10,
          discount_amt: 40,
          quantity: 3,
          rating: 5,
        },
      ],
    };
    const result = CartReducer(initialCart, action);
    expect(result).toEqual(expectedCart);
  });
  test("should update bill amount", () => {
    const action = {
      type: "UPDATE_BILL",
      payload: { total: 800, discount: 80 },
    };
    const initialCart = {
      cart: [
        {
          _id: 1,
          name: "mango",
          categoryName: "fruit",
          image: "/fruit/mango.webp",
          price: 400,
          discount: 10,
          discount_amt: 40,
          quantity: 2,
          rating: 5,
        },
      ],
      noItemsCart: 1,
      bill: { total: 0, discount: 0, deliveryCharge: 75 },
    };
    const expectedCart = {
      ...initialCart,
      bill: {
        ...initialCart.bill,
        total: 800,
        discount: 80,
      },
    };
    const result = CartReducer(initialCart, action);
    expect(result).toEqual(expectedCart);
  });
  test("should empty the cart", () => {
    const action = { type: "EMPTY_CART" };
    const initialCart = {
      cart: [
        {
          _id: 1,
          name: "mango",
          categoryName: "fruit",
          image: "/fruit/mango.webp",
          price: 400,
          discount: 10,
          discount_amt: 40,
          quantity: 2,
          rating: 5,
        },
      ],
      noItemsCart: 1,
      bill: { total: 0, discount: 0, deliveryCharge: 75 },
    };
    const expectedCart = {
      cart: [],
      noItemsCart: 0,
      bill: { total: 0, discount: 0, deliveryCharge: 75 },
    };
    const result = CartReducer(initialCart, action);
    expect(result).toEqual(expectedCart);
  });
});
