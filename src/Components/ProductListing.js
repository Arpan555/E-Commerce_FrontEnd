import React, {useEffect} from "react";
import { useDispatch} from "react-redux";
import ProductComponent from "./ProductComponent";
import { useHistory } from "react-router";
import { requestfetchProducts} from "../Thunk";
const ProductPage = () => {
   const dispatch = useDispatch();
   const history=useHistory()
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
