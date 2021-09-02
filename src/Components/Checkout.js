import React, { useState } from 'react'
import { useSelector } from 'react-redux'
const Checkout = () => {
    const cartData=useSelector(state=>state.allProducts.cartData)
    const [entryForm,setEntryForm]=useState({name:"",email:"",phone:"",address:""})
    const handleInputData=(e)=>{
        let {name,value}=e.target;
      setEntryForm({...entryForm,[name]:value})

    } 
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("Ordered Sent Successfuly")
        
    }

    return (
        <div>
            <center>
                    <h1>Checkout</h1>
                        {cartData.map(item => 
                        <div className="div-cart">
                            <div>
                            <img className="fix-size" src={item.image} alt={item.title}/>
                            </div>
                            <h3>Title:-{item.title}</h3>
                            <h3>Price:-{item.price}</h3>
                        </div>
                        )}
           <br/><br/>
           
              {cartData.length>0?(
                  <>
                  <h2>Order Details</h2>
                  <p>Shipping Address Details</p>
                 <form method="POST" onSubmit={handleSubmit}>
                        <label htmlFor="html">Name: </label> &nbsp;&nbsp;
                        <input type="text" name="name" onChange={handleInputData} required /><br/><br/>
                        <label htmlFor="html">Email: </label> &nbsp;&nbsp;
                        <input type="email" name="email" onChange={handleInputData} required /><br/><br/>
                        <label htmlFor="html">Number: </label> &nbsp;&nbsp;
                        <input type="number" name="number" onChange={handleInputData} required/><br/><br/>
                        <label htmlFor="html">Address: </label> &nbsp;&nbsp;
                        <input type="text" name="address" onChange={handleInputData} required /><br/><br/>
                        <input type="submit" className="btn btn-primary" value="Done"/>
                </form>
                </>
              ): ("No Data Found")}
        
            </center>
            </div>
    )
}

export default Checkout
