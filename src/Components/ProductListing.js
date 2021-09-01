import React, {useEffect} from "react";
import { useDispatch} from "react-redux";
import ProductComponent from "./ProductComponent";
import { requestfetchProducts} from "../Thunk";
const ProductPage = () => {
   const dispatch = useDispatch();
   useEffect(() => {
    dispatch(requestfetchProducts())
  }, [dispatch]);
  return (
    <div>
      <center>
       <br/><br/><br/><br/><br/>
      <h1>All Products</h1>
      <div >
      <ProductComponent />
      </div>
      </center>
    </div>
  );
};

export default ProductPage;
