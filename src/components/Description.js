import RestaurantChef from "../assets/restaurant chef B.jpg";

const Description = () => {
  return (
    <>
      <div className="desc--container">
        <div className="desc--info">
          <h1 className="desc--title">Little Lemon</h1>
          <h2 className="desc--subtitle">Chicago</h2>
          <p className="desc--text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <img src={RestaurantChef} alt="Restaurant Chef" width="250px" />
      </div>
    </>
  );
};

export default Description;
