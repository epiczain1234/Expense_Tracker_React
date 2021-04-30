import './Card.css'
function Card(props){
    // Can have some default styling from card.css and uses classes to use two different css styling classes that merge card and the styling of the specific componenet
    const classes = 'card ' + props.className;
    return <div className={classes} >{props.children}</div>
}
export default Card;