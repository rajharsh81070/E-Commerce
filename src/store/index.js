import { combineReducers, createStore } from "redux";

import cartReducer from "./cart";
import categoriesReducer from "./categories";
import itemsReducer from "./items";

const reducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  items: itemsReducer
});

const store = createStore(reducer);

export default store;
