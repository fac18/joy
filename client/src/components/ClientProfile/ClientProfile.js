import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    border: "solid 2px #A0B43B",
    textAlign: "center"
  },
  title: {
    fontSize: 14
  },
  pos: {
    display: "inline-block",
    fontSize: 32,
    marginBottom: 12,
    backgroundColor: "#F6A192",
    borderRadius: "50",
    padding: "13px 28px",
    borderRadius: "100px"
  }
});

const ClientProfile = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Initial wellbeing score: 8
        </Typography>
        <Typography variant="h6" component="h2">
          Current wellbeing score:
        </Typography>
        <Typography className={classes.pos} color="textPrimary">
          8
        </Typography>
        <Typography variant="body2" component="p">
          Last assessment date: 3 Jan 2020
        </Typography>
        <Typography variant="h6" component="h2">
          Next assessment due: 3 Apr 2020
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Start Wellbeing Assesment</Button>
      </CardActions>
    </Card>
  );
};

export default ClientProfile;
