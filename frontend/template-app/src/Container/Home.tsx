import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/userContext";
import { UserContextType } from "../Contexts/userContext";
import { HomeContainer } from "./Style";

export function Home() {
  const { user } = useContext(UserContext) as UserContextType;
  return (
    <HomeContainer>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <p>{user?.name}</p>
    </HomeContainer>
  );
}
