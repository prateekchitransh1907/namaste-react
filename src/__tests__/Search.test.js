import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/ResListData.json";
import "jest-canvas-mock";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

jest.mock("lottie-web", () => ({
  loadAnimation: jest.fn(() => ({
    play: jest.fn(),
    stop: jest.fn(),
    destroy: jest.fn(),
    setSpeed: jest.fn(),
    setDirection: jest.fn(), // Add setSpeed to the mock
  })),
}));
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should render the body component with Search button", async () => {
  const user = userEvent.setup();
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchBar = screen.getByTestId("searchbar");
  expect(searchBar).toBeInTheDocument();
  //   await fireEvent.change(searchBar, {
  //     target: { value: "Pizza Hut" },
  //   });
  await user.type(searchBar, "Pizza");
  const filteredCards = await screen.findAllByTestId("resCard");
  expect(filteredCards.length).toBe(3);
});
it("Should render the body component with Top Rated button", async () => {
  const user = userEvent.setup();
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const topRatedButton = screen.getByTestId("topRated");
  expect(topRatedButton).toBeInTheDocument();
  //   await fireEvent.change(searchBar, {
  //     target: { value: "Pizza Hut" },
  //   });
  fireEvent.click(topRatedButton);
  const filteredCards = await screen.findAllByTestId("resCard");
  expect(filteredCards.length).toBe(14);
});
