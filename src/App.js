import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import PhotoOfTheDay from "./components/PhotoOfTheDay";
import PhotoDescription from "./components/PhotoDescription";
import PhotoTitle from "./components/PhotoTitle";
import axios from "axios";

import "./App.css";

function App() {
  const [imageOfTheDayURL, setImageOfTheDayURL] = useState("");
  const [imageOfTheDayDescription, setImageOfTheDayDescription] = useState("");
  const [imageOfTheDayTitle, setImageOfTheDayTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Cvb4YpR38HIb85rJofCrCZuvofN5coBIpdSBaFOe"
      )
      .then(res => {
        console.log(res.data);
        setImageOfTheDayURL(res.data.url);
        setImageOfTheDayDescription(res.data.explanation);
        setImageOfTheDayTitle(res.data.title);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <PhotoTitle title={imageOfTheDayTitle} />
      <PhotoDescription description={imageOfTheDayDescription} />
      <PhotoOfTheDay image={imageOfTheDayURL} />
    </div>
  );
}

export default App;
