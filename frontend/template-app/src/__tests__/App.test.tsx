import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello World!/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("router redirect", () => {
    render(<App />);

    const linkElement = screen.getByRole("link", { name: /about/i });
    fireEvent.click(linkElement);

    const aboutPage = screen.getByText(/about page/i);
    expect(aboutPage).toBeInTheDocument();
  });
});
