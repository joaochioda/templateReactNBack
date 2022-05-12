import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/userContext";

export function Home() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <p>{user.name}</p>
    </div>
  );
}
