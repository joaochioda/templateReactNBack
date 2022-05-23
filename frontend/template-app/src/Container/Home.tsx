import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Translator from "src/components/i18n/Translator";
import { UserContextType, UserContext } from "src/Contexts/userContext";
import { HomeContainer } from "./Style";

export function Home() {
  const { user } = useContext(UserContext) as UserContextType;
  return (
    <HomeContainer>
      <h2>
        <Translator path="home.message" />
      </h2>
      <ul>
        <li>
          <Link to="/about">
            <Translator path="home.about" />
          </Link>
        </li>
      </ul>
      <p>{user?.name}</p>
    </HomeContainer>
  );
}
