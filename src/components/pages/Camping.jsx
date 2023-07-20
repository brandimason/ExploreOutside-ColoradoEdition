import '../../App.css';
import CardsOnPage from '../CardsOnPage';
import './Pages.css';
import { useState } from 'react';
import AddNewForm from '../AddNewForm';

function Camping({campingArray, addNewCamp}){
    const [formShown, setFormShown] = useState(false)

    function handleSubmit(event){
        event.preventDefault()

        const newCamp ={
            name: event.target["name"].value,
            description: event.target["description"].value,
            difficulty: event.target["difficulty"].value
        }
        
        fetch('http://localhost:3000/camping', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCamp)
        })
        .then(res => res.json())
        .then(data => addNewCamp(data))

        event.target.reset()
    }
    return (
        <div>
            <h1>Camping</h1>
            <button className="btn" onClick={()=>setFormShown(!formShown)}>Add a new destination</button>
            {formShown ? 
            <AddNewForm handleSubmit={handleSubmit} addNewCamp={addNewCamp}/>
            : 
            <></>
            }
            <CardsOnPage data={campingArray}/>
        </div>
    )
}

export default Camping;