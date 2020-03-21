import {combineReducers} from "redux";
import persistStore from './persistStore';
import appTheme from "./theme";

const RootReducer = combineReducers({persistStore, appTheme});

export default RootReducer;
