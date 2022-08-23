import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello World!/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("router redirect", () => {
    render(<App />);

    const linkElement = screen.getByRole("link", { name: /about/i });
    fireEvent.click(linkElement);

    const aboutPage = screen.getByText(/about/i);
    expect(aboutPage).toBeInTheDocument();
  });
});
