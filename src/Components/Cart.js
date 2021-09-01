import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {requestGetCart} from "../Thunk"
const Cart = () => {
    let cart = useSelector((state) => state.allProducts.cart);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestGetCart(cart))
        },[dispatch])
    return(
        <><center>
            <h1>Cart</h1>

        </center>
        </>
    )
       
}
export default Cart