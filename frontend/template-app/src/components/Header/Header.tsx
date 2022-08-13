import React from "react";
import { ButtonTheme } from "../ButtonTheme";
import I18n from "../i18n";
import { HeaderWrapper } from "./style";

interface HeaderProps {
  handleDarkTheme: () => void;
}

export const Header = ({ handleDarkTheme }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <div>header</div>
      <div className="theme-i18n">
        <ButtonTheme onClick={handleDarkTheme} />
        <I18n />
      </div>
    </HeaderWrapper>
  );
};
