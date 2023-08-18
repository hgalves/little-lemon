import SpecialItem from "./SpecialItem";

import GreekSalad from "../assets/greek salad.jpg";

const Specials = () => {
  return (
    <>
      <div className="specials--container">
        <div className="specials--header">
          <h1 className="specials--title">This weeks specials!</h1>
          <button className="btn">Online Menu</button>
        </div>
        <div className="specials--body">
          <SpecialItem
            image={GreekSalad}
            name="Greek Salad"
            price={12.99}
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          />
          <SpecialItem
            image={GreekSalad}
            name="Greek Salad"
            price={12.99}
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          />
          <SpecialItem
            image={GreekSalad}
            name="Greek Salad"
            price={12.99}
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          />
        </div>
      </div>
    </>
  );
};

export default Specials;
