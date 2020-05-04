import React,{useState} from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts, detailProduct } from "../data";


import {ProductConsumer} from "./Context"



function ProductList() {
  const [products] = useState(storeProducts);

  

  
   
  return (
    
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="Products" />
          <div className="row">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product product={product}/>
                })
              }}
             
          </ProductConsumer>
        
        </div>
      </div>
      </div>;
  
     
    </React.Fragment>
      /* <Product /> */
  );
}

export default ProductList;
