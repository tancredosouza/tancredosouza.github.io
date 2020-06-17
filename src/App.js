import React from "react";
import { Paper, Typography, ThemeProvider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme();

const useStyles = makeStyles((theme) => ({
  paperPadding: {
    padding: theme.spacing(2, 4),
  },
  title: {
    fontFamily: "Comfortaa",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    padding: theme.spacing(2, 0, 0, 0),
    fontSize: 14,
    textAlign: "center",
  },
  border: {
    width: "72vw",
    height: "13vh",
    maxWidth: 500,
    maxHeight: 100,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  outerBorder: {
    width: "73vw",
    height: "15vh",
    maxWidth: 520,
    maxHeight: 140,
    position: "absolute",
    left: "50%",
    top: "51%",
    transform: "translate(-50%, -50%)",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    textAlign: "center",
  },
  socialIcon: {
    position: "absolute",
    height: "85%",
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
        <Paper className={classes.paperPadding} elevation={10}>
          <div className={classes.title}>tancredo</div>
          <div className={classes.subtitle}>
            <ThemeProvider theme={theme}>
              <Typography className={classes.subtitle} variant="h6">
                Changing the world,
                <br /> one line of clean code at a time.
              </Typography>
            </ThemeProvider>
          </div>
        </Paper>
      </div>
      <div className={classes.footer}>
        <Paper elevation={10} className={classes.paperPadding}>
          <Grid container spacing={3} justify="center">
            <Grid item>
              <a href="https://twitter.com/aqueletantan">
                <img
                  src="https://image.flaticon.com/icons/svg/81/81725.svg"
                  alt="Tan's Twitter Profile"
                  height="40vh"
                  width="40vh"
                />
              </a>
            </Grid>
            <Grid item>
              <a href="https://dev.to/tan">
                <img
                  src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                  alt="Tan's DEV Profile"
                  height="40vh"
                  width="40vh"
                />
              </a>
            </Grid>
            <Grid item>
              <a href="https://linkedin.com/in/tancredosouza">
                <img
                  src="https://image.flaticon.com/icons/svg/61/61109.svg"
                  alt="Tan's LinkedIn Profile"
                  height="36vh"
                  width="36vh"
                />
              </a>
            </Grid>
            <Grid item>
              <a href="https://linkedin.com/in/tancredosouza">
                <img
                  src="https://image.flaticon.com/icons/svg/25/25231.svg"
                  alt="Tan's Github"
                  height="36vh"
                  width="36vh"
                />
              </a>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default App;
