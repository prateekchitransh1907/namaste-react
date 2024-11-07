import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Page test cases", () => {
  it("Contact Page Component heading should be loaded", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Contact Page Component Button should be loaded", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Contact Page Component inputs should be loaded", () => {
    render(<Contact />);

    const inputbox = screen.getAllByRole("textbox");
    expect(inputbox.length).toBe(4);
  });
});
