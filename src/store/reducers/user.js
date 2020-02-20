let initialState = {
  signedIn: false,
  userName: "daniel",
  token: undefined,
};

export default function userReducer(state = initialState, action) {

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        signedIn: true,
        userName: action.user.userName
      };
    case "LOGOUT":
      return {
        ...state,
        signedIn: false,
        user: undefined,
      };
    default:
      return state;
  }
}
