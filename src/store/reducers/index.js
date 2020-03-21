import {combineReducers} from "redux";
import persistStore from './persistStore';

const RootReducer = combineReducers({persistStore});

export default RootReducer;
