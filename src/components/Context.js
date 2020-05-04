import React, { useState } from "react";
import { storeProducts, detailProduct } from "../data";

// import Product from './Product';

const ProductContext = React.createContext();

function ProductProvider(props) {
    const [products] = useState(storeProducts);
  const [detail] = useState(detailProduct);
// handleDetail = () => {
    
// }
// addToCard = () => {
  
// }
  return (
      <ProductContext.Provider value={{ products}}>
      {props.children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
