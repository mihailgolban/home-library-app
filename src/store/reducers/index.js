import {combineReducers} from "redux";
import persistStore from './persistStore';
import appTheme from "./theme";
import booksReducer from "./books";

const RootReducer = combineReducers({
    persistStore,
    appTheme,
    booksReducer
});

export default RootReducer;
