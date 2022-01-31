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

  // check rate
  const checkRequests = () => {
    axios(`${githubAPI}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
      })
      .catch((err) => console.log(err));
  };

  useEffect(checkRequests, []);
  return (
    <GithubContext.Provider value={{ githubUser, repos, followers, requests }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
