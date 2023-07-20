import '../../App.css';
import CardsOnPage from '../CardsOnPage';
import './Pages.css';
import { useState } from 'react';
import AddNewForm from '../AddNewForm';

function Hiking({hikeArray}){
    const [formShown, setFormShown] = useState(false)
    console.log(formShown)

    function handleSubmit(event){
        event.preventDefault()

        const newHike ={
            name: event.target["name"].value,
            description: event.target["description"].value,
            difficulty: event.target["difficulty"].value
        }
        
        fetch('http://localhost:3000/hiking', {
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
            <button onClick={()=>setFormShown(!formShown)}>Add</button>
            {formShown ? 
            <AddNewForm handleSubmit={handleSubmit}/>
            : 
            <></>
            }
            <CardsOnPage data={hikeArray}/>
        </div>
    )
}

export default Hiking;