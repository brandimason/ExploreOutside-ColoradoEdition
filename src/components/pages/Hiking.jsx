import '../../App.css';
import CardsOnPage from '../CardsOnPage';
import './Pages.css';
import { useState } from 'react';
import AddNewForm from '../AddNewForm';

function Hiking({hikeArray, addNewHike}){
    const [formShown, setFormShown] = useState(false)

    function handleSubmit(event){
        event.preventDefault()

        const newHike ={
            name: event.target["name"].value,
            description: event.target["description"].value,
            image: event.target["image"].value
        }
        
        fetch('http://localhost:3000/hikes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newHike)
        })
        .then(res => res.json())
        .then(data => addNewHike(data))

        event.target.reset()
    }
    return (
        <div>
            <h1>Hiking</h1>
            <button className="btn" onClick={()=>setFormShown(!formShown)}>Add a new destination</button>
            {formShown ? 
            <AddNewForm handleSubmit={handleSubmit} addNewHike={addNewHike}/>
            : 
            <></>
            }
            <CardsOnPage data={hikeArray}/>
        </div>
    )
}

export default Hiking;