import React, { useContext } from "react";
import { Info, Navbar, Search, User } from "../components";
import { GithubContext } from "../context/context";
import loadingImage from "../images/preloader.gif";

export default function Dashboard() {
  const { isLoading } = useContext(GithubContext);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} alt="loading-img" className="loading-img" />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
    </main>
  );
}
