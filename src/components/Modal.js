import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./Context";
import { ButtonContainer } from "./Button";

export default function Modal() {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalProduct, modalOpen, closeModal } = value;
        const { img, price, title } = modalProduct;
        if (!modalOpen) return null;
        else {
          return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                  >
                    <h5>item added to the cart</h5>
                    <img
                      src={require(`./${img}`)}
                      className="img-fluid"
                      alt="product"
                    />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price:${price}</h5>
                    <Link to="/">
                      <ButtonContainer
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Store
                      </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer
                        cart
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        go to cart
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }
      }}
    </ProductConsumer>
  );
}
const ModalContainer = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
