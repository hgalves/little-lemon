import { act, fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("Submit button is working", () => {
  const handle = jest.fn();

  render(
    <BookingForm availableTimes={[]} dispatch={() => {}} submit={handle} />
  );
  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  const errorMsg = screen.getByText("Invalid values, please check the form.");

  expect(errorMsg).toBeInTheDocument();
});
