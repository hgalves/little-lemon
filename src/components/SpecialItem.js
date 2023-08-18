const SpecialItem = (props) => {
  return (
    <>
      <div className="special-item--container">
        <img
          className="special-item--img"
          src={props.image}
          alt="Restaurant special"
        />
        <div className="special-item--header">
          <h1 className="special-item--title">{props.name}</h1>
          <span className="special-item--price">{"$" + props.price}</span>
        </div>
        <p className="special-item--desc">{props.description}</p>
        <a href="/" className="special-item--link">
          Order a delivery 🚚
        </a>
      </div>
    </>
  );
};

export default SpecialItem;
