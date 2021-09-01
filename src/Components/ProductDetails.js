import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {requestfetchProductDetail} from "../Thunk"
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  console.log(product)
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(requestfetchProductDetail(productId))
}, [dispatch]);
  return (
   <div>
     {Object.keys(product).length === 0 ? (<div>...Loading</div>) : 
            (
              <div>
                  <div>
                          <div><img src={image} /></div>
                          <div >
                            <h2>{title}</h2>
                            <h3>${price}</h3>
                            <h3>{category}</h3>
                            <h3>{description}</h3>
                          <div>
                          <div>
                            Add to Cart
                          </div>
                </div>
                </div>
                </div>
              </div>
            )}
   </div> 
) 
}

export default ProductDetails;
