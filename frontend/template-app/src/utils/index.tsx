import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Userprovider from "src/Contexts/userContext";

type PropsFullComponent = {
  children: JSX.Element;
};

export const FullComponent = ({ children }: PropsFullComponent) => {
  return (
    <Userprovider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={children} />
        </Routes>
      </BrowserRouter>
    </Userprovider>
  );
};
