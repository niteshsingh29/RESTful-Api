import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState} from "react"

function App() {
  const [isLoaded, setLoaded] = useState(false)
  const handleSpinner = () => {
    setLoaded(true);
  }
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home isLoaded={isLoaded} setLoaded={handleSpinner} />}></Route>
          <Route path="/" element={<Home isLoaded={isLoaded} setLoaded={handleSpinner} />}></Route>

          <Route path="/AddVideos" element={<Home isLoaded={isLoaded} setLoaded={handleSpinner} />}></Route>
          <Route path="/New" element={<Home isLoaded={isLoaded} setLoaded={handleSpinner} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
