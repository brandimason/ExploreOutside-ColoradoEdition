import '../../App.css';
import CardsOnPage from '../CardsOnPage';
import './Pages.css';

function Camping({campingArray}){
    return (
        <div>
            <h1>Camping</h1>
            <CardsOnPage data={campingArray}/>
        </div>
    )
}

export default Camping;