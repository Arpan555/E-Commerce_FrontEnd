import axios from "axios"
import { selectedProduct, setProducts } from "./redux/actions/productsActions"
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