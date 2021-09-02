import React, { useEffect } from "react";
import { useParams,useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Detail.css"
import {addCart} from "../redux/actions/productsActions"
import {requestfetchProductDetail} from "../Thunk"
import { removeSelectedProduct } from "../redux/actions/productsActions";
const ProductDetails = () => {

  const { productId } = useParams();
  const token=useSelector(state=>state.register.token)
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const history=useHistory()

  useEffect(() => {
    if(productId && productId!=="")
    {
      dispatch(requestfetchProductDetail(productId))
    }
    return()=>{
      dispatch(removeSelectedProduct())
    }
  }, [productId]);
  return (
   <div className="div-main">
     <center>
       <h1>Product Detail</h1><br/><br/>
     {Object.keys(product).length === 0 ? (<div>...Loading</div>) : 
            (
              <div>                  
              <img className="img-detail" src={image} />
              <h2 className="title-detail"><b>Title: </b>{title}</h2>
              <h3 className="price-detail"><b>Price in ($): </b>{price}</h3>  
              <h3 className="category-detail"><b>Category: </b>{category}</h3>
              <h3 className="description-detail"><b>Description: </b>{description}</h3>
              <button className="btn btn-primary" 
              onClick={() => dispatch(addCart(product))}>Add Cart</button>  &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="button" className="btn btn-primary" value="Buy Now" onClick={()=>
              {!token?history.push("/login"):history.push(`/checkout`);}
              } />
              </div>
            )}
    </center>
   </div> 
) 
}

export default ProductDetails;
