import React, { useEffect, useState } from "react";
import mockRepos from "./mockData/mockRepos";
import mockUser from "./mockData/mockUser";
import mockFollowers from "./mockData/mockFollowers";
import axios from "axios";

const githubAPI = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  // Request Loading
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // error
  const [error, setError] = useState({ show: false, msg: "" });

  // check rate
  const checkRequests = () => {
    axios(`${githubAPI}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "Sorry, you have reached the API request limit");
        }
      })
      .catch((err) => console.log(err));
  };

  function toggleError(show, msg) {
    setError({ show, msg });
  }

  useEffect(checkRequests, []);
  return (
    <GithubContext.Provider
      value={{ githubUser, repos, followers, requests, error }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
