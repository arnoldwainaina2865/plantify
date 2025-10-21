import authReducer from "./auth-reducer";

describe("tests for auth reducer", () => {
  test("should login user", () => {
    const action = {
      type: "LOGIN_USER",
      payload: { encodedToken: "some_auth_token" },
      remember_me: true,
    };
    const intialState = {
      isLoggedIn: false,
      authToken: "",
    };
    const expectedState = {
      isLoggedIn: true,
      authToken: "some_auth_token",
    };
    const result = authReducer(intialState, action);
    expect(result).toEqual(expectedState);
  });
  test("should add existing token to authState", () => {
    const action = {
      type: "ADD_EXISTING_AUTH_TOKEN",
      payload: "some_auth_token",
    };
    const intialState = {
      isLoggedIn: false,
      authToken: "",
    };
    const expectedState = {
      isLoggedIn: true,
      authToken: "some_auth_token",
    };
    const result = authReducer(intialState, action);
    expect(result).toEqual(expectedState);
  });
  test("should logout user", () => {
    const action = { type: "LOGOUT_USER" };
    const intialState = { isLoggedIn: true, authToken: "some_auth_token" };
    const expectedState = { isLoggedIn: false, authToken: "" };
    const result = authReducer(intialState, action);
    expect(result).toEqual(expectedState);
  });
});
