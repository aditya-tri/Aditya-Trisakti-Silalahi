import React, { useState } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

export default function Search() {
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    console.log(user);
  };
  return (
    <section className="section">
      <Wrapper className="section-center">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input type="text" placeholder="Enter Github User" />
          </div>
        </form>
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div``;
