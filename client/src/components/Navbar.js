import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../logo.svg";
import { ButtonContainer } from "./Button";
import styled from "styled-components";
import NavbarList from "./NavbarList";
import Data from "../data";
import Product from "./Product";
function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [serach, setserach] = useState();
  const SearchProduct = (e) => {
    setserach(e.target.value);
    let tempSearch = [];
    if (serach === Product) {
      return (tempSearch = Product);
    } else {
      return null;
    }
    console.log(tempSearch);
  };

  return (
    <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
      <Link to="/">
        <img src={img} alt="store" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            <span onClick={() => setNavOpen(!navOpen)} className="all">
              Product categories
            </span>
          </Link>
        </li>
      </ul>
      <input
        type="text"
        value={serach}
        onChange={SearchProduct}
        placeholder="search products....."
      />
      {navOpen ? <NavbarList /> : ""}
      <Link to="/Cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fa fa-cart-plus" />
          </span>
          my cart
        </ButtonContainer>
      </Link>
      <Link to="/login">
        <button>Login|SignUp</button>
      </Link>
    </NavWrapper>
  );
}
const NavWrapper = styled.nav`
  background: var(--mainBlue) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
export default Navbar;
