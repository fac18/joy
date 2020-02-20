import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NavBar from "../NavBar/NavBar";

const useStyles = makeStyles({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    },
    minWidth: 350,
    maxWidth: 500,
    border: "solid 2px #E91E63",
    textAlign: "center",
    margin: "1rem"
  },
  mainTitle: {
    paddingTop: "2rem"
  }
});

const initialState = {
  firstName: "",
  lastName: "",
  knownAs: "",
  email: "",
  password1: "",
  password2: "",
  location: ""
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value
  };
}

const RegisterClient = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  // if(state) {
  //     console.log(state);
  // }

  const onChange = e => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch("/postregisterclient", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(state)
    })
      .then(result => result.json())
      .then(info => {
        console.log(info);
      });
  };

  //   const onSubmit = (e) => {
  //       e.preventDefault();
  //       console.log('this is my clients data' ,data);
  //       const options = {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(data)
  //   };
  //   fetch('/postregisterclient', options).then(response => console.log('this is register client fetch response' ,response))
  // }

  const {
    firstName,
    lastName,
    knownAs,
    dateOfBirth,
    phoneNumber,
    address,
    nhsNumber,
    consent,
    areasOfSupport
  } = state;

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div className="App">
        <Typography className={classes.mainTitle} variant="h4" gutterBottom>
          Register new client:
        </Typography>
        {/* <form
          onSubmit={handleSubmit}
          className={classes.root}
          autoComplete="off"
        >
          <TextField
            label="First name"
            variant="outlined"
            type="text"
            id="firstName"
            name="firstName"
            defaultValue={firstName}
            required
            onChange={onChange}
          />
        </form> */}

        <form onSubmit={handleSubmit}>
          <label for="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            defaultValue={firstName}
            required
            onChange={onChange}
          />
          <br />

          <label for="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            defaultValue={lastName}
            required
            onChange={onChange}
          />
          <br />

          <label for="knownAs">Known As</label>
          <input
            type="text"
            id="knowsAs"
            name="knownAs"
            defaultValue={knownAs}
            required
            onChange={onChange}
          />
          <br />

          <label for="dateOfBirth">Date Of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            defaultValue={dateOfBirth}
            required
            onChange={onChange}
          />
          <br />

          <label for="phoneNumber">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            defaultValue={phoneNumber}
            onChange={onChange}
          />
          <br />

          <label for="address">Address</label>
          <input
            type="textarea"
            id="address"
            name="address"
            defaultValue={address}
            onChange={onChange}
          />

          <label for="nhsNumber">NHS Number</label>
          <input
            type="text"
            id="nhsNumber"
            name="nhsNumber"
            defaultValue={nhsNumber}
            onChange={onChange}
          />
          <br />

          <label for="nhsNumber">
            I consent to Joy storing and processing my personal data
          </label>
          <input
            type="checkbox"
            id="consent"
            name="consent"
            defaultValue={consent}
            onChange={onChange}
          />
          <br />

          <label for="areasOfSupport">
            What areas does the client need support with?
          </label>
          <select
            name="areasOfSupport"
            multiple
            id="areasOfSupport"
            defaultValue={areasOfSupport}
            onChange={onChange}
          >
            <option value="Feeling Lonely/Isolated">
              Feeling Lonely/Isolated
            </option>
            <option value="Managing a health condition">
              Managing a health condition
            </option>
            <option value="Help with Money">Help with Money</option>
            <option value="Getting outdoors">Getting outdoors</option>
            <option value="Improving Fitness">Improving Fitness</option>
            <option value="Information and advice">
              Information and advice
            </option>
            <option value="Assistance with day-to-day tasks">
              Assistance with day-to-day tasks
            </option>
          </select>

          <button type="submit">Register Client</button>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default RegisterClient;
