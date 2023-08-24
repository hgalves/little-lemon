import { Routes, Route } from "react-router-dom";

import { useReducer } from "react";

import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

function Main() {
  const updateTimes = (times, action) => {
    return times; /* temporary implementation */
  };

  const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
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
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
