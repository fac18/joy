import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NavBar from "../NavBar/NavBar";
// import Button from "../Button/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    maxWidth: 500,
    border: "solid 2px #A0B43B",
    textAlign: "center",
    margin: "auto",
    margin: "1rem"
  },
  services: {
    minWidth: 350,
    maxWidth: 500,
    border: "solid 2px #E91E63",
    margin: "1rem"
  },
  mainTitle: {
    paddingTop: "2rem"
  },
  pos: {
    display: "inline-block",
    fontSize: 32,
    marginBottom: 12,
    backgroundColor: "#F6A192",
    borderRadius: "50",
    padding: "13px 28px",
    borderRadius: "100px"
  },
  greenButton: {
    background: "#A0B43B",
    color: "white",
    "&:hover": {
      backgroundColor: "#707E29"
    },
    padding: "10px 20px",
    margin: "0.5rem auto"
  },
  pinkButton: {
    background: "#E71F67",
    color: "white",
    "&:hover": {
      backgroundColor: "#80902F"
    },
    padding: "10px 20px",
    margin: "0.5rem auto"
  }
});

const ClientProfile = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div className="App">
        <Typography className={classes.mainTitle} variant="h4" gutterBottom>
          <AccountCircleIcon fontSize="large" />
          Jim Brown, 64
        </Typography>

        <Card className={classes.root}>
          <CardContent>
            <Typography
              variant="body1"
              component="p"
              color="textPrimary"
              gutterBottom
            >
              Initial wellbeing score: <b>8</b>
            </Typography>
            <Typography variant="h6" component="h6">
              <b>Current wellbeing score:</b>
            </Typography>
            <Typography className={classes.pos} color="textPrimary">
              8
            </Typography>
            <Typography variant="body1" component="p">
              Last assessment date: 3 Jan 2020
            </Typography>
            <Typography variant="h6" component="h6">
              <b>Next assessment due: 3 Apr 2020</b>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className={classes.greenButton}
              variant="container"
              size="medium"
            >
              Start Wellbeing Assessment
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.services}>
          <CardContent>
            <Typography variant="h6" component="h2">
              <b>Current services referred to:</b>
            </Typography>
            <Typography color="textPrimary">
              Learning Spanish
              <br />
              Pub Lunch
              <br />
              Modern Dance
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className={classes.pinkButton}
              variant="container"
              size="medium"
            >
              Start Services Referral
            </Button>
          </CardActions>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default ClientProfile;
