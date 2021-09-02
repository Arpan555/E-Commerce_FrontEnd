import { SET_PRODUCTS,SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT,FILTER_DATA,ADD_CART,SIGNUP} from "./index.js";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct=()=>{
  return{
    type:REMOVE_SELECTED_PRODUCT,
    
  }
}
export const filterData=(products)=>{
  return{
    type:FILTER_DATA,
    payload:products,
  }
}
export const addCart=(data)=>{
  return{
    type:ADD_CART,
    payload:data
  }
}
export const signUp=(data)=>{
  return{
    type:SIGNUP,
    payload:data
  }
}