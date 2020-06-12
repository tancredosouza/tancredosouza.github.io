import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paperPadding: {
    padding: theme.spacing(4, 4),
  },
  title: {
    fontFamily: "Baloo Tamma 2",
    fontSize: 32,
    fontWeight: "bold",
  },
  bodyText: {
    fontSize: 18,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.title}>tancredo</div>
        <p className={classes.bodyText}>
          Changing the world, one line of clean code at a time.
        </p>
        <Paper elevation={3} className={classes.paperPadding}>
          <div className={classes.title}>Projects I'm prowdest of</div>
        </Paper>
      </header>
    </div>
  );
};

export default App;
