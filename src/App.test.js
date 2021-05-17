import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app", () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  render(<App />);
  const main = screen.getByText(/shawn haley/i);
  expect(main).toBeInTheDocument();
});
