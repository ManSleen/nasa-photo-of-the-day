import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [imageOfTheDayURL, setImageOfTheDayURL] = useState("");

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
      <p>{imageOfTheDayURL}</p>
    </div>
  );
}

export default App;
