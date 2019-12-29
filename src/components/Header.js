import React from "react";
import styled from 'styled-components';

const Header = styled.header`
    background-color: #282c34;
    height: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(0.625rem + 2vmin);
    color: white;
    padding: 1.2rem;
    cursor: pointer;
    `;

export default ({ text }) => 
  <Header>
    <h2>{text}</h2>
  </Header>;
