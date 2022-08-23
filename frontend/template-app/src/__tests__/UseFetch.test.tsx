import React from "react";
import { useFetch, User } from "src/hooks/useFetch";
import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("App", () => {
  test("should return list of users", async () => {
    const fetchUrl = jest.fn(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 1,
              name: "John",
            },
            {
              id: 2,
              name: "Barney",
            },
          ]),
      });
    });
    await act(async () => {
      render(<TestComponent fetchUrl={fetchUrl} />);
    });
    screen.findByText("John");

    expect(screen.getByText("John")).toBeTruthy();
  });

  test("should return No data", async () => {
    const fetchUrl = jest.fn(() => {
      return Promise.resolve({
        json: () => Promise.resolve([]),
      });
    });
    await act(async () => {
      render(<TestComponent fetchUrl={fetchUrl} />);
    });
    screen.findByText("No data");
    expect(screen.getByText("No data")).toBeTruthy();
  });
});

function TestComponent({ fetchUrl }: any) {
  const [dataUser] = useFetch("users", fetchUrl) as [User[]];

  return (
    <div>
      {dataUser && dataUser.length > 0 ? (
        dataUser?.map((user) => <div key={user.id}>{user.name}</div>)
      ) : (
        <div>No data</div>
      )}
    </div>
  );
}
