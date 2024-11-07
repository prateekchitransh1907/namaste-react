import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../components/RestaurantMenu";
import Cart from "../components/Cart";
import { render, screen, fireEvent } from "@testing-library/react";
import MOCK_DATA_MENU from "../mocks/ResMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
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
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_MENU),
  })
);

it("Should load the cart component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("Recommended (20)");
  expect(accordionHeader).toBeInTheDocument();
  expect(screen.getAllByTestId("fooditems").length).toBe(20);
  expect(screen.getByText("🛒 (0)")).toBeInTheDocument();
  const addBtns = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("🛒 (1)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("🛒 (2)")).toBeInTheDocument();
  expect(screen.getAllByTestId("fooditems").length).toBe(22);
});
