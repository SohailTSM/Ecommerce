// @ts-ignore
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${classes.card} ${classes[props.className] || ''}`}>{props.children}</div>
  );
};
export default Card;

Card.defaultProps = {
    className : ''
}