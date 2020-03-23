import {combineReducers} from "redux";
import persistStore from './persistStore';
import appTheme from "./theme";
import booksReducer from "./books";
import shelvesReducer from "./shelves";

const RootReducer = combineReducers({
    persistStore,
    appTheme,
    booksReducer,
    shelvesReducer
});

export default RootReducer;
