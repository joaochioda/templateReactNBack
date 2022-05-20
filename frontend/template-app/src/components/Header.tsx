import React from "react";

interface HeaderProps {
  handleDarkTheme: () => void;
}

export const Header = ({ handleDarkTheme }: HeaderProps) => {
  return (
    <>
      <div>header</div>
      <button onClick={handleDarkTheme}>Dark Theme</button>
    </>
  );
};
