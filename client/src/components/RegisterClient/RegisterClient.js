import React, { useReducer } from "react";

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
  const [state, dispatch] = useReducer(reducer, initialState);

  // if(state) {
  //     console.log(state);
  // }

  const onChange = e => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

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
    <form>

      <label for="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        defaultValue={firstName}
        required
        onChange={onChange}
      />

      <label for="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        defaultValue={lastName}
        required
        onChange={onChange}
      />

      <label for="knownAs">Known As</label>
      <input
        type="text"
        id="knowsAs"
        name="knownAs"
        defaultValue={knownAs}
        required
        onChange={onChange}
      />

      <label for="dateOfBirth">Date Of Birth</label>
      <input
        type="date"
        name="dateOfBirth"
        id="dateOfBirth"
        defaultValue={dateOfBirth}
        required
        onChange={onChange}
      />

      <label for="phoneNumber">Phone Number</label>
      <input
        type="number"
        name="phoneNumber"
        id="phoneNumber"
        defaultValue={phoneNumber}
        onChange={onChange}
      />

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

      <label for="nhsNumber">I consent to Joy storing and processing my personal data</label>
      <input
        type="checkbox"
        id="consent"
        name="consent"
        defaultValue={consent}
        onChange={onChange}
      />
      <button type="submit">Register Client</button>
    </form>
  );
};
export default RegisterClient;