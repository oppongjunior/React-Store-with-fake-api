import { createStore,combineReducers,applyMiddleware } from "redux";
import logger from 'redux-logger'
import { productReducers } from "./products/productReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { singleReducers } from "./Single/singleReducer";
import { cartReducers } from "./carts/cartReducer";

const reducers = combineReducers({products:productReducers,single:singleReducers,cart:cartReducers});

const store = createStore(reducers,composeWithDevTools(applyMiddleware(logger,thunk)));

export default store;