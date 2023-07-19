import './CardsOnPage.css';
import CardItemHomePage from './CardItemHomePage';

function CardsOnPage({item}) {
    // console.log(hike)
  return (
    <div className="cards">
        <div className="cards_container">
          <div className='cards_wrapper'>
            <ul className="cards_items">
              <CardItemHomePage
              src={item.image}
              text={item.name}
              description={item.description}
              />
            </ul>
          </div>
        </div>
    </div>
  )
}

export default CardsOnPage;