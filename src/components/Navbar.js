import React from "react";
import styled from "styled-components";
import { Cart } from "./index";
import { FaJediOrder } from "react-icons/fa";

function Navbar(props) {
  return (
    <nav>
      <Wrapper>
        <h2>
          <FaJediOrder /> Shoppy
        </h2>
        <Cart />
      </Wrapper>
    </nav>
  );
}

const Wrapper = styled.div`
  background-color: #06283d;
  color: #dff6ff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 2rem;
  }
`;
export default Navbar;
