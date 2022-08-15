import React from "react";
import { ButtonThemeWrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
interface ButtonThemeProps {
  onClick: () => void;
}

export const ButtonTheme = ({ onClick }: ButtonThemeProps) => {
  return (
    <ButtonThemeWrapper>
      <input
        type="checkbox"
        className="checkbox"
        id="chk"
        onClick={onClick}
        data-testid={"theme-checkbox"}
      />
      <label className="label" htmlFor="chk">
        <FontAwesomeIcon icon={faSun} />
        <FontAwesomeIcon icon={faMoon} />

        <div className="ball"></div>
      </label>
    </ButtonThemeWrapper>
  );
};
