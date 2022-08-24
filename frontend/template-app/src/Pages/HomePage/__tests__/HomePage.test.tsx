import React from "react";
import { render, screen } from "@testing-library/react";
import { FullComponent } from "src/utils";
import { Home } from "../Home";
import { act } from "react-dom/test-utils";

import "src/i18n";

const fetchUrl = async () => {
  const response = {
    json: () => [
      {
        id: 1,
        name: "John",
      },
      {
        id: 2,
        name: "Barney",
      },
    ],
  };
  return response;
};

describe("HomePage", () => {
  it("should get HomePage h2", async () => {
    await act(async () => {
      render(
        <FullComponent>
          <Home fetchUrl={fetchUrl} />
        </FullComponent>
      );
    });

    const linkElement = screen.getByText(/Hello World!/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should render correctly list users", async () => {
    await act(async () => {
      render(
        <FullComponent>
          <Home fetchUrl={fetchUrl} />
        </FullComponent>
      );
    });

    screen.findByText("John");

    expect(screen.getByText("John")).toBeTruthy();
  });
});
