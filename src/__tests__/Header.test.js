import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "jest-canvas-mock";
import "@testing-library/jest-dom";

jest.mock("lottie-web", () => ({
  loadAnimation: jest.fn(() => ({
    play: jest.fn(),
    stop: jest.fn(),
    destroy: jest.fn(),
    setSpeed: jest.fn(),
    setDirection: jest.fn(), // Add setSpeed to the mock
  })),
}));
beforeEach(() => {
  jest.clearAllMocks();
});
it("Should load header with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "👤 Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should load header with an empty cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/🛒/);
  expect(cartItems).toBeInTheDocument();
});

it("Should load header with login button click logout change", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "👤 Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "👤 Logout" });
  expect(logoutButton).toBeInTheDocument();
});
