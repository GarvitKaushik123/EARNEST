import './Cards.css';
 
function Cards(props) {
  console.log(props.title)
  return (
    <div className="card_welcome">
      <img src={props.imageUrl} alt={props.title} />
      <div className="card_welcome-content">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default Cards;