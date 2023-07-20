// import './Cards.css';
import CardItemHomePage from './CardItemHomePage';

function Cards() {
  return (
    <div className="cards">
        <h1>Top adventures to explore near Denver!</h1>
        <div className="cards_container">
          <div className='cards_wrapper'>
            <ul className="cards_items">
              <CardItemHomePage
              src="images/blueLakes.jpeg"
              text="Top Hikes by Denver"
              label="Hiking"
              path="/hiking"/>
               <CardItemHomePage
              src="images/woman-backpacking.webp"
              text="Best Backpacking Loops"
              label="Backpacking"
              path="/backpacking"/>
               <CardItemHomePage
              src="images/camping.jpeg"
              text="All kinds of Camping"
              label="Camping"
              path="/camping"/>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Cards;