import RestaurantFood from "../assets/restauranfood.jpg";

const CallToAction = () => {
  return (
    <>
      <div className="cta--container">
        <div className="cta--info">
          <h1 className="title-restaurant">Little Lemon</h1>
          <h2 className="subtitle-restaurant">Chicago</h2>
          <p className="cta--text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="btn">Reserve a Table</button>
        </div>
        <div>
          <div className="cta--image">
            <img alt="Restaurant food" src={RestaurantFood} width="200px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
