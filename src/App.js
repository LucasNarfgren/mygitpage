import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Privacy from "./Components/privacy"
import About from "./Components/About"
import Home from "./Components/Home"
import MyPortfolio from "./Components/Myportfolio"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mygitpage/home" element={<Home />} />
        <Route path="/mygitpage/about" element={<About />} />
        <Route path="/mygitpage/privacy" element={<Privacy />} />
        <Route path="/mygitpage/myportfolio" element={<MyPortfolio />} />
      </Routes>
    </div>
  );
}

export default App;