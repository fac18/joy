// initial assessment
import React from "react";
import { useForm } from "react-hook-form";
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>1. Feel lack of companionship?</h4>
        <label>
          1
          <input
            name="q1_companionship"
            type="radio"
            required
            value="1"
            ref={register}
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
        {/* { errors.companionship && <p>Required field!</p> } */}
        <h4> 2. Feel left out?</h4>
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
        <h4> 3. Feel isolated from others?</h4>
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
        <br />
        <label>
          Additional Notes:
          <textarea name="additionalNotes" ref={register} />
        </label>
        <br />
        <label>
          Next Appointment:
          <input
            type="datetime-local"
            placeholder="nextAppointment"
            name="nextAppointment"
            ref={register}
          />
        </label>
        <br />

        <input type="submit" />
      </form>
    </ThemeProvider>
  );
};

export default ClientAssessment;
