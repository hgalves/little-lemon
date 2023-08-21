import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials--container">
        <h1 className="testimonials--title">Testimonials</h1>
        <div className="testimonials--list">
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
