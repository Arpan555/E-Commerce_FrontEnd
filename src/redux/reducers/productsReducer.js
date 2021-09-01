import {SET_PRODUCTS,SELECTED_PRODUCT} from "../actions/index.js"
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState,action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {},action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
