import '../../App.css';
import CardsOnPage from '../CardsOnPage';
import './Hiking.css';

function Hiking({hikeArray}){
    // console.log(hikeArray) this is working
    const hikeList = hikeArray.map((hike) => {
        return <CardsOnPage key={hike.distance} item={hike}/>
    })

    
    
    return (
        <div>
            <h1>Hiking</h1>
            {hikeList}
        </div>
    )
}

export default Hiking;