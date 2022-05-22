import React from "react";
import I18n from "./i18n/I18n";
import Translator from "./i18n/Translator";

interface HeaderProps {
  handleDarkTheme: () => void;
}

export const Header = ({ handleDarkTheme }: HeaderProps) => {
  return (
    <>
      <div>header</div>
      <button onClick={handleDarkTheme}>Dark Theme</button>

      <I18n />

      <h1>
        <Translator path="home.message" />
      </h1>
    </>
  );
};
