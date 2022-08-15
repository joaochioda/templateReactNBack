/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

import I18n from "src/components/i18n/I18n";

describe("ButtonTheme", () => {
  it("renders without crashing", () => {
    const i18n = jest.fn(() => {
      return {
        changeLanguage: jest.fn(),
        language: "en-US",
      };
    });
    render(<I18n i18n={i18n()} />);
  });

  it("render eua flag if language eua is selected", async () => {
    const i18n = jest.fn(() => {
      return {
        changeLanguage: jest.fn(),
        language: "en-US",
      };
    });

    render(<I18n i18n={i18n()} />);

    const frontImage = document.querySelector(
      ".content .front img"
    ) as HTMLImageElement | null;
    expect(frontImage?.src).toBe("http://localhost/eua-flag.svg");
  });

  it("render brazil flag if language br is selected", async () => {
    const i18n = jest.fn(() => {
      return {
        changeLanguage: jest.fn(),
        language: "pt-BR",
      };
    });

    render(<I18n i18n={i18n()} />);

    const frontImage = document.querySelector(
      ".content .front img"
    ) as HTMLImageElement | null;
    expect(frontImage?.src).toBe("http://localhost/brasil-flag.svg");
  });

  it("change flag with click", async () => {
    const changeLanguage = jest.fn();

    const i18n = jest.fn(() => {
      return {
        changeLanguage,
        language: "pt-BR",
      };
    });

    render(<I18n i18n={i18n()} />);
    const themeCheckBox = screen.getByTestId("flag-i18n");
    fireEvent.click(themeCheckBox);

    expect(changeLanguage).toHaveBeenCalledTimes(1);
  });
});
