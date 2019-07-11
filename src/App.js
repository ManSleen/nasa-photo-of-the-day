import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import PhotoOfTheDay from "./components/PhotoOfTheDay";
import PhotoDescription from "./components/PhotoDescription";
import PhotoTitle from "./components/PhotoTitle";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function App() {
  const [imageOfTheDayURL, setImageOfTheDayURL] = useState("");
  const [imageOfTheDayDescription, setImageOfTheDayDescription] = useState("");
  const [imageOfTheDayTitle, setImageOfTheDayTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const classes = useStyles();

  const selectDate = date => {
    setSelectedDate(date);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=Cvb4YpR38HIb85rJofCrCZuvofN5coBIpdSBaFOe&date=${selectedDate}`
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
  }, [selectedDate]);

  return (
    <div className="App">
      <div className="app-container">
        <Container maxWidth="xl">
          <Grid style={{ paddingTop: 100 }} container spacing={3}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <PhotoTitle title={imageOfTheDayTitle} />
                <PhotoDescription description={imageOfTheDayDescription} />
              </Paper>
            </Grid>

            <PhotoOfTheDay image={imageOfTheDayURL} />
          </Grid>
          <NavBar selectDate={selectDate} />
        </Container>
      </div>
    </div>
  );
}

export default App;
