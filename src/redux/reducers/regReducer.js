import {SIGNUP,LOGIN,LOGOUT} from "../actions/index"
const initialState={
    token: localStorage.getItem("token"),
}

export const register=(state=initialState,action)=>{
    switch(action.type){
        case SIGNUP:
            return{
                ...state,
                ...action.payload
            }
        case LOGIN:
            return{
                ...state,
                token:action.payload.token
            }
            case LOGOUT:
                return{
                    ...state,
                    token:null,
                      }
        default:
            return state
    }
}