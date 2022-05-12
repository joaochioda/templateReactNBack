/* eslint-disable no-constant-condition */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./Container/Home";
import { lightTheme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import Userprovider from "./Contexts/userContext";
const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Userprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div>about</div>} />
            <Route path="*" element={<div>not found</div>} />
          </Routes>
        </BrowserRouter>
      </Userprovider>
    </ThemeProvider>
  );
};

export default App;