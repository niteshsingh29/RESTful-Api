import { AspectRatio } from "@chakra-ui/react";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:8000/videos")
    .then((response) => {
      setState(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-dark">
        <div className="container mt-5" styles={{ display: "flex" }}>
          {state.map((element) => (
            <AspectRatio maxW="500px" ratio={1.5} className="mt-5" key={element._id}>
              <iframe title={element.title} src={element.src} allowFullScreen />
            </AspectRatio>
          ))}
          <button className="btn btn-primary">Like</button>
        </div>
      </div>
    </>
  );
}

export default App;
