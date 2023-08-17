import CallToAction from "./CallToAction";
import Description from "./Description";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <>
      <CallToAction />
      <Specials />
      <Testimonials />
      <Description />

      <h1>Title</h1>
      <h2>Sub title</h2>
      <h3>section title</h3>
      <h4>home or call to action</h4>
      <h5>section category</h5>
      <h6>card title</h6>
      <p>
        paragraph text with some <span>highlighted text</span>
      </p>
    </>
  );
};

export default HomePage;
