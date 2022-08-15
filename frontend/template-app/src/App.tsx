/* eslint-disable no-constant-condition */
import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./Container/Home";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import Userprovider from "./Contexts/userContext";
import { Header } from "./components/Header/Header";

import "./i18n";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Userprovider>
        <Header handleDarkTheme={() => setIsDarkTheme(!isDarkTheme)} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div>about page</div>} />
            <Route path="*" element={<div>not found</div>} />
          </Routes>
        </BrowserRouter>
      </Userprovider>
    </ThemeProvider>
  );
};

export default App;
