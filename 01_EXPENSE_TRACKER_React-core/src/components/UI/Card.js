import "./Card.css";

const Card = (props) => {
  //Card is a custom component, no default values-->
  //card have to accept all the values that comes as props
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
