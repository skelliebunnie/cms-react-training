import Comic from "../components/Comic.tsx";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Comic", () => {
	it("renders info about a comic book", () => {
	  render(<Comic />);
	  // check if all components are rendered
	  expect(screen.getByTestId("result")).toBeInTheDocument();
	});
  });