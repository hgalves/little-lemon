import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({});
  const [availableTimes, setAvailableTimes] = useState([
    17, 18, 19, 20, 21, 22,
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData["date"] || ""}
          onChange={handleChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formData["time"] || ""}
          onChange={handleChange}>
          {availableTimes.map((time) => (
            <option key={time}>{`${time}:00`}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
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
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingForm;
