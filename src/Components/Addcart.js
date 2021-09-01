import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {requestAddCart} from "../Thunk"
const Addcart = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestAddCart())
        },[dispatch])
    return (
        <div>
            <center>
           <h1>Add Cart</h1>
            </center>
        </div>
    )
}

export default Addcart
