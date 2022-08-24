/* eslint-disable no-constant-condition */
import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./Pages/HomePage/Home";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import Userprovider from "./Contexts/userContext";
import { Header } from "./components/Header/Header";
import { About } from "./Pages/AboutPage/About";
import { withApiCalls } from "./HOCs/withApiCalls";
import "./i18n";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const HomePage = withApiCalls(Home);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Userprovider>
        <Header handleDarkTheme={() => setIsDarkTheme(!isDarkTheme)} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div>not found</div>} />
          </Routes>
        </BrowserRouter>
      </Userprovider>
    </ThemeProvider>
  );
};

export default App;
