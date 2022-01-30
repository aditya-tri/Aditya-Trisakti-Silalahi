import React from "react";
import styled from "styled-components";

export default function Error() {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>Sorry, The Page You Tried Cannot Be Found :(</h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
