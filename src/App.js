import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetail from "./RecipeDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/recipe/:name" element={<RecipeDetail /> } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
