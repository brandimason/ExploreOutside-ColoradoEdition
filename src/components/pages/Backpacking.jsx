import '../../App.css';
import CardsOnPage from '../CardsOnPage';
import './Pages.css';
import { useState } from 'react';
import AddNewForm from '../AddNewForm';

function Backpacking({backpackingArray, addNewBackpack}){
    const [formShown, setFormShown] = useState(false)
    
    function handleSubmit(event){
        event.preventDefault()

        const newBackpack ={
            name: event.target["name"].value,
            description: event.target["description"].value,
            image: event.target["image"].value
        }
        console.log(newBackpack)
        
        fetch('http://localhost:3000/backpacking_loops', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBackpack)
        })
        .then(res => res.json())
        .then(data => addNewBackpack(data))

        event.target.reset()
    }
    return (
        <div>
            <h1>Backpacking</h1>
            <button className="btn" onClick={()=>setFormShown(!formShown)}>Add a new destination</button>
            {formShown ? 
            <AddNewForm handleSubmit={handleSubmit} addNewBackpack={addNewBackpack}/>
            : 
            <></>
            }
            <CardsOnPage data={backpackingArray}/>
        </div>
    )
}

export default Backpacking;