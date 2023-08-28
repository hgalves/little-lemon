import BookingForm from "./BookingForm";

const BookingPage = (props) => {
  return (
    <>
      <div className="booking-page--container">
        <h1>Booking page</h1>
        <BookingForm
          availableTimes={props.availableTimes}
          dispatch={props.dispatch}
          submit={props.submit}
        />
      </div>
    </>
  );
};

export default BookingPage;
