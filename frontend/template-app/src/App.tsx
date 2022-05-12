/* eslint-disable no-constant-condition */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./Container/Home";
import { lightTheme } from "./styles/theme";

import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>about</div>} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
