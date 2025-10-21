const authReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXISTING_AUTH_TOKEN":
      return {
        ...state,
        isLoggedIn: true,
        authToken: action.payload,
      };
    case "LOGIN_USER":
      if (action.remember_me) {
        window.localStorage.setItem("authToken", action.payload.encodedToken);
      }
      return {
        ...state,
        isLoggedIn: true,
        authToken: action.payload.encodedToken,
      };
    case "LOGOUT_USER":
      window.localStorage.clear("authToken");
      return { ...state, isLoggedIn: false, authToken: "" };
    default:
      return state;
  }
};

export default authReducer;
