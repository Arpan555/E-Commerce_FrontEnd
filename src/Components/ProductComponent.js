import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products)
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (<>
            <div className="card text-center">
            <div className="overflow">
            <Link to={`/product/${id}`}>
              <img src={image} title={title} />
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
  return <>{renderList}</>;
};

export default ProductComponent;
