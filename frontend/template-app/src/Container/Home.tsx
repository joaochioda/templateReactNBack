import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Translator from "src/components/i18n/Translator";
import { UserContextType, UserContext } from "src/Contexts/userContext";
import { HomeContainer } from "./Style";

export function Home() {
  const { user } = useContext(UserContext) as UserContextType;
  return (
    <HomeContainer>
      <h1>Home</h1>
      <h2>
        <Translator path="home.message" />
      </h2>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <p>{user?.name}</p>
    </HomeContainer>
  );
}
