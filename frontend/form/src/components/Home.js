import { AspectRatio } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = (props) => {
  const [state, setState] = useState([]);
  console.log(props)

  useEffect(() => {
    axios
      .get("http://localhost:8000/videos")
      .then((response) => {
          props.setLoaded(true);
          setState(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
  }, []);
  return (
    <>
      <div className="bg-dark">
        {props.isLoaded ? (
          <div className="container mt-5" styles={{ display: "flex" }}>
            {state.map((element) => (
              <AspectRatio
                maxW="500px"
                ratio={1.5}
                className="mt-5"
                key={element._id}
              >
                <iframe
                  title={element.title}
                  src={element.src}
                  allowFullScreen
                />
              </AspectRatio>
            ))}
          </div>
        ) : (
          <h1 className="text-white" style={{fontSize:"10.375rem"}}>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default Home;
