import React,{useState} from "react";
import {useHistory, Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { requestFilteredData } from "../Thunk";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch=useDispatch()
  const history=useHistory()
  const [filter,setFilter]=useState({category:"jewelery",limit:"5",sort:"desc"})
  const handleInputData=(e)=>{
    let {name,value}=e.target;
    setFilter({...filter,[name]:value})
    }
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(requestFilteredData(filter))
  }
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    
    return (<>
            <div className="card text-center">
                <div className="overflow">
                <Link to={`/product/${id}`}>
                  <img className="img-detail" src={image} title={title} />
                      <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text">{price}</p>
                        <p className="card-text">{category}</p>
                      </div>
                </Link>
                </div>  
            </div>
          
            </>
           );
  });
  return (<>
  <center>
    <form method="POST" onSubmit={handleSubmit}>
      <label>Category:</label>
      <input type="text" name="category" value={filter.category} onChange={handleInputData}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label>No of Data Show</label>
      <input type="number" name="limit" min="1" max="20" value={filter.limit} onChange={handleInputData}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label>Sorting</label>
      <input type="text" name="sort" value={filter.sort} onChange={handleInputData}/>
      <input type="submit" className="btn btn-primary m-3" value="Apply Filter"/>
    </form>
    <br/><br/>
  </center>
  <div>{renderList}</div>
  </>);
};

export default ProductComponent;
