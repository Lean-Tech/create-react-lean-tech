import {combineReducers} from "redux";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";
import item from "./itemReducer";

const persist = {
    key: 'app-root',
    storage,
    whitelist: []
};

const rootReducer = combineReducers({
    item
});

export default persistReducer(persist,rootReducer);
