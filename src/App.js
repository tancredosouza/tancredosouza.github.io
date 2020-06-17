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
    padding: theme.spacing(2, 4),
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
    height: "13vh",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    textAlign: "center",
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
          alt="Rainbow background"
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
      <div className={classes.footer}>
        <Paper elevation={10} className={classes.paperPadding}>
          <a href="https://twitter.com/aqueletantan">
            <img
              src="https://image.flaticon.com/icons/svg/81/81725.svg"
              alt="Tan's Twitter Profile"
              height="40vh"
              width="40vh"
            />
          </a>
          <a href="https://dev.to/tan">
            <img
              src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
              alt="Tan's DEV Profile"
              height="40vh"
              width="40vh"
            />
          </a>
          <a href="https://linkedin.com/in/tancredosouza">
            <img
              src="https://image.flaticon.com/icons/svg/61/61109.svg"
              alt="Tan's LinkedIn Profile"
              height="36vh"
              width="36vh"
            />
          </a>
          <a href="https://linkedin.com/in/tancredosouza">
            <img
              src="https://image.flaticon.com/icons/svg/25/25231.svg"
              alt="Tan's Github"
              height="36vh"
              width="36vh"
            />
          </a>
        </Paper>
      </div>
    </div>
  );
};

export default App;
