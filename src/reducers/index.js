import { combineReducers } from "redux";
import user from "./user";
import commodity from "./commodity";

export default combineReducers({
  user,
  commodity
});
