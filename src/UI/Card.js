import './Card.css';

function Card({ children, className }) {
    const classes = 'card ' + className; // Added a space here
    return <div className={classes}>{children}</div>;
}

export default Card;
