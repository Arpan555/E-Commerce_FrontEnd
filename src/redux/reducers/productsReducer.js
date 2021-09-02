import {SET_PRODUCTS,SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT, FILTER_DATA,ADD_CART,GET_CART,CLEAR_CART,CHECKOUT} from "../actions/index.js"
const initialState={
    products: [],
    cartData:[]
  }
        
export const productsReducer = (state = initialState,action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case FILTER_DATA:
      return{...state,products:action.payload}
      case ADD_CART:
         return{
          ...state,
          cartData: [...state.cartData, action.payload]
        }
      case GET_CART:
        return{
          ...state,
          cartData:action.payload
        }
      case CLEAR_CART:
        return{
          ...state,
          cartData:[]
        }
        case CHECKOUT:
          return{
            ...state,
            carts:action.payload
          }
      default:
      return state;
  }
};

export const selectedProductsReducer = (state = {},action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return { ...state, ...action.payload };
    case REMOVE_SELECTED_PRODUCT:
      return {}
    default:
      return state;
  }
};
