import React from "react";
import { Info, Navbar, Search, User } from "../components";

export default function Dashboard() {
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
    </main>
  );
}
