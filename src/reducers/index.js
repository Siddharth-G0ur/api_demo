import { combineReducers } from "redux";
import user from "./user";
import singleUser from "./singleUser";
export default combineReducers({
  user,
  singleUser,
});
