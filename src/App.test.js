import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App tests", () => {
  beforeEach(() => {
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
    global.emailjs.send = jest.fn().mockImplementation(() => Promise.resolve());
    render(<App />);
  });

  test("renders app", () => {
    const main = screen.getByText(/shawn haley/i);
    expect(main).toBeInTheDocument();
  });

  test("Correct form calls emailjs", async () => {
    userEvent.type(screen.getByLabelText("Name"), "test");
    userEvent.type(screen.getByLabelText("Email"), "test@test.com");
    userEvent.type(screen.getByLabelText("Message"), "test message");
    
    await act(async () => {
      userEvent.click(screen.getByText("Send1"));
    });

    expect(global.emailjs.send).toBeCalled();
  });

  test("Incorrect form does not call emailjs", async () => {
    userEvent.type(screen.getByLabelText("Name"), "");
    userEvent.type(screen.getByLabelText("Email"), "test@test.com");
    userEvent.type(screen.getByLabelText("Message"), "test message");
    await act(async () => {
      userEvent.click(screen.getByText("Send"));
    });

    expect(global.emailjs.send).not.toBeCalled();
  });
});