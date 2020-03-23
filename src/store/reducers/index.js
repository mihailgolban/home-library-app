import {combineReducers} from "redux";
import appTheme from "./theme";
import booksReducer from "./books";
import shelvesReducer from "./shelves";

const RootReducer = combineReducers({
    appTheme,
    booksReducer,
    shelvesReducer
});

export default RootReducer;
