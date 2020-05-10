import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "../data";
import CartList from "./cart/CartList";
import cartTotals from "./cart/cartTotals";

// import Product from './Product';

const ProductContext = React.createContext();

function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [cartSubtotal, setCartSubtotal] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);
  const [cartTax, setCartTax] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  // const [clearCart, setclearCart] = useState()
  // const [addTotals,setAddTotals]=useState()

  // storing products on new reference
  useEffect(() => {
    setdbProducts();
  }, []);

  useEffect(() => {
    let subtotal = 0;
    cart.map((product) => {
      subtotal += product.price;
    });
    let tempTax = subtotal * 0.1;
    let tax = parseFloat(tempTax.toFixed(2));
    let total = tax + subtotal;
    setCartTax(tax);
    setCartTotal(total);
    setCartSubtotal(subtotal);
  }, [cart]);

  const setdbProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    setProducts(tempProducts);
  };
  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(tempProducts);
    setCart([...cart, product]);
  };

  const getItem = (id) => products.find((product) => product.id === id);

  const handleDetail = (id) => {
    let product = getItem(id);
    setDetail(product);
  };
  const increment = (id) => {
    console.log("this is incremnt");
  };
  const decrement = (id) => {
    console.log("this is decrement");
  };
  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter((item) => item.id != id);
    const index = tempProducts.indexOf(getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;
    setCart([tempCart]);
    setProducts([tempProducts]);
    cart();
  };
  const clearCart = () => {
    setCart([]);
    setdbProducts();
  };

 
  const openModal = (id) => {
    let product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        detail,
        CartList,
        cartTotals,
        clearCart,

        handleDetail,
        cart,
        modalOpen,
        modalProduct,
        addToCart,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart,
        cartSubtotal,
        cartTax,
        cartTotal,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
