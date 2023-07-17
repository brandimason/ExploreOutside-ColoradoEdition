
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './src/components/NavBar';
import Explore from './src/components/Explore';
import Inspo from './src/components/Inspo';
import Plan from './src/components/Plan';
import Contact from './src/components/Contact';
import Home from './src/components/Home';



function App() {

  return (
    <>
    <Router>
      <NavBar />

      <Routes>
        <Route exact path="/explore">
          <Explore />
        </Route>
      </Routes>

      <Routes>
        <Route exact path="/inspo">
          <Inspo />
        </Route>
      </Routes>

      <Routes>
        <Route exact path="/plan">
          <Plan />
        </Route>
      </Routes>

      <Routes>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Routes>

      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
      </Routes>

    </Router>
    </>
  );
}

export default App;
