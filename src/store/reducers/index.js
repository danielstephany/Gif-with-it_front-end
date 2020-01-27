import { combineReducers } from "redux";
import userReducer from "./user";
import gifsReducer from "./gifs";

const rootReducer = combineReducers({
  userReducer,
  gifsReducer
});

export default rootReducer;
