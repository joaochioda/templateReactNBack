import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Translator from "src/components/i18n/Translator";
import { UserContextType, UserContext } from "src/Contexts/userContext";
import * as S from "./Style";
import { useFetch } from "src/hooks/useFetch";
import { User } from "src/hooks/useFetch";

type PropsHome = {
  fetchUrl: () => Promise<{ json: () => { id: number; name: string }[] }>;
};

export function Home({ fetchUrl }: PropsHome) {
  const { user } = useContext(UserContext) as UserContextType;

  const [dataUser, loadinUser, errorUser] = useFetch("users", fetchUrl) as [
    User[],
    boolean,
    unknown
  ];

  if (errorUser) return <div>Error...</div>;

  return (
    <S.HomeContainer>
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

      <h2>Users:</h2>
      {loadinUser ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {dataUser.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </S.HomeContainer>
  );
}
