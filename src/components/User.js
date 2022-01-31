import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Repository from "./Repository";

export default function User() {
  return (
    <Wrapper>
      <Card />
      <Repository />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
