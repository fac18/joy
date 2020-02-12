// search client page

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import NavBar from "../NavBar/NavBar";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles({
  cardBg: {
    backgroundColor: "#EBEDEE",
    width: "350px",
    height: "110px",
    display: "flex",
    borderRadius: "10px",
    marginBottom: "20px"
  },
  accountIcon: {
    color: "#C4C4C4",
    borderRadius: "50%",
    width: "100px",
    height: "100%",
    justifyContent: "flex-start",
    alignContent: "center"
  },
  accountInfo: {}
});

const SearchClient = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div className="App">
        <br />
        <b>2 results:</b>
        <br />
        <Link to="/clientProfile" style={{ textDecoration: "none" }}>
          <Card className={classes.cardBg}>
            <CardContent>
              <AccountCircleIcon className={classes.accountIcon} />
            </CardContent>
            <Typography className={classes.accountInfo}>
              <h3>
                <b>Jim Brown, 64</b>
              </h3>
              <p>DOB: 12/12/1955</p>
            </Typography>
          </Card>
        </Link>
        <Card className={classes.cardBg}>
          <CardContent>
            <AccountCircleIcon className={classes.accountIcon} />
          </CardContent>
          <Typography className={classes.accountInfo}>
            <h3>
              <b>Jim Brown, 72</b>
            </h3>
            <p>DOB: 05/05/1947</p>
          </Typography>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default SearchClient;
