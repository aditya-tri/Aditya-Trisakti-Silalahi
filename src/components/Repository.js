import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { format } from "timeago.js";

export default function Repository() {
  const { repos } = useContext(GithubContext);

  return (
    <Wrapper>
      <div className="repos">
        {repos.map((repos, index) => {
          const { html_url, name, language, updated_at } = repos;
          return (
            <article key={index}>
              <div>
                <a href={html_url}>{name}</a>
                <div className="info">
                  <p>{language}</p>
                  <p>Updated {format(updated_at)}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  background: var(--clr-white);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: " Repository";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  .repos {
    overflow: scroll;
    height: 300px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem;
    padding: 1rem 2rem;
  }
  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-grey-5);
    }
    .info {
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      width: 15rem;
    }
    p {
      font-size: 10px;
    }
  }
`;
