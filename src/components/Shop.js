import React from "react";
import styled from "styled-components";
import data from "./assets/data";

function Shop(props) {
  return (
    <Wrapper>
      {data.map((item) => {
        return (
          <div key={item.id} className="item-container">
            <img src={item.image} alt={item.name} />

            <div className="item-content">
              <h2> {item.name} </h2>
              <h3 className="item-price"> ${item.price}</h3>
              <p> {item.details} </p>
              <button className="btn btn-buy"> Add to Cart </button>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 90%;
  padding: 2rem;
  margin: auto;
  background-color: #dff6ff;
  .item-container {
    max-width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 4fr;
    justify-content: space-around;
    align-items: center;

    background-color: #fff;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    img {
      max-width: 100%;
    }
    h2,
    h3 {
      color: #06283d;
    }
    p {
      line-height: 1.5;
      color: #06283d;
    }
    button {
      display: block;
      width: 100%;
      background-color: #06283d;
      color: #dff6ff;
      border: none;
      padding: 6px 1rem;
    }
  }
  @media (min-width: 992px) {
    max-width: 80%;
    .item-container {
      max-width: 60%;
      margin: auto;
      margin-bottom: 2rem;
      grid-template-columns: 2fr 3fr;
    }
  }
`;
export default Shop;
