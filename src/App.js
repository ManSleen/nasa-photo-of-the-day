import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import PhotoOfTheDay from "./components/PhotoOfTheDay";
import axios from "axios";

import "./App.css";

function App() {
  const [imageOfTheDayURL, setImageOfTheDayURL] = useState("");
  // const [] = useState;

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Cvb4YpR38HIb85rJofCrCZuvofN5coBIpdSBaFOe"
      )
      .then(res => {
        console.log(res.data.url);
        setImageOfTheDayURL(res.data.url);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <PhotoOfTheDay image={imageOfTheDayURL} />
    </div>
  );
}

export default App;
