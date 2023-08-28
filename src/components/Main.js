import { Routes, Route, useNavigate } from "react-router-dom";

import { useReducer } from "react";

import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

import { initializeTimes, updateTimes } from "../utils/utils";
import { submitAPI } from "../utils/mockAPI";
import ConfirmedBooking from "./ConfirmedBooking";

function Main() {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const confirm = submitAPI(formData);
    if (confirm) navigate("/booking-confirmed");
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes()}
              dispatch={dispatch}
              submit={submitForm}
            />
          }
        />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
