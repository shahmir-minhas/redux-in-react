//combining reducers 

import { combineReducers } from "redux";
import cakeReducer from './Cake/CakeReducer';
import iceCreammReducer from './IceCream/IceCreamReducer';

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream: iceCreammReducer,
})

export default rootReducer;