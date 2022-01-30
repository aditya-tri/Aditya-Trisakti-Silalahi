import React from "react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";

export default function Login() {
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="Login logo" />
        <button className="btn">Sign In</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
