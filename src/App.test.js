import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders app title", () => {
  render(<App />);
  const titleElement = screen.getByText(/my app title/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders a button", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /click me/i });
  expect(buttonElement).toBeInTheDocument();
});

test("renders a list of items", () => {
  render(<App />);
  const listItemElements = screen.getAllByRole("listitem");
  expect(listItemElements).toHaveLength(3);
});

test("renders an error message when data fetch fails", () => {
  // Mocking a failed data fetch
  jest
    .spyOn(global, "fetch")
    .mockRejectedValueOnce(new Error("Data fetch failed"));

  render(<App />);
  const errorMessageElement = screen.getByText(/error: data fetch failed/i);
  expect(errorMessageElement).toBeInTheDocument();
});

test("updates state on button click", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /click me/i });

  // Simulate a button click
  buttonElement.click();

  const updatedTextElement = screen.getByText(/updated text/i);
  expect(updatedTextElement).toBeInTheDocument();
});
