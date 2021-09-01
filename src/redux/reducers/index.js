import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import {register} from "./regReducer"
export const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  register
});
