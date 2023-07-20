import './App.css'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Hiking from './components/pages/Hiking';
import Backpacking from './components/pages/Backpacking';
import Camping from './components/pages/Camping';
import { useEffect, useState } from 'react';
import ContactForm from './components/pages/ContactForm';

function App() {

//hiking state & fetch
const [hikeArray, setHikeArray] = useState([])
useEffect(() => {
  fetch(`http://localhost:3000/hikes`)
  .then(res => res.json())
  .then(data => setHikeArray(data))
}, [])

function addNewHike(newHike){
  setHikeArray([...hikeArray, newHike])
}

//backpacking state & fetch
const [backpackingArray, setBackpackingArray] = useState([])
useEffect(() => {
  fetch(`http://localhost:3000/backpacking_loops`)
  .then(res => res.json())
  .then(bpData => setBackpackingArray(bpData))
}, [])

function addNewBackpack(newBackpack){
  setBackpackingArray([...backpackingArray, newBackpack])
}

//camping state & fetch
const [campingArray, setCampingArray] = useState([])
useEffect(() => {
  fetch(`http://localhost:3000/camping`)
  .then(res => res.json())
  .then(campingData => setCampingArray(campingData))
}, [])

function addNewCamp(newCamp){
  setCampingArray([...campingArray, newCamp])
}
  
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/hiking" element={<Hiking hikeArray={hikeArray} addNewHike={addNewHike}/>}></Route>
          <Route path="/backpacking" element={<Backpacking backpackingArray={backpackingArray} addNewBackpack={addNewBackpack}/>}></Route>
          <Route path="/camping" element={<Camping campingArray={campingArray} addNewCamp={addNewCamp}/>}></Route>
          <Route path="/contact" Component={ContactForm}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
