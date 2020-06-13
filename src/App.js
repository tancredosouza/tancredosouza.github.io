import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Paper, Typography, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  paperPadding: {
    padding: theme.spacing(4, 4),
  },
  title: {
    fontFamily: "Comfortaa",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    padding: theme.spacing(2, 0, 0, 0),
    textAlign: "center",
  },
  border: {
    width: "82vw",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  outerBorder: {
    width: "83vw",
    height: "15.5vh",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.outerBorder}>
        <img
          src={require("./images/rainbow-bg.png")}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
      </div>
      <div className={classes.border}>
        <Paper className={classes.paperPadding}>
          <div className={classes.title}>tancredo</div>
          <div className={classes.subtitle}>
            <ThemeProvider theme={theme}>
              <Typography variant="h6">
                Changing the world,
                <br /> one line of clean code at a time.
              </Typography>
            </ThemeProvider>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default App;
