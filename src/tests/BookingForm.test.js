import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("Submit button is working", () => {
  render(<BookingForm />);
  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);
  expect(screen.getByText("Book Now")).toBeInTheDocument();
});
