import {selectedProduct, setProducts ,filterData,addCart} from "./redux/actions/productsActions"
import {signup,login} from "./redux/actions/regActions"
import axios from "axios"
const request=axios.create({
    baseURL:"https://fakestoreapi.com",
})
export const requestfetchProducts=(state)=>{
    return async(dispatch)=>{
        try {
            const fetchData= await request.get(`/products`)
            dispatch(setProducts(fetchData.data));
        } catch (error) 
        {
            console.log(error)    
        }
    }
}   

export const requestfetchProductDetail =(id) => {
    return async(dispatch)=>{
        try {
            const productDetailData=await request.get(`products/${id}`)
            dispatch(selectedProduct(productDetailData.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const requestFilteredData=(state)=>{
    return async(dispatch)=>{
        const {category,limit,sort}=state
        try {
            const filterDetailData=await request.get(`products/category/${category}?limit=${limit}&sort=${sort}`)
            dispatch(filterData(filterDetailData.data))
        } catch (error) {
            console.log(error)
            
        }
    }
}

export const requestAddCart=(state)=>{
    return async(dispatch)=>{
        try{
        const cartData=await request.post("/carts",state)
        dispatch(addCart(cartData.data))
        }
        catch(error){
            console.log(error)
        }
    }
}


export const requestSignup=(state)=>{
    return async(dispatch)=>{
        try {
            const signupData=await request.post("/users",state)  
            dispatch(signup(signupData.data))  
        } catch (error) {
            console.log(error)
        }
    }
}
export const requestLogin=(state)=>{
    return async(dispatch)=>{
        try {
            const loginData=await request.post("/auth/login",state)  
            dispatch(login(loginData.data))
            
        } catch (error) {
            
        }
    }
}

// export const requestGetCart=(state)=>{
//     return async(dispatch)=>{
//         try{
//         const cartData=await request.get("/carts",state)
//         console.log(cartData.data)
//         dispatch(getCart(cartData.data))
//         }
//         catch(error){
//             console.log(error)
//         }
//     }
// }



// export const requestCheckout=(state)=>{
//     return async(dispatch)=>{
//         try {
//             const checkoutData=await request.get("/carts",state)
//             console.log(checkoutData.data)
//             dispatch(checkOut(checkoutData.data))
//         } catch (error) {
            
//         }
//     }
// }