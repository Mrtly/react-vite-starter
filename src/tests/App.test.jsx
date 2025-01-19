import { render, screen } from "@testing-library/react";
import App from "../App";

// mock window.matchMedia for tests (this is from next-theme dark mode)
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  };

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    const textElement = screen.getByText(/react \+ vite \+ ts starter/i);

    expect(textElement).toBeVisible();

    // screen.debug(); //useful, prints out the jsx in the terminal
  });
});
