import React from "react";
import { FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
function Cart(props) {
  return (
    <div>
      <Wrapper>
        <h2>
          <FaCartPlus />
        </h2>
        <span>10</span>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 12px;
    display: inline-block;
    color: #06283d;
    background-color: #dff6ff;
    padding: 4px;
    border-radius: 10rem;
    margin-top: -2rem;
    margin-left: -1rem;
  }
`;
export default Cart;
