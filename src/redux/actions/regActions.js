import { SIGNUP,LOGIN,LOGOUT } from "./index";

export const signup=(payload)=>{
    return{
    type:SIGNUP,
    payload
}
}
export const login=(payload)=>{
    localStorage.setItem("token",payload.token)
    return{
    type:LOGIN,
    payload
}
}
export const logout=()=>{
    return{
        type:LOGOUT
    }
}