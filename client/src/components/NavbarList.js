import React from "react";
import styled from "styled-components";

function NavbarList() {
  return (
    <Menu>
      <ul>
        <li>All Products</li>
        <li>Meat</li>
        <li>Ready-to-eat</li>
        <li>Health and Beauty</li>
        <li>Bakery</li>
        <li>Fruits and Vegetables</li>
      </ul>
    </Menu>
  );
}

const Menu = styled.div`
  position: absolute;
  top: 70px;
  left: 90px;
  z-index: 100;
  ul {
    list-style: none;
  }
  ul li {
    ${"" /* border: 1px solid; */}
    margin: 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 15px 20px;
    border-radius: 8px;
    background: var(--mainBlue) !important;
    color: #fff;
  }
`;

export default NavbarList;
