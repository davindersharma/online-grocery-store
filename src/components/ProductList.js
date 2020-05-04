import React, {useState}from "react";
// import Product from "./Product";
import Title from "./Title";
import { storeProducts, detailProduct } from "../data";

function ProductList() {
  const [products, setProducts] = useState(storeProducts);
  // const [detail, setDetail] = useState(detailProduct);
  return (
    
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="Products"/>
          <div className="row"/>
        </div>
  </div>
     
    </React.Fragment>
      /* <Product /> */
  );
}

export default ProductList;
