import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
const Cart = () => {
    const cartData=useSelector(state=>state.allProducts.cartData)
    const token = useSelector(state =>state.register.token)
    const history=useHistory()
return(
        <>
        <center>
          {cartData.length>0?(
            <>
            <h2>Cart</h2>
          {cartData.map((item,i) => 
          <div className="div-cart" key={i}>
            <div>
            <img className="fix-size" src={item.image} alt={item.title}/>
            </div>
            <h3>Title:-{item.title}</h3>
            <h3>Price:-{item.price}</h3>
           </div>
           )}
           
           <br/>
        
          {token?
          <input type="button" className="btn btn-primary" value="checkout" 
          onClick={()=>history.push('/checkout')}/>:""}
        
            </>
          ):(
            <><h1><center>Empty</center></h1>
            </>)}
        </center>
        </>
    )
       
}
export default Cart


        
  