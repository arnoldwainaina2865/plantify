import productReducer from "./product-reducer";

describe("test suite for product reducer", () => {
  test("should add products to product list and filtered products list", () => {
    const action = {
      type: "ADD_PRODUCTS",
      payload: [
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
    };
    const initialState = {
      products: [],
      filteredProducts: [],
      noProducts: 0,
      categories: [
        { name: "perennial", isChecked: true },
        { name: "palm", isChecked: true },
        { name: "indoor", isChecked: true },
        { name: "fruit", isChecked: true },
        { name: "bamboo", isChecked: true },
        { name: "herb", isChecked: true },
      ],
      rating: [
        { stars: 4, isChecked: false },
        { stars: 3, isChecked: false },
        { stars: 2, isChecked: false },
        { stars: 1, isChecked: true },
      ],
      range: 500,
      sortOrder: true,
    };
    const expectedState = {
      ...initialState,
      products: [
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
      filteredProducts: [
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
      noProducts: 2,
    };
    const result = productReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });
  test("should update sort order", () => {
    const action = { type: "UPDATE_SORT", payload: false };
    const initialState = {
      products: [],
      filteredProducts: [],
      noProducts: 0,
      categories: [
        { name: "perennial", isChecked: true },
        { name: "palm", isChecked: true },
        { name: "indoor", isChecked: true },
        { name: "fruit", isChecked: true },
        { name: "bamboo", isChecked: true },
        { name: "herb", isChecked: true },
      ],
      rating: [
        { stars: 4, isChecked: false },
        { stars: 3, isChecked: false },
        { stars: 2, isChecked: false },
        { stars: 1, isChecked: true },
      ],
      range: 500,
      sortOrder: true,
    };
    const expectedState = { ...initialState, sortOrder: false };
    const result = productReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });

  test("should update specific category", () => {
    const action = {
      type: "UPDATE_CATEGORY",
      payload: { name: "perennial", isChecked: false },
    };
    const initialState = {
      products: [],
      filteredProducts: [],
      noProducts: 0,
      categories: [
        { name: "perennial", isChecked: true },
        { name: "palm", isChecked: true },
        { name: "indoor", isChecked: true },
        { name: "fruit", isChecked: true },
        { name: "bamboo", isChecked: true },
        { name: "herb", isChecked: true },
      ],
      rating: [
        { stars: 4, isChecked: false },
        { stars: 3, isChecked: false },
        { stars: 2, isChecked: false },
        { stars: 1, isChecked: true },
      ],
      range: 500,
      sortOrder: true,
    };
    const expectedState = {
      ...initialState,
      categories: [
        { name: "perennial", isChecked: false },
        { name: "palm", isChecked: true },
        { name: "indoor", isChecked: true },
        { name: "fruit", isChecked: true },
        { name: "bamboo", isChecked: true },
        { name: "herb", isChecked: true },
      ],
    };
    const result = productReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });
  test("should update rating", () => {
    const action = {
      type: "UPDATE_RATING",
      payload: 2,
    };
    const initialState = {
      products: [],
      filteredProducts: [],
      noProducts: 0,
      categories: [
        { name: "perennial", isChecked: true },
        { name: "palm", isChecked: true },
        { name: "indoor", isChecked: true },
        { name: "fruit", isChecked: true },
        { name: "bamboo", isChecked: true },
        { name: "herb", isChecked: true },
      ],
      rating: [
        { stars: 4, isChecked: false },
        { stars: 3, isChecked: false },
        { stars: 2, isChecked: false },
        { stars: 1, isChecked: true },
      ],
      range: 500,
      sortOrder: true,
    };
    const expectedState = {
      ...initialState,
      rating: [
        { stars: 4, isChecked: false },
        { stars: 3, isChecked: false },
        { stars: 2, isChecked: true },
        { stars: 1, isChecked: false },
      ],
    };
    const result = productReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });
  test("should update range", () => {
    const action = {
      type: "UPDATE_RANGE",
      payload: 250,
    };
    const initialState = {
      products: [],
      filteredProducts: [],
      noProducts: 0,
      categories: [
        { name: "perennial", isChecked: true },
        { name: "palm", isChecked: true },
        { name: "indoor", isChecked: true },
        { name: "fruit", isChecked: true },
        { name: "bamboo", isChecked: true },
        { name: "herb", isChecked: true },
      ],
      rating: [
        { stars: 4, isChecked: false },
        { stars: 3, isChecked: false },
        { stars: 2, isChecked: false },
        { stars: 1, isChecked: true },
      ],
      range: 500,
      sortOrder: true,
    };
    const expectedState = {
      ...initialState,
      range: 250,
    };
    const result = productReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });
  test("should filter products in producs array and store them in filteredProducts", () => {
    const initialState = {
      products: [
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
        {
          _id: 3,
          name: "syngonium",
          categoryName: "indoor",
          image: "/indoor/syngonium.webp",
          price: 150,
          discount: 10,
          discount_amt: 15,
          rating: 4,
        },
        {
          _id: 4,
          name: "spiral bamboo",
          categoryName: "bamboo",
          image: "/bamboo/spiral-bamboo.webp",
          price: 400,
          discount: 10,
          discount_amt: 40,
          rating: 3,
        },
        {
          _id: 5,
          name: "balsam",
          categoryName: "perennial",
          image: "/perennial/balsam.webp",
          price: 100,
          discount: 10,
          discount_amt: 10,
          rating: 3,
        },
      ],
      filteredProducts: [],
      noProducts: 5,
      categories: [
        { name: "perennial", isChecked: true },
        { name: "palm", isChecked: true },
        { name: "indoor", isChecked: true },
        { name: "fruit", isChecked: true },
        { name: "bamboo", isChecked: true },
        { name: "herb", isChecked: true },
      ],
      rating: [
        { stars: 4, isChecked: false },
        { stars: 3, isChecked: false },
        { stars: 2, isChecked: false },
        { stars: 1, isChecked: true },
      ],
      range: 250,
      sortOrder: true,
    };
    const action = {
      type: "APPLY_FILTERS",
      payload: initialState,
    };
    const expectedState = {
      ...initialState,
      filteredProducts: [
        {
          _id: 5,
          name: "balsam",
          categoryName: "perennial",
          image: "/perennial/balsam.webp",
          price: 100,
          discount: 10,
          discount_amt: 10,
          rating: 3,
        },
        {
          _id: 3,
          name: "syngonium",
          categoryName: "indoor",
          image: "/indoor/syngonium.webp",
          price: 150,
          discount: 10,
          discount_amt: 15,
          rating: 4,
        },
      ],
    };
    const result = productReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });
  test("should reset all the applied filters", () => {
    const initialState = {
      products: [
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
        {
          _id: 3,
          name: "syngonium",
          categoryName: "indoor",
          image: "/indoor/syngonium.webp",
          price: 150,
          discount: 10,
          discount_amt: 15,
          rating: 4,
        },
        {
          _id: 4,
          name: "spiral bamboo",
          categoryName: "bamboo",
          image: "/bamboo/spiral-bamboo.webp",
          price: 400,
          discount: 10,
          discount_amt: 40,
          rating: 3,
        },
        {
          _id: 5,
          name: "balsam",
          categoryName: "perennial",
          image: "/perennial/balsam.webp",
          price: 100,
          discount: 10,
          discount_amt: 10,
          rating: 3,
        },
      ],
      filteredProducts: [
        {
          _id: 5,
          name: "balsam",
          categoryName: "perennial",
          image: "/perennial/balsam.webp",
          price: 100,
          discount: 10,
          discount_amt: 10,
          rating: 3,
        },
      ],
      noProducts: 5,
      categories: [
        { name: "perennial", isChecked: true },
        { name: "palm", isChecked: false },
        { name: "indoor", isChecked: true },
        { name: "fruit", isChecked: false },
        { name: "bamboo", isChecked: true },
        { name: "herb", isChecked: true },
      ],
      rating: [
        { stars: 4, isChecked: false },
        { stars: 3, isChecked: true },
        { stars: 2, isChecked: false },
        { stars: 1, isChecked: false },
      ],
      range: 250,
      sortOrder: true,
    };
    const action = {
      type: "RESET_FILTERS",
    };
    const expectedState = {
      ...initialState,
      categories: [
        { name: "perennial", isChecked: true },
        { name: "palm", isChecked: true },
        { name: "indoor", isChecked: true },
        { name: "fruit", isChecked: true },
        { name: "bamboo", isChecked: true },
        { name: "herb", isChecked: true },
      ],
      rating: [
        { stars: 4, isChecked: false },
        { stars: 3, isChecked: false },
        { stars: 2, isChecked: false },
        { stars: 1, isChecked: true },
      ],
      range: 500,
    };
    const result = productReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });
  test("should select the specific category", () => {
    const initialState = {
      products: [],
      filteredProducts: [],
      noProducts: 0,
      categories: [
        { name: "perennial", isChecked: true },
        { name: "palm", isChecked: false },
        { name: "indoor", isChecked: true },
        { name: "fruit", isChecked: false },
        { name: "bamboo", isChecked: true },
        { name: "herb", isChecked: true },
      ],
      rating: [
        { stars: 4, isChecked: false },
        { stars: 3, isChecked: true },
        { stars: 2, isChecked: false },
        { stars: 1, isChecked: false },
      ],
      range: 500,
      sortOrder: true,
    };
    const action = {
      type: "CATEGORY_INIT",
      payload: "palm",
    };
    const expectedState = {
      ...initialState,
      categories: [
        { name: "perennial", isChecked: false },
        { name: "palm", isChecked: true },
        { name: "indoor", isChecked: false },
        { name: "fruit", isChecked: false },
        { name: "bamboo", isChecked: false },
        { name: "herb", isChecked: false },
      ],
    };
    const result = productReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });
});
