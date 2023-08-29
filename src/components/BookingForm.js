import { useState } from "react";

const BookingForm = (props) => {
  const [formData, setFormData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate the form
    if (
      !formData ||
      !formData["date"] ||
      !formData["time"] ||
      !formData["guests"] ||
      !formData["occasion"]
    ) {
      setErrorMsg("Invalid values, please check the form.");
    } else {
      setErrorMsg("");
      props.submit(formData);
    }
  };

  return (
    <>
      <h2>Book Now</h2>
      {errorMsg && <span className="error-message">{errorMsg}</span>}
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          required
          value={formData["date"] || ""}
          onChange={handleChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          required
          value={formData["time"] || ""}
          onChange={(e) => {
            handleChange(e);
            props.dispatch({ type: "selected", value: e.target.value });
          }}>
          {props.availableTimes &&
            props.availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          required
          id="guests"
          name="guests"
          value={formData["guests"] || ""}
          onChange={handleChange}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData["occasion"] || ""}
          onChange={handleChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit" onClick={handleSubmit}>
          Make Your reservation
        </button>
      </form>
    </>
  );
};

export default BookingForm;
