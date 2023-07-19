import '../../App.css';
import CardsOnPage from '../CardsOnPage';
import './Hiking.css';

function Backpacking({backpackingArray}){
    const backpackingList = backpackingArray.map((backpack) => {
        return <CardsOnPage key={backpack.distance} item={backpack}/>
    })
    return (
        <div>
            <h1>Backpacking</h1>
            {backpackingList}
        </div>
    )
}

export default Backpacking;