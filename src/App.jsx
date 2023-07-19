import './App.css'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Hiking from './components/pages/Hiking';
import Backpacking from './components/pages/Backpacking';
import Camping from './components/pages/Camping';
import Contact from './components/pages/Contact';
import { useEffect, useState } from 'react';

function App() {
  const [hikeArray, setHikeArray] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/hikes`)
    .then(res => res.json())
    .then(data => setHikeArray(data))
  }, [])

  const [backpackingArray, setBackpackingArray] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/backpacking_loops`)
    .then(res => res.json())
    .then(bpData => setBackpackingArray(bpData))
  }, [])

  const [campingArray, setCampingArray] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/camping`)
    .then(res => res.json())
    .then(campingData => setCampingArray(campingData))
  }, [])
  
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/hiking" element={<Hiking hikeArray={hikeArray}/>}></Route>
          <Route path="/backpacking" element={<Backpacking backpackingArray={backpackingArray}/>}></Route>
          <Route path="/camping" element={<Camping campingArray={campingArray}/>}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
