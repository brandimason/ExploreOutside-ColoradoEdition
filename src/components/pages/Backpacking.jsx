import '../../App.css';
import CardsOnPage from '../CardsOnPage';
import './Pages.css';

function Backpacking({backpackingArray}){
    return (
        <div>
            <h1>Backpacking</h1>
            <CardsOnPage data={backpackingArray}/>
        </div>
    )
}

export default Backpacking;