import './CardsOnPage.css';
import CardItemHomePage from './CardItemHomePage';

function CardsOnPage({data}) {
    
  return (
    <div className="cards_container">
      {data.map( destination => (
        <CardItemHomePage
        key={destination.id}
        src={destination.image}
        text={destination.name}
        description={destination.description}
        />
      ))}
    </div>
  )
}

export default CardsOnPage;