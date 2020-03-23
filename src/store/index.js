import {applyMiddleware, createStore, compose} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import ReduxThunk from "redux-thunk";
import RootReducer from "./reducers";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = createStore(persistedReducer, compose(applyMiddleware(ReduxThunk)));

export const persistor = persistStore(store);

export default store;
