import React, { useState, useInput } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";
import NavBar from "../NavBar/NavBar";
import Typography from "@material-ui/core/Typography";
import "./WellbeingAssessment.css";

const useStyles = makeStyles({
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
  const [state, setState] = useState("");
  const handleChange = event => setState(event.target.value);

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
      <form className="formWellbeing">
        <fieldset id="question1">
          <h4>
            1. Feel lack of companionship?
            <br />
            <label>
              <input
                type="radio"
                value="1"
                id="1"
                name="question1"
                className="wellbeingQ"
                checked={state === "1"}
                onChange={handleChange}
              />
              <span>1</span>
            </label>
            <label>
              <input
                type="radio"
                value="2"
                id="2"
                name="question1"
                className="wellbeingQ"
                checked={state === "2"}
                onChange={handleChange}
              />
              <span>2</span>
            </label>
            <label>
              <input
                type="radio"
                value="3"
                id="3"
                name="question1"
                className="wellbeingQ"
                checked={state === "3"}
                onChange={handleChange}
              />
              <span>3</span>
            </label>
          </h4>
        </fieldset>
        <fieldset id="question2">
          <h4>
            2. Feel left out?
            <br />
            <label>
              <input
                type="radio"
                value="1"
                id="1"
                name="question2"
                className="wellbeingQ"
                checked={state === "1"}
                onChange={handleChange}
              />
              <span>1</span>
            </label>
            <label>
              <input
                type="radio"
                value="2"
                id="2"
                name="question2"
                className="wellbeingQ"
                checked={state === "2"}
                onChange={handleChange}
              />
              <span>2</span>
            </label>
            <label>
              <input
                type="radio"
                value="3"
                id="3"
                name="question2"
                className="wellbeingQ"
                checked={state === "3"}
                onChange={handleChange}
              />
              <span>3</span>
            </label>
          </h4>
        </fieldset>
        <fieldset id="question3">
          <h4>
            3. Feel isolated from others?
            <br />
            <label>
              <input
                type="radio"
                value="1"
                id="1"
                name="question3"
                className="wellbeingQ"
                checked={state === "1"}
                onChange={handleChange}
              />
              <span>1</span>
            </label>
            <label>
              <input
                type="radio"
                value="2"
                id="2"
                name="question3"
                className="wellbeingQ"
                checked={state === "2"}
                onChange={handleChange}
              />
              <span>2</span>
            </label>
            <label>
              <input
                type="radio"
                value="3"
                id="3"
                name="question3"
                className="wellbeingQ"
                checked={state === "3"}
                onChange={handleChange}
              />
              <span>3</span>
            </label>
          </h4>
        </fieldset>
        <div>
          <button type="submit">NEXT</button>
        </div>
      </form>
    </ThemeProvider>
  );
};

export default WellbeingAssessment;
