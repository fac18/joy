import React, { useEffect } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";
import NavBar from "../NavBar/NavBar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  //   assessmentCard: {
  //     backgroundColor: "#EBEDEE",
  //     width: "600px",
  //     height: "600px",
  //     display: "flex",
  //     borderRadius: "10px",
  //     display: "flex",
  //     alignContent: "center"
  //   },
  mainTitle: {
    fontSize: "35px",
    fontWeight: "bold",
    textAlign: "center"
  },
  clientName: {
    fontSize: "35px",
    textAlign: "center"
  },
  startQ: {
    fontSize: "20px",
    textAlign: "center"
  }
});

const WellbeingAssessment = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <br />
      <Typography className={classes.mainTitle}>
        Wellbeing assessment:
      </Typography>
      <Typography className={classes.clientName}>Jim Brown, 64</Typography>
      <br />
      <Typography className={classes.startQ}>
        {" "}
        <b>Overall, how often do you:</b> (please select)
      </Typography>
      <br />
      <Typography className={classes.startQ}>
        <b>1. Feel lack of companionship?</b>
      </Typography>
    </ThemeProvider>
  );
};

export default WellbeingAssessment;
