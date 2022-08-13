import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import { ButtonTheme } from "src/components/ButtonTheme";

describe("ButtonTheme", () => {
  it("renders without crashing", () => {
    const handleDarkTheme = jest.fn();
    render(<ButtonTheme onClick={handleDarkTheme} />);
  });

  it("click and dispatch event", () => {
    const handleDarkTheme = jest.fn();
    render(<ButtonTheme onClick={handleDarkTheme} />);

    const themeCheckBox = screen.getByTestId("theme-checkbox");
    fireEvent.click(themeCheckBox);

    expect(handleDarkTheme).toHaveBeenCalledTimes(1);
  });
});
