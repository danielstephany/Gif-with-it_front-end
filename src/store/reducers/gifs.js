let initialState = {
  gifs: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "Add_GIF":
      return {
        ...state,
        gifs: [...state.gifs, action.gif]
      };
    default:
      return state;
  }
}
