import '../../App.css';
import CardsOnPage from '../CardsOnPage';
import './Hiking.css';

function Camping({campingArray}){
    const campingList = campingArray.map((camping) => {
        return <CardsOnPage key={camping.distance} item={camping}/>
    })
    return (
        <div>
            <h1>Camping</h1>
            {campingList}
        </div>
    )
}

export default Camping;