import './App.css'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Hiking from './components/pages/Hiking';
import Backpacking from './components/pages/Backpacking';
import Camping from './components/pages/Camping';
import Contact from './components/pages/Contact';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/hiking" Component={Hiking}></Route>
          <Route path="/backpacking" Component={Backpacking}></Route>
          <Route path="/camping" Component={Camping}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
