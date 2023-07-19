import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
        <h1>Top adventures to explore near Denver!</h1>
        <div className="cards_container">
          <div className='cards_wrapper'>
            <ul className="cards_items">
              <CardItem
              src="images/blueLakes.jpeg"
              text="Top Hikes by Denver"
              label="Hiking"
              path="/hiking"/>
               <CardItem
              src="images/woman-backpacking.webp"
              text="Best Backpacking by Denver"
              label="Backpacking"
              path="/backpacking"/>
               <CardItem
              src="images/camping.jpeg"
              text="Car Camping for Everyone"
              label="Camping"
              path="/camping"/>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Cards;