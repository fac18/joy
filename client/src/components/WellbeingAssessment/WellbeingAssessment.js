// initial assessment
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";
import NavBar from "../NavBar/NavBar";
import Typography from "@material-ui/core/Typography";
import "./WellbeingAssessment.css";
import Button from "@material-ui/core/Button";

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
  },
  pinkButton: {
    background: "#E71F67",
    color: "white",
    "&:hover": {
      backgroundColor: "#80902F"
    },
    padding: "10px 30px",
    marginLeft: "11rem",
    marginTop: "2rem",
    marginBottom: "2rem"
  }
});

const ClientAssessment = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  console.log(errors);

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

      <form onSubmit={handleSubmit(onSubmit)} className="formWellbeing">
        <h4>1. Feel lack of companionship?</h4>
        <fieldset className="groupQuestion">
          <label>
            1
            <input
              name="q1_companionship"
              type="radio"
              required
              value="1"
              ref={register}
              className="radio-custom"
            />
          </label>
          <label>
            2
            <input
              name="q1_companionship"
              type="radio"
              required
              value="2"
              ref={register}
            />
          </label>
          <label>
            3
            <input
              name="q1_companionship"
              type="radio"
              required
              value="3"
              ref={register}
            />
          </label>
        </fieldset>
        <aside className="ratingQ">
          <span className="one">Hardly ever </span>
          <span className="two">Sometimes </span>
          <span className="three">Often</span>
        </aside>
        {/* { errors.companionship && <p>Required field!</p> } */}
        <h4> 2. Feel left out?</h4>
        <fieldset className="groupQuestion">
          <label>
            1
            <input
              name="q2_left_out"
              type="radio"
              required
              value="1"
              ref={register}
            />
          </label>
          <label>
            2
            <input
              name="q2_left_out"
              type="radio"
              required
              value="2"
              ref={register}
            />
          </label>
          <label>
            3
            <input
              name="q2_left_out"
              type="radio"
              required
              value="3"
              ref={register}
            />
          </label>
        </fieldset>
        <aside className="ratingQ">
          <span className="one">Hardly ever </span>
          <span className="two">Sometimes </span>
          <span className="three">Often</span>
        </aside>
        <h4> 3. Feel isolated from others?</h4>
        <fieldset className="groupQuestion">
          <label>
            1
            <input
              name="q3_isolated"
              type="radio"
              required
              value="1"
              ref={register}
            />
          </label>
          <label>
            2
            <input
              name="q3_isolated"
              type="radio"
              required
              value="2"
              ref={register}
            />
          </label>
          <label>
            3
            <input
              name="q3_isolated"
              type="radio"
              required
              value="3"
              ref={register}
            />
          </label>
        </fieldset>
        <aside className="ratingQ">
          <span className="one">Hardly ever </span>
          <span className="two">Sometimes </span>
          <span className="three">Often</span>
        </aside>
        <br />
        <br />
        <h4>Additional Notes:</h4>
        <label className="additionalNotes">
          <br />
          <br />
          <textarea
            placeholder="The client’s current thoughts and feelings and Anything else to be aware of?"
            name="additionalNotes"
            ref={register}
          />
        </label>
        <br />
        <h4>Schedule next Appointment:</h4>
        <label>
          1 month
          <input
            name="schedule"
            type="radio"
            required
            value="1 month"
            ref={register}
          />
        </label>
        <label>
          3 month
          <input
            name="schedule"
            type="radio"
            required
            value="3 month"
            ref={register}
          />
        </label>
        <label>
          6 month
          <input
            name="schedule"
            type="radio"
            required
            value="6 month"
            ref={register}
          />
        </label>
        <label>
          Other
          <input
            name="schedule"
            type="radio"
            required
            value="other"
            ref={register}
          />
        </label>
        {/* <input
          type="datetime-local"
          placeholder="nextAppointment"
          name="nextAppointment"
          ref={register}
        /> */}
        <br />

        <Button
          type="submit"
          className={classes.pinkButton}
          variant="container"
          size="medium"
        >
          NEXT
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default ClientAssessment;
