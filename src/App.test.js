import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// normal testing w fire event
describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    screen.debug();
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Mel Incognito" },
    });

    screen.debug();
  });
});
// setting with an async event
describe("App", () => {
  test("renders the App component", async () => {
    render(<App />);

    screen.debug();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Mel Incognito" },
    });

    screen.debug();
  });
});
