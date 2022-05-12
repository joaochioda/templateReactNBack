import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
