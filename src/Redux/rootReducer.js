//combining reducers

import { combineReducers } from "redux";
import cakeReducer from "./Cake/CakeReducer";
import iceCreammReducer from "./IceCream/IceCreamReducer";
import userReducer from "./User/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreammReducer,
  user: userReducer,
});

export default rootReducer;
