import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/About";
import Details from "./details" ;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
     
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/details" exact element={<Details />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
