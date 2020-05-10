import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { ProductConsumer } from "./Context";

function Details() {
  return (
    <ProductConsumer>
      {(value) => {
        {
          const { id, company, img, info, price, title, inCart } = value.detail;
          return (
            <div className="container">
              {/* ==========title======== */}
              <div className="row">
                ]
                <div className="col-10 max-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* ==========title end======== */}

              {/* ===========product info======== */}
              <div className="row">
                <div className="col-10 max-auto col-md-6 my-3">
                  <img
                    src={require(`./${img}`)}
                    className="img-fluid"
                    alt="product"
                  />
                </div>
                {/* ========product-text============ */}
                <div className="col-10 max-auto col-md-6 my-3 text-capitalize">
                  <h2>Name:{title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    {/* :<span className="text-uppercase">{company}</span> */}
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price:<span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product
                  </p>
                  <p className="text-muted lead">{info}</p>
                </div>
                <Link to="/">
                  <ButtonContainer>back to products</ButtonContainer>
                </Link>
                <ButtonContainer
                  cart
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? "inCart" : "add to cart"}
                </ButtonContainer>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
}
export default Details;
