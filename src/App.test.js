import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// normal testing with userEvent async events

describe("App", () => {
  test("renders App component", async () => {
    render(<App />);

    await screen.findByText(/Signed in as/);
    screen.debug();

    expect(screen.queryByText(/Searches for Mel Incognito/)).toBeNull();

    await userEvent.type(screen.getByRole("textbox"), "Mel Incognito");
    expect(screen.getByText(/Searches for Mel Incognito/)).toBeInTheDocument();
    screen.debug();
  });
});

// use userEvent over fireEvent whenever you can
// userEvent doesn't have all the features of fireEvent atm
